import fs from 'node:fs';

const leseDateiInhalt = (pfad) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pfad, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};

leseDateiInhalt('beispiel.txt')
  .then((inhalt) => { console.log('Die Länge des Dateiinhalts beträgt:', inhalt.length);
})
  .catch((err) => { console.error('Fehler beim Lesen der Datei:', err);
});