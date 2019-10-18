import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import s from'../styles/exampleComponent.style';
// import '../myWork.css';



const ExamplePageText = () => (
 <p></p>
);

export default function ExampleComponent() {
  return (
    <Switch>
      <Route
        exact path="/work/social"
        render={({ location }) => (
          <div>
            <ExamplePageText />
            
            <ExampleTwoDeepComponent location={location} />
          </div>
        )}
      />
      <Route
        exact path="/work"
        render={() => (
          <div>
            <ExamplePageText />
            <div style={s.pageLinkContainer} style={{backgroundColor:'#222222',paddingLeft:'1em'}}>
              <Interactive
                as={Link}
                {...s.link}
                to="/work/social?field1=foo&field2=bar#boom!"
              >Social Media</Interactive>
            </div>
<div style={{height:'100%',width:'100vw',backgroundColor:'#222222',position:'absolute',zIndex:'-1'}}></div>
            <img style={{transform:'scale(0.88)'}} src="https://dl3.pushbulletusercontent.com/IYTBjNAIDrX0fkzJndnHlYQPiWn0HWeH/loganlognetfl3.png" alt="" className="logo" />

<ul className="descriptions">
  <li className="description" id="loganTest1">
    <h2 className="heading heading--2">Logan 1 test</h2>
    <div style={{position: 'relative',paddingBottom: '56.25%', height: '0'}}><iframe src="https://www.loom.com/embed/8f3ad682e2d348eb8eab1db907d70c88" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}></iframe></div>

    <p>I created a Website for a friendly neighbor hood Massage Parlor. Integrating online scheduling through SQUARE. Technologies used - <code>HTML,CSS & JavaScript, MailChimp + Google Maps API</code></p>
  </li>
  <li className="description" id="test2">
    <h2 className="heading heading--2">test2</h2>
    <div style={{position: 'relative',paddingBottom: '56.25%', height: '0'}}><iframe src="https://www.loom.com/embed/6bf30a107b7c4ec68d6ea3c5b4aeb50d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}></iframe></div>

    <p>I created a Website &amp; Custom Logo for a Non-Profit Foundation In Miami, Florida . Focused on helping homeless, hungry &amp; in danger cats/kittens.Feeding Homeless Felines Foundation. Integrating online donation platform through DonationBox. Technologies used - <code>HTML,CSS &amp; JavaScript, GSuite + DonationBox, light Ruby on Rails to implement DonationBox, Adobe Illustrator &amp; Photoshop</code></p>
  </li>
  <li className="description" id="test3">
    <h2 className="heading heading--2">test3render</h2>
   <div style={{position: 'relative',paddingBottom: '56.25%', height: '0'}}><iframe src="https://www.loom.com/embed/f61bec9a24794e6fbcfd288eeedb8e0f" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}></iframe></div>

    <p>I created a website for personal use with a Cool Nav bar. (CSS Animations) to show off my skills for a possible tech layout. <code>HTML,CSS &amp; JavaScript, Image Masking, Adobe Photoshop, Adobe Illustrator</code></p>

    
  </li>
  <li className="description" id="test4">
    <h2 className="heading heading--2">test4</h2>
    <div style={{position: 'relative',paddingBottom: '56.25%', height: '0'}}><iframe src="https://www.loom.com/embed/a293dbf4182e4133aa4b90dfad947d20" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}></iframe></div>

    <p>I crafted a website for personal use with a nice UX/UI interactions and tons of space for "dynamically loaded items &amp;sale prices." Form for MailChimp Email Collection + Blast Campaign (CSS Animations) to <code>HTML,CSS3 &amp; JavaScript, MailChimp, Adobe Photoshop, Adobe Illustrator</code></p>

  </li>
  <li className="description" id="test5">
    <h2 className="heading heading--2">test5</h2>
    <img src="https://dl3.pushbulletusercontent.com/oNJ8YCFWKx4ouxgaAi9bkSTYOnKbIOle/fhffLogoResize300.jpg" alt="FhFF logo" style={{height:'80vh', width:'auto',margin:'5px auto 7px auto'}}/>
    <p>I created a Custom Logo with <code>Adobe Illustrator</code> for a Non-Profit Foundation In Miami, Florida. Focused on helping homeless, hungry &amp; in danger cats/kittens.Feeding Homeless Felines Foundation. This is<code>Vector Art</code>. It can be resized to the size of a building and it will keep its perfect crispness.</p>

    
  </li>
  <li className="description" id="test7">
    <h2 className="heading heading--2">test7</h2>
    <p>Invoked immediately before rendering when new props or state are being received. This method is not called for the initial render.</p>

    <p>Use this as an opportunity to perform preparation before an update occurs.</p>
  </li>
  <li className="description" id="test8">
    <h2 className="heading heading--2">test8</h2>
    <p>Invoked immediately after the component's updates are flushed to the DOM. This method is not called for the initial render.</p>

    <p>Use this as an opportunity to operate on the DOM when the component has been updated.</p>
  </li>
  <li className="description" id="test9">
    <h2 className="heading heading--2">test9</h2>
    <p>Invoked immediately before a component is unmounted from the DOM.</p>

    <p>Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in <code>test4</code>.</p>
  </li>

  {/* start head description  */}
  <li className="description description--placeholder">
    <h2 className="heading heading--2">Logan J Wilson's Work</h2>
    <p style={{color:'#e83e8c'}}>Click on a project below to see a description &amp; project overview.</p>
    <p>See My Work, But want to know more? Download <a href="#">My Resume</a>, as a PDF <a href="#"></a>.</p>
  </li>
  <li className="description__close"><a href="#">×</a></li>
</ul>

<div className="lanes">
  <ul className="lane">
    <li className="lane__title">Websites + UX/UI</li>
    <li className="lane__item"><a className="step" href="#loganTest1">loganTest1</a></li>
    <li className="lane__item"><a className="step" href="#test2">test2</a></li>  
   <li className="lane__item"><a className="step" href="#test3">test3</a></li>
    <li className="lane__item"><a className="step" href="#test4">test4</a></li>  
  </ul>

  <ul className="lane">
<li className="lane__title">Logo Design &amp;<br/> Graphic Design</li>   <li className="lane__item"><a className="step" href="#test5">test5</a></li>
    <li className="lane__item"><a className="step" href="#test6">test6</a></li>
    <li className="lane__item"><a className="step" href="#test7">test7</a></li>  
    <li className="lane__item"><a className="step" href="#render2">render2</a></li>
    <li className="lane__item"><a className="step" href="#test8">test8</a></li>  
  </ul>

  <ul className="lane">
    <li className="lane__title">View My Github</li>
    <li className="lane__item"><a className="step" href="#test9">test9</a></li>  
  </ul>
</div>

          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}
