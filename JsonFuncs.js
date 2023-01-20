const fs = require("fs");
const readJson = function(file,callback){
     fs.readFile(file, (err, data) => {
        if (err) throw err;
        let names = JSON.parse(data);
        // console.log('hhahahah');
        // console.log(names);
        n = callback(names);
       return n
      });
}
// function readJson(file){
//   fs.readFileSync(file, (err, data) => {
//      if (err) throw err;
//      let names = JSON.parse(data);
//      // console.log('hhahahah');
//      console.log(names);
     
//     return names;
//    });
  
// }
module.exports = {
    readJson,
};

  