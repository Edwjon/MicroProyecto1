window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

//document.getElementById("elementID").scrollIntoView();

function goToContact() {
    document.getElementById("contactado").scrollIntoView();
}

function goToPortafolio() {
    document.getElementById("perfil").scrollIntoView();
}

function goToAboutme() {
    document.getElementById("acercademi").scrollIntoView();
}

function goToHabilidades() {
    document.getElementById("habilities").scrollIntoView();
}

function goToTop() {
    window.scrollTop;
}

