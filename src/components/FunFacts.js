import React, { Component } from 'react'
// import { strikethrough } from 'ansi-colors'

export default class FunFacts extends Component {
  render() {
    return (
      <div>
        
    <section className="funfacts">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="single-fun">
                
              <div className="s-fun">
                <h5 style={{fontSize:'2.4em',padding:'0'}}>Adobe CC</h5>
                <span>
                  <span style={{color:'#09f'}}>PS</span>, <span style={{color:'goldenrod'}}>AI</span>, <span style={{color:'indigo'}}>AE</span>, <span style={{color:'#f40'}}>XD</span>,<br/><span style={{color:'orange'}}>ID</span>, 
                 
                  <span style={{color:'violet'}}> PR</span> <br/><br/>
                  wireframing, logos, print &amp; more.
                </span>  
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="single-fun">
              <div className="s-fun" style={{padding:'10%'}}>
              <h5 style={{fontSize:'2.24em',padding:'5px 7px 5px 7px',margin:'auto',marginLeft:'-10%'}}>Javascript</h5>
               
                <span style={{transform:'translate(0,-2.4em)',lineHeight:'1.15'}}><span style={{color:'goldenrod'}}>Node.js</span>, Api's, <span style={{color:'goldenrod'}}>ES6</span>,<br/> Promises, asyc-await, <span style={{color:'goldenrod'}}>vanilla js</span>,<br/> <span style={{color:'#09f'}}>React.js</span>, Vue.js &amp; more</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="single-fun">
              <div className="s-fun">
                <h5 style={{fontSize:'2.24em'}}>Git / Bash</h5>
                <span>command-line skills <br/> </span>
                <span  style={{padding:'5px 7.5% 5px 7.5%'}}>I Bring Great Communication, Leadership &amp; Teamwork.</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="single-fun">
              <div className="s-fun">
                <a href="mailto:loganwdev@gmail.com"><h5 style={{fontSize:'2.24em'}}>{this.props.headerProp}</h5></a>
                <span style={{padding:'5px 7.5% 5px 7.5%',color:'navy'}}>{this.props.contentProp}
                <br/></span>
                <span  style={{padding:'5px 7.5% 5px 7.5%'}}>Remote or Local to Chicago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 
      </div>
    )
  }
}
