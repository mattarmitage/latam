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
        case 'step-1-2':
          toggleClasses('.page-1 .footer-logos', ['fade-out'], ['fade-in']);
          break;

      }
    },
    onStepExit: ({ element: step, direction }) => {
      switch (step.id) {
        case 'step-1-2':
          toggleClasses('.page-1 .footer-logos', ['fade-in'], ['fade-out']);
          break;

        // Large green text.
        case 'step-9-1':
          if (direction === 'up') {
            toggleClasses('.page-9 #step-9-1 h2', ['invisible'], ['fade-in']);
          }
          break;

        // Handlers for map data.
        case 'step-5-2':
          if (direction === 'up') {
            toggleClasses('#step-5-2 .map-data', ['invisible'], ['fade-in']);
          }
          break;

        // Oil Barret.
        case 'step-7-1':
          if (direction === 'up') {
            toggleClasses('#step-7-1 div:nth-child(1)', ['invisible'], ['slide-down']);
            toggleClasses('#step-7-1 div:nth-child(2)', ['invisible'], ['slide-down']);
            toggleClasses('#step-7-1 div:nth-child(3)', ['invisible'], ['slide-down']);
          }
          break;

        // Oil Barret text.
        case 'step-7-2':
          if (direction === 'up') {
            toggleClasses('#step-7-2 > div', ['invisible'], ['fade-in']);
          }
          break;

        // Drops.
        case 'step-10-3':
          if (direction === 'up') {
            toggleClasses('#step-10-3 div:nth-child(1)', ['invisible'], ['slide-down']);
            toggleClasses('#step-10-3 div:nth-child(2)', ['invisible'], ['slide-down']);
          }
          break;

        // Chart with arrow.
        case 'step-12-2':
          if (direction === 'up') {
            setTimeout(() => {
              toggleClasses('#step-12-2 div:nth-child(2)', ['invisible'], ['fade-in']);
            }, 500);
            setTimeout(() => {
              toggleClasses('#step-12-2 div:nth-child(1)', ['invisible'], ['fade-in']);
            }, 1000);
          }
          break;

        // Globe.
        case 'step-16-2':
          if (direction === 'up') {
            setTimeout(() => {
              toggleClasses('#step-16-2 div:nth-child(2)', ['invisible'], ['slide-up']);
            }, 500);
            setTimeout(() => {
              toggleClasses('#step-16-2 div:nth-child(1)', ['invisible'], ['slide-down']);
            }, 1000);
          }
          break;

        // Large orange text.
        case 'step-17-2':
          if (direction === 'up') {
            toggleClasses('.page-17 #step-17-2 h2', ['invisible'], ['fade-in']);
          }
          break;

        // Large pink text.
        case 'step-21-1':
          if (direction === 'up') {
            toggleClasses('.page-21 #step-21-1 h2', ['invisible'], ['fade-in']);
          }
          break;

        // Hydroelectric.
        case 'step-22-2':
          if (direction === 'up') {
            setTimeout(() => {
              toggleClasses('#step-22-2 img:nth-child(1)', ['invisible'], ['fade-in']);
            }, 500);
            setTimeout(() => {
              toggleClasses('#step-22-2 img:nth-child(2)', ['invisible'], ['slide-right']);
            }, 1000);
          }
          break;

        // Batteries.
        case 'step-24-2':
          if (direction === 'up') {
            setTimeout(() => {
              toggleClasses('#step-24-2 img:nth-child(1)', ['invisible'], ['slide-up']);
            }, 500);
            setTimeout(() => {
              toggleClasses('#step-24-2 img:nth-child(2)', ['invisible'], ['slide-down']);
            }, 1000);
          }
          break;

        // Money bad.
        case 'step-27-2':
          if (direction === 'up') {
            setTimeout(() => {
              toggleClasses('#step-27-2 div:nth-child(1)', ['invisible'], ['fade-in']);
            }, 500);
            setTimeout(() => {
              toggleClasses('#step-27-2 div:nth-child(2)', ['invisible'], ['fade-in']);
            }, 1000);
          }
          break;

        // Large brown text.
        case 'step-29-2':
          if (direction === 'up') {
            toggleClasses('.page-29 #step-29-2 h2', ['invisible'], ['fade-in']);
          }
          break;

        // Bottom logos.
        case 'step-33-2':
          if (direction === 'up') {
            toggleClasses('.page-33 #step-33-2 .footer-logos', ['invisible'], ['fade-in']);
          }
          break;
      }
    }
  };

  // Handlers for scrollama_top
  const scrollerTopHandlers = {
    onStepEnter: ({ element: step, direction }) => {
      switch (step.id) {
      }
    },
    onStepExit: ({ element: step, direction }) => {
      switch (step.id) {

        // Large green text.
        case 'step-9-1':
          if (direction === 'down') {
            toggleClasses('.page-9 #step-9-1 h2', ['invisible'], ['fade-in']);
          }
          break;

        // Handlers for map data.
        case 'step-5-2':
          if (direction === 'down') {
            toggleClasses('#step-5-2 .map-data', ['invisible'], ['fade-in']);
          }
          break;

        // Oil Barret.
        case 'step-7-1':
          if (direction === 'down') {
            toggleClasses('#step-7-1 div:nth-child(1)', ['invisible'], ['slide-down']);
            toggleClasses('#step-7-1 div:nth-child(2)', ['invisible'], ['slide-down']);
            toggleClasses('#step-7-1 div:nth-child(3)', ['invisible'], ['slide-down']);
          }
          break;

        // Oil Barret text.
        case 'step-7-2':
          if (direction === 'down') {
            toggleClasses('#step-7-2 > div', ['invisible'], ['fade-in']);
          }
          break;

        // Drops.
        case 'step-10-3':
          if (direction === 'down') {
            toggleClasses('#step-10-3 div:nth-child(1)', ['invisible'], ['slide-down']);
            toggleClasses('#step-10-3 div:nth-child(2)', ['invisible'], ['slide-down']);
          }
          break;

        // Chart with arrow.
        case 'step-12-2':
          if (direction === 'down') {
            setTimeout(() => {
              toggleClasses('#step-12-2 div:nth-child(2)', ['invisible'], ['fade-in']);
            }, 500);
            setTimeout(() => {
              toggleClasses('#step-12-2 div:nth-child(1)', ['invisible'], ['fade-in']);
            }, 1000);
          }
          break;

        // Globe.
        case 'step-16-2':
          if (direction === 'down') {
            setTimeout(() => {
              toggleClasses('#step-16-2 div:nth-child(2)', ['invisible'], ['slide-up']);
            }, 500);
            setTimeout(() => {
              toggleClasses('#step-16-2 div:nth-child(1)', ['invisible'], ['slide-down']);
            }, 1000);
          }
          break;

        // Large orange text.
        case 'step-17-2':
          if (direction === 'down') {
            toggleClasses('.page-17 #step-17-2 h2', ['invisible'], ['fade-in']);
          }
          break;

        // Large pink text.
        case 'step-21-1':
          if (direction === 'down') {
            toggleClasses('.page-21 #step-21-1 h2', ['invisible'], ['fade-in']);
          }
          break;

        // Hydroelectric.
        case 'step-22-2':
          if (direction === 'down') {
            setTimeout(() => {
              toggleClasses('#step-22-2 img:nth-child(1)', ['invisible'], ['fade-in']);
            }, 500);
            setTimeout(() => {
              toggleClasses('#step-22-2 img:nth-child(2)', ['invisible'], ['slide-right']);
            }, 1000);
          }
          break;

        // Batteries.
        case 'step-24-2':
          if (direction === 'down') {
            setTimeout(() => {
              toggleClasses('#step-24-2 img:nth-child(1)', ['invisible'], ['slide-up']);
            }, 500);
            setTimeout(() => {
              toggleClasses('#step-24-2 img:nth-child(2)', ['invisible'], ['slide-down']);
            }, 1000);
          }
          break;

        // Money bag.
        case 'step-27-2':
          if (direction === 'down') {
            setTimeout(() => {
              toggleClasses('#step-27-2 div:nth-child(1)', ['invisible'], ['fade-in']);
            }, 500);
            setTimeout(() => {
              toggleClasses('#step-27-2 div:nth-child(2)', ['invisible'], ['fade-in']);
            }, 1000);
          }
          break;

        // Large brown text.
        case 'step-29-2':
          if (direction === 'down') {
            toggleClasses('.page-29 #step-29-2 h2', ['invisible'], ['fade-in']);
          }
          break;

        // Bottom logos.
        case 'step-33-2':
          if (direction === 'down') {
            toggleClasses('.page-33 #step-33-2 .footer-logos', ['invisible'], ['fade-in']);
          }
          break;
      }
    }
  };

  // Handlers for scroller_middle
  const scrollerMiddleHandlers = {
    onStepEnter: ({ element: step, direction }) => {
      switch (step.id) {

        // Large green text.
        case 'step-9-1':
          toggleClasses('.page-9 #step-9-1 h2', ['fade-in'], ['invisible']);
          break;

        // Oil Barret.
        case 'step-7-1':
          toggleClasses('#step-7-1 div:nth-child(3)', ['slide-down'], ['invisible']);
          setTimeout(() => {
            toggleClasses('#step-7-1 div:nth-child(2)', ['slide-down'], ['invisible']);
          }, 500);
          setTimeout(() => {
            toggleClasses('#step-7-1 div:nth-child(1)', ['slide-down'], ['invisible']);
          }, 1000);
          setTimeout(() => {
            toggleClasses('#step-7-2 > div', ['fade-in'], ['invisible']);
          }, 1500);
          break;

        // Oil Barret text.
        // case 'step-7-2':
        //   toggleClasses('#step-7-2 > div', ['fade-in'], ['invisible']);
        //   break;

        // Drops.
        case 'step-10-3':
          // if (direction === 'down') {
            toggleClasses('#step-10-3 div:nth-child(1)', ['slide-down'], ['invisible']);
            toggleClasses('#step-10-3 div:nth-child(2)', ['slide-down'], ['invisible']);
          // }
          break;

        // Chart with arrow.
        case 'step-12-2':
          setTimeout(() => {
            toggleClasses('#step-12-2 div:nth-child(2)', ['fade-in'], ['invisible']);
          }, 500);
          setTimeout(() => {
            toggleClasses('#step-12-2 div:nth-child(1)', ['fade-in'], ['invisible']);
          }, 1000);
          break;

        // Globe.
        case 'step-16-2':
          setTimeout(() => {
            toggleClasses('#step-16-2 div:nth-child(2)', ['slide-up'], ['invisible']);
          }, 500);
          setTimeout(() => {
            toggleClasses('#step-16-2 div:nth-child(1)', ['slide-down'], ['invisible']);
          }, 1000);
          break;

        // Handlers for map data.
        case 'step-5-2':
          toggleClasses('#step-5-2 .map-data', ['fade-in'], ['invisible']);
          break;

        // Large orange text.
        case 'step-17-2':
          toggleClasses('.page-17 #step-17-2 h2', ['fade-in'], ['invisible']);
          break;

        // Large pink text.
        case 'step-21-1':
          toggleClasses('.page-21 #step-21-1 h2', ['fade-in'], ['invisible']);
          break;

        // Hydroelectric.
        case 'step-22-2':
          setTimeout(() => {
            toggleClasses('#step-22-2 img:nth-child(1)', ['fade-in'], ['invisible']);
          }, 500);
          setTimeout(() => {
            toggleClasses('#step-22-2 img:nth-child(2)', ['slide-right'], ['invisible']);
          }, 1000);
          break;

        // Batteries.
        case 'step-24-2':
          setTimeout(() => {
            toggleClasses('#step-24-2 img:nth-child(1)', ['slide-up'], ['invisible']);
          }, 500);
          setTimeout(() => {
            toggleClasses('#step-24-2 img:nth-child(2)', ['slide-down'], ['invisible']);
          }, 1000);
          break;

        // Money bag.
        case 'step-27-2':
          setTimeout(() => {
            toggleClasses('#step-27-2 div:nth-child(1)', ['fade-in'], ['invisible']);
          }, 500);
          setTimeout(() => {
            toggleClasses('#step-27-2 div:nth-child(2)', ['fade-in'], ['invisible']);
          }, 1000);
          break;

        // Large brown text.
        case 'step-29-2':
          toggleClasses('.page-29 #step-29-2 h2', ['fade-in'], ['invisible']);
          break;

        // Bottom logos.
        case 'step-33-1':
          toggleClasses('.page-33 #step-33-2 .footer-logos', ['fade-in'], ['invisible']);
          break;

      }
    },
    onStepExit: ({ element: step, direction }) => {
      switch (step.id) {
      }
    }
  };

  // Initialize scrollers
  setupScrollama('.scroller_bottom', 0.99, scrollerBottomHandlers);
  setupScrollama('.scrollama_top', 0, scrollerTopHandlers);
  setupScrollama('.scroller_middle', 0.5, scrollerMiddleHandlers);
});
