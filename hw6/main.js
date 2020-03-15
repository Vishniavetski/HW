function Animal(name) {
    var foodAmount = 0;

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

    this.name = name;

    this.feed = function(){
        console.log ('Насыпаем в миску ' + this.dailyNorm() + ' корма' );
    }
}

function Cat(name) {
    var self = this;

    Animal.apply(this,arguments);

    var animalFeed = self.feed;
    self.feed = function() {
        animalFeed.call(self);
        console.log('Кот доволен ^_^');
        return self;
    };

    self.stroke = function() {
        console.log('Гладим кота.');
        return self;
    };
}

var tom = new Cat('Tom');

console.log(tom.name);

tom.dailyNorm(250);
tom.feed().stroke();

tom = null;
