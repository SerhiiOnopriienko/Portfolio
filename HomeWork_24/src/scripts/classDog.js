import { Animal } from './classAnimal'
export { Dog };

class Dog extends Animal {
    constructor(nickname, food, location, age, weight){
        super(nickname, food, location, age);
        this.weight = weight;
    }
}