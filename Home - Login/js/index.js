firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
      document.getElementById("user_div").style.display = "flex";
      document.getElementById("login_section").style.display = "none";
      
      var user = firebase.auth().currentUser;
      if(user!=null){
          var email_id = user.email;
          document.getElementById("user_para").innerHTML = "Welcome Admin : " + email_id;
      }
  } else {
    // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_section").style.display = "flex";
  }
});
function login(){
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    var login_as = document.getElementById("login_as").value;
    var student_login = document.getElementById("student").value;
    var staff_login = document.getElementById("staff").value;
    var admin_login = document.getElementById("admin").value;
    if(login_as == admin_login){
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
        window.alert("Error : "+errorMessage);
  // ...
});
    }
}
function logout(){
        firebase.auth().signOut();
}
