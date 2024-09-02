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
        // Handlers for footer logos.
        case 'step-1-first':
          if (step.hasEntered) {
            toggleClasses('.page-1 .footer-logos', ['fade-in'], ['fade-out']);
          } else {
            toggleClasses('.page-1 .footer-logos', [], ['fade-out']);
            step.hasEntered = true;
          }
          break;
        // Handlers for city names.
        case 'step-1-last':
        case 'step-3-last': {
          // Extract the step number.
          const pageNumber = step.id.split('-')[1];

          if (direction === 'up') {
            toggleClasses(`.page-${pageNumber} .city`, ['fixed-content'], []);
          }
          break;
        }

        case 'step-6-1':
          toggleClasses('.page-5 #step-5-4', [], ['fixed']);
          break;

        default:
          break;
      }
    },
    onStepExit: ({ element: step, direction }) => {
      switch (step.id) {
        // Handlers for footer logos.
        case 'step-1-first':
          toggleClasses('.page-1 .footer-logos', ['fade-out'], ['fade-in']);
          break;
        // Handlers for city names.
        case 'step-1-last':
        case 'step-3-last': {
          const pageNumber = step.id.split('-')[1];

          if (direction === 'down') {
            toggleClasses(`.page-${pageNumber} .city`, [], ['fixed-content']);
          }
          break;
        }

        default:
          break;
      }
    }
  };

  // Handlers for scrollama_top
  const scrollerTopHandlers = {
    onStepEnter: ({ element: step, direction }) => {
      switch (step.id) {
        // For all white sections, add fixed class on exit.
        case 'step-2-1':
        case 'step-4-1':
        case 'step-6-1':
        case 'step-8-1': {
          const pageNumber = step.id.split('-')[1];
          const selector = `.page-${pageNumber} #${step.id} .icon`;
          toggleClasses(selector, ['fixed']);
          break;
        }
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
          const pageNumber = step.id.split('-')[1];
          const selector = `.page-${pageNumber} #${step.id} .icon`;
          toggleClasses(selector, [], ['fixed']);
          break;
        }
      }
    }
  };

  // Handlers for scroller_middle
  const scrollerMiddleHandlers = {
    onStepEnter: ({ element: step, direction }) => {
      switch (step.id) {
        // Handlers for city names.
        case 'step-1-first':
        case 'step-3-first': {
          const pageNumber = step.id.split('-')[1];

          if (direction === 'down') {
            toggleClasses(`.page-${pageNumber} .city`, ['fixed-content']);
          }
          break;
        }
        case 'step-7-1':
          toggleClasses('#step-7-1 div:nth-child(3)', ['animate-img'], ['visibility-hidden']);
          setTimeout(() => {
            toggleClasses('#step-7-1 div:nth-child(2)', ['animate-img'], ['visibility-hidden']);
          }, 200);
          setTimeout(() => {
            toggleClasses('#step-7-1 div:nth-child(1)', ['animate-img'], ['visibility-hidden']);
          }, 500);
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
      }
    },
    onStepExit: ({ element: step, direction }) => {
      switch (step.id) {
        case 'step-9-1':
          if (direction === 'up') {
            toggleClasses('.page-9 #step-9-1 h2', ['fade-out'], ['fade-in']);
          }
          break;
        case 'step-3-first':
        case 'step-1-first': {
          const pageNumber = step.id.split('-')[1];
          if (direction === 'up') {
            toggleClasses(`.page-${pageNumber} .city`, [], ['fixed-content']);
          }
          break;
        }
      }
    }
  };

  // Initialize scrollers
  setupScrollama('.scroller_bottom', 1, scrollerBottomHandlers);
  setupScrollama('.scrollama_top', 0, scrollerTopHandlers);
  setupScrollama('.scroller_middle', 0.5, scrollerMiddleHandlers);
});
