module.exports = (client) => {
  console.log(`[STATUS] ${client.user.tag} is now online!\n\n[Invite Link] https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8\n[INFO] Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);
  const activities = [`All Giveaways Running Smoothly`, `Npg op`];
  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(activity, { type: "WATCHING" });
  }, 20000);

};
