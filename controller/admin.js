const path= require('path');

const express=require('express')
const routerfile= require('../routes/routes.js');

const User= require('../model/user.js');

const Booking= require('../model/booking.js');

exports.adminform=(req,res,next) =>
{
    res.sendFile(path.join(__dirname, '..','views','admin.html'))
}

exports.admin= async (req,res,next) =>
{
    try{
        const time=req.body.time;
        const slot= req.body.slot;

        const addslot= await User.create({
            time:time,
            slot:slot
        })
        res.status(200).json(addslot)
    }
    catch(e){
        res.status(400).jason(e)
    }
}

exports.dashboard= (req,res,next)=>{

    res.sendFile(path.join(__dirname, '..','views','dashboard.html'))

}


exports.fetchdata= async (req,res,next) =>{
try{

    const info = await User.findAll()
    console.log(info)
    res.json(info);
  
}
catch(e)
{
    console.log(e)
}
    

}

exports.slotbook = async (req,res,next) =>{

    try{
        const name= req.body.name;
        const email = req.body.email

        const book = await Booking.create({
            name:name,
            email:email
        })
        res.status(200).json(book)
    }
    catch(e){console.log(e)}
}

exports.updatedata=async (req,res,next) =>{

    try{
        const id= req.params.id;
        const p={
            time:req.body.time,
            slot:req.body.slot
        }
        const newdata= await User.update(p,{where:{id:id}})
        res.json(newdata)
    }
    catch(e){
        console.log(e)
    }
}

exports.slotdata = async (req,res,next) =>{
    try{
        const slotdata= await Booking.findAll()
        res.json(slotdata)
    }
    catch(e){
        console.log(e)
    }
}

