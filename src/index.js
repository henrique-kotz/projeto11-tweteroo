import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let tweets = [];

app.post('/sign-up', (req, res) => {
    users.push(req.body);
    res.send('OK');
});

app.post('/tweets', (req, res) => {
    const { username, tweet } = req.body;
    const user = users.find(elem => elem.username === username);
    const newTweet = {
        username,
        avatar: user.avatar,
        tweet
    };
    tweets.push(newTweet);
    res.send('OK');
});

app.get('/tweets', (req, res) => {
    const lastTweets = tweets.slice(-10);
    res.send(lastTweets.reverse());
});

app.listen(5000, () => {
    console.log('Listening on port 5000...');
})