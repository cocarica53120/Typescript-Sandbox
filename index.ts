// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A place to learn TypeScript in a place where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const anExampleVariable = 'Hello World';
console.log(anExampleVariable);

type Person = { name: string; age: number };

const hello = (name: string): Person => {
  console.log('name is', name);
  return { name: 'titi', age: 20 };
};

hello('titi');

// union type of two species
type CatSpecies = 'lion' | 'tabby';

// interface defining cat shape and using the above type
interface CatInterface {
  species: CatSpecies;
  speak(): string;
}

class Cat implements CatInterface {
  constructor(public species: CatSpecies) {}
  speak() {
    return this.species === 'lion' ? 'ROAR' : 'meeeooow';
  }
}

const lion = new Cat('tabby');
console.log(lion.speak());
// ROAR

class Coucou {
  constructor(private _name: string) {}
  get name() {
    return this._name;
  }
}

const coucou = new Coucou('toto');
console.log('name', coucou.name);

enum Enum {
  S1 = 0,
  S2 = 'string',
  S3 = 'c',
}

type Dyn = boolean | Enum | number;

let test: Dyn[] = [Enum.S1, Enum.S2, Enum.S3, false, 10];

console.log('test', test);
test.forEach((t) => console.log('t', t, typeof t));

interface labelValue {
  label: string;
  value: Dyn;
}

const mySet1: labelValue[] = [
  { label: 'myBool1', value: false },
  { label: 'myNumber', value: 123 },
  { label: 'myEnumS2', value: Enum.S2 },
  { label: 'myEnumS3', value: Enum.S3 },
  { label: 'myBool2', value: true },
];
const mySet2: labelValue[] = [
  { label: 'myBool1', value: false },
  { label: 'myEnumS3', value: Enum.S3 },
  { label: 'myBool2', value: true },
];

const panel1 = {
  panel: 'Panel1',
  mySet1,
};

const panel2 = {
  panel: 'Panel2',
  mySet2,
};

mySet1.forEach((ms) => console.log('key/value', ms.label, ms.value));

const myBooleans = mySet1.filter((ms) => 'boolean' === typeof ms.value);
console.log('myBooleans', myBooleans);
console.log(
  'myBooleans stringified',
  myBooleans.map((fm) => `boolean with label ${fm.label} and value ${fm.value}`)
);

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
