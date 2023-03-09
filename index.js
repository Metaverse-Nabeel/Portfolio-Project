const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closeBtn');
const navbarItems = document.querySelector('.navbarItems');
const desktopNavbar = document.querySelector('.desktopNavbar');
const navbar = document.querySelector('.navbar');
const intro = document.querySelector('.intro');
hamburger.addEventListener('click', () => {
  navbarItems.classList.remove('hide');
  navbarItems.classList.add('mobileNavbarItems');
  desktopNavbar.classList.add('mobileNavbar');
  navbar.classList.add('overlay');
  hamburger.classList.add('hide');
  closeBtn.classList.remove('hide');
  intro.classList.add('blurred_intro');
});
closeBtn.addEventListener('click', () => {
  navbarItems.classList.add('hide');
  navbarItems.classList.remove('mobileNavbarItems');
  desktopNavbar.classList.remove('mobileNavbar');
  navbar.classList.remove('overlay');
  hamburger.classList.remove('hide');
  closeBtn.classList.add('hide');
  intro.classList.remove('blurred_intro');
});
navbarItems.addEventListener('click', () => {
  navbarItems.classList.add('hide');
  navbarItems.classList.remove('mobileNavbarItems');
  desktopNavbar.classList.remove('mobileNavbar');
  navbar.classList.remove('overlay');
  hamburger.classList.remove('hide');
  closeBtn.classList.add('hide');
  intro.classList.remove('blurred_intro');
});
const data = [
  {
    projectTitle: 'Tonic',
    imageURL: './Assets/images/portfolio-cards/portfolio_card1_desktop.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. ',
    technologies: ['HTML', 'CSS', 'JS', 'Ruby on Rails'],
    seeLive: 'https://metaverse-nabeel.github.io/Portfolio-Project/',
    sourceCode: 'https://github.com/Metaverse-Nabeel/Portfolio-Project',
  },
  {
    projectTitle: 'Multi-Post Stories',
    imageURL: './Assets/images/portfolio-cards/portfolio_card2_desktop.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JS', 'Ruby on Rails'],
    seeLive: 'https://metaverse-nabeel.github.io/Portfolio-Project/',
    sourceCode: 'https://github.com/Metaverse-Nabeel/Portfolio-Project',
  },
  {
    projectTitle: 'Facebook 360',
    imageURL: './Assets/images/portfolio-cards/portfolio_card3_desktop.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JS', 'Ruby on Rails'],
    seeLive: 'https://metaverse-nabeel.github.io/Portfolio-Project/',
    sourceCode: 'https://github.com/Metaverse-Nabeel/Portfolio-Project',
  },
  {
    projectTitle: 'Uber Navigation',
    imageURL: './Assets/images/portfolio-cards/portfolio_card4_desktop.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JS', 'Ruby on Rails'],
    seeLive: 'https://metaverse-nabeel.github.io/Portfolio-Project/',
    sourceCode: 'https://github.com/Metaverse-Nabeel/Portfolio-Project',
  },
];
document.querySelectorAll('.clickBtn').forEach((occurence) => {
  const id = occurence.getAttribute('id');
  const popupCard = `
<div class="project1" id="project1">
      <div class="popupTop">
          <div class="projectPopupTitle">
            <div class="titlePopup">
              <h3 class="projectTitle">${data[id].projectTitle}</h3>
              <img
              id="popupClose${id}"
              class="popupClose"
              src="./Assets/images/popupCancel.svg"
              alt="closeBtn"
              />
            </div>
            <ul class="clientDetail">
              <li class="clientName">CANOPY</li>
              <li><img src="./Assets/images/dot.svg" alt="dot"/></li>
              <li>Back End Dev</li>
              <li><img src="./Assets/images/dot.svg" alt="dot"/></li>
              <li>2015</li>
            </ul>
          </div>
          <img class="projectImage" src=${data[id].imageURL} alt="projectImage">
        <div class="popupDown">
        <div class="projectDesc popupDesc">${data[id].description}</div>
          <div class="popupBtns">
            <ul class="projectTags">
              <li class="tag">${data[id].technologies[0]}</li>
              <li class="tag">${data[id].technologies[1]}</li>
              <li class="tag">${data[id].technologies[2]}</li>
              <li class="tag">${data[id].technologies[3]}</li>
            </ul>
            <hr>
            <div class="actionBtnPopup">
<a class="btn btnPopup" href=${data[id].seeLive} target='blank'>
                See Live <img class="seeAll" src='./Assets/images/seeLive.svg' alt="seeLive"></a>
            <a class="btn btnPopup" href=${data[id].sourceCode} target='blank'>
            See Source <img class="seeAll" src='./Assets/images/githubCode.svg' alt="githubCode"></a>
            </div>
          </div>
        </div>
        </div>  
    </div>
  </div>`;
  occurence.addEventListener('click', () => {
    const body = document.getElementById('body');
    const section = document.createElement('section');
    section.innerHTML = popupCard;
    section.classList.add('hide');
    body.appendChild(section);
    section.classList.add('projectPopup');
    if (section.classList.contains('hide')) { section.classList.remove('hide'); }
    const hidePopup = document.getElementById(`popupClose${id}`);
    hidePopup.addEventListener('click', () => {
      body.removeChild(section);
    });
  });
});
const user = document.getElementById('userName');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');
const reset = document.getElementById('reset');
const form = document.getElementById('signup');
form.addEventListener('input', () => {
  const formData = {
    name: user.value,
    email: email.value,
    message: textarea.value,
  };
  if (formData) {
    localStorage.setItem('contactForm', JSON.stringify(formData));
  }
});
const storedData = localStorage.getItem('contactForm');
if (storedData) {
  const tempData = JSON.parse(storedData);
  user.value = tempData.name;
  email.value = tempData.email;
  textarea.value = tempData.message;
}
reset.addEventListener('click', () => {
  localStorage.removeItem('contactForm');
});