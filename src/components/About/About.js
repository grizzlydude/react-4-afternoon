import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import History from '../History/History'
import Contact from '../Contact/Contact'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/about' className='subnav_links'>
            <h3>About</h3>
          </Link>
          <Link to='/about/history' className='subnav_links'>
            <h3>History</h3>
          </Link>
          <Link to='/about/contact' className='subnav_links'>
            <h3>Contact</h3>
          </Link>
        </div>
        <div className='box'>
          <Switch>
            <Route component={History} path='/about/history' />
            <Route component={Contact} path='/about/contact' />
            <Route path='/about' 
            render ={() => (
              <div>
                <h1 className='title'>About WestSide University:</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad, ducimus error est porro doloribus. 
                  Soluta assumenda dolore repudiandae? Amet officia sint vel distinctio tenetur harum dolore esse sequi blanditiis. 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis labore, voluptas rem harum modi aut tenetur quis nam est obcaecati 
                  ipsum adipisci consectetur reiciendis natus ex sit accusantium impedit assumenda?
                  </p>
              </div>
            )}/>
          </Switch>
        </div>
      </div>
    )
  }
}