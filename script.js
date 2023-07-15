// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.getElementById('modal-container');
  const modalContent = document.querySelector('.project-introduction');
  const closeBtn = document.querySelector('.close-btn');
  const categories = document.querySelectorAll('.category');

  categories.forEach(category => {
    const projects = category.querySelectorAll('.project');
    const categoryName = category.querySelector('h3').textContent;
    
    // 添加事件监听器以展示作品图片和名称
    projects.forEach(project => {
      project.addEventListener('click', () => {
        const title = project.querySelector('img').alt;
        const videoSrc = project.getAttribute('data-video-src');
        const description = project.getAttribute('data-description');
        const videoHtml = `<div class="video-container"><video controls><source src="${videoSrc}" type="video/mp4">您的浏览器不支持播放视频。</video></div>`;

        modalContent.querySelector('h3').textContent = title;
        modalContent.querySelector('.video-container').innerHTML = videoHtml;
        modalContent.querySelector('.description p').textContent = description;
        modalContainer.style.display = 'flex';
      });
    });
  });

  closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
  });

  // 添加导航栏动画效果的改进
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
