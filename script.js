const pixelInput = document.querySelector('#pixels');
const remInput = document.querySelector('#rems');
const textInput = document.querySelector('#inputtext');



pixelInput.addEventListener('input',()=>{
  let pixTemp =  parseFloat(pixelInput.value);
  let remTemp = (pixTemp/16);

  remInput.value = remTemp;
  textChanger();
});

remInput.addEventListener('input',()=>{
    let remTemp = parseFloat(remInput.value)
    let pixTemp =  remTemp*16;

    pixelInput.value = pixTemp;
    textChanger();
});

function textChanger(){
  let remTemp = parseFloat(remInput.value);
  let textTemp = textInput.value;
  let element = document.querySelector('#output')

element.innerHTML = `<p style="font-size: ${remTemp}rem">${textTemp}</p>`
}
textChanger();
textInput.addEventListener('input',textChanger);
