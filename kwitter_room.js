
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyARVbN3iHLj5Oot88G0S8y-fi9Gh0nI7eM",
      authDomain: "ktwitter-3f24e.firebaseapp.com",
      databaseURL: "https://ktwitter-3f24e-default-rtdb.firebaseio.com",
      projectId: "ktwitter-3f24e",
      storageBucket: "ktwitter-3f24e.appspot.com",
      messagingSenderId: "792323303185",
      appId: "1:792323303185:web:34f65d7acb0f1859418eb0"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
