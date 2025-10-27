import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
export const navData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Pricing",
    path: "/pricing",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];


const Navbar = () => {
 const [open, setOpen] = useState(false)
const link = navData.map(route => <li className='mr-9' key={route.id}><a href={route.path}>{route.name}</a></li>);
    return (
      
        <nav className='flex justify-between mx-10'>
          <span onClick={() => {setOpen(!open)}}>
            {open? <X></X> : <Menu></Menu>}
          </span>
        
          
            <ul className='flex'>
        {link}
            </ul>
            <button>Sign In</button>
        </nav>
        
    );
};

export default Navbar;