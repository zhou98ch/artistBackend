const json2csv = require('json2csv').parse;
// const iconv = require('iconv-lite');
const fs = require('fs');
function createCsv(namePath, jsons, fields) {
  return new Promise((resolve, reject) => {
    const newCsv = json2csv(jsons, {fields});
    // const newCsv = iconv.encode(csv, 'GBK'); // 转编码
    var options = { flag : 'a' };
    fs.writeFile(namePath, newCsv, options, function (err) {
      if (err) {
        reject();
        throw err;
      }
      // console.log('create csv');
      resolve();
    });
  });
}
module.exports = {
  createCsv,
};

// const fields = ['recipientName', 'shipCity', 'shipState', 'shipPostalCode'];
// const jsons = [{
//   "recipientName": "是的",
//   "shipCity": 40000,
//   "shipState": "blue",
//   "shipPostalCode": "blue"
// }];
// createCsv('./namePath.csv', jsons, fields)

