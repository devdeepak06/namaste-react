const Header = () => {
  return (
    <div className="header">
      <a className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          fill="currentColor"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#5fad82"
            strokeWidth="3"
            fill="#4CAF50"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            fill="#fff"
            fontSize="20px"
            dy=".3em"
          >
            Bhojan Bazaar
          </text>
        </svg>
      </a>
      <nav className="navItems">
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Offers</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Sign in</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;