const apiRequest = require('./ApiRequest');
const {createCsv} = require('./CsvFuncs');
const {readJson} = require('./JsonFuncs');
const {imageFilter,randomIdxs} = require('./helper');
const http = require('http');
var url = require("url");
var querystring = require("querystring");
const MAX = 4;
http.createServer((req, res) => {
        var arg = url.parse(req.url).query;
	    var params = querystring.parse(arg);
      
            const ARTIST = params['artist'];
            const FILENAME = params['filename']
        if(ARTIST && FILENAME){
        console.log(ARTIST);
        console.log(FILENAME);
        apiRequest.callApi(ARTIST,function(response){
            if(response.length===0){ //if no artists found
                readJson("NAMES.json",(data)=>{
                    let names = data;
                    let randArray = randomIdxs(names.length);
                    let num = 0;
                    
                    while(MAX<names.length && num<MAX){
                        
                        let randomIdx = randArray[num]
                        res.write(names[randomIdx]);
                        apiRequest.callApi(names[randomIdx],function(response){
                            let newArtists = imageFilter(response);
                            createCsv(FILENAME+".csv",newArtists,['name', 'mbid', 'url','image','image_small']);
                            res.write(JSON.stringify(newArtists));
                        });
                        num+=1;
                    }
                    res.end(); 
                });

            }
            else{
                let newArtists = imageFilter(response);
                createCsv(FILENAME+".csv",newArtists,['name', 'mbid', 'url','image','image_small']);
                res.write(JSON.stringify(newArtists));
                res.end();
               
            }
            
        });
    }
}).listen(3000);

console.log("service running on 3000 port....");