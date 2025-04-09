import express from 'express';
import { randomUUID } from 'node:crypto';
const router = express.Router();

let lends = [];

function isAuthenticated(request, response, next) {
    if (!request.session.email) {
        return response.sendStatus(401);
    }
    next();
}

router.use(isAuthenticated);

// http://localhost:3000/lends
router.get('/', (_request, response) => {
    response.send(lends);
});

// http://localhost:3000/lends/:id
router.get('/:id', (request, response) => {
    if (!request.session.email) {
        return response.sendStatus(401);
    }
    const lend = lends.find((l) => l.id === request.params.id);
    response.send(lend);
});

router.post('/', (request, response) => {
    const isValid = request.body.customerId && request.body.isbn;
    if (!isValid) {
        return response.send(422);
    }
    const isLent = lends.some(
        (l) => l.isbn === request.body.isbn && !l.returnedAt
    );
    const tooManyLends = lends.filter(
        (l) => l.customerId === request.body.customerId && !l.returnedAt
    ).length >= 3;
    if (isLent || tooManyLends) {
        return response.send(400);
    }
    lends = [...lends, { ...request.body, id: randomUUID(), borrowedAt: Date.now() }]
    response.status(201).send(lends);
});

router.delete('/:id', (request, response) => {
    lends = lends.map((l) => {
        if (l.id === request.params.id) {
            return {...l, returnedAt: Date.now()}
        } else {
            return l;
        }
    });
    response.send(lends);
});

export default router;