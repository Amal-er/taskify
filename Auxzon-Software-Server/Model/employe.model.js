const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  Empid: {
    type: Number,
    required: true,
  },
  EmpFname: {
    type: String,
    required: true,
  },
  EmpLname: {
    type: String,
    required: true,
  },
  EmpMail: {
    type: String,
    required: true,
  },
  EmpNumber: {
    type: String,
  },
  EmpIdProof: {
    type: String
  },
  EmpEducationCertificate: {
    type: String,
  },
  EmpPreviousEXP: {
    type: String,
  },
  EmpOfferLetter: {
    type: String,
  },
  EmpNDA: {
    type: String,
  },
  EmpAgreement: {
    type: String,
  },
  EmpBankACCdetails: {
    type: String,
  },
  EmpBloodgrp: {
    type: String,
  },
  EmpAddress: {
    type: String,
  },
  EmpDOB: {
    type: String,
  },
  EmpDesignation: {
    type: String,
  },
  EmpDepartment: {
    type: String,
  },
  Empstatus: {
    type: String,
  },
  EmpDepartmentId: {
    type: String,
  },

});

module.exports = mongoose.model("Employee", EmployeeSchema);
