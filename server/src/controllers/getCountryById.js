const {Country,Activities} = require('../db')
const { Op } = require('sequelize');


module.exports = async(req,res)=>{
    console.log('Por Id')
    try {
        const {ID} = req.params;
        const city = await Country.findOne({where:{ID:{
            [Op.iLike]: ID
        }}})
        
        const activity = await city.getActivities()
       
        city 
        ? res.status(200).json({city, activity}) 
        : res.status(400).send('City ID not found') 
    } catch (error) {
        return res.status(500).send(error.message)
    }
}