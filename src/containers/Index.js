import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import NavBar from '../components/common/NavBar'
import QuillEditor from '../components/QuillEditor'

class Index extends Component {
  render() {
    return (
      <div className='main'>
        {/* <NavBar/> */}
        <Panel bsStyle="info">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Panel heading</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <QuillEditor/>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}

export default Index
