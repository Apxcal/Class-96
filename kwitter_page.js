var firebaseConfig = {
    apiKey: "AIzaSyAUAwkZwjun4G8fIS2QaQ4XCmC0aYXY0zM",
    authDomain: "chatwebapp-2d4b0.firebaseapp.com",
    databaseURL: "https://chatwebapp-2d4b0-default-rtdb.firebaseio.com",
    projectId: "chatwebapp-2d4b0",
    storageBucket: "chatwebapp-2d4b0.appspot.com",
    messagingSenderId: "604022100189",
    appId: "1:604022100189:web:99807e9f6155ff86ec8b34"
  };
firebase.initializeApp(firebaseConfig);

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

var username=localStorage.getItem("username");
var room_name=localStorage.getItem("room_name");

function send(){
    messages=message_data['message'];
    firebase.database().ref(room_name).push({
        name:username,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}
