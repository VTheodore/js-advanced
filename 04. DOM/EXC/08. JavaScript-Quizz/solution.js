function solve() {
  const quizzieElement = document.getElementById('quizzie');
  let currLoop = 0;
  let rightAnswers = 0;

  const sectionElements = document.querySelectorAll('section');
  const resultElement = document.querySelector('#results');

  quizzieElement.addEventListener('click', quizzHandler);

  function quizzHandler(e) {
    if (currLoop <= 2 ) {
      const sectionElement = sectionElements[currLoop];

      const lowValueAnswerText = sectionElement.querySelector('.quiz-answer.low-value p').textContent;
      const highValueAnswerText = sectionElement.querySelector('.quiz-answer.high-value p').textContent;

      const curr = e.target.textContent;

      if(curr === lowValueAnswerText) {
        if (currLoop % 2 === 0) {
          rightAnswers++;
        }

        setNextSection();
      } else if (curr === highValueAnswerText) {
          if (currLoop % 2 !== 0) {
            rightAnswers++;
        }

        setNextSection();
      }


      function setNextSection() {
        currLoop++;
        // sectionElement.setAttribute('class', 'hidden');
        sectionElement.style.display = 'none';

        if (currLoop <= 2) {
          // sectionElements[currLoop].removeAttribute('class');
          sectionElements[currLoop].style.display = 'block';
        } else {
          const heading = resultElement.querySelector('h1');

          if (rightAnswers === 3) {
            heading.textContent = 'You are recognized as top JavaScript fan!';
          } else {
            heading.textContent = `You have ${rightAnswers} right answers`;
          }

          resultElement.style.display = 'block';
        }
      }
    }
  }
}