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
  specificRepos: ['variational-models', 'GraphModels', 'skill-segmentation']
};



// Leadership SECTION
const leadership = {
  show: false,
  heading: "Portfolio",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/dashboard.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/simonzabrocki.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
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
    "For any inquiries, please feel free to email me at",
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