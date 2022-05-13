// React
import { NavLink } from 'react-router-dom';
// Assets
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <NavLink to='/'>
      <img src={logo} width='300' className='pt-5' alt='Pokemon Logo' />
    </NavLink>
  );
}
