
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    
    if (email === validEmail && password === validPassword) {
     
      window.location.href = 'dashboard.html';
    } else {
      console.log("error")
    }
  });
  
  document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
  

    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    
    if (validRegistrationData) {
      
      window.location.href = 'login.html';
    } else {
      console.log("error")
    }
  });
  