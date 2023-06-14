export { Hospital };
import { Cat } from './classCat';


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

class Hospital {
    constructor(name){
        this.name = name;
    }

    #illAnimals = [];

    #findingPetsPeople = [];

    getAnimals(){
        return this.#illAnimals;
    }

    getFindingPetsPeople(){
        return this.#findingPetsPeople;
    }

    addAnimal(animal){
        this.#illAnimals.push(animal);
    }

    addPeople(human){
        this.#findingPetsPeople.push(human);
    }

    findHome(pet){
        if(this.#illAnimals.includes(pet.nickname)){
            return {
                status: 'restricted',
                message: `We need to heal ${pet.nickname} firstly`,
            };
        };
        const randomFindingPetHuman = this.#findingPetsPeople.splice(getRandomInt(this.#findingPetsPeople.length), 1);
            return {
                status: 'success',
                name: randomFindingPetHuman,
            }    
    }
}