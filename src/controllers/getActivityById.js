const {Country,Activities} = require('../db')
const { Op } = require('sequelize');


module.exports = async(req,res)=>{
    console.log('Por Id')
    try {
        const {ID} = req.params;
        const activity = await Activities.findOne({where:{ID}})

        const city = await activity.getCountries()


        activity 
        ? res.status(200).json({activity, city}) 
        : res.status(400).send('Activity ID not found') 
    } catch (error) {
        return res.status(500).send(error.message)
    }
}