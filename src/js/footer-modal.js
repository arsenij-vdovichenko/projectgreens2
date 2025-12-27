

  const subscribeBtn = document.getElementById('subscribeBtn');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');

  subscribeBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
