type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
}

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

// type CupSize = "small" | "large";

// can't implement custom made types !!

// class Chai implements CupSize {

// }

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// use interface for classes  

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaaChai = BaseChai & Extra;

const cup: MasalaaChai = {
  teaLeaves: 2,
  masala: 1
};
