// console.log(process.argv[2]);
import { get } from 'node:http';

get(process.argv[2], (res) => {
    let raw = '';
    res.setEncoding('utf8');
    res.on('data', console.log);
    //res.on('end', () => console.log(raw));
});

