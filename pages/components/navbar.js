// components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };

  const handleUserClick = () => {
    router.push('about');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="navbar-brand" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
          <img src="/qbit.png" alt="qbit logo" className="logo" />
        </div>
        <ul className="navbar-nav mx-auto">
        </ul>
      </div>
      <style jsx>{`
        .logo {
          width: 50px; // Sesuaikan ukuran logo sesuai kebutuhan
          height: 50px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
