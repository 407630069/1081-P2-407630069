
const db =require("../utils/data");

const work =class work{
    constructor(id,name,img){
        this.id=id;
        this.name=name;
        this.img=img;
    }

    static fetchAll(){
        return db.execute("SELECT * FROM work");
    }
};

// testing getPortfolios()
// const getwork = async (req, res, next) => {
//     try {
//     let portfolios;
//     await work.fetchAll().then(([rows]) => {
//     portfolios = rows;
//     });
//     console.log("model-testing", work.length);
//     } catch (err) {
//     console.log(err);
//     }
//     };
//     getwork();
    module.exports = work;