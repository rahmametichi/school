const router = require("express").Router();
const ExamsDate = require("../models/ExamsDate");
const Student = require("../models/Students");
const Teacher = require("../models/Teachers");
const classroom = require("../models/Classroom");
const Fees = require("../models/Fees");
const Note = require("../models/note");
const Situation = require("../models/Situation");
const Admin = require("../models/Admin");
const Personel = require("../models/Personel");
const Notification = require("../models/Notification");
const Course = require("../models/Course");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const path = require("path");
const multer = require("multer");
require("dotenv").config();
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

function strRandom(o) {
    var a = 10,
        b = "abcdefghijklmnopqrstuvwxyz",
        c = "",
        d = 0,
        e = "" + b;
    if (o) {
        if (o.startsWithLowerCase) {
            c = b[Math.floor(Math.random() * b.length)];
            d = 1;
        }
        if (o.length) {
            a = o.length;
        }
        if (o.includeUpperCase) {
            e += b.toUpperCase();
        }
        if (o.includeNumbers) {
            e += "1234567890";
        }
    }
    for (; d < a; d++) {
        c += e[Math.floor(Math.random() * e.length)];
    }
    return c;
}

router.post("/admin/addTeacher", async (req, res) => {
    try {
        const { firstName, lastName, email, subject } = req.body;
        let password = strRandom({
            includeUpperCase: true,
            includeNumbers: true,
            length: 10,
            startsWithLowerCase: true,
        });
        const FindTeacher = await Teacher.findOne({ email });
        if (FindTeacher) {
            res.json({ status: "403", msg: "Email Exist ! " });
        } else {
            bcrypt.hash(password, 12, async (err, hash) => {
                if (err) {
                    res.status(500).json({ status: false, message: err });
                } else if (hash) {
                    const teacher = await Teacher.create({
                        firstName,
                        lastName,
                        email,
                        password: hash,
                        subject,
                        role: 1,
                    });
                    let mailOptions = {
                        from: "schoolmanagement@gmail.com",
                        to: email,
                        subject: "schoolManagement Login",
                        text: `Dear ${firstName} ,
                    Email = ${email} 
                    Password = ${password}
                        `,
                    };

                    transporter.sendMail(mailOptions, function (err, data) {
                        if (err) {
                            console.log("Error " + err);
                        } else {
                            console.log("Email sent successfully");
                        }
                    });
                    res.status(201).json({
                        status: true,
                        message: "Teacher Created ",
                        data: teacher,
                    });
                }
            });
        }
    } catch (err) {
        res.status(500).json({ status: false, msg: err });
    }
});
router.post("/admin/addStudent", async (req, res) => {
    try {
        const { firstName, lastName, email, parentsPhone, adress, age } =
            req.body;
        let password = strRandom({
            includeUpperCase: true,
            includeNumbers: true,
            length: 10,
            startsWithLowerCase: true,
        });
        const FindStudent = await Student.findOne({ email });
        if (FindStudent) {
            res.json({ status: "403", msg: "Email Exist ! " });
        } else {
            bcrypt.hash(password, 12, async (err, hash) => {
                if (err) {
                    res.status(500).json({ status: false, message: err });
                } else if (hash) {
                    const student = await Student.create({
                        firstName,
                        lastName,
                        email,
                        password: hash,
                        parentsPhone,
                        adress,
                        age,
                        role: 2,
                    });
                    let mailOptions = {
                        from: "schoolmanagement@gmail.com",
                        to: email,
                        subject: "schoolManagement Login",
                        text: `Dear Student ${firstName} ,
                Email = ${email} 
                Password = ${password}
                        `,
                    };

                    transporter.sendMail(mailOptions, function (err, data) {
                        if (err) {
                            console.log("Error " + err);
                        } else {
                            console.log("Email sent successfully");
                        }
                    });
                    res.status(201).json({
                        status: true,
                        message: "Student Created ",
                        data: student,
                    });
                }
            });
        }
    } catch (err) {
        res.status(500).json({ status: false, msg: err });
    }
});
router.post("/admin/addPersonel", async (req, res) => {
    try {
        const { firstName, lastName, email, phone, position } = req.body;
        let password = strRandom({
            includeUpperCase: true,
            includeNumbers: true,
            length: 10,
            startsWithLowerCase: true,
        });
        const FindPersonel = await Personel.findOne({ email });
        if (FindPersonel) {
            res.json({ status: "403", msg: "Email Exist ! " });
        } else {
            bcrypt.hash(password, 12, async (err, hash) => {
                if (err) {
                    res.status(500).json({ status: false, message: err });
                } else if (hash) {
                    const personel = await Personel.create({
                        firstName,
                        lastName,
                        email,
                        phone,
                        position,
                        password: hash,
                        role: 3,
                    });
                    let mailOptions = {
                        from: "schoolmanagement@gmail.com",
                        to: email,
                        subject: "schoolManagement Login",
                        text: `Dear Personel ${firstName} ,
                Email = ${email} 
                Password = ${password}
                        `,
                    };

                    transporter.sendMail(mailOptions, function (err, data) {
                        if (err) {
                            console.log("Error " + err);
                        } else {
                            console.log("Email sent successfully");
                        }
                    });
                    res.status(201).json({
                        status: true,
                        message: "Personel Created ",
                        data: personel,
                    });
                }
            });
        }
    } catch (err) {
        res.status(500).json({ status: false, msg: err });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const student = await Student.findOne({ email });
        const teacher = await Teacher.findOne({ email });
        const admin = await Admin.findOne({ email });
        const personel = await Personel.findOne({ email });
        if (student) {
            bcrypt.compare(password, student.password, async (err, result) => {
                if (err) {
                    res.status(500).json({
                        status: false,
                        message: err,
                    });
                } else if (result) {
                    const token = jwt.sign(
                        {
                            id: student._id,
                            email,
                            role: student.role,
                            classRoom: student.classRoom,
                        },
                        "9998",
                        {
                            expiresIn: "7d",
                        }
                    );
                    res.status(200).json({
                        status: true,
                        message: "you are logged in as student",
                        data: token,
                    });
                } else {
                    res.status(401).json({
                        staus: false,
                        message: "invalid credentials",
                    });
                }
            });
        } else if (admin) {
            bcrypt.compare(password, admin.password, async (err, result) => {
                if (err) {
                    res.status(500).json({
                        status: false,
                        message: err,
                    });
                } else if (result) {
                    const token = jwt.sign(
                        { id: admin._id, role: admin.role, email },
                        "9998",
                        {
                            expiresIn: "7d",
                        }
                    );
                    res.status(200).json({
                        status: true,
                        message: "you are logged in as Admin",
                        data: token,
                    });
                } else {
                    res.status(401).json({
                        staus: false,
                        message: "invalid credentials",
                    });
                }
            });
        } else if (teacher) {
            bcrypt.compare(password, teacher.password, async (err, result) => {
                if (err) {
                    res.status(500).json({
                        status: false,
                        message: err,
                    });
                } else if (result) {
                    const token = jwt.sign(
                        { id: teacher._id, email, role: teacher.role },
                        "9998",
                        {
                            expiresIn: "7d",
                        }
                    );
                    res.status(200).json({
                        status: true,
                        message: "you are logged in as teacher",
                        data: token,
                    });
                } else {
                    res.status(401).json({
                        staus: false,
                        message: "invalid credentials",
                    });
                }
            });
        } else if (personel) {
            bcrypt.compare(password, personel.password, async (err, result) => {
                if (err) {
                    res.status(500).json({
                        status: false,
                        message: err,
                    });
                } else if (result) {
                    const token = jwt.sign(
                        { id: personel._id, email, role: personel.role },
                        "9998",
                        {
                            expiresIn: "7d",
                        }
                    );
                    res.status(200).json({
                        status: true,
                        message: "you are logged in as personel",
                        data: token,
                    });
                } else {
                    res.status(401).json({
                        staus: false,
                        message: "invalid credentials",
                    });
                }
            });
        } else {
            res.status(404).json({
                status: false,
                message: "invalid credentials",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

// Admin APIs
router.post("/register", async (req, res) => {
    try {
        const { email, password, role } = req.body;
        bcrypt.hash(password, 12, async (err, hash) => {
            if (err) {
                res.status(500).json({ status: false, message: err });
            } else if (hash) {
                const admin = await Admin.create({
                    email,
                    password: hash,
                    role,
                });
                res.status(201).json({
                    status: true,
                    message: "Admin Created ",
                    data: admin,
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.post("/admin/addPayment", async (req, res) => {
    try {
        const { student, paymentDuration, amount, paymentMethod, classe } =
            req.body;
        console.log(student, paymentDuration, amount, paymentMethod, classe);
        const newPayment = await Fees.create({
            student,
            paymentDuration,
            amount,
            paymentMethod,
            classe,
        });
        res.status(201).json({
            status: 201,
            msg: "payment Added",
            data: newPayment,
        });
    } catch (err) {
        res.json({ status: 500, msg: err });
    }
});

router.get("/admin/getPayment", async (req, res) => {
    try {
        const payment = await Fees.find({});
        res.status(200).json({ status: 200, msg: "payments", data: payment });
    } catch (err) {
        res.json({ status: 500, msg: err });
    }
});

router.post("/administration/createclass", async (req, res) => {
    try {
        const { name } = req.body;
        const data = await classroom.create({
            name,
        });
        res.status(201).json({
            status: true,
            message: "You new Classroom has been created",
            data: data,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.put("/administration/addClass/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const { newclass } = req.body;
        const UpdateClass = await Teacher.findByIdAndUpdate(id, {
            ...req.body,
            $push: { classToStudy: { name: newclass } },
        });

        res.status(200).json({
            status: true,
            message: "Class added",
            data: UpdateClass,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.put("/administration/updateClass/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { classRoom } = req.body;
        const UpdateClass = await Student.findByIdAndUpdate(id, {
            ...req.body,
        });

        res.status(200).json({
            status: true,
            message: "Class added",
            data: UpdateClass,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.get("/administation/AllStudents", async (req, res) => {
    try {
        const AllStudents = await Student.find({});

        res.status(200).json({
            status: true,
            message: "All Students Imported",
            data: AllStudents,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.get("/administation/Allpersonel", async (req, res) => {
    try {
        const AllPersonel = await Personel.find({});

        res.status(200).json({
            status: true,
            message: "All Personel Imported",
            data: AllPersonel,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.get("/administation/AllTeachers", async (req, res) => {
    try {
        const AllTeachers = await Teacher.find({});

        res.status(200).json({
            status: true,
            message: "All Teachers Imported",
            data: AllTeachers,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.put("/administration/updateS/:id", async (req, res) => {
    try {
        const { id } = req.params;
        studentID = await Student.findByIdAndUpdate(id, { ...req.body });
        res.status(200).json({
            status: true,
            message: "Student updated successfuly !!!",
            data: studentID,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.delete("/administation/deleteStudent/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const DeletedStudent = await Student.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: "Student Deleted .. !",
            data: DeletedStudent,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.delete("/administation/deleteTeacher/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const DeletedTeacher = await Teacher.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: "Teacher Deleted .. !",
            data: DeletedTeacher,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.get("/administration/GetAllExamsScore", async (req, res) => {
    try {
        const AllExamScore = await Note.find({})
            .populate("subject", "firstName lastName -_id subject")
            .populate("student", "firstName lastName ");
        res.status(200).json({
            status: true,
            message: "All Exams Score Imported",
            data: AllExamScore,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.get("/administration/GetAllExamsDate", async (req, res) => {
    try {
        const Exams = await ExamsDate.find({}).populate(
            "addedBy",
            "firstName lastName subject -_id"
        );
        res.status(200).json({
            status: true,
            message: "All Exams Date Imported",
            data: Exams,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.get("/administration/GetAllSituation", async (req, res) => {
    try {
        const AllSituations = await Situation.find({})
            .populate("student", "firstName lastName avatar classRoom -_id  ")
            .populate("addedBy", "firstName lastName subject -_id");
        res.status(200).json({
            status: true,
            message: "All Situations Imported",
            data: AllSituations,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.get("/administration/GetAllClass", async (req, res) => {
    try {
        const data = await classroom.find({});

        res.status(200).json({
            status: true,
            message: "All Classroom Imported",
            data,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.delete("/administration/Class/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const DeletedClass = await classroom.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: "Class Deleted .. !",
            data: DeletedClass,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.put("/administration/editClass/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const EditClass = await classroom.findByIdAndUpdate(id, {
            ...req.body,
        });
        res.status(200).json({
            status: true,
            message: "Class Edited .. !",
            data: EditClass,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.post("/student/register", async (req, res) => {
    try {
        const {
            avatar,
            firstName,
            lastName,
            age,
            adress,
            parentsPhone,
            classRoom,
            email,
            password,
            role,
        } = req.body;
        bcrypt.hash(password, 12, async (err, hash) => {
            if (err) {
                res.status(500).json({ status: false, message: err });
            } else if (hash) {
                const student = await Student.create({
                    avatar,

                    firstName,
                    classRoom,
                    lastName,
                    age,
                    adress,
                    parentsPhone,
                    email,
                    password: hash,
                    role,
                });
                res.status(201).json({
                    status: true,
                    message: "Student Created ",
                    data: student,
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.get("/student/profile/:id", async (req, res) => {
    try {
        // let email = res.decoded.email;
        const { id } = req.params;
        const Profile = await Student.findById(id);
        res.status(200).json({ status: true, data: Profile });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.get("/personel/profile/:id", async (req, res) => {
    try {
        // let email = res.decoded.email;
        const { id } = req.params;
        const Profile = await Personel.findById(id);
        res.status(200).json({ status: true, data: Profile });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.get("/student/absence/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Situation.find({
            student: id,
        })
            .populate("addedBy", "avatar firstName subject")
            .populate("student", "firstName lastName -_id");

        res.status(200).json({ status: true, data });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.get("/student/note/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Note.find({
            student: id,
        })
            .populate("subject", "avatar subject firstName lastName")
            .populate("student", "firstName lastName -_id");

        res.status(200).json({ status: true, data });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.get("/student/getExamDate/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        const classRoom = student.classRoom;
        const examdate = await ExamsDate.find({ classRoom });

        res.status(201).json({
            status: true,
            message: "Get Exam Date ",
            data: examdate,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.post("/teacher/register", async (req, res) => {
    try {
        const { avatar, firstName, lastName, email, password, subject, role } =
            req.body;
        bcrypt.hash(password, 12, async (err, hash) => {
            if (err) {
                res.status(500).json({ status: false, message: err });
            } else if (hash) {
                const teacher = await Teacher.create({
                    avatar,
                    firstName,
                    lastName,
                    email,
                    password: hash,
                    subject,
                    role,
                });
                res.status(201).json({
                    status: true,
                    message: "Teacher Created ",
                    data: teacher,
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.get("/teacher/getClass/:id", async (req, res) => {
    try {
        // let email = res.decoded.email;
        const { id } = req.params;
        const teacher_classroom = await Teacher.findById(id);
        res.status(200).json({
            status: true,
            data: teacher_classroom.classToStudy,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.get("/teacher/profile/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Teacher.findById(id);
        res.status(200).json({
            status: true,
            message: "Teacher imported Successfully",
            data,
        });
    } catch (err) {
        res.status(500).json({ status: false, message: err });
        process.exit(1);
    }
});
router.get("/teacher/getStudents", async (req, res) => {
    try {
        const { nameclass } = req.body;
        data = await Student.find({ classRoom: nameclass });
        res.status(201).json({
            status: true,
            message: `Class ${nameclass} imported Successfully `,
            data,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.get("/teacher/studentSituations/:id", async (req, res) => {
    try {
        const { id } = req.params;
        data = await Situation.find({ addedBy: id }).populate(
            "student",
            "firstName lastName avatar classRoom "
        );
        res.status(201).json({
            status: true,
            message: `Situation Imported Successfully `,
            data,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.post("/teacher/addSituation", async (req, res) => {
    try {
        const student_situation = await Situation.create([...req.body]);
        res.status(201).json({
            status: true,
            message: "Situation added successfully",
            data: student_situation,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.post("/teacher/addscore", async (req, res) => {
    try {
        const data = await Note.insertMany([...req.body]);
        res.status(201).json({
            status: true,
            message: "Note added Successfuly",
            data: data,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.put("/teacher/profileUpdate/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Teacher.findByIdAndUpdate(id, { ...req.body });
        res.status(200).json({ status: true, data });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.put("/teacher/editExam/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await ExamsDate.findByIdAndUpdate(id, {
            ...req.body,
        });
        res.status(200).json({
            status: true,
            message: "Exam Edited successfully",
            data,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.delete("/teacher/deleteExam/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await ExamsDate.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: "Exam Deleted .. !",
            data,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.post("/teacher/addExamDate", async (req, res) => {
    try {
        // let addedBy = res.decoded.id;
        const { addedBy } = req.body;
        const { title, classroom, from, to } = req.body;
        const exam = await ExamsDate.create({
            addedBy,
            title,
            classroom,
            from,
            to,
        });
        res.status(201).json({
            status: true,
            message: "Exam Added Successfuly ",
            data: exam,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.put("/teacher/EditSituation/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const student_situation = await Situation.findByIdAndUpdate(id, {
            ...req.body,
        });
        res.status(200).json({
            status: true,
            message: "Situation Edited successfully",
            data: student_situation,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.get("/teacher/getExamsDate/:id", async (req, res) => {
    try {
        const { id } = req.params;
        data = await ExamsDate.find({ addedBy: id }).populate(
            "addedBy",
            "firstName lastName subject -_id"
        );
        res.status(200).json({
            status: true,
            message: `Exams Date imported Successfully `,
            data,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
// *********
router.post("/addNotification", async (req, res) => {
    try {
        const { title, description } = req.body;
        const notification = await Notification.create({ title, description });
        res.status(201).json({
            status: true,
            message: "Notification added Successfully",
            data: notification,
        });
    } catch (err) {
        res.status(500).json({ status: false, message: err });
    }
});
router.get("/getNotification", async (req, res) => {
    try {
        const notification = await Notification.find({});
        res.status(201).json({
            status: true,
            message: "Notification imported .. ",
            data: notification,
        });
    } catch (err) {
        res.status(500).json({ status: false, message: err });
    }
});

router.put("/editNotification/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id, req.body);
        const newEdit = await Notification.findByIdAndUpdate(id, {
            description: req.body.description,
        });
        res.status(200).json({
            status: true,
            message: "Notification Edited .. ",
            data: newEdit,
        });
    } catch (err) {
        res.status(500).json({ status: false, message: err });
    }
});
///////////////////////////

const fileUploadPaths = {
    FILE_UPLOAD_PATH: path.join(__dirname, "..", "client/public/uploads/"),
};

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, fileUploadPaths.FILE_UPLOAD_PATH);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname.toLowerCase().replace(/ /g, "_"));
    },
});

const postFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

let uploadPost = multer({
    storage: storage,
    fileFilter: postFilter,
});

let uploadFile = multer({
    storage: storage,
});
router.post("/createclass", uploadPost.single("img"), async (req, res) => {
    let newPost = {
        ...req.body,
        type: "text",
    };

    if (req.file) {
        const fileName = req.file.filename;
        newPost = {
            ...newPost,
            img: `${fileName}`,
        };
    }

    const savedPost = await new classroom(newPost).save();

    return res.json({ status: 201, post: savedPost });
});
router.put("/editClass/:id", uploadPost.single("img"), async (req, res) => {
    try {
        const { id } = req.params;

        let newPost = {
            ...req.body,
            type: "text",
        };

        if (req.file) {
            const fileName = req.file.filename;
            newPost = {
                ...newPost,
                img: `${fileName}`,
            };

            const newClass = await classroom.findByIdAndUpdate(id, {
                name: req.body.name,
                img: req.file.filename,
            });
            res.status(200).json({ msg: "class updated", data: newClass });
        } else {
            const newClass = await classroom.findByIdAndUpdate(id, {
                name: req.body.name,
            });
            res.status(200).json({ msg: "class updated", data: newClass });
        }
    } catch (err) {
        res.status(500).json({ status: false, message: err });
    }
});
router.put(
    "/addReportCard/:id",
    uploadFile.single("file"),
    async (req, res) => {
        try {
            const { id } = req.params;

            const updateReport = await Student.findByIdAndUpdate(id, {
                reportCard: req.file.filename,
            });
            res.status(200).json({ msg: "report updated", data: updateReport });
        } catch (err) {
            res.status(500).json({ status: false, message: err });
        }
    }
);

router.delete("/administation/deletePersonel/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const DeletedPersonel = await Personel.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: "Personel Deleted .. !",
            data: DeletedPersonel,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.post("/teacher/addCourse/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { contenu, classroom, title } = req.body;
        const addCourse = await Course.create({
            addedBy: id,
            contenu,
            classroom,
            title,
        });
        res.status(201).json({
            status: true,
            message: "Course added .. ",
            data: addCourse,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

router.get("/teacher/getCourse/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const getMyCourse = await Course.find({ addedBy: id });
        res.status(200).json({
            status: true,
            message: "Courses .. ",
            data: getMyCourse,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.get("/student/getCourse/:classroom", async (req, res) => {
    try {
        const { classroom } = req.params;
        const getMyCourse = await Course.find({ classroom });
        console.log(getMyCourse);
        res.status(200).json({
            status: true,
            message: "Courses .. ",
            data: getMyCourse,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.get("/getcourseDetails/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const getCourse = await Course.findById(id).populate(
            "addedBy",
            "firstName lastName -_id "
        );
        res.status(200).json({
            status: true,
            message: "Course .. ",
            data: getCourse,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
module.exports = router;
