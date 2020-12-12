/*
<!-- 
  Name: Jun Song
Seneca ID Number : 141973198
Date: 2020-10-25
Purpose: approve for submitting WEB322 Assignment2
 -->
All images from Unsplash.
Url: https://unsplash.com
*/
const menuBar = document.querySelector('.menuBar');
const menuItems = document.querySelector('nav .closable');
const menuItems2 = document.querySelector('nav .closable2');
const openForm = document.querySelector('nav .main-item .logIn-Form');
const overlay = document.querySelector('.overlay');
const logIn = document.querySelector('.overlay > .log-in');
const logInBtn = document.querySelector('.overlay .logIn_btn');
const signUpForm = document.querySelector('.overlay > .sign-up');
const signUpBtn = document.querySelector('.overlay .signUp_btn');
const closeSignUp = document.querySelector('.overlay .sign-up .title i');
const closeLogin = document.querySelector('.overlay .log-in .title i');
const footer = document.querySelector('footer');

menuBar.onclick = () => {
  if (menuItems.classList.contains('closable')) {
    menuItems.classList.remove('closable');
    menuItems2.classList.remove('closable2');
  } else {
    menuItems.classList.add('closable');
    menuItems2.classList.add('closable2');
  }
};

openForm.onclick = () => {
  console.log('clicked');
  overlay.style.display = 'flex';
};

signUpBtn.onclick = () => {
  logIn.style.display = 'none';
  signUpForm.style.display = 'block';
};

logInBtn.onclick = () => {
  logIn.style.display = 'block';
  signUpForm.style.display = 'none';
};

closeSignUp.onclick = () => {
  overlay.style.display = 'none';
  logIn.style.display = 'block';
  signUpForm.style.display = 'none';
};

closeLogin.onclick = () => {
  overlay.style.display = 'none';
};

let dataFooter = '';
dataFooter += `<div class="item">
    © 2020 WWBnB, Inc. All rights reserved
    <span>·</span>
    <a class="rights" href="#" class="privacy">Privacy</a>
    <span>·</span>
    <a class="rights" href="#" class="privacy">Terms</a>
    <span>·</span>
    <a class="rights" href="#" class="privacy">Sitemap</a>
  </div>
  <div class="item icons">
    <a target="blank" href="#"><i class="fab fa-twitter"></i></a>
    <a target="blank" href="#"><i class="fab fa-facebook"></i></a>
    <a target="blank" href="#"><i class="fab fa-instagram-square"></i></a>
  </div>
  <form class="item" id="subscribe" action="https://formspree.io/mqkyjkjz" method="POST">
    <input type="email" name="email" id="email" placeholder="Email" required />
    <button>Subscribe</button>
  </form>`;

footer.innerHTML = dataFooter;
