import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { url } from "../../../utils/index";
const AllPersonel = () => {
  //Hooks For All Personel List
  const [allPersonel, setAllPersonel] = useState([]);
  // Function Axios Get All Students
  /*************************************/
  const getAllPersonel = async () => {
    const Personels = await axios.get(`${url}/administation/Allpersonel`);
    setAllPersonel(Personels.data.data);
  };
  /*************************************/
  useEffect(() => {
    getAllPersonel();
  }, []);

  const handleDelete = (id) => {
    setAllPersonel(allPersonel.filter((el) => el._id !== id));
    axios
      .delete(`${url}/administation/deletePersonel/${id}`)
      .then((res) => alert("personel Deleted Successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <div class="page-content-wrapper">
      <div class="page-content">
        <div class="page-bar">
          <div class="page-title-breadcrumb">
            <div class=" pull-left">
              <div class="page-title">All Staff</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="tabbable-line">
              <div class="tab-content">
                <div class="tab-pane active fontawesome-demo" id="tab1">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="card">
                        <div class="card-head">
                          <header> All Personel</header>
                          <div class="tools">
                            <a
                              class="fa fa-repeat btn-color box-refresh"
                              href="javascript:;"
                            ></a>
                            <a
                              class="t-collapse btn-color fa fa-chevron-down"
                              href="javascript:;"
                            ></a>
                            {/* <a
                                                            class="t-close btn-color fa fa-times"
                                                            href="javascript:;"
                                                        ></a> */}
                          </div>
                        </div>
                        <div class="card-body ">
                          <div class="row">
                            <div class="col-md-6 col-sm-6 col-6">
                              <div class="btn-group">
                                <Link
                                  to="/admin/addPersonel"
                                  id="addRow"
                                  class="btn btn-info"
                                >
                                  Add New <i class="fa fa-plus"></i>
                                </Link>
                              </div>
                            </div>
                            {/* <div class="col-md-6 col-sm-6 col-6">
                                                            <div class="btn-group pull-right">
                                                                <a
                                                                    class="btn deepPink-bgcolor  btn-outline dropdown-toggle"
                                                                    data-bs-toggle="dropdown"
                                                                >
                                                                    Tools
                                                                    <i class="fa fa-angle-down"></i>
                                                                </a>
                                                                <ul class="dropdown-menu pull-right">
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i class="fa fa-print"></i>{" "}
                                                                            Print{" "}
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i class="fa fa-file-pdf-o"></i>{" "}
                                                                            Save
                                                                            as
                                                                            PDF{" "}
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i class="fa fa-file-excel-o"></i>
                                                                            Export
                                                                            to
                                                                            Excel{" "}
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div> */}
                          </div>
                          <div class="table-scrollable">
                            <table
                              class="table table-striped table-bordered table-hover table-checkable order-column valign-middle"
                              id="example4"
                            >
                              <thead>
                                <tr>
                                  <th></th>
                                  <th> First Name </th>
                                  <th> Last Name </th>

                                  <th> Phone </th>
                                  <th> Email </th>
                                  <th>Position</th>
                                  <th> Action </th>
                                </tr>
                              </thead>
                              <tbody>
                                {allPersonel &&
                                  allPersonel.map((personel) => {
                                    return (
                                      <tr class="odd gradeX">
                                        <td class="patient-img">
                                          <img src={personel.avatar} alt="" />
                                        </td>
                                        <td>{personel.firstName}</td>
                                        <td class="center">
                                          {personel.lastName}
                                        </td>
                                        <td>
                                          <a href="#">{personel.phone}</a>
                                        </td>
                                        <td>
                                          <a href="#">{personel.email}</a>
                                        </td>
                                        <td class="center">
                                          {personel.position}
                                        </td>

                                        <td>
                                          {/* <a
                                                                                            href="edit_staff.html"
                                                                                            class="btn btn-primary btn-xs"
                                                                                        >
                                                                                            <i class="fa fa-pencil"></i>
                                                                                        </a> */}
                                          <a
                                            href="#"
                                            class="btn btn-danger btn-xs"
                                            onClick={() =>
                                              handleDelete(personel._id)
                                            }
                                          >
                                            <i class="fa fa-trash-o "></i>
                                          </a>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                {/* <tr class="odd gradeX">
                                                                    <td class="patient-img">
                                                                        <img
                                                                            src="../assets/img/std/std10.jpg"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        Pooja
                                                                        Patel
                                                                    </td>
                                                                    <td class="center">
                                                                        Librarian
                                                                    </td>
                                                                    <td>
                                                                        <a href="tel:444786876">
                                                                            444786876{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="mailto:shuxer@gmail.com">
                                                                            pooja@gmail.com{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td class="center">
                                                                        22,tilak
                                                                        appt.
                                                                        surat
                                                                    </td>
                                                                    <td class="center">
                                                                        27 Aug
                                                                        2005
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="edit_staff.html"
                                                                            class="btn btn-primary btn-xs"
                                                                        >
                                                                            <i class="fa fa-pencil"></i>
                                                                        </a>
                                                                        <a
                                                                            href="javasctipt()"
                                                                            class="btn btn-danger btn-xs"
                                                                        >
                                                                            <i class="fa fa-trash-o "></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr class="odd gradeX">
                                                                    <td class="patient-img">
                                                                        <img
                                                                            src="../assets/img/std/std2.jpg"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        Sarah
                                                                        Smith
                                                                    </td>
                                                                    <td class="center">
                                                                        Librarian
                                                                    </td>
                                                                    <td>
                                                                        <a href="tel:44455546456">
                                                                            44455546456{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="mailto:shuxer@gmail.com">
                                                                            sarah@gmail.com{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td class="center">
                                                                        22,tilak
                                                                        appt.
                                                                        surat
                                                                    </td>
                                                                    <td class="center">
                                                                        05 Jun
                                                                        2011
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="edit_staff.html"
                                                                            class="btn btn-primary btn-xs"
                                                                        >
                                                                            <i class="fa fa-pencil"></i>
                                                                        </a>
                                                                        <a
                                                                            href="javasctipt()"
                                                                            class="btn btn-danger btn-xs"
                                                                        >
                                                                            <i class="fa fa-trash-o "></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr class="odd gradeX">
                                                                    <td class="patient-img">
                                                                        <img
                                                                            src="../assets/img/std/std3.jpg"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        John Deo
                                                                    </td>
                                                                    <td class="center">
                                                                        Peon
                                                                    </td>
                                                                    <td>
                                                                        <a href="tel:444543564">
                                                                            444543564{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="mailto:shuxer@gmail.com">
                                                                            john@gmail.com{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td class="center">
                                                                        22,tilak
                                                                        appt.
                                                                        surat
                                                                    </td>
                                                                    <td class="center">
                                                                        15 Feb
                                                                        2012
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="edit_staff.html"
                                                                            class="btn btn-primary btn-xs"
                                                                        >
                                                                            <i class="fa fa-pencil"></i>
                                                                        </a>
                                                                        <a
                                                                            href="javasctipt()"
                                                                            class="btn btn-danger btn-xs"
                                                                        >
                                                                            <i class="fa fa-trash-o "></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr class="odd gradeX">
                                                                    <td class="patient-img">
                                                                        <img
                                                                            src="../assets/img/std/std4.jpg"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        Jay Soni
                                                                    </td>
                                                                    <td class="center">
                                                                        Purchase
                                                                        Officer
                                                                    </td>
                                                                    <td>
                                                                        <a href="tel:444543564">
                                                                            444543564{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="mailto:shuxer@gmail.com">
                                                                            kenh@gmail.com{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td class="center">
                                                                        22,tilak
                                                                        appt.
                                                                        surat
                                                                    </td>
                                                                    <td class="center">
                                                                        12 Nov
                                                                        2012
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="edit_staff.html"
                                                                            class="btn btn-primary btn-xs"
                                                                        >
                                                                            <i class="fa fa-pencil"></i>
                                                                        </a>
                                                                        <a
                                                                            href="javasctipt()"
                                                                            class="btn btn-danger btn-xs"
                                                                        >
                                                                            <i class="fa fa-trash-o "></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr class="odd gradeX">
                                                                    <td class="patient-img">
                                                                        <img
                                                                            src="../assets/img/std/std5.jpg"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        Jacob
                                                                        Ryan
                                                                    </td>
                                                                    <td class="center">
                                                                        Receptionist
                                                                    </td>
                                                                    <td>
                                                                        <a href="tel:444543564">
                                                                            444543564{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="mailto:shuxer@gmail.com">
                                                                            johnson@gmail.com{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td class="center">
                                                                        22,tilak
                                                                        appt.
                                                                        surat
                                                                    </td>
                                                                    <td class="center">
                                                                        03 Dec
                                                                        2001
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="edit_staff.html"
                                                                            class="btn btn-primary btn-xs"
                                                                        >
                                                                            <i class="fa fa-pencil"></i>
                                                                        </a>
                                                                        <a
                                                                            href="javasctipt()"
                                                                            class="btn btn-danger btn-xs"
                                                                        >
                                                                            <i class="fa fa-trash-o "></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr class="odd gradeX">
                                                                    <td class="patient-img">
                                                                        <img
                                                                            src="../assets/img/std/std6.jpg"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        Megha
                                                                        Trivedi
                                                                    </td>
                                                                    <td class="center">
                                                                        Librarian
                                                                    </td>
                                                                    <td>
                                                                        <a href="tel:444543564">
                                                                            444543564{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="mailto:shuxer@gmail.com">
                                                                            megha@gmail.com{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td class="center">
                                                                        22,tilak
                                                                        appt.
                                                                        surat
                                                                    </td>
                                                                    <td class="center">
                                                                        17 Mar
                                                                        2013
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="edit_staff.html"
                                                                            class="btn btn-primary btn-xs"
                                                                        >
                                                                            <i class="fa fa-pencil"></i>
                                                                        </a>
                                                                        <a
                                                                            href="javasctipt()"
                                                                            class="btn btn-danger btn-xs"
                                                                        >
                                                                            <i class="fa fa-trash-o "></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr class="odd gradeX">
                                                                    <td class="patient-img">
                                                                        <img
                                                                            src="../assets/img/std/std1.jpg"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        Rajesh
                                                                    </td>
                                                                    <td class="center">
                                                                        Lab
                                                                        Assistent
                                                                    </td>
                                                                    <td>
                                                                        <a href="tel:4444565756">
                                                                            4444565756{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="mailto:shuxer@gmail.com">
                                                                            rajesh@gmail.com{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td class="center">
                                                                        22,tilak
                                                                        appt.
                                                                        surat
                                                                    </td>
                                                                    <td class="center">
                                                                        22 Feb
                                                                        2000
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="edit_staff.html"
                                                                            class="btn btn-primary btn-xs"
                                                                        >
                                                                            <i class="fa fa-pencil"></i>
                                                                        </a>
                                                                        <a
                                                                            href="javasctipt()"
                                                                            class="btn btn-danger btn-xs"
                                                                        >
                                                                            <i class="fa fa-trash-o "></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr class="odd gradeX">
                                                                    <td class="patient-img">
                                                                        <img
                                                                            src="../assets/img/std/std10.jpg"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        Pooja
                                                                        Patel
                                                                    </td>
                                                                    <td class="center">
                                                                        Driver
                                                                    </td>
                                                                    <td>
                                                                        <a href="tel:444786876">
                                                                            444786876{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="mailto:shuxer@gmail.com">
                                                                            pooja@gmail.com{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td class="center">
                                                                        22,tilak
                                                                        appt.
                                                                        surat
                                                                    </td>
                                                                    <td class="center">
                                                                        27 Aug
                                                                        2005
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="edit_staff.html"
                                                                            class="btn btn-primary btn-xs"
                                                                        >
                                                                            <i class="fa fa-pencil"></i>
                                                                        </a>
                                                                        <a
                                                                            href="javasctipt()"
                                                                            class="btn btn-danger btn-xs"
                                                                        >
                                                                            <i class="fa fa-trash-o "></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr class="odd gradeX">
                                                                    <td class="patient-img">
                                                                        <img
                                                                            src="../assets/img/std/std2.jpg"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        Sarah
                                                                        Smith
                                                                    </td>
                                                                    <td class="center">
                                                                        Librarian
                                                                    </td>
                                                                    <td>
                                                                        <a href="tel:44455546456">
                                                                            44455546456{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="mailto:shuxer@gmail.com">
                                                                            sarah@gmail.com{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td class="center">
                                                                        22,tilak
                                                                        appt.
                                                                        surat
                                                                    </td>
                                                                    <td class="center">
                                                                        05 Jun
                                                                        2011
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="edit_staff.html"
                                                                            class="btn btn-primary btn-xs"
                                                                        >
                                                                            <i class="fa fa-pencil"></i>
                                                                        </a>
                                                                        <a
                                                                            href="javasctipt()"
                                                                            class="btn btn-danger btn-xs"
                                                                        >
                                                                            <i class="fa fa-trash-o "></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr class="odd gradeX">
                                                                    <td class="patient-img">
                                                                        <img
                                                                            src="../assets/img/std/std5.jpg"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        Jacob
                                                                        Ryan
                                                                    </td>
                                                                    <td class="center">
                                                                        Receptionist
                                                                    </td>
                                                                    <td>
                                                                        <a href="tel:444543564">
                                                                            444543564{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="mailto:shuxer@gmail.com">
                                                                            johnson@gmail.com{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td class="center">
                                                                        22,tilak
                                                                        appt.
                                                                        surat
                                                                    </td>
                                                                    <td class="center">
                                                                        03 Dec
                                                                        2001
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="edit_staff.html"
                                                                            class="btn btn-primary btn-xs"
                                                                        >
                                                                            <i class="fa fa-pencil"></i>
                                                                        </a>
                                                                        <a
                                                                            href="javasctipt()"
                                                                            class="btn btn-danger btn-xs"
                                                                        >
                                                                            <i class="fa fa-trash-o "></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr class="odd gradeX">
                                                                    <td class="patient-img">
                                                                        <img
                                                                            src="../assets/img/std/std6.jpg"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        Megha
                                                                        Trivedi
                                                                    </td>
                                                                    <td class="center">
                                                                        Librarian
                                                                    </td>
                                                                    <td>
                                                                        <a href="tel:444543564">
                                                                            444543564{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="mailto:shuxer@gmail.com">
                                                                            megha@gmail.com{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td class="center">
                                                                        22,tilak
                                                                        appt.
                                                                        surat
                                                                    </td>
                                                                    <td class="center">
                                                                        17 Mar
                                                                        2013
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="edit_staff.html"
                                                                            class="btn btn-primary btn-xs"
                                                                        >
                                                                            <i class="fa fa-pencil"></i>
                                                                        </a>
                                                                        <a
                                                                            href="javasctipt()"
                                                                            class="btn btn-danger btn-xs"
                                                                        >
                                                                            <i class="fa fa-trash-o "></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr class="odd gradeX">
                                                                    <td class="patient-img">
                                                                        <img
                                                                            src="../assets/img/std/std1.jpg"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        Rajesh
                                                                    </td>
                                                                    <td class="center">
                                                                        Lab
                                                                        Assistent
                                                                    </td>
                                                                    <td>
                                                                        <a href="tel:4444565756">
                                                                            4444565756{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="mailto:shuxer@gmail.com">
                                                                            rajesh@gmail.com{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td class="center">
                                                                        22,tilak
                                                                        appt.
                                                                        surat
                                                                    </td>
                                                                    <td class="center">
                                                                        22 Feb
                                                                        2000
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="edit_staff.html"
                                                                            class="btn btn-primary btn-xs"
                                                                        >
                                                                            <i class="fa fa-pencil"></i>
                                                                        </a>
                                                                        <a
                                                                            href="javasctipt()"
                                                                            class="btn btn-danger btn-xs"
                                                                        >
                                                                            <i class="fa fa-trash-o "></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr class="odd gradeX">
                                                                    <td class="patient-img">
                                                                        <img
                                                                            src="../assets/img/std/std10.jpg"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        Pooja
                                                                        Patel
                                                                    </td>
                                                                    <td class="center">
                                                                        Driver
                                                                    </td>
                                                                    <td>
                                                                        <a href="tel:444786876">
                                                                            444786876{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="mailto:shuxer@gmail.com">
                                                                            pooja@gmail.com{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td class="center">
                                                                        22,tilak
                                                                        appt.
                                                                        surat
                                                                    </td>
                                                                    <td class="center">
                                                                        27 Aug
                                                                        2005
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="edit_staff.html"
                                                                            class="btn btn-primary btn-xs"
                                                                        >
                                                                            <i class="fa fa-pencil"></i>
                                                                        </a>
                                                                        <a
                                                                            href="javasctipt()"
                                                                            class="btn btn-danger btn-xs"
                                                                        >
                                                                            <i class="fa fa-trash-o "></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr class="odd gradeX">
                                                                    <td class="patient-img">
                                                                        <img
                                                                            src="../assets/img/std/std2.jpg"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        Sarah
                                                                        Smith
                                                                    </td>
                                                                    <td class="center">
                                                                        Librarian
                                                                    </td>
                                                                    <td>
                                                                        <a href="tel:44455546456">
                                                                            44455546456{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="mailto:shuxer@gmail.com">
                                                                            sarah@gmail.com{" "}
                                                                        </a>
                                                                    </td>
                                                                    <td class="center">
                                                                        22,tilak
                                                                        appt.
                                                                        surat
                                                                    </td>
                                                                    <td class="center">
                                                                        05 Jun
                                                                        2011
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="edit_staff.html"
                                                                            class="btn btn-primary btn-xs"
                                                                        >
                                                                            <i class="fa fa-pencil"></i>
                                                                        </a>
                                                                        <a
                                                                            href="javasctipt()"
                                                                            class="btn btn-danger btn-xs"
                                                                        >
                                                                            <i class="fa fa-trash-o "></i>
                                                                        </a>
                                                                    </td>
                                                                </tr> */}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPersonel;
