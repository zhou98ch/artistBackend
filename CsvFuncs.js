const json2csv = require('json2csv').parse;

const fs = require('fs');
function createCsv(namePath, jsons, fields) {
  return new Promise((resolve, reject) => {
    const newCsv = json2csv(jsons, {fields});
    var options = { flag : 'a' };
    fs.writeFile('./'+namePath, newCsv, options, function (err) {
        if (err) {
          reject();
          throw err;
        }
        resolve();
    });
  });
}
module.exports = {
  createCsv,
};


