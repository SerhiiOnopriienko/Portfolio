import { Person } from "./classPerson";
import { Cat } from './classCat';
export { Veterinarian };

class Veterinarian extends Person {
    constructor(firstName, lastName, hospital){
        super(firstName, lastName);
        this.hospital = hospital;
    }

    #diagnosis = { 
        ill: 'ill',
        healthy: 'healthy' 
    }

    getFullName(){
        return `${super.getFullName()} works at (${this.hospital})`;
    }

    #setDiagnosis(hospital, pet){
            if(pet.weight > 20){
                hospital.addAnimal(pet);
                return {
                    diagnosis: this.#diagnosis.ill,
                    info: 'overweight',
                }
            } else if(pet.food === 'meal' && pet.age < 1){
                hospital.addAnimal(pet);
                pet.changeFood('dry food');
                return {
                    diagnosis: this.#diagnosis.ill,
                    info: `change food. Now ${pet.nickname} eats ${pet.food}`
                }
            }
        return {
            diagnosis: this.#diagnosis.healthy,
        }
    }

    treatAnimal(hospital, pet){
        const result = this.#setDiagnosis(hospital, pet);
        if(pet.isHomeless){
           if(Cat.prototype.isPrototypeOf(pet) && hospital.findHome(pet).status === 'success'){
            return {
                info: `Now ${hospital.findHome(pet).name} have a new friend - ${pet.nickname}`,
                fullDiagnos: result,
                }
            } 
        }
        return {
            info: `${pet.nickname} from ${pet.location}`,
            fullDiagnos: result,
        }
    }
}