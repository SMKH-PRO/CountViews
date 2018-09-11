
    function countview(){
 //Earlier we stored ip address  in our variable with the help of an api, but if user's internet is slow it can take sometime 
 //So to overcome this problem we are using if conditions to check if we already got ip address data or not? if not then we will run this function again after 500ms
    if(userip !== undefined && userip !== null ){
firebase.database().ref(`views`).on('value',(data)=>{
    useripstring = userip.replace(/\./g,'x')
    document.getElementById("loading").style="display:none;";
document.getElementById("viewdiv").style ="visibility:visible;";
    
document.getElementById("views").innerHTML = data.numChildren();

    if(data.hasChild(useripstring)){ //This user has already viewed page because his ip found in our database
        console.log("View Will Not Count, This is returning user");
    }
    else{
        
        
        var userdetails = {country:country, UserIP:userip, city:city};
        firebase.database().ref(`views/${useripstring}`).push(userdetails);
        console.log("view counted, Looks like a new user.")
    
    }

});

     }
    else{
//So we couldnt find ip address and our variable was nulll or undefined so now we will run countview() function after 500ms,
///It will keep repeating this process untill we get ip address details from our api. 
// this function will keep checking every 500 milli seconds that user's ip address is available or not!.
        console.log("countview will run after 500ms")
        setTimeout(function(){countview()},500)
        
    }   
        

    
    }