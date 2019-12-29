
const work =require("../model/workmodel");

exports.getwork =async(req,res,next) =>{
    try{
        let works;
        await work.fetchAll().then(([rows])=>{
            works=rows;
        });
      //  console.log("model-testing",works.length);
      res.render("work",{
          data:works,
          title:"work"
      });
    }catch(err){
        console.log(err);
    }
};