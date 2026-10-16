function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai order: ${kind}`;
}

// as the type gets narrowed - the software gives back the functions that can be called accordingly

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}

// custom types     

function orderChai(size: "small" | "medium" | 'large' | number){
    if(size === "small"){
        return `small cutting chai...`
    }
    if(size === 'medium' || size === "large"){
        return `make extra chai`
    }

    return `chai order #${size}`
}

// classes aagayi oye !!

class KulhadChai{
    serve(){
        return `Serving Kulhad Chai`
    }
}

class Cutting{
    serve(){
        return `Serving cutting Chai`
    }
}

function serve(chai: KulhadChai | Cutting) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

// making custom types

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}

type MasalaChai = {type: "masala"; spicelevel: number};
type GingerChai = {type: "ginger"; amount: number};
type ElaichiChai = {type: "elaichi"; aroma: number};

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order: Chai){
    switch (order.type) {
        case "masala":
            return `Masala chai`;
            break;
        case "elaichi":
            return `elaichi chai`;
            break;
        case "ginger":
            return `ginger chai`;
            break;
    }
}

// can check 1 property and tell what type is it - like masala main spiceLevel hai sirf - not a good practice

// try using unknown !!