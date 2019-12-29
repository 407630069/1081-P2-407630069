var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hw', function(req, res, next) {
  res.render('hw', { title: 'Express' });
});

const coursecontroller=require("../controller/coursecontroller");

router.get('/course', coursecontroller.getcourse);



router.get('/information', function(req, res, next) {
  res.render('information', { title: 'Express' });
});


const workcontroller=require("../controller/workcontroller");
router.get('/work',workcontroller.getwork);
// router.get('/work', function(req, res, next) {
//   res.render('work', { title: 'Express' });
// });

module.exports = router;
