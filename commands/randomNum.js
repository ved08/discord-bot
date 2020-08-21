module.exports = {
    name: 'random',
    description: 'Get a random number between 1-100',
    execute(msg, args) {
      msg.reply(Math.floor(Math.random() * 100));
    },
};
  