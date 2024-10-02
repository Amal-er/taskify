const express = require("express");
const router = express.Router();
const adminController = require("../Controller/Admin.controller");
const upload = require("../Middleware/Multer");




router.post('/addEmploye',upload.fields([
    { name: 'EmpIdProof', maxCount: 1 },
    { name: 'EmpEducationCertificate', maxCount: 1 },
    { name: 'EmpPreviousEXP', maxCount: 1 },
    { name: 'EmpOfferLetter', maxCount: 1 },
    { name: 'EmpNDA', maxCount: 1 },
    { name: 'EmpAgreement', maxCount: 1 },
    { name: 'EmpBankACCdetails', maxCount: 1 },
  ]),
  adminController.addEmployee
);


router.get('/EmpBYdepartment/:departmentId', adminController.getEmployeesByDepartmentId);


router.get('getemploye/:empId',adminController.getEmployeeById);

module.exports = router;



module.exports = router;
