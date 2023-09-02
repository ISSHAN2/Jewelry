import React, { useEffect } from 'react';
import './NavigationMenu.css';

function NavigationMenu() {
  useEffect(() => {
    const nav = document.getElementById('wall');

    for (const link of nav.getElementsByTagName('a')) {
      link.onmousemove = (e) => {
        const rect = link.getBoundingClientRect(),
          img = link.querySelector('img');

        img.style.left = `${e.clientX - rect.left}px`;
        img.style.top = `${e.clientY - rect.top}px`;
      };
    }

    window.onmousemove = (e) => {
      const percent = e.clientY / window.innerHeight;

      nav.style.transform = `translateY(${percent * nav.offsetHeight * -1}px)`;
    };
  }, []);
  return (
    <div>
      <nav id="wall">
      <div style={{ height: '300px', overflowY: 'scroll' }}>
        </div>
        <a className="panja" href="#">
          <span className='hanji'>About</span>
          <img src="https://images.unsplash.com/photo-1660167941111-f7ccce818728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="About" className='photu'/>
        </a>
        <a className="panja"href="#">
          <span className='hanji'>Nav Link</span>
          <img src="https://images.unsplash.com/photo-1660070918769-f34c724cfe43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" alt="Nav Link" className='photu' />
        </a>
        {/* Add more <a> elements for other navigation links */}
      </nav>
      <div style={{ height: '1000px', overflowY: 'scroll' }}>
      <p>.</p>
      {/* You can add more content here */}
    </div>
    </div>
  );
}

export default NavigationMenu;