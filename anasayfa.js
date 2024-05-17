window.onload = function() {
    gosterHakkimizda();
};

function gosterHakkimizda()
{
   
    document.getElementById('icerik').innerHTML = `
    <h3> Hakkımızda </h3>
    <p> Merhaba, benim adım Şevval. Sakarya Üniversitesi Matematik Bölümü öğrencisi 3.sınıf öğrencisiyim.</p >

  `;
}


document.getElementById('hakkimizda').addEventListener('click', function(event) {
  event.preventDefault(); 
    gosterHakkimizda(); 
});


document.getElementById('iletisim').addEventListener('click', function(event) {
  event.preventDefault(); 
    gosterIletisim(); 
});

document.getElementById('sehrim').addEventListener('click', function(event) {
  event.preventDefault(); 
    gosterSehrim(); 
});


function gosterIletisim()
{
   
    window.location.href = "iletisim.html";
}


function gosterSehrim()
{
    
    window.location.href = "sehrim.html";
}


document.getElementById('hakkimizda').addEventListener('click', function(event) {
  event.preventDefault(); 
    window.location.href = "anasayfa.html"; 
});
