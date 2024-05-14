window.onload = function() {
    gosterHakkimizda();
};

function gosterHakkimizda()
{
   
    document.getElementById('icerik').innerHTML = `
    < h3 > Hakkımızda </ h3 >
    < p > Merhaba, benim adım[İsminiz]. Kendimle alakalı bilgiler burada yer alacak.</ p >
    < p > ...</ p >
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
