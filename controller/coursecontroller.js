
const course =require("../model/coursemodel");

exports.getcourse = async (req, res, next) => {
    try {
    let courses;
    await course.fetchAll().then(([rows]) => {
    courses = rows;
    });
    //console.log("model-testing", portfolios.length);
    res.render("course", {
    data: courses,
    title: "course"
    });
    } catch (err) {
    console.log(err);
    }
    };

