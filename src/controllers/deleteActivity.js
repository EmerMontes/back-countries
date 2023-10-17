const {Activities} = require('../db')

module.exports = async(req,res)=>{
try {
    const {ID} = req.params
   
    const activity = await Activities.destroy({where:{ID}});
     

      activity
      ? 
        res.status(200).send('Delete Activity')
      : res.status(400).send('Activities not found');

} catch (error) {
 return res.status(500).send(error.message)   
}

}