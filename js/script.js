// Milestone 1 Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout. 
// Milestone 2 Coloriamo le icone per tipo
// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];

  // Milestone 2 Coloriamo le icone per tipo
let iconColor = '#0010fe';

const iconWithColors = icons.map((element) => { 
  if (element.type == 'vegetable'){
    iconColor = '#008140';
  } else if(element.type == 'user'){
    iconColor = '#ed0000';
  }
  element.color = iconColor; //or
  return element; //or
  // return {
  //  ...element,
  //  color: iconColor
  //}
});

icons.forEach(element => {
  const {name, prefix, family, color} = element;
  document.getElementById('icons-container').innerHTML +=`
    <div class="col w-20x prl-1rem">
      <div class="ms_icon-container ptb-2rem txt-cen ms_icon-font-size">
      <i style="color:${color}" class="${family} ${prefix}${name}"></i>
      <div class="font-size-1rem">${name.toUpperCase()}      </div>
    </div>
  `;
});

const types = [];

iconWithColors.forEach(element => {
  // condition ? exprIfTrue : exprIfFalse
  if(!types.includes(element.type)){
    types.push(element.type);
    document.getElementById('icon-select').innerHTML += 
    `
    <option value="${element.type}">${element.type}</option>
    `
  }
});

console.log(iconWithColors);

const selectIcons = document.getElementById('icon-select');

selectIcons.addEventListener('change', function(){
  document.getElementById('icons-container').innerHTML = ''
  const selectionType = selectIcons.value;
  if(selectionType == 'all'){
    icons.forEach(element => {
      const {name, prefix, family, color} = element;
      document.getElementById('icons-container').innerHTML +=`
        <div class="col w-20x prl-1rem">
          <div class="ms_icon-container ptb-2rem txt-cen ms_icon-font-size">
          <i style="color:${color}" class="${family} ${prefix}${name}"></i>
          <div class="font-size-1rem">${name.toUpperCase()}      </div>
        </div>
      `;
    });
  } else{
    const filteredIcons = iconWithColors.filter((element) => element.type == selectionType);
    console.log(filteredIcons);
    filteredIcons.forEach(element => {
      const {name, prefix, family, color} = element;
      document.getElementById('icons-container').innerHTML +=`
        <div class="col w-20x prl-1rem">
          <div class="ms_icon-container ptb-2rem txt-cen ms_icon-font-size">
          <i style="color:${color}" class="${family} ${prefix}${name}"></i>
          <div class="font-size-1rem">${name.toUpperCase()}      </div>
        </div>
      `;
    });
  }

});

