const {Country} = require('../db')

module.exports = async(req,res)=>{
    try {
         const page = req.query.page ? parseInt(req.query.page) : 1;
         const limit = 10;
         const offset = (page - 1) * limit; 
        console.log('searching cities')
        const countrys = await Country.findAll({
            limit,
            offset,
        })
         countrys.length !==0 ? res.status(200).json(countrys)
         :  res.status(404).send('error')
         //res.status(400).json(countrys.slice(-10));
         
    } catch (error) {
        return res.status(500).send(error.message)
    }

}