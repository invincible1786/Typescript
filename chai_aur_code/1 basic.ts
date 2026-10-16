// typescript - 

// TS goes thru a process which gives us Js -> features - (consistency)

function greet(name: string): string {
  return `Hello ${name}`;
}

console.log(greet("hitesh"));
// console.log(greet(42)); 

//  TS CODE - lexer - parser - binder - checker - emmiter/generator - 

// npm i -D typescript
// npx tsc --init

// running
// npx tsc
// node dist/basic.js

// or edit script instead in package.json