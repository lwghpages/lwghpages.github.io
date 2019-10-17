import React, { Component } from 'react'

export default class CallToAction extends Component {
  render() {
    return (
      <div style={{paddingTop:'6.777%'}}>

        <section className="callto-action" >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8" style={{padding:'5px 7px 5px 7px'}}>
            <h3 className="sec-title"><span>Hire Me!</span> Get a Feel For 
              My Work &amp; What I Can Do For / With Your Business</h3>
          </div>
          <div className="col-lg-6 col-md-4 text-center">
            <a href="#" className="btn btnSeeWork" >Download My Resume<span style={{fontSize:'0.75em',padding:'0 7px 0 7px'}}> (PDF)</span></a>
          </div>
        </div>
      </div>
    </section>
    <br/>
      </div>
    )
  }
}
