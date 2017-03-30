import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppConfig from 'AppConfig';
import CSSModules from 'react-css-modules';
import styles from './Main.scss';

@CSSModules(styles)
class Main extends Component {

  constructor (props) {
    super(props);
  }

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
