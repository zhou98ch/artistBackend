function imageFilter(artistList){
    // console.log(artistList.length);
    artistList.forEach(artist => {
        // console.log(artist['name']);
        let images = artist.image;
        images.forEach(image => {
            // console.log("---------------------")
            // console.log(image);
            artist['image_small'] = '';
            artist['image'] ='';
            if(image['size']==='small'){
                artist['image_small'] = image['#text']; 
            }
            else if(image['size']==='mega'){
                artist['image'] = image['#text'];
        }
        });
    });
    // console.log(artistList[0]);
    return artistList;
}
function randomIdxs(max){
    var randArray=new Array;
    //to get random int without duplicates
    for (var i=0;i<max;i++){ 
        randArray[i]=i+1; 
    } 
    randArray.sort(function(){ return 0.5 - Math.random(); }); 
    return randArray;
}
module.exports = {
    imageFilter,
    randomIdxs
};