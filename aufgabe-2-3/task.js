// function simuliereVerzoegerung(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }
// 
// simuliereVerzoegerung(2000).then(() => console.log("Hurra die Schule brennt!"));

async function simuliereVerzoegerung(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

await simuliereVerzoegerung(2000);
console.log("Hurra die Schule brennt!");

async function addiereNachVerzoegerung(a, b, ms) {
    await simuliereVerzoegerung(ms);
    return a + b;
}

const resultat = await addiereNachVerzoegerung(10, 20, 3000);
console.log(resultat);