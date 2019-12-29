const db =require("../utils/database");

const course =class course{

    constructor(id,name,date,img){
        this.id=id;
        this.name=name;
        this.date=date;
        this.img=img;
    }

    static fetchAll(){
        return db.execute("SELECT * FROM course");
    }
};

// testing getPortfolios()
// const getcourse = async (req, res, next) => {
//     try {
//     let courses;
//     await  course.fetchAll().then(([rows]) => {
//     courses = rows;
//     });
//     console.log("model-testing", courses.length);
//     } catch (err) {
//     console.log(err);
//     }
//     };
//     getcourse();
    module.exports = course;