import React, { Component } from 'react'
import { Collapse } from 'react-bootstrap'
import '../styles/main.css'

const apps = ['App 1', 'App 2', 'App 3']

class Index extends Component {
  state = {
    active: false,
    home_sub_show: false,
    page_sub_show: false
  }
  render() {
    const { home_sub_show, page_sub_show } = this.state
    return (
      <div className='wrapper'>
        <nav id='sidebar' className={`${this.state.active ? 'active' : ''}`}>
            <div className='sidebar-header'>
                <h3>Bootstrap Sidebar</h3>
                <strong>BS</strong>
            </div>

            <ul className='list-unstyled components'>
                <li className='active'>
                    <a>
                        <i className='glyphicon glyphicon-briefcase'></i>
                        Home
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='glyphicon glyphicon-briefcase'></i>
                        About
                    </a>
                    <a data-toggle='collapse' aria-expanded={page_sub_show} onClick={() => this.setState(({ page_sub_show }) => ({ page_sub_show: !page_sub_show }))}>
                        <i className='glyphicon glyphicon-duplicate'></i>
                        Apps
                    </a>
                    <Collapse in={page_sub_show}>
                      <ul className='list-unstyled'>
                        { apps.map(e => (<li key={e}><a>{e}</a></li>)) }
                      </ul>
                    </Collapse>
                </li>
                <li>
                    <a href='#'>
                        <i className='glyphicon glyphicon-link'></i>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='glyphicon glyphicon-paperclip'></i>
                        FAQ
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='glyphicon glyphicon-send'></i>
                        Contact
                    </a>
                </li>
            </ul>

            <ul className='list-unstyled CTAs'>
                <li><a href='https://bootstrapious.com/tutorial/files/sidebar.zip' className='download'>Download source</a></li>
                <li><a href='https://bootstrapious.com/p/bootstrap-sidebar' className='article'>Back to article</a></li>
            </ul>
        </nav>

        <div id='content'>
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>

                    <div className='navbar-header'>
                        <button type='button' id='sidebarCollapse' className='btn btn-info navbar-btn' onClick={() => this.setState(prevState => ({ active: !prevState.active }))} >
                            <i className='glyphicon glyphicon-align-left'></i>
                            <span>Toggle Sidebar</span>
                        </button>
                    </div>

                    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><a href='#'>Page</a></li>
                            <li><a href='#'>Page</a></li>
                            <li><a href='#'>Page</a></li>
                            <li><a href='#'>Page</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className='line'></div>

            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className='line'></div>

            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    )
  }
}

export default Index
