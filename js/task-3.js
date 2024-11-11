const profile = {
  data: {
    username: "Jacob",
    playTime: 300,
  },
  changeUsername(newName) {
    this.data.username = newName;
  },
  updatePlayTime(hours) {
    this.data.playTime += hours;
  },
  getInfo() {
    return `${this.data.username} has ${this.data.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
