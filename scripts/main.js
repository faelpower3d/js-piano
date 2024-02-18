const pianoKeys = document.querySelectorAll(".piano-keys .key") /*queri selecto all pois vai selecionar mais de um elemento*/


const volumeSlide = document.querySelector(".volume-slider input");
const botao = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("tunes/a.wav");

const playTune = (key)=>{
    audio.src=`tunes/${key}.wav`;
    audio.play();

    const clickedKey= document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(()=>{
        clickedKey.classList.remove("active");

    },150);
};

pianoKeys.forEach((key)=>{/* forEach é um for da vida */
    console.log(key.dataset.key);/*dataset faz pegar apenas os valores do data que esta na variave key no html*/
    key.addEventListener("click",()=> playTune(key.dataset.key));/*add event , vai ficar escutando o clic */
    mapedKeys.push(key.dataset.key);/*adiciona todas as letras na lista mapedkeys */
});

document.addEventListener("keydown",(e)=>{
    if(mapedKeys.includes(e.key))/* se a tecla que eu digitei esta incluso no mapedkeys */
    playTune(e.key);
});/* keydown é o teclado */

const volume = (e)=>{
    audio.volume = e.target.value;
    console.log(e.target.value);/* target é a barra de volume e value o valor */
}

volumeSlide.addEventListener("input",volume)

const showkeys = (e)=>{
    pianoKeys.forEach(key=>key.classList.toggle("hide"))// togle é igual o add porem se ja tiver add , ele remove, como um turn on/turn off
}

botao.addEventListener("click",showkeys)