class Chai {
    flavour: string;
    price: number;

    constructor(flavour: string = "", price: number = 0) {
        this.flavour = flavour;
        this.price = price;
    }
}

const masalaChai = new Chai();
masalaChai.flavour = "masala";
masalaChai.price = 20;