class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this. speed = 3;
        this.strength = 3;
    }


    sayName(){
        console.log("My ninja name is " + this.name);
        return this;
    }

    showStats(){
        console.log("The ninja name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    }

    drinkSake(){
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Patience is a virtue!")
    }
}

let blueNinja = new Ninja("David");
let master = new Sensei("Yoda");
blueNinja.sayName();
blueNinja.showStats();
blueNinja.drinkSake();
blueNinja.showStats();
master.speakWisdom();
master.showStats();
master.sayName().drinkSake().showStats();
// master.showStats();

