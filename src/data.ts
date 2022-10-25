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
import witidealSearcher from 'assets/projects/witideal_searcher.png';
import witidealPopularZones from 'assets/projects/witideal_popular_zones.png';
import witidealResults from 'assets/projects/witideal_results.png';
import witidealPropertyDetail from 'assets/projects/witideal_property_detail.png';
import witidealPublish from 'assets/projects/witideal_publish.png';
import witidealHowItWorks from 'assets/projects/witideal_how_it_works.png';
import witidealProfile from 'assets/projects/witideal_profile.png';
import witidealUpdateProfile from 'assets/projects/witideal_update_profile.png';
import witidealMain from 'assets/projects/witideal_main.png';
import witidealCover from 'assets/projects/witideal_cover.png';
import witidealApiMain from 'assets/projects/witidealapi_main.png';
import imlMain from 'assets/projects/iml_main.png';
import imlCover from 'assets/projects/iml_cover.png';
import imlStore from 'assets/projects/iml_store.png';
import imlProductDetail from 'assets/projects/iml_product_detail.png';
import imlNewAppointment from 'assets/projects/iml_register_a_new_appointment.png';
import imlForCompnies from 'assets/projects/iml_for_companies.png';
import imlBranches from 'assets/projects/iml_branches_list.png';
import imlbranchManeger from 'assets/projects/iml_branch_manager.png';
import imlHoursControl from 'assets/projects/iml_hours.png';
import imlAppointmentsList from 'assets/projects/iml_appointments_list.png';
import imlEmployeesList from 'assets/projects/iml_employees_list.png';
import feminnelifeMain from 'assets/projects/feminelife_main.png';
import feminnelifeCover from 'assets/projects/feminnelife_cover.png';
import feminnelife1 from 'assets/projects/feminnelife_1.png';
import feminnelife2 from 'assets/projects/feminnelife_2.png';
import feminnelife3 from 'assets/projects/feminnelife_3.png';
import feminnelife4 from 'assets/projects/feminnelife_4.png';
import feminnelife5 from 'assets/projects/feminnelife_5.png';
import feminnelife6 from 'assets/projects/feminnelife_6.png';
import feminnelife7 from 'assets/projects/feminnelife_7.png';
import feminnelife8 from 'assets/projects/feminnelife_8.png';
import feminnelife9 from 'assets/projects/feminnelife_9.png';
import adnMain from 'assets/projects/adn_main.png';
import adnCover from 'assets/projects/adn_cover.png';
import adn1 from 'assets/projects/adn_1.png';
import adn2 from 'assets/projects/adn_2.png';
import adn3 from 'assets/projects/adn_3.png';
import adn4 from 'assets/projects/adn_4.png';
import adn5 from 'assets/projects/adn_5.png';
import adn6 from 'assets/projects/adn_6.png';
import adn7 from 'assets/projects/adn_7.png';
import scMain from 'assets/projects/sc_main.png';
import scCover from 'assets/projects/st_cover.png';
import sc1 from 'assets/projects/sc_1.png';
import sc2 from 'assets/projects/sc_2.png';
import sc3 from 'assets/projects/sc_3.png';
import sc4 from 'assets/projects/sc_4.png';
import sc5 from 'assets/projects/sc_5.png';
import sc6 from 'assets/projects/sc_6.png';

import aybMain from 'assets/projects/ayb_main.png';
import aybCover from 'assets/projects/ayb_cover.png';
import ayb1 from 'assets/projects/ayb_1.png';
import ayb2 from 'assets/projects/ayb_2.png';
import ayb3 from 'assets/projects/ayb_3.png';
import ayb4 from 'assets/projects/ayb_4.png';
import ayb5 from 'assets/projects/ayb_5.png';
import ayb6 from 'assets/projects/ayb_6.png';
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
      { label: 'Panel for doctors', picture: smenPanel },
      { label: 'Patient manager', picture: smenPatients },
      { label: 'Create a new patient', picture: smenCreatePatint },
      { label: 'Treatment generated', picture: smenTreatment },
      { label: 'Algorithm for consult ', picture: smenAlgoritm },
      { label: 'Collaborators directory', picture: smenTeam },
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
    screenshots: [
      { label: 'Properties searcher', picture: witidealSearcher },
      { label: 'Property list', picture: witidealResults },
      { label: 'Popular zones', picture: witidealPopularZones },
      { label: 'Property detail', picture: witidealPropertyDetail },
      { label: 'Publish new Property', picture: witidealPublish },
      { label: 'How it works', picture: witidealHowItWorks },
      { label: 'User profile', picture: witidealProfile },
      { label: 'Update user profile', picture: witidealUpdateProfile },
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
    url: 'https://iml.vercel.app/landing',
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
    screenshots: [
      { label: 'label here', picture: imlStore },
      { label: 'label here', picture: imlProductDetail },
      { label: 'label here', picture: imlNewAppointment },
      { label: 'label here', picture: imlForCompnies },
      { label: 'label here', picture: imlBranches },
      { label: 'label here', picture: imlbranchManeger },
      { label: 'label here', picture: imlHoursControl },
      { label: 'label here', picture: imlAppointmentsList },
      { label: 'label here', picture: imlEmployeesList },
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
    screenshots: [
      { label: 'label here', picture: feminnelife1 },
      { label: 'label here', picture: feminnelife2 },
      { label: 'label here', picture: feminnelife3 },
      { label: 'label here', picture: feminnelife4 },
      { label: 'label here', picture: feminnelife5 },
      { label: 'label here', picture: feminnelife6 },
      { label: 'label here', picture: feminnelife7 },
      { label: 'label here', picture: feminnelife8 },
      { label: 'label here', picture: feminnelife9 },
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
    screenshots: [
      { label: 'label here', picture: adn1 },
      { label: 'label here', picture: adn2 },
      { label: 'label here', picture: adn3 },
      { label: 'label here', picture: adn4 },
      { label: 'label here', picture: adn5 },
      { label: 'label here', picture: adn6 },
      { label: 'label here', picture: adn7 },
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
    screenshots: [
      { label: 'label', picture: sc1 },
      { label: 'label', picture: sc2 },
      { label: 'label', picture: sc3 },
      { label: 'label', picture: sc4 },
      { label: 'label', picture: sc5 },
      { label: 'label', picture: sc6 },
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
    screenshots: [
      { label: 'label here', picture: ayb1 },
      { label: 'label here', picture: ayb2 },
      { label: 'label here', picture: ayb3 },
      { label: 'label here', picture: ayb4 },
      { label: 'label here', picture: ayb5 },
      { label: 'label here', picture: ayb6 },
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
