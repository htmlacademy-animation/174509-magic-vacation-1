export default () => {

  document.addEventListener(`DOMContentLoaded`, function () {

    const body = document.querySelector(`.js-body`);
    body.classList.add(`loaded`);

    // intro
    const introMessage = document.querySelector(`.js-intro-message`);
    introMessage.classList.add(`intro__message--show`);

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
