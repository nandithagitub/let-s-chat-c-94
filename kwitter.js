'use strict';
const firebaseConfig = {
    apiKey: "AIzaSyAvXfhVXsyyIoQnmtGaCwp7woq-bewZDbA",
    authDomain: "let-s-chat-app-ecc76.firebaseapp.com",
    databaseURL: "https://let-s-chat-app-ecc76-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-app-ecc76",
    storageBucket: "let-s-chat-app-ecc76.appspot.com",
    messagingSenderId: "118592807400",
    appId: "1:118592807400:web:74043874ae5d047e8cc45d",
    measurementId: "G-5T1BBNY32P"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function adduser(){
    var user_name = document.getElementById("username").value;
    localStorage.setItem("username",user_name);
    window.location = "kwitter_room.html";
}

