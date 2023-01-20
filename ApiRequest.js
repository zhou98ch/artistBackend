const request = require('request');
 
EXT_URL = 'https://ws.audioscrobbler.com/2.0/';
const API_KEY = '1584d00186b9411ca37d5955d2f97bce';
const METHOD = 'artist.search';

var PARAM = { format:'json',artist:'NAME',method:METHOD,api_key:API_KEY};
const callArtistSearchApi = (name,callback) => {
    PARAM['artist']=name;
    
    request({url:EXT_URL,qs:PARAM}, (err, res, body) => {
        if (err) { 
            return callback(err);
        }
        json = JSON.parse(body);
        const artists = json["results"]['artistmatches']["artist"];
        return callback(artists);
    });
}

module.exports.callApi = callArtistSearchApi;