const GREETINGS = [
    "Hello World!",
    "Welcome back!",
    "Great to see you again!"
];

module.exports = (req, res) => {
    const randomIndex = Math.floor(Math.random() * GREETINGS.length);
    res.send({
        greeting: GREETINGS[randomIndex]
    });
};