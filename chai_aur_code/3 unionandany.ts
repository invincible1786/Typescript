let subs: number | string = '1M'

let apistatuscode: 'pending' | 'success' | 'error' = "pending"

const orders = ['12', '20', '28', '42']

// let currentorder;

// for(let order of orders){
//     if(order === '28'){
//         currentorder = order
//         break
//     }
// }

// currentorder = 11 // it is typecasted to any !!

// console.log(currentorder);


let currentorder:string;

for(let order of orders){
    if(order === '28'){
        currentorder = order
        break
    }
    currentorder = '11';
}

currentorder = '12';

console.log(currentorder); // saare case main value assigned handle karo warna red line aa jayegi

// use unknown type instead of any !!