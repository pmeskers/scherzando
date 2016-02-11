var React = require('react');
var TrebleClef = require('./treble_clef.js');

class MusicBar extends React.Component {
  render() {
    var gapWidth = 120;
    var topMargin = 50;
    var bottomMargin = 50;
    var leftMargin = 0;

    var trueHeight = topMargin + (4 * gapWidth) + bottomMargin + 50;
    var trueWidth = 796 + 35;

    return (
      <svg width={this.props.width} height={this.props.height} viewBox={`0 0 ${trueWidth} ${trueHeight}`}>
        <g id='g2004'>
          <TrebleClef />
        </g>
        <g id='g1934'>
          <path d={`M ${leftMargin},${topMargin} L 814,${topMargin}`} style={{stroke:'#131516', strokeWidth:'6.8'}} />
          <path d={`M ${leftMargin},${topMargin + gapWidth * 1} L 814,${topMargin + gapWidth * 1}`} style={{stroke:'#131516', strokeWidth:'6.8'}} />
          <path d={`M ${leftMargin},${topMargin + gapWidth * 2} L 814,${topMargin + gapWidth * 2}`} style={{stroke:'#131516', strokeWidth:'6.8'}} />
          <path d={`M ${leftMargin},${topMargin + gapWidth * 3} L 814,${topMargin + gapWidth * 3}`} style={{stroke:'#131516', strokeWidth:'6.8'}} />
          <path d={`M ${leftMargin},${topMargin + gapWidth * 4} L 814,${topMargin + gapWidth * 4}`} style={{stroke:'#131516', strokeWidth:'6.8'}} />
          <path d={`M 752,${topMargin} L 752,${topMargin + gapWidth * 4}`} style={{stroke:'#000000', strokeWidth:'6.5'}} id='path4032'/>
          <path d={`M 796,${topMargin} L 796,${topMargin + gapWidth * 4}`} style={{stroke:'#000000', strokeWidth:'35'}} id='path4032'/>
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
