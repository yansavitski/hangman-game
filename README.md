### Hangman Game

```
run server : npm run server DATABASE_URL=%database url%
run client : npm start
```

### API

```
GET api/v1/start-game
200
{
    id: %id%,
    score: 0,
    status: "in process",
    mistakes_count: 0,
    word: [null, null, null, null]
}
```

```
GET api/v1/check-letter?id=%id%&letter=r
params: id; letter;
200
{
    id: %id%,
    score: 0,
    status: "in process", // "win" | "lose"
    mistakes_count: 0, // <= 5
    word: [null, r, null, null, r] // order => _ r _ _ r => [null, r, null, null, r]
}
```

```
GET api/v1/best-scores
200
{
    scores: [600, 500] // Max 10; Order by DESC
}
```

```
ERROR
{
    error: %message%
}
```
