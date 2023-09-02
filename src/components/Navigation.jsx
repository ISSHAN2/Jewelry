import React, { useState, useEffect ,Component} from 'react';
import {Link} from "react-router-dom";

class Nav extends Component{
     scrollToPosition = (x, y) => {
     
      window.scrollTo({
        left: x,
        top: y,
        behavior: 'smooth',
      });
     
    };

    render(){
    return(
        <nav className={`navbar`}>
        <div className='Logo'>
          <img src='images/logo.png' width={250}/>
        </div>

          <ul className="nav-list">
            <li className="nav-item"><Link to ="/">Shop</Link></li>
            <li className="nav-item"><Link to="/VisitUs">Visit Us</Link></li>
            <button className="nadu" onClick={()=>this.scrollToPosition(0,6500)}>Contact Us</button>
           </ul>

        </nav>

    );
    }
} 
export default Nav;