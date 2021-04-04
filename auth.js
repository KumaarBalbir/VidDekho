 
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
   
    // making reference for authentication 
    const auth=firebase.auth();

   

   
    //listen for user auth status

    auth.onAuthStateChanged(user=>{
      if(user){
      
        // console.log('user is logged in:',user); //use toast to show user
       
          setupUI(user);
        }
        
      
      else{
        
        // console.log('user is logged out!'); //use toast instead of console
        setupUI();
      }
    });


     //conditional menu
     const loggedOutLinks=document.querySelectorAll('.logged-out');
     const loggedInLinks=document.querySelectorAll('.logged-in');
     
     const setupUI=(user)=>{
       if(user){
         //toggle UI elements
         loggedInLinks.forEach(item=>item.style.display='inline');
         loggedOutLinks.forEach(item=>item.style.display='none');
     
       }else{
          //toggle UI elements
          loggedInLinks.forEach(item=>item.style.display='none');
          loggedOutLinks.forEach(item=>item.style.display='inline');
       }
     }


    //signUp form

    const signupForm=document.querySelector('#signupForm');
    signupForm.addEventListener('submit',(e)=>{
      e.preventDefault();

      //get User info
      const email=signupForm['signupInputEmail1'].value;
      const password=signupForm['signupInputPassword1'].value;

    
     
      //sign up the user
     auth.createUserWithEmailAndPassword(email, password)
     
      .then(cred=>{
       
         // verification email
      var user = firebase.auth().currentUser;

      user.sendEmailVerification().then(function() {
        
        window.alert("verification email sent!");
      
       window.location.replace("index.html");
       
      
      });
      document.getElementById("signupForm").reset();
     //code for closing modal after submission of form, likhna baki hai
      
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage);
    });
  });

    //logging users out
    const logout=document.querySelector('#logout');
    logout.addEventListener('click',(e)=>{
      e.preventDefault();
      auth.signOut().then(()=>{
       //code for toast messge
     
      });
          window.alert("you are logged out!");
    });


   //login form
   const loginForm=document.querySelector('#loginForm');
   loginForm.addEventListener('submit',(e)=>{
     e.preventDefault();

     //get user info
     const email=loginForm['signinInputEmail1'].value;
     const password=loginForm['signinInputPassword1'].value;

     auth.signInWithEmailAndPassword(email,password).then(cred=>{
     
       //close the signin modal and reset the form..write code here
       window.alert("you are logged in!");
       
       window.location.replace("index.html");

     })
     .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage);
    });
   });
   



   //login with google
    

function loginWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      window.alert(error.message);
   });
        
  
  }
