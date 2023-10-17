const {Activities, Country} = require('../db')

module.exports = async(req,res)=>{
try {
    const idCountry = req.body.idCountry
    let country = await Country.findAll({ where: {name: idCountry}});
    


    const {name,difficulty, duration, season} = req.body
    if (!name|| !difficulty || !duration || !season) {
        return res.status(400).send('Data Missing')
    }
    
    const activity =  await Activities.create({name,difficulty, duration, season})

    await activity.addCountry(country);
    return res.status(200).send(activity)
   
} catch (error) {
    return res.status(500).send(error.message)
}
}