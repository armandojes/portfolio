import smneMain from 'assets/projects/smne_home.png';
import witidealMain from 'assets/projects/witideal_main.png';
import witidealApiMain from 'assets/projects/witidealapi_main.png';
import imlMain from 'assets/projects/iml_main.png';
import feminnelifeMain from 'assets/projects/feminelife_main.png';
import adnMain from 'assets/projects/adn_main.png';
import scMain from 'assets/projects/sc_main.png';
import aybMain from 'assets/projects/ayb_main.png';
import shfMain from 'assets/projects/shf_main.png';
import rfsMain from 'assets/projects/rfs_main.png';

interface ProjectsType {
  title: string,
  description: Array<string>,
  mainPicture: string,
  url: string,
  github: string | null,
}

const projects: Array<ProjectsType> = [
  {
    title: 'Algorithms for the pharmacological treatment of hyperglycemia in type 2 diabetes',
    description: [
      'Algorithm for the treatment of patients with type 2 diabetes',
      'This tool helps non-endocrinologists doctors treat patients with type 2 diabetes efficiently, so patients are diagnosed and treated in a timely manner.',
    ],
    mainPicture: smneMain,
    url: 'https://smne-beta.web.app/',
    github: null,
  },
  {
    title: 'Witideal - Real estate portal',
    description: [
      'Digital real estate platform that connects people who want to buy or rent a house with people who want to rent or sell a house',
      'Anyone can post property for selling or renting and anyone can search properties for renting or buying',
    ],
    mainPicture: witidealMain,
    url: 'https://witideal.com',
    github: null,
  },
  {
    title: 'Witideal for developers - Pubic API',
    description: ['Witideal for developers is a public API to allow all other real estate companies to connect their systems with Witideal'],
    mainPicture: witidealApiMain,
    url: 'https://witideal-docs.vercel.app/',
    github: null,
  },
  {
    title: 'IML Clinical and diagnostic analysis laboratory',
    description: [
      'A digital platform to manage medical appointments, online payments, branches and medical personnel.',
      'This tool allows IML to manage all its operations in one place in a safe and efficient way.',
    ],
    mainPicture: imlMain,
    url: 'https://iml-empresas.web.app/',
    github: null,
  },
  {
    title: 'Feminelife - Ecommerce and digital gym',
    description: [
      'A virtual gym with virtual instructors where each person is guided to complete their exercise routine through videos and chat in real time',
      'Feminine Life aims to motivate and guide women to have a better quality of life through physical activity and sports',
    ],
    mainPicture: feminnelifeMain,
    url: 'https://feminnelife.com/',
    github: null,
  },
  {
    title: 'Northern steakhouses - Ecommerce and steakhouses builder',
    description: ['A personalized online store with functions for you to build your own custom grills by choosing each of its parts, Asadores del Norte is the largest seller of grills.'],
    mainPicture: adnMain,
    url: 'https://asadoresdelnorte.com/',
    github: null,
  },
  {
    title: 'Santa cruz - Ecormmerce and recipe portal',
    description: ['A personalized online store for the largest seller of bakery raw materials and a portal for cake preparation recipes.'],
    mainPicture: scMain,
    url: 'https://mitiendasantacruz.com/',
    github: null,
  },
  {
    title: 'Artesanias y bordados - Ecommerce',
    description: ['"Handicrafts and embroidery" was born to promote our artisans, promoting genuine Chiapas popular art, with the promotion and dissemination inside and outside their spaces.'],
    mainPicture: aybMain,
    url: 'https://artstest.vercel.app/',
    github: null,
  },
  {
    title: 'simple-hook-form Library for managing forms in ReactJs',
    description: ['Simple-hook-form is a small, simple and robust library for handling forms in ReactJs, it abstracts away complexities and reduces boilerplate code.'],
    mainPicture: shfMain,
    url: 'https://simple-hook-form.vercel.app/',
    github: null,
  },
  {
    title: 'react-fetch-ssr A simple library for ReactJs for Server-Side-Render',
    description: ['react-fetch-ssr is a simple and lightweight library for creating isomorphic web applications, it is not a full development framework like NextJs or Gatsby, it\'s the core of SSR'],
    mainPicture: rfsMain,
    url: 'https://www.npmjs.com/package/react-fetch-ssr',
    github: 'https://github.com/armandojes/react-fetch-ssr',
  },
];

export default projects;
