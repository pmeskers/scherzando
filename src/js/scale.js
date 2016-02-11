class Scale {
  constructor(root, sharps, flats) {
    this.root = root;
    this.sharps = allSharps.slice(0, sharps);
    this.flats = allFlats.slice(0, flats);
  }
}

var allSharps = ['f', 'c', 'g', 'd', 'a', 'e', 'b'];
var allFlats = ['b', 'e', 'a', 'd', 'f', 'c', 'g'];

module.exports = Scale;
