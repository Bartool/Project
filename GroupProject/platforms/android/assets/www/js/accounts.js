var db = new PouchDB('http://localhost:5984/pbldb');

function login(){
  var name, pswd, user ;
    name = document.getElementById("login-username").value;
    pswd = document.getElementById("login-password").value;
    
  db.get(name).then(function (doc){
      if(pswd == doc.password)
        document.location.href = "map.html";
    
    else alert("Wrong Password!");
  });
    
}