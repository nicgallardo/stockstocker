var fs = require('fs');
var data = fs.readFileSync('./symbols.txt', 'utf-8');
textToJSON(data)
function textToJSON(argument) {
  var  companyArray= data.split('\n')
  var companies = {};
  var name;
  for (var i = 0; i < companyArray.length; i++) {
    var splitCompany = companyArray[i].split("|");
    var companyName = splitCompany[1];
    if(companyName != undefined){
      if(companyName.length > 0){
        var tmp = companyName.split("-").slice(0, 1);
        name = tmp[0]
      }
    }
    companies[name] = splitCompany[0];
  }
  fs.writeFile('symbols.json', JSON.stringify(companies), function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
  });
}
