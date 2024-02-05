export default () => {
  document.addEventListener(`DOMContentLoaded`, () => {
    const introMessage = document.querySelector(`.js-intro-message`);
    introMessage.classList.add(`show-intro-message`);
  });

};
