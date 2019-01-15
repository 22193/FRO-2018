let index = 0;
let main = document.querySelector('.inhoud');
let link = document.querySelectorAll('.nav__menuitem');
let alleLinkjesArr = [];
link.forEach( (item) => {
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

leftbtn = document.getElementById('leftbtn')
rightbtn = document.getElementById('rightbtn')

function leftbutton(){
    if (index == 0){
        leftbtn.style.color = 'grey';
        leftbtn.style.cursor = 'not-allowed';

        rightbtn.style.color = '#333';
        rightbtn.style.cursor = 'pointer';

    } else {
        index--;
        activeren(num = index);
        leftbtn.style.color = '#333';
        leftbtn.style.cursor = 'pointer';

        rightbtn.style.color = '#333';
        rightbtn.style.cursor = 'pointer';

    }
}
function rightbutton(){
    if (index == 4){
        rightbtn.style.color = 'grey';
        rightbtn.style.cursor = 'not-allowed';

        leftbtn.style.color = '#333';
        leftbtn.style.cursor = 'pointer';

    } else {
        index++;
        activeren(num = index);
        rightbtn.style.color = '#333';
        rightbtn.style.cursor = 'pointer';

        leftbtn.style.color = '#333';
        leftbtn.style.cursor = 'pointer';
    }
}


activeren(index);

console.log('1');
