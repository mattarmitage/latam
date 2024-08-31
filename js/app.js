jQuery(document).foundation();

document.addEventListener('DOMContentLoaded', () => {
  // Utility function to toggle classes
  const toggleClasses = (selector, addClasses = [], removeClasses = []) => {
    const element = document.querySelector(selector);
    if (!element) return;

    removeClasses.forEach(cls => element.classList.remove(cls));
    addClasses.forEach(cls => element.classList.add(cls));
  };

  // Setup scrollama instance
  const setupScrollama = (stepClass, offset, handlers) => {
    const scroller = scrollama();
    scroller
      .setup({ step: stepClass, offset })
      .onStepEnter(handlers.onStepEnter)
      .onStepExit(handlers.onStepExit);
  };

  // Handlers for scroller_bottom
  const scrollerBottomHandlers = {
    onStepEnter: ({ element: step, direction }) => {
      switch (step.id) {
        case 'step-1-1':
          if (step.hasEntered) {
            toggleClasses('.page-1 .footer .right-content', ['fade-in'], ['fade-out']);
          } else {
            toggleClasses('.page-1 .footer .right-content', [], ['fade-out']);
            step.hasEntered = true;
          }
          break;
        case 'step-1-3':
          toggleClasses('.page-1 .footer', ['fixed-content']);
          break;
        case 'step-3-2':
          if (direction === 'up') toggleClasses('.page-3 .footer', ['fixed-content']);
          break;
        case 'step-6-1':
          if (direction === 'down') toggleClasses('.page-5 #step-5-4', [], ['fixed']);
          break;
        default:
          toggleClasses('.page-1 .footer .right-content', ['fade-out'], ['fade-in']);
          break;
      }
    },
    onStepExit: ({ element: step, direction }) => {
      switch (step.id) {
        case 'step-1-3':
          if (direction === 'down') toggleClasses('.page-1 .fixed-content', [], ['fixed-content']);
          break;
        case 'step-6-1':
          if (direction === 'up') {
            // Example for handling specific steps on exit if needed
          }
          break;
        // Additional cases can be added as needed
      }
    }
  };

  // Handlers for scrollama_top
  const scrollerTopHandlers = {
    onStepEnter: ({ element: step, direction }) => {
      switch (step.id) {
        case 'step-1-1':
          toggleClasses('.page-1 .footer .left-content p', [], ['hide']);
          toggleClasses('.page-1 .footer .right-content', [], ['hide']);
          break;
        case 'step-2-1':
        case 'step-4-1':
        case 'step-6-1':
        case 'step-8-1': {
          if (direction === 'down') {
            const pageNumber = step.id.split('-')[1];
            const selector = `.page-${pageNumber} #${step.id} .left-section`;
            toggleClasses(selector, ['fixed']);
          }
          break;
        }
        case 'step-3-2':
          if (direction === 'down') toggleClasses('.page-3 .footer', [], ['fixed-content']);
          break;
        case 'step-5-3':
          if (direction === 'down') toggleClasses('.page-5 #step-5-4', ['fixed']);
          break;
      }
    },
    onStepExit: ({ element: step, direction }) => {
      switch (step.id) {
        // For all white sections, remove fixed class on exit.
        case 'step-2-1':
        case 'step-4-1':
        case 'step-6-1':
        case 'step-8-1': {
          if (direction === 'down') {
            const pageNumber = step.id.split('-')[1];
            const selector = `.page-${pageNumber} #${step.id} .left-section`;
            toggleClasses(selector, [], ['fixed']);
          }
          break;
        }
      }
    }
  };

  // Handlers for scroller_middle
  const scrollerMiddleHandlers = {
    onStepEnter: ({ element: step, direction }) => {
      switch (step.id) {
        case 'step-2-1':
          toggleClasses('.page-3 .footer p', ['hide']);
          break;
        case 'step-3-1':
          toggleClasses('.page-3 .footer p', [], ['hide']);
          break;
        case 'step-7-1':
          toggleClasses('#step-7-1 div:nth-child(3)', ['animate-img'], ['visibility-hidden']);
          setTimeout(() => {
            toggleClasses('#step-7-1 div:nth-child(2)', ['animate-img'], ['visibility-hidden']);
          }, 1000);
          setTimeout(() => {
            toggleClasses('#step-7-1 div:nth-child(1)', ['animate-img'], ['visibility-hidden']);
          }, 2000);
          break;
        case 'step-8-1':
        case 'step-6-1':
          toggleClasses('#step-7-1 div:nth-child(1)', ['visibility-hidden'], ['animate-img']);
          toggleClasses('#step-7-1 div:nth-child(2)', ['visibility-hidden'], ['animate-img']);
          toggleClasses('#step-7-1 div:nth-child(3)', ['visibility-hidden'], ['animate-img']);
          break;
        case 'step-9-1':
          toggleClasses('.page-9 #step-9-1 h2', ['fade-in'], ['fade-out']);
          break;
        // Additional cases can be added as needed
      }
    },
    onStepExit: ({ element: step, direction }) => {
      switch (step.id) {
        // For all white sections, remove fixed class on exit.
        case 'step-2-1':
        case 'step-4-1':
        case 'step-6-1':
        case 'step-8-1': {
          if (direction === 'down') {
            const pageNumber = step.id.split('-')[1];
            const selector = `.page-${pageNumber} #${step.id} .left-section`;
            toggleClasses(selector, [], ['fixed']);
          }
          break;
        }
        case 'step-9-1':
          if (direction === 'up') {
            toggleClasses('.page-8 #step-8-1 .left-section', ['fixed']);
            toggleClasses('.page-9 #step-9-1 h2', ['fade-out'], ['fade-in']);
          }
          break;
        // Additional cases can be added as needed
      }
    }
  };

  // Initialize scrollers
  setupScrollama('.scroller_bottom', 0.99, scrollerBottomHandlers);
  setupScrollama('.scrollama_top', 0.05, scrollerTopHandlers);
  setupScrollama('.scroller_middle', 0.5, scrollerMiddleHandlers);
  setupScrollama('.scroller_map', 0.15, {
    onStepEnter: ({ element: step, direction }) => {
      if (step.id === 'step-5-2' && direction === 'up') {
        // Specific logic for scroller_map step 9 when scrolling up
      }
    },
    onStepExit: ({ element: step, direction }) => {
      // Handle exit logic for scroller_map if needed
    }
  });
});
