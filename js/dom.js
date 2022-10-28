// DOM
let loader = document.createElement('div');
loader.className = 'loader';
loader.innerHTML = `
<div class='loader-text'>
  <div class='logo'>
    <span  style='color: #0098D4'>X</span><span style='color: #D40043'>O</span>
  </div>
  <div class='copy'>&copy; 2022 by mahmoud khaled</div>
</div>`;
document.body.appendChild(loader)
// structure of game
let place = document.createElement('div');
place.className = 'place';
place.style.cssText = `transition: all 0.3s;padding-top: 30px;min-height: calc(100vh - 67px)`
let nav = document.createElement('div');
nav.className = 'nav';
nav.style.cssText =`
  background-color: #fff;
  padding: 10px;
  position: relative;
  z-index: 101;
  box-shadow: 0 0 10px rgb(0 0 0/ 10%)
`;
let logo = document.createElement('div');
logo.innerHTML = `<span  style='color: #0098D4'>X</span> <span style='color: #D40043'>O</span>`;
logo.style.cssText = `
  color: #fff;
  font-weight: bold;
  font-size: 40px;
  text-align: center
`;
nav.appendChild(logo)
document.body.appendChild(nav)

let scoreCont = document.createElement('div');

scoreCont.className = 'score-cont';
scoreCont.style.cssText = `
  width: 150px;
  height: 50px;
  margin: 0 auto;
  background-color: #f1f5f9;
  display: flex;
  gap: 5px;
  transform: translateY(-200px);
  opacity: 0;
  display: none;
  transition: all .3s
`;
for (let i = 0; i < 2; i++) {
  let score = document.createElement('div');
  score.className = `score score${i+1}`;
  score.innerText = 0;
  score.style.cssText = `flex-grow: 1;display: flex;justify-content: center; align-items: center;background-color: #fff`;
  scoreCont.appendChild(score);
}

place.appendChild(scoreCont)
let container = document.createElement('div');
container.className = 'cont';

let overlay = document.createElement('div');
overlay.className = 'overlay';
overlay.style.cssText = `position: absolute;width: 100%;height: 100%;z-index: 100;display: none `;
container.appendChild(overlay);
let back = document.createElement('div');
back.className = 'back';
back.innerHTML = `<span style='color: #0098D4'>X</span><span style='color: #D40043;'>O</span>`;
container.appendChild(back);
for (let i = 0; i < 9; i++) {
  let pieces = document.createElement('div');
  pieces.className = `piece piece${i+1}`;
  pieces.style.cssText = `display: flex;justify-content: center; align-items: center; font-size: 40px;background-color: #fff;color: #fff`;
  container.appendChild(pieces)
}
place.appendChild(container);

document.body.appendChild(place);
// enter to game
let startBtn = document.createElement('div');
startBtn.innerHTML = 'new game'
startBtn.className = 'start';
startBtn.style.cssText = `display:block ;border-radius: 6px; border: none;background-color: #0098D4; margin: 30px auto; color: #fff;font-weight: bold;cursor:pointer;display: flex;
  justify-content: center;
  align-items: center;`;
  
place.appendChild(startBtn);
let box = document.createElement('div');
box.className = 'box';
box.style.cssText = `
  
`;
let endBtn = document.createElement('div');
endBtn.className = 'end';
endBtn.innerHTML = 'Exit'
endBtn.style.cssText = `display:block;border-radius: 6px; border: none;background-color: #D40043;color: #fff;font-weight: bold;cursor:pointer;display: flex;justify-content: center;align-items: center; `;
box.appendChild(endBtn);
let resetBtn = document.createElement('div');
resetBtn.className = 'rest';
resetBtn.innerHTML = 'next';
resetBtn.style.cssText = `border-radius: 6px; border: none;background-color: #0098D4; color: #fff;font-weight: bold;cursor:pointer;display: none;justify-content: center;align-items: center;opacity:0;transform: scale(.8)`;
box.appendChild(resetBtn);
place.appendChild(box);

let counter = document.createElement('div');
var laderTime = 0;
counter.className = 'counter';
counter.innerHTML = laderTime;
document.body.appendChild(counter)
let footer = document.createElement('div');
footer.className = 'footer';
footer.innerHTML = `&copy; 2022 made with <span style = 'color: #0098D4'><i class='fas fa-heart'></i></span> by mahmoud khaled`;
footer.style.cssText = `text-align: center;box-shadow: 0 0 10px rgb(0 0 0/ 10%);background-color: #fff;padding: 20px 0;color: #666; font-size: 14px;width: 100%;`;
document.body.appendChild(footer);
