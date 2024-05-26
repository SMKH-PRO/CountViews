const countview = async () => {
    try {
        // Fetch user data
        const ipinfo = await fetch('https://ipinfo.io/json').then(response => response.json());
        const { ip: userIp, country, city } = ipinfo;

        // Process user IP
        const userIpString = userIp.replace(/\./g, "x");

        // Reference to Firebase views
        const viewsRef = firebase.database().ref('views');

        // Retrieve views data once
        const snapshot = await viewsRef.once("value");

        // Update DOM elements
        document.getElementById("loading").style.display = "none";
        document.getElementById("viewdiv").style.display = "block";
        document.getElementById("views").innerHTML = snapshot.numChildren();

        // Check if user IP is already recorded
        if (snapshot.hasChild(userIpString)) {
            console.log("View Will Not Count, This is a returning user");
        } else {
            // Record new user details
            const userDetails = { country, UserIP: userIp, city };
            await viewsRef.child(userIpString).set(userDetails);
            console.log("View counted, looks like a new user.");
        }
    } catch (error) {
        console.error("Error fetching user data or interacting with Firebase:", error);
    }
};

countview();
