import React, { useState, useEffect } from "react";
import axios from "axios";
const GetPayment = () => {
    const [payments, setPayments] = useState([]);
    useEffect(() => {
        axios
            .get("/admin/getPayment")
            .then((res) => setPayments(res.data.data))
            .catch((err) => console.log(err));
    }, []);
    console.log(payments);
    return (
        <div class="page-content-wrapper">
            <div class="page-content">
                <div class="page-bar">
                    <div class="page-title-breadcrumb">
                        <div class=" pull-left">
                            <div class="page-title">Fees Collection</div>
                        </div>
                        <ol class="breadcrumb page-breadcrumb pull-right">
                            <li>
                                <i class="fa fa-home"></i>&nbsp;
                                <a class="parent-item" href="index.html">
                                    Home
                                </a>
                                &nbsp;<i class="fa fa-angle-right"></i>
                            </li>
                            <li>
                                <a class="parent-item" href="">
                                    Fees
                                </a>
                                &nbsp;<i class="fa fa-angle-right"></i>
                            </li>
                            <li>
                                <a class="parent-item" href="">
                                    Fees Collection
                                </a>
                                &nbsp;
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-box">
                            <div class="card-head">
                                <header>Fees Collection</header>
                                <button
                                    id="sdntmenu"
                                    class="mdl-button mdl-js-button mdl-button--icon pull-right"
                                    data-upgraded=",MaterialButton"
                                >
                                    <i class="material-icons">more_vert</i>
                                </button>
                                <ul
                                    class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                                    data-mdl-for="sdntmenu"
                                >
                                    <li class="mdl-menu__item">
                                        <i class="material-icons">
                                            assistant_photo
                                        </i>
                                        Action
                                    </li>
                                    <li class="mdl-menu__item">
                                        <i class="material-icons">print</i>
                                        Another action
                                    </li>
                                    <li class="mdl-menu__item">
                                        <i class="material-icons">favorite</i>
                                        Something else here
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body ">
                                <div class="table-scrollable">
                                    <table
                                        class="table table-striped table-bordered table-hover table-checkable order-column valign-middle"
                                        id="example4"
                                    >
                                        <thead>
                                            <tr>
                                                {/* <th class="center">Roll No</th> */}
                                                <th class="center">
                                                    {" "}
                                                    Student{" "}
                                                </th>
                                                <th class="center"> Class </th>
                                                <th class="center"> Date </th>
                                                <th class="center">
                                                    {" "}
                                                    payment Duration{" "}
                                                </th>
                                                <th class="center">
                                                    {" "}
                                                    Payment Method{" "}
                                                </th>
                                                <th class="center"> Status </th>
                                                <th class="center"> Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {payments &&
                                                payments.map((payment) => {
                                                    return (
                                                        <tr class="odd gradeX">
                                                            <td class="center">
                                                                {
                                                                    payment.student
                                                                }
                                                            </td>
                                                            <td class="center">
                                                                {payment.classe}
                                                            </td>
                                                            <td class="center">
                                                                {payment.paymentDate.substr(
                                                                    0,
                                                                    10
                                                                )}
                                                            </td>
                                                            <td class="center">
                                                                {
                                                                    payment.paymentDuration
                                                                }
                                                            </td>
                                                            <td class="center">
                                                                {
                                                                    payment.paymentMethod
                                                                }
                                                            </td>
                                                            <td class="center">
                                                                <span class="label label-sm label-success">
                                                                    paid
                                                                </span>
                                                            </td>
                                                            <td class="center">
                                                                {`${payment.amount}TND`}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetPayment;
