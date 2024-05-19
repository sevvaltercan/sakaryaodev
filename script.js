document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    
    if (username === 'b234400377@sakarya.edu.tr' && password === 'b234400377') {
      
      document.getElementById('message').innerText = 'Hoşgeldiniz b234400377 ' ;
      
      setTimeout(function() {
        window.location.href = "anasayfa.html";
      }, 2000);
    } else {
      
      document.getElementById('message').innerText = 'Kullanıcı adı veya şifre hatalı!';
    }
  });
  