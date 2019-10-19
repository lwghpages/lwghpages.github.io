import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
// import  '../App.css';

import s from '../styles/home.style';
import HeadingHero from './HeadingHero';
import FunFacts from './FunFacts';
import Portfolio from './Portfolio';
import CallToAction from './CallToAction';
// import logo2 from './logo.svg';
export default function Home() {
  const repoReadmeLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/loganwdev"
    >Github</Interactive>
  );

  return (
    <div>
      <br/>
      <div style={s.pageLinkContainer} style={{marginLeft:'1em'}}>
        <Interactive
          as={Link}
          {...s.link}
          to="/work"
        >Recent Work</Interactive>
      </div>
        <img className='blobCornerFace' src="https://dl3.pushbulletusercontent.com/Md6WRUbRxFhS5IYnaKmANHUcw4Jg1uG0/blobcornerface.jpg" alt="blob" style={{maxWidth: '27vw',height: 'auto',}} />

        <img src="https://dl3.pushbulletusercontent.com/IYTBjNAIDrX0fkzJndnHlYQPiWn0HWeH/loganlognetfl3.png" style={{minWidth:'100px',maxWidth: '130px',height: 'auto',marginLeft:'23%',marginTop: '1.32em',}}  alt="logo"/>
  

      <HeadingHero />
      <FunFacts headerProp="Contact Me" contentProp="Avail. for Hire" />
      <CallToAction />
      <Portfolio />

      <p style={s.p} style={{padding: '1em 2em'}}>
        My Portfolio is Single Page Application (SPA) built
        with React and React&nbsp;Router using {' '}
        <Code>BrowserRouter</Code>. 
       
        GitHub&nbsp;Pages incompatibility
        with single page apps (like this one) is just another challenge that gives me a sense of accomplishment. Knowing that if there is a will..there is a way, and "no matter what!" I will overcome these challenges.
      </p>
      <p style={s.p} style={{padding: '1em 1em'}}>
       I'm Fluent in Adobe Design Programs. Need tutoring?, Don't hesitate to reach out.
      </p>
      {/* <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/work"
        >Example page</Interactive>
      </div>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=foo&field2=bar#boom!"
        >Example two deep with query and hash</Interactive>
      </div> */}
    </div>
  );
}
