import React, { Component } from 'react';
// import myWorkPage from './myWork.html';

export default class HeadingHero extends Component {
  render() {
    return (
      <div>
         
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-9 m-auto text-center">
            <div className="sec-heading">
              <h1 className="sec-title">Logan J Wilson</h1>
               {/* <h2>Front End Software Engineer</h2> */}
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-12">
          {/* #ll */}
          </div>
          <div className="col-md-12">
            <div className="content-box">
              <h3 style={{lineHeight:'1',marginTop:'-1em'}} className="sec-title">I'm a <span>Front End Software Engineer</span> </h3>
              <h3 className="sec-desc" style={{paddingBottom: '10px',lineHeight:'1'}}>who creates lasting user experiences with <span className='react1'>React.js</span>.</h3>

              <p style={{lineHeight:'1.5',fontSize: '1.2em'}}><strong>Engineering solutions to make certain areas of your life a little better, focused, and refined.</strong> I've been waking up early and staying up late to hit the end goal of expert programmer.


<span style={{color:'#09f'}}> My work is not tied to tech trends.. I am a problem solver and entreprenuer. My unique value comes from my ability to handle ambiguity. </span>For example I work to first- understand the needs of the problem rather than jumping to a solution and using whatever cool things in my toolbox or whatever trend I see.
</p>


<p style={{lineHeight:'1.5',fontSize: '1.2em'}}><span style={{color:'#0d9'}}>I am business minded.</span> <span style={{color:'violet'}}>-</span> cognisant of how my actions, attitude &amp; quality of work can and will affect the big picture of the business.</p>
              {/* <img src="https://placehold.it/50x50.jpg" alt="" className="signature"/> */}
              
              <a href="#"className="btn btnSeeWork" style={{backgroundColor:'#001f61',color:'white'}}>See Recent Work</a>
              

            </div>
          </div>
        </div>
      </div>
    </section>

      </div>
    )
  }
}
