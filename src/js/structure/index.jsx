import React from 'react'
import PropTypes from 'prop-types'

function MasterPage ({children}) {
  return (
    <div className='master-page'>
      {children}
    </div>
  )
}

MasterPage.defaultProps = {
  children: PropTypes.node
}

MasterPage.propTypes = {
  children: PropTypes.node
}

export default MasterPage
