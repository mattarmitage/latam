jQuery(document).foundation();

document.addEventListener('DOMContentLoaded', () => {
  const scroller_bottom = scrollama();

  // Setup scrollama instance
  scroller_bottom
    .setup({
      step: '.scroller_bottom',
      offset: 0.99,
      //debug: true
    })
    .onStepEnter(response => {
      const step = response.element;
      const direction = response.direction;
      if (step.id == 'step1' && step.hasEntered) {
        document.querySelector('.page-1 .footer .right-content').classList.remove('fade-out');
        document.querySelector('.page-1 .footer .right-content').classList.add('fade-in');
      }
      else if (step.id == 'step1' && !step.hasEntered) {
        document.querySelector('.page-1 .footer .right-content').classList.remove('fade-out');
        step.hasEntered = true;
      }
      else if (step.id == 'step3') {
        document.querySelector('.page-1 .footer').classList.add('fixed-content');
      }
      else if (step.id == 'step6' && direction == 'up') {
        document.querySelector('.page-3 .footer').classList.add('fixed-content');
      }
      else if (step.id == 'step12' && direction == 'down') {
        document.querySelector('.page-5 #step10 .map-data').classList.add('hide');
        document.querySelector('.page-5 #step10 .map-data').classList.remove('fixed-map-data');
      }
      // else if (step.id == 'step12' && direction == 'down') {
      //   //document.querySelector('.page-5 #step11 img').classList.remove('fixed-img');
      //   //document.querySelector('.page-5').classList.remove('extra-height');
      //   document.querySelector('.page-5 #step10 .map-data').classList.add('hide');
      // }
      else {
        document.querySelector('.page-1 .footer .right-content').classList.remove('fade-in');
        document.querySelector('.page-1 .footer .right-content').classList.add('fade-out');
      }
    })
    .onStepExit(response => {
      const step = response.element;
      const direction = response.direction;
      if (step.id == 'step3' && direction == 'down') {
        document.querySelector('.page-1 .fixed-content').classList.remove('fixed-content');
      }
      else if (step.id == 'step12' && direction == 'up') {
        document.querySelector('.page-5 #step10 .map-data').classList.remove('hide');
        document.querySelector('.page-5 #step10 .map-data').classList.add('fixed-map-data');
      }
    });

    const scrollama_top = scrollama();
    scrollama_top
      .setup({
        step: '.scrollama_top',
        offset: 0.05
      })
      .onStepEnter(response => {
        const step = response.element;
        const direction = response.direction;
        if (step.id == 'step1') {
          document.querySelector('.page-1 .footer .left-content p').classList.remove('hide');
          document.querySelector('.page-1 .footer .right-content').classList.remove('hide');
        }
        else if (step.id == 'step4' && direction == 'down') {
          document.querySelector('.page-2 #step4 .left-section').classList.add('fixed');
        }
        else if (step.id == 'step4' && direction == 'down') {
          document.querySelector('.page-3 .footer').classList.add('fixed-content');
        }
        else if (step.id == 'step6' && direction == 'down') {
          document.querySelector('.page-3 .footer').classList.remove('fixed-content');
        }
        else if (step.id == 'step7' && direction == 'down') {
          document.querySelector('.page-4 #step7 .left-section').classList.add('fixed');
        }
        else if (step.id == 'step11' && direction == 'down') {
          document.querySelector('.page-5 #step10 .map-data').classList.remove('hide');
          document.querySelector('.page-5 #step10 .map-data').classList.add('fixed-map-data');
        }
        else if (step.id == 'step12' && direction == 'down') {
          document.querySelector('.page-6 #step12 .left-section').classList.add('fixed');
        }
        else if (step.id == 'step15' && direction == 'down') {
          document.querySelector('.page-8 #step15 .left-section').classList.add('fixed');
        }
        // else if (step.id == 'step9' && direction == 'up') {
        //   //document.querySelector('.page-5 #step11 img.fixed-img').classList.remove('fixed-img');
        //   //document.querySelector('.page-5').classList.remove('extra-height');
        //   document.querySelector('.page-5 #step10 .map-data').classList.add('hide');
        // }
      })
      .onStepExit(response => {
        const step = response.element;
        const direction = response.direction;
        if (step.id == 'step4' && direction == 'up') {
          document.querySelector('.page-2 #step4 .left-section').classList.remove('fixed');
        }
        else if (step.id == 'step7' && direction == 'up') {
          document.querySelector('.page-4 #step7 .left-section').classList.remove('fixed');
        }
        else if (step.id == 'step12' && direction == 'up') {
          document.querySelector('.page-6 #step12 .left-section').classList.remove('fixed');
        }
        else if (step.id == 'step15' && direction == 'up') {
          document.querySelector('.page-8 #step15 .left-section').classList.remove('fixed');
        }
        // else if (step.id == 'step9' && direction == 'down') {
        //   //document.querySelector('.page-5 #step11 img').classList.add('fixed-img');
        //   //document.querySelector('.page-5').classList.add('extra-height');
        //   document.querySelector('.page-5 #step10 .map-data').classList.remove('hide');
        // }
      });

    const scroller_middle = scrollama();
    scroller_middle
        .setup({
          step: '.scroller_middle',
          offset: 0.5
        })
        .onStepEnter(response => {
          const step = response.element;
          const direction = response.direction;
          if (step.id == 'step4') {
            document.querySelector('.page-3 .footer p').classList.add('hide');
          }
          else if (step.id == 'step5') {
            document.querySelector('.page-3 .footer p').classList.remove('hide');
          }
          else if (step.id == 'step13') {
            document.querySelector('#step13 div:nth-child(3)').classList.remove('visibility-hidden');
            document.querySelector('#step13 div:nth-child(3)').classList.add('animate-img');
            setTimeout(function() {
              document.querySelector('#step13 div:nth-child(2)').classList.remove('visibility-hidden');
              document.querySelector('#step13 div:nth-child(2)').classList.add('animate-img');
            }, 1000);
            setTimeout(function() {
              document.querySelector('#step13 div:nth-child(1)').classList.remove('visibility-hidden');
              document.querySelector('#step13 div:nth-child(1)').classList.add('animate-img');
            }, 2000);
          }
          else if (step.id == 'step15' || step.id == 'step12') {
            document.querySelector('#step13 div:nth-child(1)').classList.add('visibility-hidden');
            document.querySelector('#step13 div:nth-child(1)').classList.remove('animate-img');
            document.querySelector('#step13 div:nth-child(2)').classList.add('visibility-hidden');
            document.querySelector('#step13 div:nth-child(2)').classList.remove('animate-img');
            document.querySelector('#step13 div:nth-child(3)').classList.add('visibility-hidden');
            document.querySelector('#step13 div:nth-child(3)').classList.remove('animate-img');
          }
          else if (step.id == 'step16') {
            document.querySelector('.page-9 #step16 h2').classList.remove('fade-out');
            document.querySelector('.page-9 #step16 h2').classList.add('fade-in');
          }
        })
        .onStepExit(response => {
          const step = response.element;
          const direction = response.direction;
          if (step.id == 'step4' && direction == 'down') {
            document.querySelector('.page-2 #step4 .left-section').classList.remove('fixed');
          }
          else if (step.id == 'step7' && direction == 'down') {
            document.querySelector('.page-4 #step7 .left-section').classList.remove('fixed');
          }
          else if (step.id == 'step12' && direction == 'down') {
            document.querySelector('.page-6 #step12 .left-section').classList.remove('fixed');
          }
          else if (step.id == 'step15' && direction == 'down') {
            document.querySelector('.page-8 #step15 .left-section').classList.remove('fixed');
          }
          else if (step.id == 'step5' && direction == 'up') {
            document.querySelector('.page-2 #step4 .left-section').classList.add('fixed');
          }
          else if (step.id == 'step8' && direction == 'up') {
            document.querySelector('.page-4 #step7 .left-section').classList.add('fixed');
          }
          else if (step.id == 'step13' && direction == 'up') {
            document.querySelector('.page-6 #step12 .left-section').classList.add('fixed');
          }
          else if (step.id == 'step16' && direction == 'up') {
            document.querySelector('.page-8 #step15 .left-section').classList.add('fixed');
            document.querySelector('.page-9 #step16 h2').classList.add('fade-out');
            document.querySelector('.page-9 #step16 h2').classList.remove('fade-in');
          }
          // else if (step.id == 'step12' && direction == 'up') {
          //   //document.querySelector('.page-5 #step11 img').classList.add('fixed-img');
          //   //document.querySelector('.page-5').classList.add('extra-height');
          //   document.querySelector('.page-5 #step10 .map-data.hide').classList.remove('hide');
          // }
        });

    const scroller_map = scrollama();
    scroller_map
        .setup({
          step: '.scroller_map',
          offset: 0.15
        })
        .onStepEnter(response => {
          const step = response.element;
          const direction = response.direction;
          if (step.id == 'step9' && direction == 'up') {
            document.querySelector('.page-5 #step10 .map-data').classList.add('hide');
            document.querySelector('.page-5 #step10 .map-data').classList.remove('fixed-map-data');
          }
        })
});