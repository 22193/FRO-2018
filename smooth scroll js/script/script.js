let index = 0;
let main = document.querySelector('.inhoud');
let deLinkjes = document.querySelectorAll('.nav__menuitem');
let alleLinkjesArr = [];
deLinkjes.forEach( (item) => {
  item.addEventListener('click', (e) => {
  index = alleLinkjesArr.indexOf(item);
  activeren(index);
  });
alleLinkjesArr.push(item);
});
const activeren = (num) => {
  verwijderActief();
  alleLinkjesArr[num].classList.add('nav--actief');
  main.style.marginLeft = (-100*num) + 'vw';
}

const verwijderActief = () => {
  alleLinkjesArr.forEach( (item) => {
    item.classList.remove('nav--actief');
  });
}

activeren(index);

console.log('1');
