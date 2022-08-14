user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";
function addRoom(){
    room_name=document.getElementById("room_name").value;
    firbase.database().ref("/").child(room_name).update({
        purpose:"addingRoomName"
    });
    localStorage.setItem("room_name", room_name);
    window.location="chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;

   console.log("room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
  
   });});}
getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "chat_page.html";
}

function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location="login_chat.html";
}

function getData(){
    firebase.database().ref("/").on('value', function(snapshot))
    {document.getElementById(output).innerHtml = "";snapshot.forEach(function(childSnapshot) (childKey = childsnapshot.key; 
        Room_names = childKey;
        //Start code
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
        //End code
        ))};}
    function redirectToRoomName(name)

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="login_chat.html";
}
    
    localStorage.setItem("lastname", "Smith");
      localStorage.getItem("lastname");
      var x = localStorage.getItem("mytime");

window.location.href = "http://www.w3schools.com";

window.location.replace("http://www.w3schools.com");
