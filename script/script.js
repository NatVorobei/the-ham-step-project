//Our Services
let tabTitle = document.querySelectorAll('.tabs-title');
let tabContent = document.querySelectorAll('.tab-content');

for(let item of tabTitle){
    item.addEventListener('click', function(){
        for(let el of tabContent){
            el.classList.add('hidden');
        }
    
    let content = document.querySelector('#' + item.dataset.tab);
    content.classList.remove('hidden');

    tabTitle.forEach(elem => {
        elem.classList.remove('active');
    })
    this.classList.add('active');

});
}

//Our Amazing Work
let categories = document.querySelectorAll('.category_btn');
let loading = document.querySelectorAll('.load');

categories.forEach((category) => {
    category.addEventListener('click', (e) => {
        e.preventDefault();

        let filter = e.target.dataset.filter;
        const tiles = document.querySelector('#category_items').querySelectorAll('.category_item');

        tiles.forEach((item) => {
            if(filter === 'all'){
                item.style.display = 'block';
            } else if(item.classList.contains(filter)){
                item.style.display = 'block'; 
            } else {
                item.style.display = 'none';
            }
        })


    })
});


let loadBtn = document.querySelector('.load_btn');

function loadingImages(){

    const tiles = [
        {
            category: 'gdesign',
            image: './images/graphic design/graphic-design4.jpg',
            imageAlt: 'gdesign',
            title: 'CREATE DESIGN',
            subTitle: 'Graphic design'
        },
        {
            category: 'wdesign',
            image: './images/web design/web-design4.jpg',
            imageAlt: 'wdesign',
            title: 'CREATE DESIGN',
            subTitle: 'Web design'
        },
        {
            category: 'landing',
            image: './images/landing page/landing-page4.jpg',
            imageAlt: 'landing',
            title: 'CREATE DESIGN',
            subTitle: 'Landing Pages'
        },
        {
            category: 'wordpress',
            image: './images/wordpress/wordpress4.jpg',
            imageAlt: 'wordpress',
            title: 'CREATE DESIGN',
            subTitle: 'Wordpress'
        },
        {
            category: 'gdesign',
            image: './images/graphic design/graphic-design5.jpg',
            imageAlt: 'gdesign',
            title: 'CREATE DESIGN',
            subTitle: 'Graphic design'
        },
        {
            category: 'wdesign',
            image: './images/web design/web-design5.jpg',
            imageAlt: 'wdesign',
            title: 'CREATE DESIGN',
            subTitle: 'Web design'
        },
        {
            category: 'landing',
            image: './images/landing page/landing-page5.jpg',
            imageAlt: 'landing',
            title: 'CREATE DESIGN',
            subTitle: 'Landing Pages'
        },
        {
            category: 'wordpress',
            image: './images/wordpress/wordpress5.jpg',
            imageAlt: 'wordpress',
            title: 'CREATE DESIGN',
            subTitle: 'Wordpress'
        },
        {
            category: 'gdesign',
            image: './images/graphic design/graphic-design6.jpg',
            imageAlt: 'gdesign',
            title: 'CREATE DESIGN',
            subTitle: 'Graphic design'
        },
        {
            category: 'wdesign',
            image: './images/web design/web-design6.jpg',
            imageAlt: 'wdesign',
            title: 'CREATE DESIGN',
            subTitle: 'Web design'
        },
        {
            category: 'landing',
            image: './images/landing page/landing-page6.jpg',
            imageAlt: 'landing',
            title: 'CREATE DESIGN',
            subTitle: 'Landing Pages'
        },
        {
            category: 'wordpress',
            image: './images/wordpress/wordpress6.jpg',
            imageAlt: 'wordpress',
            title: 'CREATE DESIGN',
            subTitle: 'Wordpress'
        },
        
    ];

        loadBtn.style.display = 'none';

        tiles.forEach((tile) => {
            let divEl = document.createElement('div');
            let html = `<div class="category_item ${tile.category}">
                <img class="category_img" src="${tile.image}" alt="${tile.imageAlt}">
                <div class="overlay overlayFade">
                    <div class="icon_hover">
                    <a class="link_hover" href="#">
                    <img class="icon" src="./images/icon_1.png">                               
                    </a>
                        <p class="icon_title">${tile.title}</p>
                        <p class="icon_subtitle">${tile.subTitle}</p>
                    </div>
                </div>
            </div>`;

            divEl.innerHTML = html;

            document.querySelector('#category_items').append(divEl);

        });
        
}

loadBtn.addEventListener('click', loadingImages);

//Slider

let previousBtn = document.querySelector('.previous_btn');
let nextBtn = document.querySelector('.next_btn');

let cards = document.querySelectorAll('.card_slider');
let carouselItems = document.querySelectorAll('.carousel_img');

let totalSlides = cards.length;
let currentSlide = 0;
let nextSlide = 0;

function updateSlide(plusSlide) {
    cards[currentSlide].classList.remove('active');
    carouselItems[currentSlide].classList.remove('active_img');

    cards[plusSlide].classList.add('active');
    carouselItems[plusSlide].classList.add('active_img');

    currentSlide = plusSlide;
}

previousBtn.addEventListener('click', moveToPrevSlide);
nextBtn.addEventListener('click', moveToNextSlide);

function moveToPrevSlide() {
    if (currentSlide === 0) {
        nextSlide = totalSlides - 1
    } else {
        nextSlide = currentSlide - 1;
    }
    updateSlide(nextSlide);
}

function moveToNextSlide() {
    if (currentSlide === totalSlides - 1) {
        nextSlide = 0;
    } else {
        nextSlide = currentSlide + 1;
    }
    updateSlide(nextSlide);
}

carouselItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        updateSlide(index);
    })
})

// Header menu burger
const burger = document.querySelector('.header_burger');
const menu = document.querySelector('.menu');
const overlayBg = document.querySelector('.header_overlay');

function burgerToggle(){
        burger.classList.toggle('active_menu');
        menu.classList.toggle('active_menu');
        overlayBg.classList.toggle('active_overlay');
        document.body.classList.toggle('lock');
}

burger.addEventListener('click', burgerToggle);

document.addEventListener('click', function(event) {
        const click = event.composedPath().includes(burger) || event.composedPath().includes(menu);
        if (!click) {
                menu.classList.remove('active_menu');
                burger.classList.remove('active_menu');
                overlayBg.classList.remove('active_overlay');
                document.body.classList.remove('lock');
        }
})

//ScrollUP Button
const topBtn = document.querySelector('.top_button');
const scrollTo = (start) => {
    const section = document.querySelector(start);
    const coord = section.offsetTop === 0 ? window.scrollY - Math.abs(section.getBoundingClientRect().top) - 80 : section.offsetTop - 80
    window.scrollTo({ top: coord, behavor: 'smooth' });
};

window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});

topBtn.addEventListener('click', () => scrollTo('body'));
