require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Student = require("../models/Students");
const Teacher = require("../models/Teachers");
const Admin = require("../models/Admin");
module.exports = {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const student = await Student.findOne({ email });
            const teacher = await Teacher.findOne({ email });
            const admin = await Admin.findOne({ email });
            if (student) {
                bcrypt.compare(
                    password,
                    student.password,
                    async (err, result) => {
                        if (err) {
                            res.status(500).json({
                                status: false,
                                message: err,
                            });
                        } else if (result) {
                            const token = jwt.sign(
                                { id: student._id, email, role: student.role },
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
                    }
                );
            } else if (admin) {
                bcrypt.compare(
                    password,
                    admin.password,
                    async (err, result) => {
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
                    }
                );
            } else if (teacher) {
                bcrypt.compare(
                    password,
                    teacher.password,
                    async (err, result) => {
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
                    }
                );
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
    },
};
