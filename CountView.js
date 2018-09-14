
    function countview(){

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

        console.log("countview will run after 500ms")
        setTimeout(function(){countview()},500)
    }   
        

    
    }