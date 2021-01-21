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