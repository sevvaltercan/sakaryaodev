document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    
    if (username === 'sevval' && password === '1111') {
      
      document.getElementById('message').innerText = 'Hoşgeldiniz ' + username;
      
      setTimeout(function() {
        window.location.href = "anasayfa.html";
      }, 2000);
    } else {
      
      document.getElementById('message').innerText = 'Kullanıcı adı veya şifre hatalı!';
    }
  });
  