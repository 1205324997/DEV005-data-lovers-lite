import { filterPokemon, regionPokemon, sortOrder, reverOrder } from '../src/data.js';

const typePokemon = [{
  "type": [
    "grass"
  ],
}];

describe('Deberia mostrar los pokemon por tipo', () => {
  test('Es una function', () => {
    expect(typeof filterPokemon).toBe('function');
  });

  test('Deberia retornarme los pokemon tipo "grass"', () => {
    expect(filterPokemon(typePokemon, "grass")).toEqual(typePokemon);
  });
});



const regionPokemo = [{
  "generation": {
    "name": "kanto",
  }
}];

describe('regionPokemon', () => {
  test('is a function', () => {
    expect(typeof regionPokemon).toBe('function');
  });

  test('Deberia retornarme los pokemon "generation[name]"', () => {
    expect(regionPokemon(regionPokemo, "kanto")).toEqual(regionPokemo);
  });
});

const order1 =
  [{ name: "bulbasaur" },
    { name: "charmander" },
    { name: "ivysaur" },
    { name: "venusaur" }];

describe('deberia ordenar los pokemon de A-Z', () => {
  test('Es una funcion', () => {
    expect(typeof sortOrder).toBe('function');
  });

  test('deberia de retornar un array de objetos por orden alfabetico', () => {
    expect(sortOrder(order1, "a-z")).toEqual(order1);
  });
});

const order2 =
  [{ name: "bulbasaur" },
    { name: "charmander" },
    { name: "ivysaur" },
    { name: "venusaur" }];


describe('deberia ordenar los pokemon de Z-A', () => {
  test('Es una funcion', () => {
    expect(typeof reverOrder).toBe('function');
  });

  test('deberia de retornar un array de objetos por orden alfabetico', () => {
    expect(reverOrder(order2, "z-a")).toEqual(order2);
  });
});