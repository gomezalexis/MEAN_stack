function Ninja(name){
    this.name = name;
    this.health = 100;
    //private variables
    var speed = 3;
    var strength = 3;

    //public function
    this.sayName = function(){
        console.log('My ninja name is ' + this.name +'!');
    }

    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }

    this.drinkSake = function(){
        this.health += 10;
        return this;
    }
}

var ninja1 = new Ninja("David");
ninja1.sayName();

ninja1.showStats();
ninja1.drinkSake().drinkSake();
ninja1.showStats();