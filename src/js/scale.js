class Scale {
  constructor(root, type, sharps, flats) {
    this.root = root;
    this.sharps = allSharps.slice(0, sharps);
    this.flats = allFlats.slice(0, flats);
    this.type = type;
  }
}

var allSharps = ['f', 'c', 'g', 'd', 'a', 'e', 'b'];
var allFlats = ['b', 'e', 'a', 'd', 'g', 'c', 'f'];

module.exports = Scale;
