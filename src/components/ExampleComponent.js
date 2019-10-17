import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import s from '../styles/exampleComponent.style';



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
            <img src="https://dl3.pushbulletusercontent.com/IYTBjNAIDrX0fkzJndnHlYQPiWn0HWeH/loganlognetfl3.png" alt="" className="logo" />

<ul className="descriptions">
  <li className="description" id="loganTest1">
    <h2 className="heading heading--2">Logan 1 test</h2>
    <div style={{position: 'relative',paddingBottom: '56.25%', height: '0'}}><iframe src="https://www.loom.com/embed/8f3ad682e2d348eb8eab1db907d70c88" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}></iframe></div>

    <p>I created a Website for a friendly neighbor hood Massage Parlor. Integrating online scheduling through SQUARE. Technologies used - <code>HTML,CSS & JavaScript, MailChimp + Google Maps API</code></p>
  </li>
  <li className="description" id="test2">
    <h2 className="heading heading--2">test2</h2>
    <p>Invoked once, both on the client and server, immediately before the initial rendering occurs. If you call <code>setState</code> within this method, <code>render()</code> will see the updated state and will be executed only once despite the state change.</p>
  </li>
  <li className="description" id="render">
    <h2 className="heading heading--2">render</h2>
    <p>The test 3() method is required.</p>

   
  </li>
  <li className="description" id="test4">
    <h2 className="heading heading--2">test4</h2>
    <p>Invoked once, only on the client (not on the server), immediately a.</p>

    
  </li>
  <li className="description" id="test5">
    <h2 className="heading heading--2">test5</h2>
    <p>Invoked when a component is receiving new props. This method is not called for the initial render.</p>

    
  </li>
  <li className="description" id="test6">
    <h2 className="heading heading--2">test6</h2>
    <p>Invoked before rendering when new props or state are being received. This method is not called for the initial render or when <code>forceUpdate</code> is used.</p>

    <p>Use this as an opportunity to return <code>false</code> when you're certain that the transition to the new props and state will not require a component update.</p>
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
    <li className="lane__item"><a className="step" href="#render">render</a></li>
    <li className="lane__item"><a className="step" href="#test4">test4</a></li>  
  </ul>

  <ul className="lane">
Logo Design &amp;<br/> Graphic Design    <li className="lane__item"><a className="step" href="#test5">test5</a></li>
    <li className="lane__item"><a className="step" href="#test6">test6</a></li>
    <li className="lane__item"><a className="step" href="#test7">test7</a></li>  
    <li className="lane__item"><a className="step" href="#render">render</a></li>
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
