function Animal(name) {
    var foodAmount = 0;

    var self = this;
    self.name = name;

    function formatFoodAmount () {
        return foodAmount + ' гр'
    }

    this.dailyNorm = function (food) {
        if (!arguments.length) return formatFoodAmount ();

        if (food < 50) {
            throw new Error('Слишком мало корма');
        }
        if (food > 500) {
            throw new Error('Слишком много корма');
        }

        foodAmount = food;
    }

    this.feed = function(){
        console.log ('Насыпаем в миску ' + self.dailyNorm() + ' корма' );
    }
}

function Cat(name) {

    Animal.apply(this,arguments);

    var animalFeed = this.feed;
    this.feed = function() {
        animalFeed();
        console.log('Кот доволен ^_^');
        return this;
    };

    this.stroke = function() {
        console.log('Гладим кота.');
        return this;
    };
}

var vasya = new Cat('Василий');

console.log(vasya.name);

vasya.dailyNorm(250);
vasya.feed();

vasya = null;
