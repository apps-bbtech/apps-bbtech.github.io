import React from 'react';
import style from './home.module.css';
import logo from '../../images/logo_transparent.png'

const Home = () => {
    return(
       <div className={style.home}>
           <div className={style.sloganContainer}>
            <h1 className={style.slogan}>Apps for everyone.</h1>
            <hr className= {style.line} color="white"/>
           </div>
           <img className = {style.logo} src={logo} alt=""/>

       </div> 
    );
}

export default Home;
