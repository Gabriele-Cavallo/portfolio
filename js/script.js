const { createApp } = Vue;

createApp({
   data() {
        return {
            sections: [
                {
                    href: 'home',
                    title: 'HOME',
                },
                {
                    href: 'skills',
                    title: 'SKILLS',
                },
                {
                    href: 'my-repo',
                    title: 'MY REPO',
                },
                {
                    href: 'contact-me',
                    title: 'CONTACT ME',
                },
                {
                    href: 'my-hobbies',
                    title: 'MY HOBBIES',
                },
            ],
            skills: [
                {
                    instrument : 'HTML',
                    status: true,
                    logo: './img/html-5.png',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'High-level knowledge of the instrument and independent research ability for the expansion of skills.',
                    competents: [ 'tags block/inline','attributes','link','table','entity code', 'browser inspector'],
                },
                {
                    instrument : 'CSS',
                    status: true,
                    logo: './img/css-logo.png',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'High-level knowledge of the instrument and independent research ability for the expansion of skills.',
                    competents: [ 'flexbox', 'id/class','selectors', 'advanced selectors','border/margin/padding','display','elements inheritance', 'selectors specificity', 'vh / vw', 'media query'],
                },
                {
                    instrument : 'BOOTSTRAP',
                    status: true,
                    logo: './img/bootstrap-logo.png',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'High-level knowledge of the instrument and independent research ability for the expansion of skills.',
                    competents: [ 'layout', 'content','forms','components','helpers','utilities'],
                },
                {
                    instrument : 'JS',
                    status: true,
                    logo: './img/js-logo.png',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'Medium-level knowledge of the instrument and independent research ability for the expansion of skills.',
                    competents: [ 'variables', 'variables types', 'array', 'objects', 'functions/ arrow functions', 'scopes','cycle for/ while/ do while/ forEach','manipulation DOM elements','if/ else if/ else', 'comparison  operators', 'map/ filter', 'destructuring', 'spread/ rest'],
                },
                {
                    instrument : 'VUE-JS',
                    status: true,
                    logo: './img/vue-logo.png',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'Medium-level knowledge of the instrument and independent research ability for the expansion of skills.',
                    competents: [ 'text interpolation','manipulation DOM elements','data/ methods/ mounted','vue directives','DOM events', 'v-if/ v-for', 'Axios 0API calls'],
                },
                {
                    instrument : 'PYTHON',
                    status: false,
                    logo: './img/python-logo.png',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'Basic-level knowledge of the instrument and independent research ability for the expansion of skills.',
                    competents: [ 'variables','variables types','if/ elif/ else','and/ or/ not','cycle while/ break/ continue/ for', 'functions', 'lists', 'list methods'],
                },
                {
                    instrument : 'VITE',
                    status: true,
                    logo: './img/vite-logo.svg',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'Basic-level knowledge of the instrument and independent research ability for the expansion of skills.',
                    competents: [ 'components','state management (store.js)','import','lang=scss','SCSS variables/ mixins', '@use', 'props', '$emit', 'computed properties'],
                },
                {
                    instrument : 'NODE-JS',
                    status: false,
                    logo: './img/node-logo.png',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'What a mess!!!',
                    competents: [ 'prima','seconda','terza','quarta','quinta'],
                },
                {
                    instrument : 'SASS',
                    status: true,
                    logo: './img/sass-logo.png',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'High-level knowledge of the instrument and independent research ability for the expansion of skills.',
                    competents: [ 'syntax','style rules','variables','At-rules','values', 'operators'],
                },
                // {
                //     instrument : 'SWIPER',
                //     status: false,
                //     logo: './img/swiper-logo.svg',
                //     learned: 'rgb(3, 255, 3)',
                //     inProgress: 'red',
                //     description: 'Basic-level knowledge of the instrument and independent research ability for the expansion of skills.',
                //     competents: [ 'prima','seconda','terza','quarta','quinta'],
                // },
                {
                    instrument : 'PHP',
                    status: false,
                    logo: './img/php-logo.jpg',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'Basic-level knowledge of the instrument and independent research ability for the expansion of skills.',
                    competents: [ 'tag','$variables','echo','$_GET/ $_POST','form action/ method', 'array/ associative array', 'cycle for/ foreach', 'include/ require ( _DIR_ )', 'sessions'],
                },
                {
                    instrument : 'My-SQL',
                    status: false,
                    logo: './img/mysql-logo.png',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'Basic-level knowledge of the instrument and independent research ability for the expansion of skills.',
                    competents: [ 'prima','seconda','terza','quarta','quinta'],
                },
            ],
            myRepo: [
                {
                    projects: 'My Portfolio',
                    image: 'portfolio',
                    link: 'https://github.com/Gabriele-Cavallo/portfolio'
                },
                {
                    projects: 'Vanilla JS Carousel',
                    image: 'carousel',
                    link: 'https://github.com/Gabriele-Cavallo/carousel'
                },
                {
                    projects: 'Campo minato vue',
                    image: 'campo-minato',
                    link: 'https://github.com/Gabriele-Cavallo/campo-minato-vue'
                },
                {
                    projects: 'API Dragonball',
                    image: 'dragonball',
                    link: 'https://github.com/Gabriele-Cavallo/axios-dragonball'
                },
                {
                    projects: 'TO-DO List',
                    image: 'to-do',
                    link: 'https://github.com/Gabriele-Cavallo/to-do-list'
                },
                {
                    projects: 'Vue Todo List',
                    image: 'random-img',
                    link: 'https://github.com/Gabriele-Cavallo/'
                },
                {
                    projects: 'Boolzapp',
                    image: 'random-img',
                    link: 'https://github.com/Gabriele-Cavallo/'
                },
                {
                    projects: 'Campo minato vue',
                    image: 'random-img',
                    link: 'https://github.com/Gabriele-Cavallo/'
                },
                {
                    projects: 'Vue Slider',
                    image: 'random-img',
                    link: 'https://github.com/Gabriele-Cavallo/'
                },
            ],
            contactMe: [
                {
                    type: 'text',
                    placeholder: 'Full Name'
                },
                {
                    type: 'text',
                    placeholder: 'Email'
                },
                {
                    type: 'number',
                    placeholder: 'Phone Number'
                },
                {
                    type: 'text',
                    placeholder: 'Subject'
                },
            ],
            activeSection: 0,
            visible: false,
        };
    },
    methods: {
        selectSection(index){
            this.activeSection = index;
        },
        scrollChangeSection(index){
            this.activeSection = index;
        },
        openHamburgerMenu(){
            if(this.visible === false){
                this.visible = true;
            }else{
                this.visible = false;
            }
        },
    },
    mounted() {
        const swiper = new Swiper('.swiper', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            slidesPerView: 'auto',
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          });
    }
}).mount('#app');