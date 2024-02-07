export default () => {
  let emailFields = document.querySelectorAll(`input[type="email"]`);
  let adaptPlaceholder = function (el) {
    if ((window.innerWidth / window.innerHeight < 1) || (window.innerWidth < 769)) {
      el.placeholder = `e-mail`;
    } else {
      el.placeholder = `e-mail для регистации результата и получения приза`;
    }
  };
  for (let i = 0; i < emailFields.length; i++) {
    adaptPlaceholder(emailFields[i]);
    window.addEventListener(`resize`, function () {
      adaptPlaceholder(emailFields[i]);
    });
  }

  document.addEventListener(`DOMContentLoaded`, function () {
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

};
