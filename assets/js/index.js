window.addEventListener('alpine:init', function () {
  class App {
    constructor() {
      this.initApp();
      this.whatICanDo();
      this.recentProjects();
    }

    initApp() {
      Alpine.data('app', () => ({
        init() {
          new WOW().init();
        },
      }));
    }

    whatICanDo() {
      Alpine.data('whaticando', () => ({
        data: [
          {
            icon: 'fab fa-react',
            title: 'frontend web development',
            text: 'I can do a frontend web development for you, i am familiar with some frontend tools like react, next, tailwind, and sass.',
          },
          {
            icon: 'fab fa-free-code-camp',
            title: 'web development',
            text: 'Beside that i can use some backend frameworks too to build webs that need CRUD functionality, i use Codeignter or Laravel to handle this.',
          },
          {
            icon: 'fa fa-mobile-alt',
            title: 'mobile development',
            text: 'I can do a mobile development also using React Native framework such as a framework for developing mobile apps.',
          },
        ],
      }));
    }

    recentProjects() {
      Alpine.data('recentprojects', () => ({
        web: [
          {
            title: 'Malasngitung.com, a Calculator',
            text: 'A Calculator app with PWA support',
            link: 'https://malasngitung.netlify.com/',
            img: 'web/1.png',
            stacks: ['html', 'sass', 'tailwind'],
          },
          {
            title: 'Bagi-ilmu.com, CPNS web portal',
            text: 'A Company static website for CPNS (Indonesian Civil Servant).',
            link: 'https://bagi-ilmu.com/',
            img: 'web/2.png',
            stacks: ['html', 'sass', 'tailwind'],
          },
          {
            title: 'Kompetisi SKD',
            text: 'A Company static website for SKD Competition.',
            link: 'https://kompetisi-skd.netlify.com/',
            img: 'web/3.png',
            stacks: ['html', 'vue cdn', 'tailwind'],
          },
          {
            title: 'Undig.id',
            text: 'A Wedding Invitation website.',
            link: 'https://undig.id/',
            img: 'web/4.png',
            stacks: ['next.js', 'tailwind'],
          },
        ],
        android: [
          {
            title: 'Sitasi kaprodi',
            text: 'A Final Project Management for University',
            link: '#',
            img: 'android/1.jpeg',
            stacks: ['react native', 'osmicsx', 'javascript'],
          },
        ],
      }));
    }
  }

  new App();
});
