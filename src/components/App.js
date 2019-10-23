import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';

export default function App() {
  return (
    
    <div style={s.root}>
     


      {/* <h1 style={s.title}>Single Page Apps for GitHub Pages</h1> */}
      {/* <Interactive
        as="a"
        href="https://github.com/lwghpages/lwghpages.github.io"
        style={s.repoLink}
        {...s.link}
      >https://github.com/lwghpages/lwghpages.github.io</Interactive> */}

      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/work" component={ExampleComponent} />
        <Route component={PageNotFound} />
      </Switch>

      <div style={s.creditLine} style={{padding: '1em 2em'}}style={{padding: '1em 2em'}}>
        <Interactive
          as="a"
          href="http://www.loganjwilson.com"
          interactiveChild
          focus={{}}
          touchActive={{}}
          touchActiveTapOnly
<<<<<<< HEAD
        > 
         Check out my Dribbble <span {...s.childLink}>My site is built with React.js.</span>
=======
        >
          This is built in React.js <span {...s.childLink}>Logan Wilson</span>
>>>>>>> parent of 185a255... chnges to verbage n build
        </Interactive>
      </div>
      <div style={{padding:'1em 2em'}}>
      <Interactive
        as="a"
        href="https://loganwdev.github.io/loganWilsonResumev3.pdf"
        style={s.repoLink}
        {...s.link}
        
      ></Interactive>
      <Interactive 
      as="a"
          href="mailto:loganwdev@gmail.com"
          interactiveChild
          focus={{}}
          touchActive={{}}
          touchActiveTapOnly>
        <button className="floating-btn" >
      Get in Touch
    </button>
    </Interactive>
   </div>

    </div>
  );
}
