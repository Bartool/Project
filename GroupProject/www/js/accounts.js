var db = new PouchDB('https://couchdb-8c6f39.smileupps.com/userspbl');
//  var db = new PouchDB('http://127.0.0.1:5984/pbldb');

function login(){
  var name, pswd, user ;
    name = document.getElementById("login-username").value;
    pswd = document.getElementById("login-password").value;
    console.log(db.get);
  db.get(name).then(function (doc){
      alert("alerta");
      console.log(doc);
      if(pswd == doc.password)
        document.location.href = "map.html";
        
    else alert("Wrong password");
  });
    
}

function onWork(){
    
    alert("In progress");
}