/* Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome. */

const cats = [
  {
    nome: 'Micia',
    colore: 'Tigrato',
    eta: 14,
    sesso: 'Femmina'
  },
  {
    nome: 'Attila',
    colore: 'Tigrato',
    eta: 8,
    sesso: 'Maschio'
  },
  {
    nome: 'Lupin',
    colore: 'Rosso',
    eta: 3,
    sesso: 'Maschio'
  },
  {
    nome: 'Tea',
    colore: 'Maculato',
    eta: 4,
    sesso: 'Femmina',
  },
  {
    nome: 'Bea',
    colore: 'Bianco e Nero',
    eta: 4,
    sesso: 'Femmina'
  }
]

/* cats.forEach(element => {
  console.log(`${element.nome} il suo colore è ${element.colore}`);
}); */
cats.forEach(element => {
  $('#gatti-milestone1').append(`<li> ${element.nome} il suo colore è ${element.colore} </li>`)
});




/* Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio. */

const maschi = cats.filter((element) => element.sesso == 'Maschio')

const femmine = cats.filter((element) => element.sesso == 'Femmina')

/* console.log(maschi , femmine); */

cats.forEach(element => {
  let color;

  if (element.sesso == 'Maschio') {
    color = 'blu';
  } else if (element.sesso == 'Femmina') {
    color = 'pink';
  }
  $('#gatti-milestone2').append(`<li class="${color}">${element.nome} è di colore ${element.colore}<i class="fas fa-ribbon"></i></li>`)
});











