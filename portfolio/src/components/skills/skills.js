import React from 'react'
import './skills.css'
import Html from  '../../assets/html5.png';
import Css from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import bootstrap5 from '../../assets/bootstrap.png';
import reactjs from '../../assets/reactjs.png';
import nodejs from '../../assets/nodejs.png';
import expressjs from '../../assets/expressjs.png';
import mongodb from '../../assets/mongodb.png';
import mysql from '../../assets/mysql.png';
import wordpress from '../../assets/wordpress.png';
import jquery from '../../assets/jquery.png';
import php from '../../assets/php.png';
function Skills() {
  return (
    <div>
  <div className="text-skill">
      <h4>
        As I pursue my web development journey, I am actively acquiring proficiency in several key technologies and tools,
        <br />
        with the goal of creating impactful web solutions. These technologies include:
      </h4>
    </div>
    <section>
      <div className="skill-container container-fluid">
        <div className="div1"><img src={Html} alt="html" /></div>
        <div className="div2"><img src={Css} alt="css" /></div>
        <div className="div3"><img src={javascript} alt="js" /></div>
        <div className="div4"><img src={bootstrap5} alt="bootstarp" /></div>
        <div className="div5"><img src={reactjs} alt="react" /></div>
        <div className="div6"><img src={nodejs} alt="node" /></div>
        <div className="div7"><img src={expressjs} alt="expressjs" /></div>
        <div className="div8"><img src={mongodb} alt="mongodb" /></div>
        <div className="div9"><img src={mysql} alt="mysql" /></div>
        <div className="div10"><img src={wordpress} alt="wordpress" /></div>
        <div className="div11"><img src={jquery} alt="jquery" /></div>
        <div className="div12"><img src={php} alt="php" /></div>
      </div>
    </section>
    </div>
  
  );
}


export default Skills