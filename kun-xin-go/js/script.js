const icon = document.querySelector('.menu-burger__button');
icon.addEventListener('click', function () {
  document.documentElement.classList.toggle('menu-open');
  // list.insertAdjacentText('beforeend', 'Курс');
  // list.insertAdjacentElement('beforeend', currencyClone);
  // list.insertAdjacentElement('beforeend', contactsClone);
  // list.insertAdjacentElement('beforeend', socialsClone);
  // if (widthScreen > 768) {
  //   console.log(widthScreen)
  //   list.remove(currencyClone);
  //   list.remove(contactsClone);
  //   list.remove(socialsClone);
  // }
});

// const currency = document.querySelector('.header__currency');
// const socials = document.querySelector('.header__socials');
// const contacts = document.querySelector('.header__contacts');
// const menuOpen = document.querySelector('.menu-open');
// const list = document.querySelector('.list');

// const currencyClone = currency.cloneNode(true);
// const socialsClone = socials.cloneNode(true);
// const contactsClone = contacts.cloneNode(true);

// const widthScreen = document.documentElement.clientWidth
// console.log(widthScreen);


// slider-swiper
const heroSlide = document.querySelector('.hero');

if (heroSlide) {
  const swiper = new Swiper('.hero', {
    // Optional parameters
    loop: true,
    autoHeight: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.hero__button--next',
      prevEl: '.hero__button--prev',
    },

  });
}

window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    '(max-width: 768px)',
    '.services__slider',
    {
      loop: false,
      speed: 1000,
      spaceBetween: 24,
      slidesPerView: 2,
      navigation: {
        nextEl: '.services__button--next',
        prevEl: '.services__button--prev',
      },
    },
    someFunc
  );

  resizableSwiper(
    '(max-width: 475px)',
    '.services__slider',
    {
      // autoHeight: false,
      loop: false,
      // centeredSlides: false,
      speed: 1000,
      spaceBetween: 24,
      slidesPerView: 1,
      // slidesPerColumn: 2,
      // watchOverflow: true,
      // slidesPerGroup: 4,
      // Navigation arrows
      navigation: {
        nextEl: '.services__button--next',
        prevEl: '.services__button--prev',
      },

    },
    someFunc
  );
})

const loadsSlide = document.querySelector('.loads__slider');
const nextButton = document.querySelector('.loads__buttons');



if (loadsSlide) {
  const swiper = new Swiper('.loads__slider', {
    // Optional parameters
    loop: true,
    speed: 500,
    // autoHeight: false,
    centeredSlides: true,
    spaceBetween: 10,
    slidesPerView: 5,
    // slidesToScroll: 4,
    // slidesPerColumn: 2,
    centeredSlides: true,
    watchOverflow: true,
    // effect: 'fade',
    // slidesPerGroup: 2,
    slideShadows: true,
    // longSwipesRatio: 8,
    // effect: 'cube',
    // cubeEffect: {
    //   slideShadows: false,
    // },
    // effect: 'coverflow',
    // coverflowEffect: {
    //   rotate: 30,
    //   slideShadows: false,
    // },

    // Navigation arrows

    navigation: {
      nextEl: '.loads__button--next',
      prevEl: '.loads__button--prev',
    },


  });
}

// document.addEventListener('DOMContentLoaded', () => {
//   const hero = document.querySelector('.hero');
//   const header = document.querySelector('.header');
//   const scrollItems = document.querySelectorAll('.scroll-item');

//   window.addEventListener('scroll', () => {
//     let scrollTop = window.scrollY;
//     let heroCenter = hero.offsetHeight / 2;

//     if (scrollTop >= heroCenter) {
//       header.classList.add('fixed')
//       hero.style.marginTop = `${header.offsetHeight}px`;
//     } 
//     else {
//       header.classList.remove('fixed')
//       hero.style.marginTop = `0px`;
//     }
//   })

//   let windowCenter = (window.innerHeight / 2) + window.scrollY;
//   scrollItems.forEach(el => {
//     let scrollOffset = el.offsetTop + el.offsetHeight / 2;
//     if (windowCenter >= scrollOffset) {
//       el.classList.add('animation-class')
//     }
//     else {
//       el.classList.remove('animation-class')
//     }
//   });



//   window.addEventListener('scroll', () => {

//   })
// })

const title = document.querySelectorAll('.title');
const buttonRates = document.querySelector('.rates__button');
buttonRates.classList.add('element-animation');
title.forEach(el => {
  if (el.classList.contains('title')) {
    el.classList.add('element-animation');
  }

})


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
    else {
      change.target.classList.remove('element-show');
    }
  });
}

let options = {
  threshold: [0.5]
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}