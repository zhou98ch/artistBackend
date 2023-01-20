//npm i json2csv,request
const apiRequest = require('./ApiRequest');
const {createCsv} = require('./CsvFuncs');
const {readJson} = require('./JsonFuncs');
const {imageFilter,randomIdxs} = require('./helper');
const http = require('http');
var url = require("url");
var querystring = require("querystring");
const MAX = 5;
let notFound = false;
http.createServer((req, res) => {
        // if(req.url === "/artist"){
       
        var arg = url.parse(req.url).query;
	    var params = querystring.parse(arg);
      
            const ARTIST = params['artist'];
            const FILENAME = params['filename']
        if(ARTIST && FILENAME){
        console.log(ARTIST);
        console.log(FILENAME);
        // console.log(JSON.stringify(params));
        // console.log(params.param.filename);
        //'xhcjxzhckjhzxkjhcjkzhcjzhxkcjzxhu'
        apiRequest.callApi(ARTIST,function(response){
            // console.log("yes");
            // console.log(JSON.stringify(response));
            if(response.length===0){ //if no artists found
              
                
                
                // var jsonNames = [];
                
               
                readJson("NAMES.json",(data)=>{
                    let randArray = randomIdxs(MAX);
                    let num = 0;
                    let names = data;
                    while(num<5){
                        
                        let randomIdx = randArray[num]// Math.floor(Math.random()*names.length); 
                        res.write(names[randomIdx]);
                        apiRequest.callApi(names[randomIdx],function(response){
                            let newArtists = imageFilter(response);
                            createCsv(FILENAME+".csv",newArtists,['name', 'mbid', 'url','image','image_small']);
                        
                            res.write(JSON.stringify(newArtists));
                            // console.log("call again");
                            
                        });
                    num+=1;
                    
                    }
                res.end();
                  
                });
                
          

                
                
                // while(num<5){
                    
                //     let randomIdx = randArray[num]// Math.floor(Math.random()*names.length); 
                //     res.write(names[randomIdx]);
                //     apiRequest.callApi(names[randomIdx],function(response){
                //         let newArtists = imageFilter(response);
                //         createCsv(FILENAME+".csv",newArtists,['name', 'mbid', 'url','image','image_small']);
                     
                //         res.write(JSON.stringify(newArtists));
                //         // console.log("call again");
                        
                //     });
                //     num+=1;
                    
                // }
                // res.end();

                
                
            }
            else{
                let newArtists = imageFilter(response);
                createCsv(FILENAME+".csv",newArtists,['name', 'mbid', 'url','image','image_small']);
             
                res.write(JSON.stringify(newArtists));
                res.end();
                // let num =1;
                // while(num<5){
                //     apiRequest.callApi(function(response){
                //         console.log(response);
                //     });
                //     num+=1
                //     console.log(num);
                // }
               
            }
            
        });
    }
    
        
        // res.end();
}).listen(3000);

console.log("service running on 3000 port....");