class List {
    constructor () {
        this._array = [];
        this.size = 0;
    }

    add (element) {
        this._array.push(element);
        this._array.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        this._validate(index);
        this._array.splice(index, 1);
        this.size--;
    }

    get(index) {
        this._validate(index);
        return this._array[index];
    }

    _validate(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
