var userip
var country;
var city;
var useripstring;


function  callback(result){
    
     //We are getting IP Based Details of viewer in the parameter of this function from https://geoip-db.com/jsonp/ api!
    
       console.log(result)
          country = result.country_name ;
        userip = result.IPv4;
        city = result.city;
        
        console.log( result.IPv4)
}

