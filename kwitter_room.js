
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDh8b5TrGF1MBfcUDXTv2-zfdAxJQQ8yBI",
      authDomain: "kwitter-2ea5c.firebaseapp.com",
      databaseURL: "https://kwitter-2ea5c-default-rtdb.firebaseio.com",
      projectId: "kwitter-2ea5c",
      storageBucket: "kwitter-2ea5c.appspot.com",
      messagingSenderId: "138836497981",
      appId: "1:138836497981:web:b8868dbfac852fd16bbc54"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
