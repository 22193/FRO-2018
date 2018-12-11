const knop = document.getElementById('knop');
let vlak = document.querySelectorAll('.vlakje');

const schuif = () => {
  for (var i = 0; i < vlak.length; i++) {
    vlak[i].classList.toggle('vlakje--schuif-uit');
  }

}

knop.addEventListener('click', schuif);
