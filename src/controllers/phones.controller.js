import { compile } from 'ejs'
import phoneDAO from '../dao/phones.dao.js'

export const phoneAll = (req, res) => {
    phoneDAO.phoneAll()
    .then(phones=>{
        if(phones != null){
            res.json({phones})
        }else{
            res.json({ status: "Servidor no disponible" })
        }})
    .catch(err=>console.log(err))
}

export const getOne = (req, res) => {
    phoneDAO.getOne(req.params.bc)
    .then(phone => {
        if(phone != null)
            res.json({phone})
        else
            res.json({status:"Product not found"})
    })
    .catch(err=>res.json({status: "Server unaviable"}))
}

export const insertPhone = (req, res) => {
    phoneDAO.insertPhone (req.body)
    .then(result => {
        if(result)
            res.json({status:"Product Saved"})
    })
    .catch(err=>res.json({status: "Server unaviable"}))
}

export const updatePhone = (req, res) => {
    phoneDAO.updatePhone (req.params.bc, req.body)
    .then(result => {
        if(result)
            res.json({status:"Product update"})
        else
            res.json({status: "Server unaviable"})
    })
    .catch(err=>res.json({status: "Server unaviable"}))
}

export const deletePhone = (req, res) => {
    phoneDAO.deletePhone (req.params.bc)
    .then(result => {
        if(result)
            res.json({status:"Product delete"})
        else
            res.json({status: "Server unaviable"})
    })
    .catch(err=>res.json({status: "Server unaviable"}))
}