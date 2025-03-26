//console.log(process.argv);

// console.log(parseInt(process.argv[2]) + parseInt(process.argv[3]) + parseInt(process.argv[4]))

// Lösung mit for-Schleife
// let sum = 0;
// for (let index = 2; index < process.argv.length; index++) {
//   const element = parseInt(process.argv[index]);
//   sum += element;
// }
// console.log(sum);

// Ideen

const [binary, path, ...args] = process.argv;

const sum = args.reduce((previous, current) => previous += parseInt(current), 0);
console.log(sum);
