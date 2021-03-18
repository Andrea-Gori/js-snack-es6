$(document).ready(function () {

  const teams = [
    {
      nome: 'Inter',
      punti: 0,
      falli: 0,
    },
    {
      nome: 'Roma',
      punti: 0,
      falli: 0,
    },
    {
      nome: 'Fiorentina',
      punti: 0,
      falli: 0,
    },
    {
      nome: 'Atalanta',
      punti: 0,
      falli: 0,
    },
  ];

  let new_dati = [];
  
  for (let i = 0; i < teams.length; i++) {
    teams[i].punti = numeroRandom(0 , 60)
    teams[i].falli = numeroRandom(0 , 60)

    const {nome, falli} = teams[i];
    new_dati.push(nome, falli)

  }
  console.log(teams);
  console.log(new_dati);


  
  
  
  
  
  
  
  
  function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
})
