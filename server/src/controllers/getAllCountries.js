const {Country,Activities} = require('../db')

module.exports = async(req,res)=>{
    try {
        
        console.log('searching cities')
        const countrys = await Country.findAll({
            include: Activities,
        })
         countrys.length !==0 ? res.status(200).json(countrys)
         :  res.status(404).json({error: 'Error All Countries'});

    } catch (error) {
        return res.status(500).send(error.message)
    }

}