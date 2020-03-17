function Animal(name) {
    this._foodAmount = 50;
    this._name = name;
    this._self = this;
}

Animal.prototype._formatFoodAmount = function() {
    return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    if(!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
};

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this._self.dailyNorm() + ' корма.');
};

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^');
    return this;
};

Animal.prototype.stroke = function() {
    console.log('Гладим кота');
    return this;
}


var vasya = new Cat('Василий');

console.log(vasya.name);

vasya.dailyNorm(250);
vasya.stroke().feed();

vasya = null;
