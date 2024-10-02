const Employee = require('../Model/employe.model');


const addEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee({
      Empid: req.body.Empid,
      EmpFname: req.body.EmpFname,
      EmpLname: req.body.EmpLname,
      EmpMail: req.body.EmpMail,
      EmpNumber: req.body.EmpNumber,
      EmpIdProof: req.files?.EmpIdProof?.[0]?.path,
      EmpEducationCertificate: req.files?.EmpEducationCertificate?.[0]?.path,
      EmpPreviousEXP: req.files?.EmpPreviousEXP?.[0]?.path,
      EmpOfferLetter: req.files?.EmpOfferLetter?.[0]?.path,
      EmpNDA: req.files?.EmpNDA?.[0]?.path,
      EmpAgreement: req.files?.EmpAgreement?.[0]?.path,
      EmpBankACCdetails: req.files?.EmpBankACCdetails?.[0]?.path,
      EmpBloodgrp: req.body.EmpBloodgrp,
      EmpAddress: req.body.EmpAddress,
      EmpDOB: req.body.EmpDOB,
      EmpDesignation: req.body.EmpDesignation,
      EmpDepartment: req.body.EmpDepartment,
      Empstatus: req.body.Empstatus,
      EmpDepartmentId: req.body.EmpDepartmentId,
    });

    await newEmployee.save();
    res.status(201).json({ message: 'Employee added successfully', employee: newEmployee });
  } catch (error) {
    res.status(500).json({ message: 'Error adding employee', error });
  }
};


const getEmployeesByDepartmentId = async (req, res) => {
  try {
    const employees = await Employee.find({ EmpDepartmentId: req.params.departmentId });
    if (employees.length > 0) {
      res.status(200).json(employees);
    } else {
      res.status(404).json({ message: 'No employees found in this department' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error });
  }
};


const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findOne({ Empid: req.params.empId });
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employee', error });
  }
};

module.exports = {
  addEmployee,
  getEmployeesByDepartmentId,
  getEmployeeById,
};
