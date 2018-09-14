
var connectedRef = firebase.database().ref(".info/connected");
connectedRef.on("value", function(snap) {
  if (snap.val() === true) {


 //gettingkey()  If you want to check user's ip whenever he disconnect and connect again you can un-comment this function so it will update ip address when user is connected to new internet! otherwise it will continue with the ip address from which user loaded the website!
       if(userip === undefined){ gettingkey()}
  
    

        countview()






  } else {
      

   
   
  }
});