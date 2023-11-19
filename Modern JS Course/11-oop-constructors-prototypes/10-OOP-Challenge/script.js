// Constructor function
function Player(name) {
    this.name = name

    this.lvl = 1
    this.points = 0

}

Player.prototype.gainXp = function (addXp) {
    if (addXp > 10) {
        console.log("More than 10xp can't be added at a time")
    } else {
         this.points += addXp
         if (this.points >= 10) {
            this.lvl += 1
            this.points -=10
        }
    }

}

Player.prototype.describe = function(){
   return  `${this.name} is level ${this.lvl} with ${this.points} experience points`
}

// Instantiate
const player1 = new Player('Bob');
const player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1)

console.log(player1.describe())
console.log(player2.describe())