let result = (function(){
    const Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    }
    
    class Card {
        static validFaces =  ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    
        static validSuits = ['♠', '♥', '♦', '♣'];
    
        constructor (face, suit) {
            this._validateFace(face);
            this._validateSuits(suit);
            this._face = face;
            this._suit = suit;
        }
    
        get face () {
            return this._face;
        }
    
        set face (value) {
            this._validateFace(value);
            this._face = value;
        }
    
        get suit () {
            return this._suit;
        }
    
        set suit (value) {
            this._validateSuits(value);
            this._suit = value;
        }
    
        _validateFace(value) {
            if (!Card.validFaces.includes(value)) throw Error();
        }
    
        _validateSuits(value) {
            if (!Card.validSuits.includes(value)) throw Error();
        }
    }

    return {
        Suits:Suits,
        Card:Card
    }
}());

let Card = result.Card;
let Suits = result.Suits;

let card = new Card('Q', Suits.CLUBS);
card.face = 'A';
card.suit = Suits.DIAMONDS;

let card2 = new Card('1', Suits.DIAMONDS); // Should throw error