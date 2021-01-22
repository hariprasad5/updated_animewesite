firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("a_tag").style.display = "block";

    var user = firebase.auth().currentUser;
    var email_verified = user.emailVerified;

    if(user != null){
        var email_id = user.email;

        if(email_verified){
          document.getElementById("verify_btn").style.display = "none";   
          document.getElementById("a_tag").style.display = "block";   
        document.getElementById("user_para").innerHTML = "Thank you for verifiying your mail " +                                                 email_id;
                                                         
           

        } else {
          document.getElementById("verify_btn").style.display = "block";    
          document.getElementById("a_tag").style.display = "none";    
          document.getElementById("user_para").innerHTML = "Welcome, " + email_id + ", Please verify your mail to proceed further."
                                                       

        }

        

        
    }
    
  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("a_tag  ").style.display = "block";
    
  }
});

function login(){
  
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
.then((user) => {
  // Signed in 
  // ...


})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;

  window.alert("Error : " + errorMessage);
});
}

function logout1(){

  window.location.href = "signup.html"

}
//SignUp
const signupForm = document.querySelector('#signup-form');
function signup(){

 var email = document.getElementById("email_field").value;
 var pass = document.getElementById("password_field").value;
   console.log("email-"+ email +"pass-" + pass);
 firebase.auth().createUserWithEmailAndPassword(email, pass).then((user) => {
   // Signed in 
   // ...
     // signupForm.reset();
     // window.location.href = "main.html";
    //  document.write("<p>Hello</p>"); //Not working
     

 })
 .catch((error) => {
   var errorCode = error.code;
   var errorMessage = error.message;

   window.alert("Error : " + errorMessage);
 });

 
}


function logout(){
  firebase.auth().signOut();
}

function sendEmailVerification(){

var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
// Email sent.
window.alert("Verification Sent");

}).catch(function(error) {
// An error happened.
});

}

