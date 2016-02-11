var React = require('react');
var TrebleClef = require('./treble_clef.js');

// I want to hardcode these values at some point, not sure it's valuable to keep them programmatic like this

class MusicBar extends React.Component {
  render() {
    var gapWidth = 120;
    var topMargin = 50;
    var bottomMargin = 50;
    var leftMargin = 0;
    var lineLength = 1200;

    var trueHeight = topMargin + (4 * gapWidth) + bottomMargin + 50;
    var trueWidth = lineLength + 25;

    return (
      <svg width={this.props.width} height={this.props.height} viewBox={`0 0 ${trueWidth} ${trueHeight}`}>
        <g id='g2004'>
          <TrebleClef />
        </g>
        <g id='g1934'>
          <path d={`M ${leftMargin},${topMargin} L ${lineLength},${topMargin}`} style={{stroke:'#131516', strokeWidth:'6.8'}} />
          <path d={`M ${leftMargin},${topMargin + gapWidth * 1} L ${lineLength},${topMargin + gapWidth * 1}`} style={{stroke:'#131516', strokeWidth:'6.8'}} />
          <path d={`M ${leftMargin},${topMargin + gapWidth * 2} L ${lineLength},${topMargin + gapWidth * 2}`} style={{stroke:'#131516', strokeWidth:'6.8'}} />
          <path d={`M ${leftMargin},${topMargin + gapWidth * 3} L ${lineLength},${topMargin + gapWidth * 3}`} style={{stroke:'#131516', strokeWidth:'6.8'}} />
          <path d={`M ${leftMargin},${topMargin + gapWidth * 4} L ${lineLength},${topMargin + gapWidth * 4}`} style={{stroke:'#131516', strokeWidth:'6.8'}} />
          <path d={`M ${lineLength - 62},${topMargin} L ${lineLength - 62},${topMargin + gapWidth * 4}`} style={{stroke:'#000000', strokeWidth:'6.5'}} id='path4032'/>
          <path d={`M ${lineLength - 18},${topMargin} L ${lineLength - 18},${topMargin + gapWidth * 4}`} style={{stroke:'#000000', strokeWidth:'35'}} id='path4032'/>
        </g>
      </svg>
    );
  }
}

MusicBar.propTypes = {
  height: React.PropTypes.any,
  width: React.PropTypes.any
};
MusicBar.defaultProps = {
  height: 500,
  width: 825
}

module.exports = MusicBar;
