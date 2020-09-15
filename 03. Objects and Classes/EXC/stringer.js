class Stringer {
    constructor (innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        if (this.innerLength - length < 0) {
           this.innerLength = 0; 
        } else {
            this.innerLength -= length;
        }
    }

    toString() {
        let res = '';
        if (this.innerLength === this.innerString.length) {
            res = this.innerString;
        } else {
            for (let i = 0; i < this.innerLength; i++) {
                res += this.innerString[i];
            }

            res += '...';
        }

        return res;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
