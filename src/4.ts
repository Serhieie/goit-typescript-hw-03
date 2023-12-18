class Key {}

class MyHouse {
  constructor(private key: Key) {}

  openDoor(personKey: Key) {
    if (this.key === personKey) {
      console.log("The door is unlocked. You can come in!");
    } else {
      console.log("You do not have the correct key to open the door.");
    }
  }

  comeIn(person: Person) {
    console.log(`${person.name} entered the house.`);
  }
}

class Person {
  constructor(private key: Key, public name: string) {}

  getKey() {
    return this.key;
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key, "John");

house.openDoor(person.getKey());
house.comeIn(person);

export {};
