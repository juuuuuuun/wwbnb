// <!--
//   Name: Jun Song
// Seneca ID Number : 141973198
// Date: 2020-10-25
// Purpose: approve for submitting WEB322 Assignment2
//  -->
const itemsTag = document.querySelector('.listing-container');

const items = [
  {
    url:
      'https://images.unsplash.com/photo-1555426104-3a03a4e70b1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=892&q=80',
    availableCInDate: new Date(2020, 7, 12, 6, 0),
    availableCOutDate: new Date(2021, 7, 12, 12, 0),
    location: 'Mississauga, ON, Canada',
    max_noGuest: 10,
    rate: 4.95,
    numReview: 77,
    title: 'Beautiful house·Komoka',
    desc: 'The House at Fernwood Hills',
    superHost: 'block',
    price: 300,
    tag: 1,
  },
  {
    url:
      'https://images.unsplash.com/photo-1586121778101-a64f3aa8df4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    availableCInDate: new Date(2020, 10, 10, 15, 0),
    availableCOutDate: new Date(2020, 12, 10, 10, 0),
    location: 'Kingston, ON, Canada',
    max_noGuest: 2,
    rate: 4.77,
    numReview: 112,
    title: 'Tiny house·THIsland',
    desc: 'The House in front of Kingston Station',
    superHost: 'block',
    price: 110,
    tag: 2,
  },
  {
    url:
      'https://images.unsplash.com/photo-1595599512948-b9831e5fc11c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    availableCInDate: new Date(2020, 11, 1, 10, 0),
    availableCOutDate: new Date(2021, 2, 1, 15, 0),
    location: 'Jersey City, NJ, USA',
    max_noGuest: 4,
    rate: 4.23,
    numReview: 24,
    title: 'Cozy comfortable Apartment',
    desc: 'In front of Loblaws, 5 min from the station',
    superHost: 'none',
    price: 175,
    tag: 3,
  },
  {
    url:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    availableCInDate: new Date(2020, 9, 14, 14, 30),
    availableCOutDate: new Date(2020, 10, 28, 15, 30),
    location: 'Marblehead Neck, Marblehead, MA, USA',
    max_noGuest: 8,
    rate: 3.87,
    numReview: 17,
    title: 'Family Guest house!',
    desc: "Let's having a BBQ with our family",
    superHost: 'none',
    price: 80,
    tag: 4,
  },
  {
    url:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    availableCInDate: new Date(2020, 12, 1, 10, 0),
    availableCOutDate: new Date(2020, 12, 24, 17, 0),
    location: 'Vineland, NJ, USA',
    max_noGuest: 10,
    rate: 4.89,
    numReview: 47,
    title: 'Party House',
    desc: 'Wanna have a party without any problem?',
    superHost: 'block',
    price: 250,
    tag: 5,
  },
  {
    url:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    availableCInDate: new Date(2019, 12, 1, 10, 30),
    availableCOutDate: new Date(2022, 12, 1, 14, 30),
    location: 'Buffalo, NY, USA',
    max_noGuest: 7,
    rate: 4.34,
    numReview: 12,
    title: 'Modern House',
    desc: 'Try to meet Modern in Buffalo!',
    superHost: 'none',
    price: 220,
    tag: 6,
  },
];

let data = '';
items.forEach((e) => {
  data += `<div class="listing-item" onclick="location.href='./room/detail/${e.tag}';">
    <div class="image" style="background-image: url(${e.url});">
      <button style="display: ${e.superHost};">SUPERHOST</button>
      <i class="far fa-heart"></i>
    </div>
    <div class="info">
      <div class="review"><i class="fas fa-star"></i><span>${e.rate}</span><span>(${e.numReview})</span></div>
      <div class="detail">${e.title}</div>
      <div class="detail">${e.desc}</div>
      <div class="detail">${e.location}</div>
      <div class="detail">$${e.price} CAD/peron & night</div>
    </div>
  </div>`;
});
if (itemsTag) {
  itemsTag.innerHTML = data;
}
// console.log(itemsTag.firstChild.childNodes[1].style.backgroundImage);
// console.log(itemsTag.target);
