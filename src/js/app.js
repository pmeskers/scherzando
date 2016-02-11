var React = require('react');
var MusicBar = require('./svg_components/music_bar.js');
var Scale = require('./scale.js');

class App extends React.Component {
  render() {
    var fSharpMinor = new Scale('f#', 3, 0);

    return (
      <div>
        <h1>Scherzando</h1>
        <MusicBar width={'50%'} height={'50%'} scale={fSharpMinor}/>
      </div>
    );
  }
}

module.exports = App;
