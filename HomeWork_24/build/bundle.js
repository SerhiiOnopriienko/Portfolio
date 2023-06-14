/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/classAnimal.js":
/*!************************************!*\
  !*** ./src/scripts/classAnimal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animal": () => (/* binding */ Animal)
/* harmony export */ });


class Animal{
    constructor(nickname, food, location, age){
        this.nickname = nickname;
        this.food = food;
        this.location = location;
        this.age = age;
    }

    changeFood(otherFood){
        return this.food = otherFood;
    }
}

/***/ }),

/***/ "./src/scripts/classCat.js":
/*!*********************************!*\
  !*** ./src/scripts/classCat.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cat": () => (/* binding */ Cat)
/* harmony export */ });
/* harmony import */ var _classAnimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classAnimal */ "./src/scripts/classAnimal.js");



class Cat extends _classAnimal__WEBPACK_IMPORTED_MODULE_0__.Animal {
    constructor(nickname, food, location, age, isHomeless = true){
        super(nickname, food, location, age);
        this.isHomeless = isHomeless;
    }
}


/***/ }),

/***/ "./src/scripts/classDog.js":
/*!*********************************!*\
  !*** ./src/scripts/classDog.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dog": () => (/* binding */ Dog)
/* harmony export */ });
/* harmony import */ var _classAnimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classAnimal */ "./src/scripts/classAnimal.js");



class Dog extends _classAnimal__WEBPACK_IMPORTED_MODULE_0__.Animal {
    constructor(nickname, food, location, age, weight){
        super(nickname, food, location, age);
        this.weight = weight;
    }
}

/***/ }),

/***/ "./src/scripts/classHospital.js":
/*!**************************************!*\
  !*** ./src/scripts/classHospital.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hospital": () => (/* binding */ Hospital)
/* harmony export */ });
/* harmony import */ var _classCat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classCat */ "./src/scripts/classCat.js");




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

/***/ }),

/***/ "./src/scripts/classPerson.js":
/*!************************************!*\
  !*** ./src/scripts/classPerson.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Person": () => (/* binding */ Person)
/* harmony export */ });


class Person {
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

/***/ }),

/***/ "./src/scripts/classVeterinarian.js":
/*!******************************************!*\
  !*** ./src/scripts/classVeterinarian.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Veterinarian": () => (/* binding */ Veterinarian)
/* harmony export */ });
/* harmony import */ var _classPerson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classPerson */ "./src/scripts/classPerson.js");
/* harmony import */ var _classCat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classCat */ "./src/scripts/classCat.js");




class Veterinarian extends _classPerson__WEBPACK_IMPORTED_MODULE_0__.Person {
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
           if(_classCat__WEBPACK_IMPORTED_MODULE_1__.Cat.prototype.isPrototypeOf(pet) && hospital.findHome(pet).status === 'success'){
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classAnimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classAnimal */ "./src/scripts/classAnimal.js");
/* harmony import */ var _classDog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classDog */ "./src/scripts/classDog.js");
/* harmony import */ var _classCat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classCat */ "./src/scripts/classCat.js");
/* harmony import */ var _classPerson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classPerson */ "./src/scripts/classPerson.js");
/* harmony import */ var _classHospital__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classHospital */ "./src/scripts/classHospital.js");
/* harmony import */ var _classVeterinarian__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classVeterinarian */ "./src/scripts/classVeterinarian.js");








function main(){
    const hospital = new _classHospital__WEBPACK_IMPORTED_MODULE_4__.Hospital('Saint Victoria');
    const veterenarian = new _classVeterinarian__WEBPACK_IMPORTED_MODULE_5__.Veterinarian('Jhon', 'Lock', hospital.name);
    const arrOfAnimals = [new _classCat__WEBPACK_IMPORTED_MODULE_2__.Cat('Barsik', 'meal', 'Kyiv', 2), new _classDog__WEBPACK_IMPORTED_MODULE_1__.Dog('Dogster', 'meat', 'Kyiv', 2, 14), new _classCat__WEBPACK_IMPORTED_MODULE_2__.Cat('Boris', 'dry food', 'Lviv', 5), new _classDog__WEBPACK_IMPORTED_MODULE_1__.Dog('Barker', 'meal', 'London', 0.5, 5), new _classCat__WEBPACK_IMPORTED_MODULE_2__.Cat('Wiskers', 'meal', 'Odesa', 0.8)];
    let persons = [new _classPerson__WEBPACK_IMPORTED_MODULE_3__.Person('Sam', 'Patkins').getFullName(), new _classPerson__WEBPACK_IMPORTED_MODULE_3__.Person('Anton', 'Chornii').getFullName(), new _classPerson__WEBPACK_IMPORTED_MODULE_3__.Person('Stepan', 'Giga').getFullName(), new _classPerson__WEBPACK_IMPORTED_MODULE_3__.Person('Victoria', 'Polishchuk').getFullName()];
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
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map