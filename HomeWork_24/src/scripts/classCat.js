import { Animal } from "./classAnimal";
export { Cat };

class Cat extends Animal {
    constructor(nickname, food, location, age, isHomeless = true){
        super(nickname, food, location, age);
        this.isHomeless = isHomeless;
    }
}
