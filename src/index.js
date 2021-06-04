import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { initWhiteboard } from './WhiteboardFunctions'

export const Whiteboard = (props) => {
  const [whiteboard, setWhiteboard] = useState({})

  useEffect(() => {
    initWhiteboard(setWhiteboard, {
      client_id: props.client_id,
      code: props.code
    })
    return () => whiteboard?.dispose()?.()
  }, [])

  return (
    <div
      id='whiteboard-space'
      style={{
        width: '100%',
        height: '100%',
        minWidth: '600px',
        minHeight: '500px'
      }}
    />
  )
}

Whiteboard.propTypes = {
  client_id: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
}
