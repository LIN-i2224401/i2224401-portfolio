// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.getElementById('modal-container');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const videoPlayer = document.getElementById('videoPlayer');
  const closeBtn = modalContainer.querySelector('.close-btn');
  const categories = document.querySelectorAll('.category');

  categories.forEach(category => {
    const projects = category.querySelectorAll('.project');

    projects.forEach(project => {
      project.addEventListener('click', () => {
        const title = project.querySelector('img').alt;
        const videoSrc = project.getAttribute('data-video-src');
        const description = project.getAttribute('data-description');

        modalTitle.textContent = title;
        videoPlayer.setAttribute('src', videoSrc);
        modalDescription.textContent = description;
        modalContainer.style.display = 'flex';
      });
    });
  });

  closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
    if(videoPlayer) videoPlayer.pause();
  });

  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    window.scrollY > 0 
      ? header.classList.add('scrolled') 
      : header.classList.remove('scrolled');
  });
});
