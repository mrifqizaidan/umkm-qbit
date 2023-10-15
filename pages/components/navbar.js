// components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };

  const handleUserClick = () => {
    router.push('/users');
  };

  const handleUser2Click = () => {
    router.push('/users2');
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <button className="nav-link btn fw-bold" onClick={handleHomeClick}>
              Home |
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn fw-bold" onClick={handleUserClick}>
              | Users
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn fw-bold" onClick={handleUser2Click}>
              | Users 2
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
