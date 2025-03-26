
function verdoppeln(value, callback) {
    const result = value * 2;
    callback(result);
}

verdoppeln(5, function (ergebnis) {
    console.log('Das Ergebnis ist:', ergebnis);
});