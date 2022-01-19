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

const lion = new Cat('lion');
console.log(lion.speak());
// ROAR

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
