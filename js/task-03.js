const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');

const makeItems = images => {
  const { url, alt } = images;
  return `
  <li class = 'gallery-item'>
    <img src=${url} alt=${alt}>
  </li>
  `;
};

const makeGalleryItems = images.map(makeItems).join('');
galleryEl.insertAdjacentHTML('beforeend', makeGalleryItems);

console.log(galleryEl);

// const itemsGalleryEl = images.map(({ url, alt }) => {
//   const itemGalleryEl = document.createElement('li');
//   itemGalleryEl.classList.add('gallery-item');

//   const imgGalleryEl = document.createElement('img');
//   imgGalleryEl.src = url;
//   imgGalleryEl.alt = alt;
//   imgGalleryEl.width = 420;

//   // itemGalleryEl.appendChild(imgGalleryEl);
//   // galleryEl.appendChild(itemGalleryEl);
//   galleryEl.append(itemGalleryEl, imgGalleryEl);
//   return galleryEl;
// });

// console.log(galleryEl);
