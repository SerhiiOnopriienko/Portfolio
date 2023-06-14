import { Animal } from './classAnimal';
import { Dog } from './classDog';
import { Cat } from './classCat';
import { Person } from './classPerson';
import { Hospital } from './classHospital';
import { Veterinarian } from './classVeterinarian';


function main(){
    const hospital = new Hospital('Saint Victoria');
    const veterenarian = new Veterinarian('Jhon', 'Lock', hospital.name);
    const arrOfAnimals = [new Cat('Barsik', 'meal', 'Kyiv', 2), new Dog('Dogster', 'meat', 'Kyiv', 2, 14), new Cat('Boris', 'dry food', 'Lviv', 5), new Dog('Barker', 'meal', 'London', 0.5, 5), new Cat('Wiskers', 'meal', 'Odesa', 0.8)];
    let persons = [new Person('Sam', 'Patkins').getFullName(), new Person('Anton', 'Chornii').getFullName(), new Person('Stepan', 'Giga').getFullName(), new Person('Victoria', 'Polishchuk').getFullName()];
    for(let human of persons){
        hospital.addPeople(human);
    }
    console.group(veterenarian.getFullName());
    for(let animal of arrOfAnimals){
        console.log(veterenarian.treatAnimal(hospital, animal));
    }
    console.groupEnd();
    console.log('Animals in the hospital:', hospital.getAnimals());
}
main();