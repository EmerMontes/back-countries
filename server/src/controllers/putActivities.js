const {Activities} = require('../db')

module.exports = async(req,res)=>{
try {
    const {ID} = req.params
    const { name, difficulty, duration, season } = req.body;
    const activity = await Activities.findOne({where:{ID}});
    
    const data = {
        name,
        difficulty,
        duration,
        season
      };

      activity
      ? ( await activity.update(data),
        res.status(200).send('Updated Activity'))
      : res.status(400).send('Activities not found');

} catch (error) {
 return res.status(500).send(error.message)   
}

}