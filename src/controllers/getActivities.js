const {Activities, Country} = require('../db')

module.exports = async(req,res)=>{
try {

    const allActivities = await Activities.findAll({
        include: Country}
    );
    allActivities.length !== 0
    ? res.status(200).json(allActivities)
    : res.status(400).send('Activities not found');
} catch (error) {
 return res.status(500).send(error.message)   
}

}