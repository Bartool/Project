var db = new PouchDB('https://couchdb-8c6f39.smileupps.com/userspbl');
//  var db = new PouchDB('http://127.0.0.1:5984/pbldb');

function login() {
  var name, pswd, user ;
    name = document.getElementById("login-username").value;
    pswd = document.getElementById("login-password").value;
    console.log(db.get);
  db.get(name).then(function (doc){
      
      console.log(doc);
      if(pswd == doc.password)
        document.location.href = "map.html";
        
    else alert("Wrong password");
  });
    
}

function onWork() {
    
    alert("In progress");
    document.location.href = "index.html"
}

function register() {
    
    document.location.href = "register.html";
}

function newUser() {
    
    //var fname, lname, email, pswd, pswdconf;
    var pswdconf;
    var error = null;
    var user = {};
     user.First_Name = document.getElementById("first_name").value;
     user.Last_Name = document.getElementById("last_name").value;
     user._id = document.getElementById("email").value;
     user.password = document.getElementById("password").value;
     pswdconf = document.getElementById("password_confirmation").value;
     
        /*db.get(email).then(function(){
            
            alert("email already exists");
        }).catch(function(err){
            
            error = err;
            alert(error);
            if(error !== null) {
                if(pswd !== pswdconf){
                    alert("password confirmation is wrong");
                }
                else {alert("create user");
                        db.put({
                        _id: email,
                        password:pswd,
                        first_name: fname,
                        last_name: lname
                    
                }).then(function (response){
                        
                        alert("9cuenta creada");
                        document.location.href = "map.html";
                    }
                        
                        
                );}
                
            }
        });*/
        if(user.password === pswdconf){
           
                        db.put(user,function(error, response) {
                                        
                                        if (error!== null){
                                            console.log("Error!: "+error);
                                            return;
                                        }
                                        else {
                                            
                                            alert("Account succesfully created!")
                                        document.location.href = "index.html";
                        
                                        }
                                        
                                            });       
            
            
            
        }
        else {                              
                alert("password confirmation is wrong");
                    
        }
}

function resetpswd() {
    
    
}
