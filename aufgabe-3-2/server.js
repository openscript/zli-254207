import express from 'express';

const app = express();
const port = 3000;

async function getTemperature(zip) {
    const url = `https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${zip}00`;
    try {
        const response = await fetch(url)
        if (response.status !== 200) {
            console.error(response.status)
        } else {
            const data = await response.json()
            return data.currentWeather.temperature.toString();
        }
    } catch (error) {
        console.error(error)
    }
}

app.get('/', async (request, response) => {
    response.send(await getTemperature(request.query.zip));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});