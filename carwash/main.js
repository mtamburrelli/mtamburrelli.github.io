document.querySelector('.ham-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.off-screen-menu').classList.toggle('active');
  });