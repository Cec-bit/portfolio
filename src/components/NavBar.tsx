import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
      <nav className="nav">
        <ul>
            <li><Link href="#Home">Home</Link></li>
            <li><Link href="#AboutMe">About</Link></li>
            <li><Link href="#Portfolio">Portfolio</Link></li>
            <li><Link href="#Contact">Contact</Link></li>
        </ul>
      </nav>
    );
  };

  export default NavBar;
