const express=require('express');

const router= express.Router();

const path= require('path');

const improtingfromcontroller= require('../controller/admin');


router.get("/adminform",improtingfromcontroller.adminform)

router.post("/admin",improtingfromcontroller.admin)

router.get("/",improtingfromcontroller.dashboard)

router.get("/details",improtingfromcontroller.fetchdata)

router.post('/slot',improtingfromcontroller.slotbook)

router.put('/update/:id',improtingfromcontroller.updatedata)

router.get('/getslotsdata',improtingfromcontroller.slotdata);


module.exports=router;