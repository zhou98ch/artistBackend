const request = require('request');
 
EXT_URL = 'https://ws.audioscrobbler.com/2.0/';
const API_KEY = '1584d00186b9411ca37d5955d2f97bce';
const NAME = 'Acid Black Cherry';
// const NAME = 'ksdfsdhfshfkjhsdkjfhksjdhfksjhfkjshdkf';
const METHOD = 'artist.search';
var PARAM = { format:'json',artist:NAME,method:METHOD,api_key:API_KEY};
const callArtistSearchApi = (name,callback) => {
    PARAM['artist']=name;
    // console.log("--------------------------");
    // console.log(name);
    request({url:EXT_URL,qs:PARAM}, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
     json = JSON.parse(body);
    //  console.log(json["results"]);
     const artists = json["results"]['artistmatches']["artist"];
            // console.log(artists);
            // createCsv("test.csv",artists,['name', 'mbid', 'url']);
            return callback(artists);
    // return callback(body);
    });
}

module.exports.callApi = callArtistSearchApi;