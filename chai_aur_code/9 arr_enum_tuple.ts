const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
  name: string;
  price: number;
}

const menu: Chai[] = [
  {name: "Masala", price: 15},
  {name: "Adrak", price: 25},
]

const cities: readonly string[] = ["Delhi", "Jaipur"]
// cities.push("Pune")

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
]

let userInfo: [string, number, boolean?]
userInfo = ["hitesh", 100]
userInfo = ["hitesh", 100, true]

// enums - ts feature - gives u set of named constants

 enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger"
}

function makeChai(type: ChaiType){
  console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER)
makeChai("masala")

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3
}

let t: [string, number] = ["chai", 10]
t.push("extra")
