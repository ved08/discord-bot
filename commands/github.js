// async function getUserInfo(username) {
//     const response = await fetch(`https://api.github.com/users/${username}`);
//     const data = await response.data();
//     console.log(data);
// }
// getUserInfo('ved08')
// fetch(`https://api.github.com/users/ved08`)
// .then(res => res.json())
// .then(data => console.log(data))
module.exports = {
    name: '!github',
    description: 'Ping!',
    execute(msg, args) {
    //    const data = getUserInfo(args[0])
        // const githubEmbed = new Discord.RichEmbed()
        //     // .setColor('#24292E')
        //     // .setTitle(`${args[0].name}'s GitHub stats`)
        //     // .setUrl(args[0].blog)
        //     // .setThumbnail(args[0].avatar_url)
        //     .setColor('#24292E')
        //     .setTitle(args[0].name, ' Stats')
            
        msg.channel.send(`${args[0].name}'s stats \n ${args[0].blog}`)
        console.log()
    },
  };
  