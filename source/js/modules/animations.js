export default () => {

  document.addEventListener(`DOMContentLoaded`, function () {

    // intro
    const introMessage = document.querySelector(`.js-intro-message`);
    introMessage.classList.add(`intro__message--show`);

    // game
    const gameScreen = document.getElementById(`game`);
    const formField = document.querySelector(`.js-form-field`);

    function checkActiveClass() {
      if (gameScreen.classList.contains(`active`)) {
        formField.classList.add(`form__field--show`);
      } else {
        formField.classList.remove(`form__field--show`);
      }
    }

    const observer = new MutationObserver(function (mutationsList) {
      for (let mutation of mutationsList) {
        if (mutation.type === `attributes` && mutation.attributeName === `class`) {
          checkActiveClass();
        }
      }
    });

    observer.observe(gameScreen, {attributes: true});

    checkActiveClass();

    const body = document.querySelector(`.js-body`);
    body.classList.add(`loaded`);

    // overlap
    const overlap = document.querySelector(`.overlap`);
    const prizes = document.querySelector(`[data-href="prizes"]`);

    function addOverlap(link) {
      link.addEventListener(`click`, (event) => {
        event.preventDefault();
        overlap.classList.add(`overlap--show`);
        setTimeout(onAnimationComplete, 2000);

      });

      function onAnimationComplete() {
        window.location = link.href;
        overlap.classList.remove(`overlap--show`);
      }
    }

    addOverlap(prizes);

  });


};
