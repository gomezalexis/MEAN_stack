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

    // function getStrength(num)

    this.punch = function(punchedNinja){
        if(punchedNinja instanceof Ninja){
            // var punchedNinja = ninja;
            punchedNinja.health -= 5;
            console.log(punchedNinja.name + " was punched by " + this.name + " and lost 5 Health!");
            return this;
        }
    }

    this.kick = function(ninja){
        if(ninja instanceof Ninja){
            var kickedNinja = ninja;
            var powerKick = 15 * strength;
            kickedNinja.health -= powerKick;
            console.log(kickedNinja.name + " was kicked by " + this.name + " and lost " + powerKick + " Health!");
            return this;
        }
    }
}

var blueNinja = new Ninja("David");
var redNinja = new Ninja("Alexis");
blueNinja.sayName();
redNinja.sayName();
redNinja.showStats();
console.log("assignment 2 starts");

blueNinja.punch(redNinja);
redNinja.showStats();
redNinja.kick(blueNinja).punch(blueNinja);
blueNinja.showStats();
redNinja.showStats();
blueNinja.drinkSake().showStats();