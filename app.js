 
     // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
      apiKey: "AIzaSyBebaVuhaBZ_6ZNadXz4YUwnpoSa2n7MHA",
      authDomain: "viddekho-e92a6.firebaseapp.com",
      projectId: "viddekho-e92a6",
      storageBucket: "viddekho-e92a6.appspot.com",
      messagingSenderId: "543481899635",
      appId: "1:543481899635:web:8c0600130e2b7fe7635806",
      measurementId: "G-ZEK5G6FQTE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

 // sign up authentication

 document.getElementById('signupForm').addEventListener('submit',signup)
 function signup(e) {
   e.preventDefault();   
 
 var email=document.getElementById('signupInputEmail1').value;
 var password=document.getElementById('signupInputPassword1').value;
//  console.log(email,password);
 //Create User with Email and Password
 firebase.auth().createUserWithEmailAndPassword(email, password)
 .then(()=>{
   
  window.location.replace("index.html");
 })


 .catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   console.log(errorCode);
   console.log(errorMessage);
 });
 

}

// sign in authentication

 document.getElementById('signinForm').addEventListener('submit',signin)
 function signin(e) {
   e.preventDefault();   
 
 var email=document.getElementById('signinInputEmail1').value;
 var password=document.getElementById('signinInputPassword1').value;
//  console.log(email,password);
 //Create User with Email and Password
 firebase.auth().signInWithEmailAndPassword(email, password)
 .then(()=>{
  window.location.replace("index.html");
 
 })
 
 .catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   console.log(errorCode);
   console.log(errorMessage);
 });
 

}