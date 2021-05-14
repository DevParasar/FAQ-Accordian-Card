const qaContainer = document.querySelectorAll('.qa-container');

qaContainer.forEach( question => {
  const questionBox = question.querySelector('.question-box');

  questionBox.addEventListener('click', () => { 
    
    qaContainer.forEach( item => {
      if (item !== question) {
        item.classList.remove('show-text');  
      }
    });
    
    question.classList.toggle('show-text'); 
  });
});