// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Simon",
  middleName: "",
  lastName: "Zabrocki",
  message: " Helping organisations build the data solution they need. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/simonzabrocki",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/simon-zabrocki/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  //imageLink: require("../editable-stuff/simonzabrocki.jpeg"),
  imageSize: 375,
  message:
    "My name is Simon Zabrocki. I am a data scientist that graduated from two of Europe's top engineering institutions. Through experiences at a variety of organisations across the world I acquired skills covering the whole data science pipeline. Fluency in Python and R allows me to build data solutions including collection, processing, machine learning modeling, statistical analysis and visualization",
  resume: require("../editable-stuff/ZABROCKI_CV.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "simonzabrocki", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ['variational-models', 'GraphModels', 'GreenGrowthDownloader']
};



// Leadership SECTION
const leadership = {
  show: true,
  heading: "Portofolio",
  message:
    "From data vizualisation to state of the art machine learning modeling, my skills cover the full data science pipeline. Here are public examples of data science projects conducted over the past years. Click on the picture for more details.",
  images: [
    { 
      img: require("../editable-stuff/dashboard.png"), 
      label: "", 
      paragraph: "Green Growth Index and Simulation Tool" ,
      link: 'https://gggi-simtool-demo.herokuapp.com/'
    },
    { 
      img: require("../editable-stuff/variational_archi.png"), 
      label: "", 
      paragraph: "Research on Machine learning for Genetic risk prediction" ,
      link: 'https://drive.google.com/file/d/1RCdcSa3zsMey0W1eJd3eGr0CAPzXEEGz/view?usp=sharing'
    },
  ],
  imageSize: {
    width:"921",
    height:"350"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "R", value: 85 },
    { name: "SQL", value: 80 },
    { name: "Software engineering", value: 80},
    { name: "Machine learning", value: 90 },
    { name: "Data wrangling", value: 85 },
    { name: "Statistics", value: 85 },
    { name: "Data visualization", value: 80},
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Autonomy", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "Empathy", value: 80 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "For any inquiries, feel free to email me at",
  email: "simon.zabrocki@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Global Green Growth Institute, Data Scientist',// Here Add Company Name
      companylogo: require('../assets/img/GGGI.png'),
      date: 'July 2020 – Present',
    },
    {
      role: 'Hawa Dawa, Data Scientist',
      companylogo: require('../assets/img/hawadawa.png'),
      date: 'February 2020 – July 2020',
    },
    {
      role: 'Helmholtz Zentrum, Research student',
      companylogo: require('../assets/img/HMGU.jpg'),
      date: 'February 2020 – July 2020',
    },
    {
      role: 'Sanofi R&D, Data Scientist',
      companylogo: require('../assets/img/sanofi.png'),
      date: 'April 2019 – August 2019',
    },
    {
      role: 'Manatal, Python Developer',
      companylogo: require('../assets/img/manatal.png'),
      date: 'June 2018 – August 2018',
    },
    
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
