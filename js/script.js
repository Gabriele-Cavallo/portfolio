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
            ],
            skills: [
                {
                    instrument : 'HTML',
                    status: true,
                    logo: './img/html-5.png',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'Medium-level basic knowledge of the instrument and independent research ability for the expansion of skills.',
                    competents: [ 'prima','seconda','terza','quarta','quinta'],
                },
                {
                    instrument : 'CSS',
                    status: true,
                    logo: './img/css-logo.png',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'Medium-level basic knowledge of the instrument and independent research ability for the expansion of skills.',
                    competents: [ 'prima','seconda','terza','quarta','quinta'],
                },
                {
                    instrument : 'BOOTSTRAP',
                    status: true,
                    logo: './img/bootstrap-logo.png',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'Medium-level basic knowledge of the instrument and independent research ability for the expansion of skills.',
                    competents: [ 'prima','seconda','terza','quarta','quinta'],
                },
                {
                    instrument : 'JS',
                    status: true,
                    logo: './img/js-logo.png',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'Medium-level basic knowledge of the instrument and independent research ability for the expansion of skills.',
                    competents: [ 'prima','seconda','terza','quarta','quinta'],
                },
                {
                    instrument : 'VUE-JS',
                    status: true,
                    logo: './img/vue-logo.png',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'Medium-level basic knowledge of the instrument and independent research ability for the expansion of skills.',
                    competents: [ 'prima','seconda','terza','quarta','quinta'],
                },
                {
                    instrument : 'PYTHON',
                    status: false,
                    logo: './img/python-logo.png',
                    learned: 'rgb(3, 255, 3)',
                    inProgress: 'red',
                    description: 'Basic-level knowledge of the instrument and independent research ability for the expansion of skills.',
                    competents: [ 'prima','seconda','terza','quarta','quinta'],
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
            ],
            myRepo: [
                {
                    projects: 'Boolzapp',
                    image: 'random-img',
                    link: 'https://github.com/Gabriele-Cavallo/vue-boolzapp'
                },
                {
                    projects: 'Campo minato vue',
                    image: 'random-img',
                    link: 'https://github.com/Gabriele-Cavallo/campo-minato-vue'
                },
                {
                    projects: 'Vue Slider',
                    image: 'random-img',
                    link: 'https://github.com/Gabriele-Cavallo/vue-slider'
                },
                {
                    projects: 'Vue Todo List',
                    image: 'random-img',
                    link: 'https://github.com/Gabriele-Cavallo/vue-todolist'
                },
                {
                    projects: 'Vue Slider',
                    image: 'random-img',
                    link: 'https://github.com/Gabriele-Cavallo/vue-slider'
                },
                {
                    projects: 'Vue Todo List',
                    image: 'random-img',
                    link: 'https://github.com/Gabriele-Cavallo/vue-todolist'
                },
                {
                    projects: 'Boolzapp',
                    image: 'random-img',
                    link: 'https://github.com/Gabriele-Cavallo/vue-boolzapp'
                },
                {
                    projects: 'Campo minato vue',
                    image: 'random-img',
                    link: 'https://github.com/Gabriele-Cavallo/campo-minato-vue'
                },
                {
                    projects: 'Vue Slider',
                    image: 'random-img',
                    link: 'https://github.com/Gabriele-Cavallo/vue-slider'
                },
                {
                    projects: 'Vue Todo List',
                    image: 'random-img',
                    link: 'https://github.com/Gabriele-Cavallo/vue-todolist'
                },
                {
                    projects: 'Vue Slider',
                    image: 'random-img',
                    link: 'https://github.com/Gabriele-Cavallo/vue-slider'
                },
                {
                    projects: 'Vue Todo List',
                    image: 'random-img',
                    link: 'https://github.com/Gabriele-Cavallo/vue-todolist'
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

    },
    mounted() {
    }
}).mount('#app');