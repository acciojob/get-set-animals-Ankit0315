//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	get getSpecies(){
	 return this.species;
	}
	makeSound(){
		   console.log(`The ${this.species} makes a sound`);
	}
}

class Dog extends Animal {
	bark()
	{
		consolo.log("woof");
	}
	
}

class Cat extends Animal {
	purr()
	{
		console.log("purr");
	}
}
let cat = new Cat("cat");
cat.makeSound();
cat.purr();
let dog = new Dog("dog");
dog.makeSound();
dog.bark();
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
