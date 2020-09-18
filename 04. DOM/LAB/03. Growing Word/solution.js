function growingWord() {
  const resParagraph = document.querySelector('#exercise p');

  if (!resParagraph.getAttribute('style')) {
    resParagraph.setAttribute('style', 'color: blue; font-size: 2px');
  } else {
    const currentColor = resParagraph.style.color;
    const size = Number(resParagraph
      .style
      .fontSize
      .replace('px', ''));
  
    const sizeMultiplier = 2;
  
    const colorShifting = {
      blue: 'green',
      green: 'red',
      red: 'blue'
    };

    resParagraph.style.color = colorShifting[currentColor];
    resParagraph.style.fontSize = size * sizeMultiplier + 'px';
  }
}