var app = require("express")();
var csv = require("csv");
var obj = csv();

function point(name,lat,lon){
    this.name = name;
    this.lat = lat;
    this.lon = lon;
};

var points = [];

obj.from.path('data/pdata.csv').to.array(function (data) {
    for (var index = 0; index < data.length; index++) {
        points.push(new point(data[index][0], data[index][1], data[index][2]));
    }
    console.log(points);
});

app.get("/",function (req,res)
    {
        // now we use the templating capabilities of express and call our template to render the view, and pass a few parameters to it
        res.render("showMapwithArray.ejs", {coordinates:points});
    });

 
app.listen(9999);

