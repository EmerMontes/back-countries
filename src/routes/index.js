const getCountryByName = require("../controllers/getCountryByName");
const getAllCountries = require("../controllers/getAllCountries");
const deleteActivity = require("../controllers/deleteActivity");
const postActivities = require("../controllers/postActivities");
const getCountryById = require("../controllers/getCountryById");
const getActivities = require("../controllers/getActivities");
const putActivities = require("../controllers/putActivities");
const getCountries = require("../controllers/getCountries");
const { Router } = require("express");
const getActivityById = require("../controllers/getActivityById");
const router = Router();

router.get('/countries' , getCountries)
router.get('/allCountries' , getAllCountries)
router.get('/countries/name' , getCountryByName)
router.get('/countries/:ID' , getCountryById)
router.get('/activities' , getActivities)
router.get('/activities/:ID', getActivityById)
router.post('/activities' , postActivities)
router.put('/activities/:ID' , putActivities)
router.delete('/activities/:ID' , deleteActivity)



module.exports = router;
