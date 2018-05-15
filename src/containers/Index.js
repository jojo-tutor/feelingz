import React, { Component } from 'react'
import { Grid, Row, Col, Panel, ButtonToolbar, Button, Nav, NavItem } from 'react-bootstrap'
import NavBar from '../components/common/NavBar'
import Main from './Main'
import QuillEditor from '../components/QuillEditor'
import '../styles/index.css'

class Index extends Component {
  render() {
    return (
      <div className='main'>
        <Main/>>
        {/* <NavBar/>
        <Grid>
          <Row className='show-grid'>
            <Col xs={12} md={12}>
              <Panel>
                <Panel.Heading>
                  <Panel.Title componentClass='h3'>
                    Panel heading
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <Row className='show-grid'>
                    <Col md={12}>
                      <QuillEditor/>
                    </Col>
                  </Row>
                  <Row className='show-grid'>
                    <Col md={1} mdOffset={11}>
                      <ButtonToolbar>
                        <Button>Post Now</Button>
                      </ButtonToolbar>
                    </Col>
                  </Row>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid> */}
      </div>
    )
  }
}

export default Index
