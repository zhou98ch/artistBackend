const fs = require("fs");
const readJson = function(file,callback){
     fs.readFile('./'+file, (err, data) => {
          if (err) throw err;
          let names = JSON.parse(data);
          n = callback(names);
          return n
      });
}

module.exports = {
    readJson,
};

  