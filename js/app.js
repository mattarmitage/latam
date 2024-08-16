//$(document).foundation();

document.addEventListener('DOMContentLoaded', () => {
  const scroller = scrollama();

  const updateProgressPercentage = (percentage) => {
    const percentageDisplay = document.querySelector('#progress-percentage');
    percentageDisplay.textContent = `${Math.round(percentage * 100)}%`;
  };

  // Setup scrollama instance
  scroller
      .setup({
          step: '.step',
          offset: 0.5,
          progress: true
          //debug: true
      })
      .onStepEnter(response => {
          const step = response.element;
          // Add highlight to the current step
          step.classList.add('highlight');
      })
      .onStepProgress(response => {
          // Calculate the progress of the scroll
          const progress = response.progress;
          // Update progress bar
          updateProgressPercentage(progress);
      })
      .onStepExit(response => {
        const step = response.element;
        // Add highlight to the current step
        step.classList.remove('highlight');
      });
});