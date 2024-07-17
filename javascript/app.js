let editedPlayer = 0;

const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name: '',
    symbol: 'O'
  },
];



//buttons 
const buttonEditPlayer1 =document.getElementById("btn-edit-1");
const buttonEditPlayer2=document.getElementById("btn-edit-2");
const buttonCancelConfig=document.getElementById("btn-cancel");
const errorsOutputElement = document.getElementById('config-errors');
const buttonSubmitConfig=document.querySelector('form');
//form

const formEditConfig=document.getElementById("form-edit-name");
const backdropOverlay=document.getElementById("back-drop");


buttonEditPlayer1.addEventListener('click',openPlayerConfig);
buttonEditPlayer2.addEventListener('click',openPlayerConfig);

buttonCancelConfig.addEventListener('click',closePlayerConfig);
backdropOverlay.addEventListener('click',closePlayerConfig);

buttonSubmitConfig.addEventListener('click',savePlayerConfig);