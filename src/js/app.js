var React = require('react');
var MusicBar = require('./svg_components/music_bar.js');

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Scherzando</h1>
        <MusicBar width={500} height={500}/>
      </div>
    );
  }
}

module.exports = App;
