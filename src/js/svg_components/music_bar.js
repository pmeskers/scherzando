var React = require('react');
var TrebleClef = require('./treble_clef.js');
var Sharp = require('./sharp.js');
var Flat = require('./flat.js');

// I want to hardcode these values at some point, not sure it's valuable to keep them programmatic like this

class MusicBar extends React.Component {
  render() {
    var gapWidth = 120;
    var topMargin = 50;
    var bottomMargin = 50;
    var leftMargin = 0;
    var lineLength = 1300;

    var trueHeight = topMargin + (4 * gapWidth) + bottomMargin + 50;
    var trueWidth = lineLength + 25;

    return (
      <svg width={this.props.width} height={this.props.height} viewBox={`0 0 ${trueWidth} ${trueHeight}`}>
        <g>
          <TrebleClef />
        </g>

        <g>
          <path d={`M ${leftMargin},${topMargin} L ${lineLength},${topMargin}`} style={{stroke:'#131516', strokeWidth:'6.8'}} />
          <path d={`M ${leftMargin},${topMargin + gapWidth * 1} L ${lineLength},${topMargin + gapWidth * 1}`} style={{stroke:'#131516', strokeWidth:'6.8'}} />
          <path d={`M ${leftMargin},${topMargin + gapWidth * 2} L ${lineLength},${topMargin + gapWidth * 2}`} style={{stroke:'#131516', strokeWidth:'6.8'}} />
          <path d={`M ${leftMargin},${topMargin + gapWidth * 3} L ${lineLength},${topMargin + gapWidth * 3}`} style={{stroke:'#131516', strokeWidth:'6.8'}} />
          <path d={`M ${leftMargin},${topMargin + gapWidth * 4} L ${lineLength},${topMargin + gapWidth * 4}`} style={{stroke:'#131516', strokeWidth:'6.8'}} />
          <path d={`M ${lineLength - 62},${topMargin} L ${lineLength - 62},${topMargin + gapWidth * 4}`} style={{stroke:'#000000', strokeWidth:'6.5'}} id='path4032'/>
          <path d={`M ${lineLength - 18},${topMargin} L ${lineLength - 18},${topMargin + gapWidth * 4}`} style={{stroke:'#000000', strokeWidth:'35'}} id='path4032'/>
        </g>

        <g>
          {flats.b}
          {flats.e}
          {flats.a}
          {flats.d}
          {flats.g}
          {flats.c}
          {flats.f}
        </g>
      </svg>
    );
  }
}
        // <g>
          // {sharps.f}
          // {sharps.c}
          // {sharps.g}
          // {sharps.d}
          // {sharps.a}
          // {sharps.e}
          // {sharps.b}
        // </g>

var sharps = {
  f: (<g transform="translate(0, -305)">
        <Sharp />
      </g>),
  c: (<g transform="translate(120, -130)">
        <Sharp />
      </g>),
  g: (<g transform="translate(240, -370)">
        <Sharp />
      </g>),
  d: (<g transform="translate(360, -195)">
        <Sharp />
      </g>),
  a: (<g transform="translate(480, -10)">
        <Sharp />
      </g>),
  e: (<g transform="translate(600, -260)">
        <Sharp />
      </g>),
  b: (<g transform="translate(720, -75)">
        <Sharp />
      </g>)
};

var flats = {
  b: (<g transform="translate(0, -310)">
        <Flat />
      </g>),
  e: (<g transform="translate(120, -490)">
        <Flat />
      </g>),
  a: (<g transform="translate(240, -250)">
        <Flat />
      </g>),
  d: (<g transform="translate(360, -430)">
        <Flat />
      </g>),
  g: (<g transform="translate(480, -190)">
        <Flat />
      </g>),
  c: (<g transform="translate(600, -370)">
        <Flat />
      </g>),
  f: (<g transform="translate(720, -130)">
        <Flat />
      </g>)
};

MusicBar.propTypes = {
  height: React.PropTypes.any,
  width: React.PropTypes.any
};
MusicBar.defaultProps = {
  height: 500,
  width: 825
}

module.exports = MusicBar;
