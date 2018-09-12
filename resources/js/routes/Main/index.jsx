import React, {Component} from 'react';
import {connect} from 'react-redux';

class Main extends Component {
  render () {
    return (
      <div className='row center-xs'>
        <div styleName='container' />
      </div>
    );
  }
}

const mapStateToProps = function (store) {
  return {};
};

export default connect(mapStateToProps)(Main);
