import React, {Component} from 'react'
import {connect} from 'react-redux'
import './_styles.scss'

class Home extends Component {
  render () {
    return (
      <div className='row center-xs'>
        <div styleName='container'>
          Hello World
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (store) {
  return {}
}

export default connect(mapStateToProps)(Home)
