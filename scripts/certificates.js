const certificates = [
  {
    name: 'IGTI - Bootcamp Desenvolvedor Python',
    link: './03_certificates/Bootcamp_desenvolvedor_python_IGTI.pdf',
  },
  {
    name: 'IGTI - Data Universe',
    link: './03_certificates/Data_Universe.pdf',
  },
  {
    name: 'EF SET Certificate',
    link: './03_certificates/EF_SET.pdf',
  },
  {
    name: 'Bootcamp FIA Online',
    link: './03_certificates/Bootcamp_fia_online.pdf',
  },
  {
    name: 'Digital House novas Tecnologias',
    link: './03_certificates/Digital_House_novas_tecnologias.pdf',
  },
  {
    name: "Tamboro - Desafio Mapa de Talentos",
    link: './03_certificates/Tamboro_mapa_de_Talentos.pdf',
  },
  {
    name: 'Trybe - Módulo 1 - Fundamentos do Desenvolvimento Web',
    link:'./03_certificates/Certificado_modulo_1.pdf',
  },
  {
    name: 'Trybe - Módulo 2 - Desenvolvimento Front-End',
    link:'./03_certificates/Certificado_modulo_2.pdf',
  },
  {
    name: 'Trybe - Módulo 3 - Desenvolvimento Back-End',
    link:'./03_certificates/Certificado_modulo_3.pdf'
  },
  {
    name: 'Udemy - 2021 Complete Python Bootcamp',
    link:'./03_certificates/udemy_python_bootcamp.pdf'
  },
  {
    name:'Trybe - Aceleração Java',
    link:'./03_certificates/aceleracao_java.pdf'
  },
  {
    name: 'Udemy - Agile Fundamentals: Including Scrum and Kanban - 2021',
    link: './03_certificates/udemy_agile_fundamentals.pdf'
  }
]

const createCertificatesTable = (certificates) => {
  certificates.forEach(element => {
    const newLine = document.createElement('a');
    newLine.innerText = element.name;
    newLine.href = element.link;
    newLine.target = '_blank';
    document.querySelector('.certificates').appendChild(newLine);
  });

};

createCertificatesTable(certificates);