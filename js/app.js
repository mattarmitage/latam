jQuery(document).foundation();

document.addEventListener('DOMContentLoaded', () => {
  const scroller = scrollama();

  // Setup scrollama instance
  scroller
    .setup({
      step: '.step',
      offset: 0.99,
      //debug: true
    })
    .onStepEnter(response => {
      const step = response.element;
      if (step.id == 'step1' && step.hasEntered) {
        document.querySelector('.footer .right-content').classList.remove('fade-out');
        document.querySelector('.footer .right-content').classList.add('fade-in');
      }
      else if (step.id == 'step1' && !step.hasEntered) {
        document.querySelector('.footer .right-content').classList.remove('fade-out');
        step.hasEntered = true;
      }
      else {
        document.querySelector('.footer .right-content').classList.remove('fade-in');
        document.querySelector('.footer .right-content').classList.add('fade-out');
      }
    });
});
