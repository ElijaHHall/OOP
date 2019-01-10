////////////////// Object Literal  ////////////////////
const flower = {
    color: 'red',
    height: '3cm',
    smellsPretty: true,
    petals: 40
};

///////////////// Constructor ///////////////////

function Flower() {
    this.color = 'red',
    this.petals = 40,
    this.smellsPretty = true
}

let myFlower = new Flower()

console.log(myFlower.color);