const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    
    var today = new Date();
    currentDay = today.getDay();
    var day = "";
    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Truesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("Error: Current day = "+ currentDay);
    }
    res.render('list', {
        kindOfDay: day
    });
});

app.listen(3000, function(){
    console.log("server started at port 3000");
}); 