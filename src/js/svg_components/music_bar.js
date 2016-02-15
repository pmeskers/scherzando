var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var _ = require('lodash');

var Scale = require('../scale.js');
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

    var trueHeight = topMargin + (4 * gapWidth) + bottomMargin + 200;
    var trueWidth = lineLength + 25;

    var renderedSharps = _.map(this.props.scale.sharps, function(sharp) {
      return sharpComponents[sharp];
    });
    var renderedFlats = _.map(this.props.scale.flats, function(flat) {
      return flatComponents[flat];
    });

    console.log('rendering..');
    return (
      <svg className='music-bar' width={this.props.width} viewBox='0 -200 1300 920'>
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

        <ReactCSSTransitionGroup component='g' transitionName="accidental" transitionAppear={true} transitionEnterTimeout={500} transitionAppearTimeout={300} transitionLeaveTimeout={300}>
          {renderedFlats}
          {renderedSharps}
        </ReactCSSTransitionGroup>
      </svg>
    );
  }
}

var sharpComponents = {
  f: (<g transform="translate(0, -305)" key='f-sharp'>
        <Sharp />
      </g>),
  c: (<g transform="translate(120, -130)" key='c-sharp'>
        <Sharp />
      </g>),
  g: (<g transform="translate(240, -370)" key='g-sharp'>
        <Sharp />
      </g>),
  d: (<g transform="translate(360, -195)" key='d-sharp'>
        <Sharp />
      </g>),
  a: (<g transform="translate(480, -10)" key='a-sharp'>
        <Sharp />
      </g>),
  e: (<g transform="translate(600, -260)" key='e-sharp'>
        <Sharp />
      </g>),
  b: (<g transform="translate(720, -75)" key='b-sharp'>
        <Sharp />
      </g>)
};

var flatComponents = {
  b: (<g transform="translate(0, -310)" key='b-flat'>
        <Flat />
      </g>),
  e: (<g transform="translate(120, -490)" key='e-flat'>
        <Flat />
      </g>),
  a: (<g transform="translate(240, -250)" key='a-flat'>
        <Flat />
      </g>),
  d: (<g transform="translate(360, -430)" key='d-flat'>
        <Flat />
      </g>),
  g: (<g transform="translate(480, -190)" key='g-flat'>
        <Flat />
      </g>),
  c: (<g transform="translate(600, -370)" key='c-flat'>
        <Flat />
      </g>),
  f: (<g transform="translate(720, -130)" key='f-flat'>
        <Flat />
      </g>)
};

MusicBar.propTypes = {
  width: React.PropTypes.any,
  scale: React.PropTypes.instanceOf(Scale)
};
MusicBar.defaultProps = {
  width: 825,
  scale: new Scale('c', 'major', 0, 0)
}

module.exports = MusicBar;
