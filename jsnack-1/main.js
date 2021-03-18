$(document).ready(function () {
  const bikes = [];

  bikes.push({
    nome: 'bmx',
    peso: 3,                                        
  })
  bikes.push({
    nome: 'graziella',
    peso: 5,                                        
  })
  bikes.push({
    nome: 'mountainbike',
    peso: 2,                                        
  })
  bikes.push({
    nome: 'boh',
    peso: 4,                                        
  })

  let index = 0;
  let min = bikes[0].peso;

  for (let i = 0; i < bikes.length; i++) {
    if (bikes[i].peso < min) {
      const{peso} = bikes[i];
      min = peso;
      index = i;
    }
  }
  console.log('la bici che pesa di meno è ', `${bikes[index].nome}`, 'ed il suo peso è ', `${min}`);






})