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
        <Route path="/example" component={ExampleComponent} />
        <Route component={PageNotFound} />
      </Switch>

      <div style={s.creditLine}>
        <Interactive
          as="a"
          href="http://www.rafaelpedicini.com"
          interactiveChild
          focus={{}}
          touchActive={{}}
          touchActiveTapOnly
        >
          Code and concept by <span {...s.childLink}>Rafael Pedicini</span>
        </Interactive>
      </div>
      <Interactive
        as="a"
        href="https://hireloganw.github.io"
        style={s.repoLink}
        {...s.link}
      >https://hireloganw.github.io<button className="floating-btn">
      Get in Touch
    </button></Interactive>
   

    </div>
  );
}
