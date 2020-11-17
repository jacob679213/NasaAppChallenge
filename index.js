const express = require('express')
const app = express()
const parser = require('body-parser')
const port = 8080

app.use(express.static('public')) //sends public folder to frontend
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/upload', function (req, res) {
  console.log("request recieved")
  console.log(req.body)
  res.send('POST request to the homepage')
  res.end();
})
app.get("/path",function(req,res) {
  var PF = require('pathfinding')
  var terrain = [];
  cols = 96;
  rows = 64;
  for(var x = 0; x <= rows; x++){
    terrain[x] = [];
    for(var y = 0; y <= cols; y++){
      terrain[x][y] = [64][94];
    }
  }
var grid = new PF.Grid(terrain);
var finder = new PF.AStarFinder({
    allowDiagonal: true,
    dontCrossCorners: true
});
var path = finder.findPath(10, 10, 50, 50, grid);
console.log(path)
res.send(path)
  
  function calcAzimuth(){
  var lata = -89.232;
  var latb = -89.2;
  var longa = 54.794;
  var longb = 120.69;
let azang = Math.atan2((Math.sin(longb - longa) * Math.cos(latb)) , ((Math.cos(lata) * Math.sin(latb)) - (Math.sin(lata) * Math.cos(latb) * Math.cos(longb-longa))));
  return azang;
}
})
