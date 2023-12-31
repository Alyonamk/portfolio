(() => {
  const refs = {
    openMenuBtn: document.querySelector('.burger-modal-open'),
    closeMenuBtn: document.querySelector('.burger-modal-close-btn'),
    menu: document.querySelector('.burger-menu'),
    menuList: document.querySelector('.burger-list'),
  };
  
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    document.body.classList.toggle('no-scroll');
    refs.menu.classList.toggle('is-hidden');
  }
  function removeMenu() {
    refs.menu.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
  }
  
})();