import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <div>
          {/* REFACTOR THIS and iterate over when  have time*/}
	
 
				<div className="grid">
					<figure className="effect-kira">
						<img className='fullWidthImg' src="https://dl3.pushbulletusercontent.com/uaJasGyN1qVwvhlJ08ui6tzSdR02fn2V/blueblob004finCompress.jpg" alt="blueblob"/>
						<figcaption>
							<h2 style={{maxWidth:'88vw',color:'#333'}}>My &nbsp;<span style={{color:'#49f'}}>Resume</span></h2>
							<p>
								
								<a className="iconLogan" href="https://loganwdev.github.io/loganWilsonResumev3.pdf"><i className="fa fa-fw fa-download"></i></a>
								<a className="iconLogan" href="http://www.github.com/hireloganw"><i className="fa fa-fw fa-github "></i></a>
								<a className="iconLogan" href="mailto:loganwdev@gmail.com"><i className="fa fa-fw fa-envelope "></i></a>
							</p>
						</figcaption>			
					</figure>
				</div>
        <div className="grid">
					<figure className="effect-apollo">
						<img className='fullWidthImg' src="https://dl3.pushbulletusercontent.com/NCw597AiQSilOjZSEjZvoVAil9CVnxaS/blueroomhq2finCompress.jpg" alt="blue Hq room with lights"/>
						<figcaption>
							<h2> <span style={{textDecoration:'underline',textTransform:'lowercase'}}>My &nbsp;Recent&nbsp; Work</span>
              <br/>
              <div className='gridLinks' style={{display:'flex',flexDirection:'column',}}>
              
                <a href="./work">My React Projects</a>
                <a href="./work">My Branding Efforts</a>
                <a href="./work">My Charity Work</a>
                <a href="./work">My Future Aspirations</a>
              </div>
              </h2>
              {/* 
              
               <img style={{maxWidth:'300px'}} src="https://cdn.loom.com/sessions/thumbnails/8f3ad682e2d348eb8eab1db907d70c88-with-play.gif"/>
              
              <p>Feeding Homeless Felines Foundation - Watch Video</p> <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/6bf30a107b7c4ec68d6ea3c5b4aeb50d-with-play.gif"> 
            <a href="https://www.loom.com/share/8f3ad682e2d348eb8eab1db907d70c88"> <p>Inner G - Watch Video</p> <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/8f3ad682e2d348eb8eab1db907d70c88-with-play.gif"> </a>

            */}
							
						</figcaption>			
					</figure>
				</div>
      {/* <section className='section'></section> */}
    </div>
    )
  }
}
