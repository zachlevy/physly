// generator tools
module.exports = {
  randomString: function() {
    const seedString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomString = '';
    while (randomString.length !== 6) {
      let randomCharacterIndex = Math.floor(Math.random() * seedString.length);
      randomString += seedString[randomCharacterIndex];
    }
    return randomString;
  }
}
