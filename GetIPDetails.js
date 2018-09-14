function gettingkey(){
    if(userip === undefined || userip == "undefined"){
        
        console.log("Re-Executing Script To Get Key.! ")
         var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.src= 'https://geoip-db.com/jsonp/';
      head.appendChild(script);
      
      
    }
    else{console.log("gettingkey() skipped getkey() because key wasnt undefined and now showing data from firebase");}
}
