export const loadScreeAnimation = () => {
  const loadScreen = document.querySelector('.load-screen');
  const svg = document.querySelector('.load-screen svg');
  const container = document.querySelector('.container');

  window.onload = async ()=> {
    await new Promise(resolve => setTimeout(() => {
      svg.style.opacity = '0';
      svg.style.transition = 'opacity 750ms ease-in-out'
      resolve();
    }, 6000));

    setTimeout(() => {
      loadScreen.style.display = 'none';
      container.style.display = 'block';

    }, 900);
  };
};
