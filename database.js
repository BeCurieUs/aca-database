let fs = require("fs");

exports.create = function(type,data,doneCallback){
  
}
exports.find = function(type,id,doneCallback){
  fs.readFile('db.json', (err, data) => {
    const createdDatabase = JSON.parse(data)
    const foundObject = createdDatabase[type].find{ item => {
      return item["id"]==id
    }}
    doneCallback(foundObject)
  });
}

