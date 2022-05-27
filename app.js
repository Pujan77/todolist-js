const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [];
let workItems = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
    
    let today = new Date();
    
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    let day = today.toLocaleDateString("en-US", options);

    res.render('list', {
        listTitle: day,
        toDoList: items
    });
});

app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", toDoList: workItems});

});

// app.post("/work", function(req,res){
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// });

app.post('/', function(req, res){
    let item =req.body.newItem;
    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

    
    
    
});

app.listen(3000, function(){
    console.log("server started at port 3000");
}); 