import smneMain from 'assets/projects/smne_home.png';
import smneCover from 'assets/projects/smne_cover.png';
import smenLogin from 'assets/projects/smne_login.png';
import smenRegister from 'assets/projects/smne_register.png';
import smenPatients from 'assets/projects/smne_patients.png';
import smenPanel from 'assets/projects/smne_panel.png';
import smenCreatePatint from 'assets/projects/smne_create_patient.png';
import smenTreatment from 'assets/projects/smne_treatment.png';
import smenAlgoritm from 'assets/projects/smne_algoritm.png';
import smenTeam from 'assets/projects/smne_team.png';

import witidealMain from 'assets/projects/witideal_main.png';
import witidealCover from 'assets/projects/witideal_cover.png';
import witidealApiMain from 'assets/projects/witidealapi_main.png';
import imlMain from 'assets/projects/iml_main.png';
import imlCover from 'assets/projects/iml_cover.png';
import feminnelifeMain from 'assets/projects/feminelife_main.png';
import feminnelifeCover from 'assets/projects/feminnelife_cover.png';
import adnMain from 'assets/projects/adn_main.png';
import adnCover from 'assets/projects/adn_cover.png';
import scMain from 'assets/projects/sc_main.png';
import scCover from 'assets/projects/st_cover.png';
import aybMain from 'assets/projects/ayb_main.png';
import aybCover from 'assets/projects/ayb_cover.png';
import shfMain from 'assets/projects/shf_main.png';
import rfsMain from 'assets/projects/rfs_main.png';
import getIcon from 'helpers/getIcon';

interface ProjectsType {
  title: string,
  description: Array<string>,
  mainPicture: string,
  url: string,
  github: string | null,
  cover?: string | null,
  type: 'package' | 'project',
  technicalDetails?: Array<string> | null,
  libraries?: Array<{
    label: string,
    icon: string,
  }> | null,
  screenshots?: Array<{
    label: string,
    picture: string,
  }> | null,
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
    cover: smneCover,
    type: 'project',
    technicalDetails: [
      'Interfaces built with React and Material-UI',
      'Logic and states developed with redux',
      'Support for multiple devices (Responsive)',
      'Develpment based on component',
      'Latest version of JavaScript transpile with babel and webpack',
      'Database in firebase firestore',
      'Google cloud functons for backend (nodeJs)',
    ],
    libraries: [
      { icon: getIcon('javascript'), label: 'JavaScript' },
      { icon: getIcon('firebase'), label: 'Firebase' },
      { icon: getIcon('node'), label: 'NodeJs' },
      { icon: getIcon('react'), label: 'ReactJs' },
      { icon: getIcon('reactRouter'), label: 'React Router' },
      { icon: getIcon('redux'), label: 'Redux' },
      { icon: getIcon('materialUi'), label: 'Material UI' },
      { icon: getIcon('styledComponents'), label: 'Styled Components' },
      { icon: getIcon('typescript'), label: 'Typescript' },
      { icon: getIcon('jwt'), label: 'Json web tokens' },
      { icon: getIcon('json'), label: 'Json' },
      { icon: getIcon('html'), label: 'Html' },
      { icon: getIcon('css'), label: 'Css' },
    ],
    screenshots: [
      { label: 'Login', picture: smenLogin },
      { label: 'Register', picture: smenRegister },
      { label: 'Panel for doctor', picture: smenPanel },
      { label: 'Patients Manager', picture: smenPatients },
      { label: 'Create a new patient', picture: smenCreatePatint },
      { label: 'Treatment generated', picture: smenTreatment },
      { label: 'Algorithm for consult', picture: smenAlgoritm },
      { label: 'Team', picture: smenTeam },
    ],
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
    cover: witidealCover,
    type: 'project',
    technicalDetails: [
      'Interfaces built with React and Material-UI',
      'Support for multiple devices (Responsive)',
      'Support for signing in with Google',
      'Support for online payments via PayPal and Openpay',
      'Develpment based on component',
      'Latest version of JavaScript transpile with babel and webpack',
      'Database in firebase firestore',
      'Google cloud functons for backend (nodeJs)',
    ],
    libraries: [
      { icon: getIcon('javascript'), label: 'JavaScript' },
      { icon: getIcon('firebase'), label: 'Firebase' },
      { icon: getIcon('node'), label: 'NodeJs' },
      { icon: getIcon('react'), label: 'ReactJs' },
      { icon: getIcon('reactRouter'), label: 'React Router' },
      { icon: getIcon('materialUi'), label: 'Material UI' },
      { icon: getIcon('styledComponents'), label: 'Styled Components' },
      { icon: getIcon('jwt'), label: 'Json web tokens' },
      { icon: getIcon('json'), label: 'Json' },
      { icon: getIcon('html'), label: 'Html' },
      { icon: getIcon('css'), label: 'Css' },
    ],
  },
  {
    title: 'Witideal for developers - Pubic API',
    description: ['Witideal for developers is a public API to allow all other real estate companies to connect their systems with Witideal'],
    mainPicture: witidealApiMain,
    url: 'https://witideal-docs.vercel.app/',
    github: null,
    type: 'project',
    technicalDetails: [
      'Developed upon google cloud functions',
      'Json web tokens for authentication',
      'Latest version of JavaScript transpile with babel and webpack',
      'Database in firebase firestore',
    ],
    libraries: [
      { icon: getIcon('javascript'), label: 'JavaScript' },
      { icon: getIcon('express'), label: 'express' },
      { icon: getIcon('firebase'), label: 'Firebase' },
      { icon: getIcon('node'), label: 'NodeJs' },
      { icon: getIcon('typescript'), label: 'Typescript' },
      { icon: getIcon('jwt'), label: 'Json web tokens' },
      { icon: getIcon('json'), label: 'Json' },
    ],
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
    cover: imlCover,
    type: 'project',
    technicalDetails: [
      'Interfaces built with React and Material-UI',
      'Logic and states developed with redux',
      'Support for online payments via PayPal and Openpay',
      'Support for multiple devices (Responsive)',
      'Develpment based on component',
      'Latest version of JavaScript transpile with babel and webpack',
      'Database in firebase firestore',
      'Google cloud functons for backend (nodeJs)',
    ],
    libraries: [
      { icon: getIcon('javascript'), label: 'JavaScript' },
      { icon: getIcon('firebase'), label: 'Firebase' },
      { icon: getIcon('node'), label: 'NodeJs' },
      { icon: getIcon('react'), label: 'ReactJs' },
      { icon: getIcon('reactRouter'), label: 'React Router' },
      { icon: getIcon('redux'), label: 'Redux' },
      { icon: getIcon('materialUi'), label: 'Material UI' },
      { icon: getIcon('styledComponents'), label: 'Styled Components' },
      { icon: getIcon('typescript'), label: 'Typescript' },
      { icon: getIcon('jwt'), label: 'Json web tokens' },
      { icon: getIcon('json'), label: 'Json' },
      { icon: getIcon('html'), label: 'Html' },
      { icon: getIcon('css'), label: 'Css' },
    ],
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
    cover: feminnelifeCover,
    type: 'project',
    technicalDetails: [
      'Interfaces built with React and Material-UI',
      'Logic and states developed with redux',
      'Support for multiple devices (Responsive)',
      'Support for online payments via PayPal and Openpay',
      'Develpment based on component',
      'Latest version of JavaScript transpile with babel and webpack',
      'Database in firebase firestore',
      'Real-time chat via firestore',
      'Google cloud functons for backend (nodeJs)',
    ],
    libraries: [
      { icon: getIcon('javascript'), label: 'JavaScript' },
      { icon: getIcon('firebase'), label: 'Firebase' },
      { icon: getIcon('node'), label: 'NodeJs' },
      { icon: getIcon('react'), label: 'ReactJs' },
      { icon: getIcon('reactRouter'), label: 'React Router' },
      { icon: getIcon('materialUi'), label: 'Material UI' },
      { icon: getIcon('styledComponents'), label: 'Styled Components' },
      { icon: getIcon('jwt'), label: 'Json web tokens' },
      { icon: getIcon('json'), label: 'Json' },
      { icon: getIcon('html'), label: 'Html' },
      { icon: getIcon('css'), label: 'Css' },
    ],
  },
  {
    title: 'Northern steakhouses - Ecommerce and steakhouses builder',
    description: ['A personalized online store with functions for you to build your own custom grills by choosing each of its parts, Asadores del Norte is the largest seller of grills.'],
    mainPicture: adnMain,
    url: 'https://asadoresdelnorte.com/',
    github: null,
    cover: adnCover,
    type: 'project',
    technicalDetails: [
      'Interfaces built with React and Material-UI',
      'Logic and states developed with redux',
      'Support for online payments via PayPal and Openpay',
      'Support for multiple devices (Responsive)',
      'Develpment based on component',
      'Latest version of JavaScript transpile with babel and webpack',
      'Database in firebase firestore',
      'Google cloud functons for backend (nodeJs)',
    ],
    libraries: [
      { icon: getIcon('javascript'), label: 'JavaScript' },
      { icon: getIcon('firebase'), label: 'Firebase' },
      { icon: getIcon('node'), label: 'NodeJs' },
      { icon: getIcon('react'), label: 'ReactJs' },
      { icon: getIcon('reactRouter'), label: 'React Router' },
      { icon: getIcon('redux'), label: 'Redux' },
      { icon: getIcon('materialUi'), label: 'Material UI' },
      { icon: getIcon('styledComponents'), label: 'Styled Components' },
      { icon: getIcon('jwt'), label: 'Json web tokens' },
      { icon: getIcon('json'), label: 'Json' },
      { icon: getIcon('html'), label: 'Html' },
      { icon: getIcon('css'), label: 'Css' },
    ],
  },
  {
    title: 'Santa cruz - Ecormmerce and recipe portal',
    description: ['A personalized online store for the largest seller of bakery raw materials and a portal for cake preparation recipes.'],
    mainPicture: scMain,
    url: 'https://mitiendasantacruz.com/',
    github: null,
    cover: scCover,
    type: 'project',
    technicalDetails: [
      'Interfaces built with React and Material-UI',
      'Logic and states developed with redux',
      'Support for online payments via PayPal and Openpay',
      'Support for multiple devices (Responsive)',
      'Develpment based on component',
      'Latest version of JavaScript transpile with babel and webpack',
      'Database in firebase firestore',
      'Google cloud functons for backend (nodeJs)',
    ],
    libraries: [
      { icon: getIcon('javascript'), label: 'JavaScript' },
      { icon: getIcon('firebase'), label: 'Firebase' },
      { icon: getIcon('node'), label: 'NodeJs' },
      { icon: getIcon('react'), label: 'ReactJs' },
      { icon: getIcon('reactRouter'), label: 'React Router' },
      { icon: getIcon('redux'), label: 'Redux' },
      { icon: getIcon('materialUi'), label: 'Material UI' },
      { icon: getIcon('styledComponents'), label: 'Styled Components' },
      { icon: getIcon('jwt'), label: 'Json web tokens' },
      { icon: getIcon('json'), label: 'Json' },
      { icon: getIcon('html'), label: 'Html' },
      { icon: getIcon('css'), label: 'Css' },
    ],
  },
  {
    title: 'Artesanias y bordados - Ecommerce',
    description: ['"Handicrafts and embroidery" was born to promote our artisans, promoting genuine Chiapas popular art, with the promotion and dissemination inside and outside their spaces.'],
    mainPicture: aybMain,
    url: 'https://artstest.vercel.app/',
    github: null,
    cover: aybCover,
    type: 'project',
    technicalDetails: [
      'Interfaces built with React and Material-UI',
      'Logic and states developed with redux',
      'Support for online payments via PayPal and Openpay',
      'Support for multiple devices (Responsive)',
      'Develpment based on component',
      'Latest version of JavaScript transpile with babel and webpack',
      'Database in firebase firestore',
      'Google cloud functons for backend (nodeJs)',
      'Support for signing in with Google and Facebook',
    ],
    libraries: [
      { icon: getIcon('javascript'), label: 'JavaScript' },
      { icon: getIcon('firebase'), label: 'Firebase' },
      { icon: getIcon('node'), label: 'NodeJs' },
      { icon: getIcon('react'), label: 'ReactJs' },
      { icon: getIcon('reactRouter'), label: 'React Router' },
      { icon: getIcon('redux'), label: 'Redux' },
      { icon: getIcon('materialUi'), label: 'Material UI' },
      { icon: getIcon('styledComponents'), label: 'Styled Components' },
      { icon: getIcon('jwt'), label: 'Json web tokens' },
      { icon: getIcon('json'), label: 'Json' },
      { icon: getIcon('html'), label: 'Html' },
      { icon: getIcon('css'), label: 'Css' },
    ],
  },
  {
    title: 'simple-hook-form Library for managing forms in ReactJs',
    description: ['Simple-hook-form is a small, simple and robust library for handling forms in ReactJs, it abstracts away complexities and reduces boilerplate code.'],
    mainPicture: shfMain,
    url: 'https://simple-hook-form.vercel.app/',
    github: null,
    type: 'package',
  },
  {
    title: 'react-fetch-ssr A simple library for ReactJs for Server-Side-Render',
    description: ['react-fetch-ssr is a simple and lightweight library for creating isomorphic web applications, it is not a full development framework like NextJs or Gatsby, it\'s the core of SSR'],
    mainPicture: rfsMain,
    url: 'https://www.npmjs.com/package/react-fetch-ssr',
    github: 'https://github.com/armandojes/react-fetch-ssr',
    type: 'package',
  },
];

export default projects;
