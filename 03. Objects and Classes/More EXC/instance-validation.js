class CheckingAccount {
    constructor (clientId, email, firstName, lastName) {
        this._validateClientId(clientId);
        this._validateEmail(email);
        this._validateName(firstName, 'First');
        this._validateName(lastName, 'Last')

        this._clientId = clientId;
        this._email = email;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    _validateClientId(clientId) {
        if (!((typeof clientId === 'string' || clientId instanceof String) && clientId.length === 6 && Number.isInteger(Number(clientId)))) {
            throw TypeError('Client ID must be a 6-digit number');
        }
    }

    _validateEmail(email) {
        const emailPattern = /^[a-zA-Z]+@[a-zA-Z.]+$/;

        if (!emailPattern.test(email)) {
            throw TypeError('Invalid e-mail');
        }   
    }

    _validateName(name, type) {
        if (name.length < 3 || name.length > 20) throw TypeError(`${type} name must be between 3 and 20 characters long`);

        const nameRegex = /^[a-zA-Z]+$/;
        if (!nameRegex.test(name)) throw TypeError(`${type} name must contain only Latin characters`);
    }
}


// const acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
// const acc2 = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
// const acc3 = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
// const acc4 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');