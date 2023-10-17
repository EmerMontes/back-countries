const {Country}=require('../db')
const {countries} = require('../../api/db')


module.exports = async(req,res) =>{
    try {
        
        console.log('running')
            const country= countries.map(country => (
                {
                 ID: country.cca3,
                 name: country.name.common,
                 imgFlag: country.flags.svg,
                 continent: country.continents[0],
                 capital: country.capital ? (country.capital[0]) : 'NotFound', 
                 subregion: country.subregion ? country.subregion : 'NotFound' ,
                 area: String(country.area), 
                 population: String(country.population),
             }));
             await Country.bulkCreate(country)
            console.log('Countries saved')
    } catch (error) {
        console.log('error')
    }
   
}
