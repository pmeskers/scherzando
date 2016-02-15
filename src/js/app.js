var React = require('react');
var MusicBar = require('./svg_components/music_bar.js');
var Scale = require('./scale.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: _.sample(scales)
    };
  }
  randomScale() {
    console.log('wtf');
    this.setState({scale: _.sample(scales)});
  }
  render() {
    return (
      <div>
        <h1>Scherzando</h1>
        <MusicBar width={'50%'} scale={_.last(scales)}/>
        <h2>{this.state.scale.root} {this.state.scale.type}</h2>
        <button onClick={this.randomScale.bind(this)}>Random</button>
      </div>
    );
  }
}

var scales = [
  new Scale('c',  'major', 0, 0),
  new Scale('a',  'minor', 0, 0),
  new Scale('g',  'major', 1, 0),
  new Scale('e',  'minor', 1, 0),
  new Scale('d',  'major', 2, 0),
  new Scale('b',  'minor', 2, 0),
  new Scale('a',  'major', 3, 0),
  new Scale('f♯', 'minor', 3, 0),
  new Scale('e',  'major', 4, 0),
  new Scale('c♯', 'minor', 4, 0),
  new Scale('b',  'major', 5, 0),
  new Scale('g♯', 'minor', 5, 0),
  new Scale('f♯', 'major', 6, 0),
  new Scale('d♯', 'minor', 6, 0),
  new Scale('c♯', 'major', 7, 0),
  new Scale('a♯', 'minor', 7, 0),
  new Scale('f',  'major', 0, 1),
  new Scale('d',  'minor', 0, 1),
  new Scale('b♭', 'major', 0, 2),
  new Scale('g',  'minor', 0, 2),
  new Scale('e♭', 'major', 0, 3),
  new Scale('c',  'minor', 0, 3),
  new Scale('a♭', 'major', 0, 4),
  new Scale('f',  'minor', 0, 4),
  new Scale('d♭', 'major', 0, 5),
  new Scale('b♭', 'minor', 0, 5),
  new Scale('g♭', 'major', 0, 6),
  new Scale('e♭', 'minor', 0, 6),
  new Scale('b',  'major', 0, 7),
  new Scale('a♭', 'minor', 0, 7),
];

module.exports = App;
