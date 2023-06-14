export { Animal }

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