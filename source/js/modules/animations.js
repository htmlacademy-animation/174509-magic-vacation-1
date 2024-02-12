export default () => {

  document.addEventListener(`DOMContentLoaded`, function () {

    // intro
    const introMessage = document.querySelector(`.js-intro-message`);
    introMessage.classList.add(`show-intro-message`);

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
  });

  const body = document.querySelector(`.js-body`);
  body.classList.add(`loaded`);

  const mainLink = document.querySelector(`[data-href="top"]`);
  mainLink.classList.add(`active`);

};
