const myProjects = [
  {
    id:'project01',
    name:'Projeto 01 - Lessons Learned',
    dataDaEntrega: '25/11/2020',
    dataDaVersao: '06/12/2020',
    repoLink: 'https://github.com/tryber/sd-09-project-lessons-learned/pull/9',
    readMeLink: 'https://github.com/tryber/sd-09-project-lessons-learned',
  },
  {
    id:'project02',
    name:'Project 02 - Playground Functions',
    dataDaEntrega: '01/12/2020',
    dataDaVersao: '01/12/2020',
    repoLink: 'https://github.com/tryber/sd-09-project-playground-functions/pull/5',
    readMeLink: 'https://github.com/tryber/sd-09-project-playground-functions',
  },
  {
    id:'project03',
    name:'Projeto 03 - Pixel Art',
    dataDaEntrega: '09/12/2020',
    dataDaVersao: '10/12/2020',
    repoLink: 'https://github.com/tryber/sd-09-project-pixels-art/pull/6',
    readMeLink: 'https://github.com/tryber/sd-09-project-pixels-art',
  },
  {
    id:'project04',
    name:'Project 04 - To do List',
    dataDaEntrega: '10/12/2020',
    dataDaVersao: '10/12/2020',
    repoLink: 'https://github.com/tryber/sd-09-project-todo-list/pull/2',
    readMeLink: 'https://github.com/tryber/sd-09-project-todo-list/',
  },
  {
    id:'project05',
    name:'Projeto 05 - Meme Generator',
    dataDaEntrega: '10/12/2020',
    dataDaVersao: '11/12/2020',
    repoLink: 'https://github.com/tryber/sd-09-project-meme-generator/pull/3',
    readMeLink: 'https://github.com/tryber/sd-09-project-meme-generator/',
  },
  {
    id:'project06',
    name:'Projeto 06 - Color Guess',
    dataDaEntrega: '16/12/2020	',
    dataDaVersao: '16/12/2020',
    repoLink: 'https://github.com/tryber/sd-09-project-color-guess/pull/10',
    readMeLink: 'https://github.com/tryber/sd-09-project-color-guess/',
  },
  {
    id:'project07',
    name:'Projeto 07 - Mystery Letter',
    dataDaEntrega: '25/12/2020',
    dataDaVersao: '30/12/2020',
    repoLink: 'https://github.com/tryber/sd-09-project-mistery-letter/pull/17',
    readMeLink: 'https://github.com/tryber/sd-09-project-mistery-letter/',
  },
  {
    id:'project08',
    name:'Projeto 08 - em dupla - Facebook Signup',
    dataDaEntrega: '11/01/2021',
    dataDaVersao: '12/01/2021',
    repoLink: 'https://github.com/tryber/sd-09-project-facebook-signup/pull/4',
    readMeLink: 'https://github.com/tryber/sd-09-project-facebook-signup/',
  },
  {
    id:'project09',
    name:'Projeto 09 - Unit Tests',
    dataDaEntrega: '18/01/2021',
    dataDaVersao: '18/01/2021',
    repoLink: 'https://github.com/tryber/sd-09-project-js-unit-tests/pull/4',
    readMeLink: 'https://github.com/tryber/sd-09-project-js-unit-tests/',
  },
  {
    id:'project10',
    name:'Project 10 - Zoo Functions',
    dataDaEntrega: '25/01/2021',
    dataDaVersao: '26/01/2021',
    repoLink: 'https://github.com/tryber/sd-09-project-zoo-functions/pull/5',
    readMeLink: 'https://github.com/tryber/sd-09-project-zoo-functions/',
  },
];

const myProjectsWorking = [
  {
    id:'project01',
    link:'../01_projetos/project_01_lesson_learned/index.html',
  },
  {
    id:'project03',
    link:'../01_projetos/project_03_pixels_art/index.html',
  },
  {
    id:'project04',
    link:'../01_projetos/project_04_todo_list/index.html',
  },
  {
    id:'project05',
    link:'../01_projetos/project_05_bonus_meme_generator/index.html',
  },
  {
    id:'project06',
    link:'../01_projetos/project_06_bonus_color_guess/index.html',
  },
  {
    id:'project07',
    link:'../01_projetos/project_07_bonus_mystery_letter/index.html',
  },
  {
    id:'project08',
    link:'../01_projetos/project_08_facebook_signup/index.html',
  },
]

// {
  //   id:'',
  //   name:'',
  //   dataDaEntrega: '',
  //   dataDaVersao: '',
  //   repoLink: '',
  //   readMeLink: '',
  // }

//   {
//     id:'',
//     link:'',
//   },

const createProjectTable = () => {
myProjects.forEach((project) => {
  const { id, name, dataDaEntrega, dataDaVersao, repoLink, readMeLink} = project;

  const tableRow = document.createElement('tr');
  tableRow.id = id;

  const projectName = document.createElement('td');
  projectName.innerText = name;
  projectName.id = `${id}_name`;

  const projectDate = document.createElement('td');
  projectDate.innerText = dataDaEntrega;

  const projectVersion = document.createElement('td');
  projectVersion.innerText = dataDaVersao;

  const projectLink = document.createElement('td');
  projectLink.id = `${id}_link`;

  const projectLinkLink = document.createElement('a');
  projectLinkLink.target = '_blank';
  projectLinkLink.href = repoLink;
  projectLinkLink.innerText = 'link';

  const projectReadMe = document.createElement('td');
  projectReadMe.id = `${id}_readMe`;

  const projectReadMeLink = document.createElement('a');
  projectReadMeLink.target = '_blank';
  projectReadMeLink.href = readMeLink;
  projectReadMeLink.innerText = 'link';

  document.querySelector('.projectTable').appendChild(tableRow);
  document.querySelector(`#${id}`).appendChild(projectName);
  document.querySelector(`#${id}`).appendChild(projectDate);
  document.querySelector(`#${id}`).appendChild(projectVersion);
  document.querySelector(`#${id}`).appendChild(projectLink);
  document.querySelector(`#${id}_link`).appendChild(projectLinkLink);
  document.querySelector(`#${id}`).appendChild(projectReadMe);
  document.querySelector(`#${id}_readMe`).appendChild(projectReadMeLink);

});
}

const linkProjectsOnTable = () =>{
myProjectsWorking.forEach((project) => {
  const { id, link } = project;
  const myLink = document.createElement('a');
  myLink.target= '_blank';
  myLink.href = link;
  const tempName = document.querySelector(`#${id}_name`).innerText;
  myLink.innerText = tempName;
  document.querySelector(`#${id}_name`).innerText = '';
  document.querySelector(`#${id}_name`).appendChild(myLink);
})
}


createProjectTable();

linkProjectsOnTable();

