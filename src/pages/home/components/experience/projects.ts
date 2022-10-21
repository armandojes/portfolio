import smneMain from 'assets/projects/smne_home.png';
import witidealMain from 'assets/projects/witideal_main.png';
import imlMain from 'assets/projects/iml_main.png';
import feminnelifeMain from 'assets/projects/feminelife_main.png';
import adnMain from 'assets/projects/adn_main.png';
import scMain from 'assets/projects/sc_main.png';
import teatreritosMain from 'assets/projects/teatreritos_main.png';
import aybMain from 'assets/projects/ayb_main.png';

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
      'Developed by Mexican Society of Nutrition and Endocrinology A.C.',
      'The objective of this work tool is to be able to offer patients an efficient and timely diagnosis.',
    ],
    mainPicture: smneMain,
    url: 'https://smne-beta.web.app/',
    github: null,
  },
  {
    title: 'Witideal - Real estate portal',
    description: ['Digital real estate platform that connects people who want to buy or rent a house with people who want to rent or sell a house'],
    mainPicture: witidealMain,
    url: 'https://witideal.com',
    github: null,
  },
  {
    title: 'IML - Clinical and diagnostic analysis laboratory',
    description: ['Digital real estate platform that connects people who want to buy or rent a house with people who want to rent or sell a house'],
    mainPicture: imlMain,
    url: 'https://witideal.com',
    github: null,
  },
  {
    title: 'Feminelife',
    description: ['Digital real estate platform that connects people who want to buy or rent a house with people who want to rent or sell a house'],
    mainPicture: feminnelifeMain,
    url: 'https://witideal.com',
    github: null,
  },
  {
    title: 'Feminelife',
    description: ['Digital real estate platform that connects people who want to buy or rent a house with people who want to rent or sell a house'],
    mainPicture: adnMain,
    url: 'https://witideal.com',
    github: null,
  },
  {
    title: 'Feminelife',
    description: ['Digital real estate platform that connects people who want to buy or rent a house with people who want to rent or sell a house'],
    mainPicture: scMain,
    url: 'https://witideal.com',
    github: null,
  },
  {
    title: 'Teatreritos',
    description: ['Digital real estate platform that connects people who want to buy or rent a house with people who want to rent or sell a house'],
    mainPicture: aybMain,
    url: 'https://witideal.com',
    github: null,
  },
  {
    title: 'Artesanias y bordados',
    description: ['Digital real estate platform that connects people who want to buy or rent a house with people who want to rent or sell a house'],
    mainPicture: teatreritosMain,
    url: 'https://witideal.com',
    github: null,
  },
];

export default projects;
