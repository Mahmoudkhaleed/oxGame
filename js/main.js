// equalize height and width 
container.style.height = `${container.offsetWidth}px`;

// loader
setTimeout(() => {
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = 'none';
  })
}, 2000)
// enter to game
startBtn.addEventListener('click', () => {
  scoreCont.style.display = 'flex';
  setTimeout(() => {
    scoreCont.style.opacity = '1';
    scoreCont.style.transform = 'translateY(0px)'
  });
  box.style.display = 'flex';
  setTimeout(() => {
    box.style.opacity = '1';
    container.classList.toggle('orig')
  });
  startBtn.style.display = 'none';
  let score1 = document.querySelector('.score1');
  score1.classList.add('active');
});

// out the game
endBtn.addEventListener('click', () => {
  scoreCont.style.opacity = '0';
  setTimeout(() => {
    scoreCont.style.display = 'none';
  }, 100);
  setTimeout(() => {
    scoreCont.style.transform = 'translateY(-200px)';
  })
  box.style.opacity = '0';
  setTimeout(() => {
    box.style.display = 'none';
  });
  setTimeout(() => {
    startBtn.style.display = 'flex'
    container.classList.toggle('orig');
    container.classList.remove('rotate');
  }, 0);
  scores.forEach((score) => {
    score.innerText = 0;
    score.classList.remove('active')
  });
  if (!document.querySelector('.rest').classList.contains('active')) {
    document.querySelector('.rest').classList.add('active');
  }
  if (!document.querySelector('.rest').classList.contains('left')) {
    document.querySelector('.rest').classList.add('left');
  }
  if (!document.querySelector('.score1').classList.contains('active')) {
    document.querySelector('.score1').classList.add('active');
  }
  counter.innerText = laderTime;
  document.querySelector('.overlay').style.display = 'none';
  document.querySelector('.cont').classList.remove('act', 'rt', 'rm', 'rb', 'cl', 'cm', 'cr', 'sl', 'sr');
  document.querySelector('.cont').classList.toggle('rotate');
  i = 0;
  xPieces = '';
  oPieces = '';
  pieces.forEach((piece) => {
    piece.classList.remove('selected');
    piece.innerText = '';
    piece.style.cssText = `display: flex;justify-content: center; align-items: center; font-size: 40px;background-color: #fff;color: #fff`;
  });
  xo = 'XOXOXOXOXO';
  cXO = '#0098D4 #D40043 '.repeat(5).split(' ');
  setTimeout(() => {
    document.querySelector('.rest').style.display = 'none';
  }, 300);
});

// create inputs
var xo = 'XOXOXOXOXO',
  cXO = '#0098D4 #D40043 '.repeat(5).split(' ');


function shortOf(scoreNum, pieceType, e) {
  if (pieceType.includes('1') && pieceType.includes('2') && pieceType.includes('3')) {
    addNumTo(scoreNum, 'rt');
    appareNext();
  } else if (pieceType.includes('4') && pieceType.includes('5') && pieceType.includes('6')) {
    addNumTo(scoreNum,'rm');
    appareNext();
  } else if (pieceType.includes('7') && pieceType.includes('8') && pieceType.includes('9')) {
    addNumTo(scoreNum,'rb');
    appareNext();
  } else if (pieceType.includes('1') && pieceType.includes('4') && pieceType.includes('7')) {
    addNumTo(scoreNum,'cr');
    appareNext();
  } else if (pieceType.includes('2') && pieceType.includes('5') && pieceType.includes('8')) {
    addNumTo(scoreNum,'cm');
    appareNext();
  } else if (pieceType.includes('3') && pieceType.includes('6') && pieceType.includes('9')) {
    addNumTo(scoreNum,'cl');
    appareNext();
  } else if (pieceType.includes('1') && pieceType.includes('5') && pieceType.includes('9')) {
    addNumTo(scoreNum,'sr');
    appareNext();
  } else if (pieceType.includes('3') && pieceType.includes('5') && pieceType.includes('7')) {
    addNumTo(scoreNum,'sl');
    appareNext();
  }
  if (pieceType.includes('1') && pieceType.includes('2') && pieceType.includes('5') && pieceType.includes('6') && pieceType.includes('7')) {
    appareNext();
  }
  if (pieceType.includes('1') && pieceType.includes('8') && pieceType.includes('5') && pieceType.includes('6') && pieceType.includes('7')) {
    appareNext();
  }
  if (pieceType.includes('1') && pieceType.includes('3') && pieceType.includes('4') && pieceType.includes('8') && pieceType.includes('9')) {
    appareNext();
  }
  if (pieceType.includes('2') && pieceType.includes('3') && pieceType.includes('4') && pieceType.includes('7') && pieceType.includes('9')) {
    appareNext();
  }

  if (pieceType.includes('2') && pieceType.includes('4') && pieceType.includes('6') && pieceType.includes('7') && pieceType.includes('9')) {
    appareNext();
  }
  if (pieceType.includes('1') && pieceType.includes('3') && pieceType.includes('5') && pieceType.includes('8') && pieceType.includes('4')) {
    appareNext();
  }
  if (pieceType.includes('1') && pieceType.includes('3') && pieceType.includes('5') && pieceType.includes('8') && pieceType.includes('6')) {
    appareNext();
  }
  if (pieceType.includes('1') && pieceType.includes('3') && pieceType.includes('4') && pieceType.includes('6') && pieceType.includes('8')) {
    appareNext();
  }
  if (pieceType.includes('2') && pieceType.includes('5') && pieceType.includes('7') && pieceType.includes('4') && pieceType.includes('9')) {
    appareNext();
  }
  if (pieceType.includes('2') && pieceType.includes('5') && pieceType.includes('7') && pieceType.includes('6') && pieceType.includes('9')) {
    appareNext();
  }

  if (pieceType.includes('1') && pieceType.includes('2') && pieceType.includes('6') && pieceType.includes('7') && pieceType.includes('8')) {
    appareNext();
  }
  if (pieceType.includes('1') && pieceType.includes('2') && pieceType.includes('6') && pieceType.includes('9') && pieceType.includes('7')) {
    appareNext();
  }
  if (pieceType.includes('3') && pieceType.includes('5') && pieceType.includes('4') && pieceType.includes('9') && pieceType.includes('2')) {
    appareNext();
  }
  if (pieceType.includes('3') && pieceType.includes('5') && pieceType.includes('4') && pieceType.includes('9') && pieceType.includes('8')) {
    appareNext();
  }
  if (pieceType.includes('1') && pieceType.includes('3') && pieceType.includes('6') && pieceType.includes('7') && pieceType.includes('8')) {
    appareNext();
  }

}

function appareNext() {
  if (document.querySelector('.rest').classList.contains('left')) {
    document.querySelector('.rest').classList.remove('left');
  }
  document.querySelector('.rest').classList.add('active');
  document.querySelector('.rest').style.display = 'flex';
  setTimeout(() => {
    document.querySelector('.rest').style.opacity = '1';
  }, 0);
  document.querySelector('.overlay').style.display = 'block'
}

function addNumTo(scoreNum, pos) {
  scores.forEach((score) => {
    score.classList.remove('active');
  });
  document.querySelector(`.score${scoreNum}`).innerHTML++;
  document.querySelector('.cont').classList.add('act');
  setTimeout(() => {
    document.querySelector('.cont').classList.add(pos);
  });
}

// oncilck at reset
resetBtn.addEventListener('click', () => {
  if (laderTime !== 0) {
    counter.style.display = 'flex';
    setTimeout(() => {
      counter.style.opacity = '1';
    });
    putOverlay = setInterval(() => {
      counter.innerText -= 1;
      if (counter.innerText < 0) {
        clearInterval(putOverlay);
        counter.style.opacity = '0';
        setTimeout(() => {
          counter.style.display = 'none';
        });
      }
    }, 1000);
  } else {
    counter.style.display = 'none';
  }
  setTimeout(() => {
    if (!document.querySelector('.rest').classList.contains('active')) {
      document.querySelector('.rest').classList.add('active');
    }
    if (!document.querySelector('.rest').classList.contains('left')) {
      document.querySelector('.rest').classList.add('left');
    }
    if (document.querySelector('.score1').innerHTML > document.querySelector('.score2').innerHTML) {
      document.querySelector('.score1').classList.add('active');
    } else if (document.querySelector('.score1').innerHTML < document.querySelector('.score2').innerHTML) {
      document.querySelector('.score2').classList.add('active');
      xo = 'OXOXOXOXOX';
      cXO = '#D40043 #0098D4 '.repeat(5).split(' ');
    } else if (document.querySelector('.score1').innerHTML == document.querySelector('.score2').innerHTML) {
      document.querySelector('.score1').classList.add('active');
      xo = 'XOXOXOXOXO';
      cXO = '#0098D4 #D40043 '.repeat(5).split(' ');
    }
    counter.innerText = laderTime;
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.cont').classList.remove('act', 'rt', 'rm', 'rb', 'cl', 'cm', 'cr', 'sl', 'sr');
    document.querySelector('.cont').classList.toggle('rotate');
    i = 0;
    xPieces = '';
    oPieces = '';
    pieces.forEach((piece) => {
      piece.classList.remove('selected');
      piece.innerText = '';
      piece.style.cssText = `display: flex;justify-content: center; align-items: center; font-size: 40px;background-color: #fff;color: #fff`;
    });

    setTimeout(() => {
      document.querySelector('.rest').style.display = 'none';
    }, 300);
  }, `${laderTime !== 0 ? laderTime + 1 : laderTime}000`);
});

let pieces = document.querySelectorAll('.piece');
let scores = document.querySelectorAll('.score');
xPieces = '';
oPieces = '';
i = 0;

pieces.forEach((piece) => {
  piece.addEventListener('click', (e) => {
    if (!e.target.classList.contains('selected')) {
      e.target.innerHTML = xo[i];
      e.target.style.backgroundColor = cXO[i];
      e.target.classList.add('selected');
      i++;
      if (document.querySelector('.score1').innerHTML > document.querySelector('.score2').innerHTML) {
        if (i == 0 || i == 2 || i == 4 || i == 6 || i == 8 || i == 10) {
          scores.forEach((score) => {
            score.classList.contains('score2') ? score.classList.remove('active') : score.classList.add('active')
          });
          oclass = ''
          oclass += e.target.classList;
          oPieces += oclass.split(' ')[1].split('').filter((e) => !isNaN(parseInt(e))).join('');
          shortOf(2, oPieces, e)
        }
        if (i == 1 || i == 3 || i == 5 || i == 7 || i == 9) {
          scores.forEach((score) => {
            score.classList.contains('score1') ? score.classList.remove('active') : score.classList.add('active')
          });
          xclass = ''
          xclass += e.target.classList;
          xPieces += xclass.split(' ')[1].split('').filter((e) => !isNaN(parseInt(e))).join('');
          shortOf(1, xPieces, e)
        }
      } else if (document.querySelector('.score1').innerHTML < document.querySelector('.score2').innerHTML) {
        if (i == 0 || i == 2 || i == 4 || i == 6 || i == 8 || i == 10) {
          scores.forEach((score) => {
            score.classList.contains('score1') ? score.classList.remove('active') : score.classList.add('active')
          });
          xclass = ''
          xclass += e.target.classList;
          xPieces += xclass.split(' ')[1].split('').filter((e) => !isNaN(parseInt(e))).join('');
          shortOf(1, xPieces, e)
        }
        if (i == 1 || i == 3 || i == 5 || i == 7 || i == 9) {
          scores.forEach((score) => {
            score.classList.contains('score2') ? score.classList.remove('active') : score.classList.add('active')
          });
          oclass = ''
          oclass += e.target.classList;
          oPieces += oclass.split(' ')[1].split('').filter((e) => !isNaN(parseInt(e))).join('');
          shortOf(2, oPieces, e)
        }
      } else if (document.querySelector('.score1').innerHTML == document.querySelector('.score2').innerHTML) {
        if (i == 0 || i == 2 || i == 4 || i == 6 || i == 8 || i == 10) {
          scores.forEach((score) => {
            score.classList.contains('score2') ? score.classList.remove('active') : score.classList.add('active')
          });
          oclass = ''
          oclass += e.target.classList;
          oPieces += oclass.split(' ')[1].split('').filter((e) => !isNaN(parseInt(e))).join('');
          shortOf(2, oPieces, e)
        }
        if (i == 1 || i == 3 || i == 5 || i == 7 || i == 9) {
          scores.forEach((score) => {
            score.classList.contains('score1') ? score.classList.remove('active') : score.classList.add('active')
          });
          xclass = ''
          xclass += e.target.classList;
          xPieces += xclass.split(' ')[1].split('').filter((e) => !isNaN(parseInt(e))).join('');
          shortOf(1, xPieces, e)
        }
      }
      if (i >= 9) {
        scores.forEach((score) => {
          score.classList.remove('active');
        });
      }
    }
  });
});
