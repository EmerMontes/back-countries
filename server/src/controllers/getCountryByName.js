const {Country} = require('../db')
const { Op } = require('sequelize');


module.exports = async(req,res)=>{
    console.log('por nombre')
    try {
        const name = req.query.name
        const names = await Country.findAll({where:{name:{
          [Op.iLike]: `${name}%`
        }}})
        names.length !== 0
        ? res.status(200).json(names) 
        : res.status(404).send('city not found') 
    } catch (error) {
        return res.status(500).send('city not found')
    }
}