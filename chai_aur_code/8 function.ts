function makeChai(type: string, cups: number){
  console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala", 2)

function makeOrder(order: string){
  if (!order) return null
  return order
}

function logChai(): void {
  console.log("Chai is ready");
}
