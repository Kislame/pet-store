import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import './navbar.css';

const Navbar = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const lastEl = useRef<HTMLAnchorElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const menuRefBtn = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    slideRef.current?.classList.add('visible', 'open');
    setTimeout(() => {
      btnRef.current?.focus();
    }, 1);
    menuRefBtn.current?.setAttribute('aria-hidden', 'true');
  };
  const closeNav = (e: React.KeyboardEvent | React.MouseEvent) => {
    if (e.type === 'keyup' && (e as React.KeyboardEvent).key !== 'Escape') {
      return;
    }
    slideRef.current?.classList.remove('open');
    menuRefBtn.current?.removeAttribute('aria-hidden');
    setTimeout(() => {
      menuRefBtn.current?.focus();
    }, 1);
    setTimeout(() => {
      slideRef.current?.classList.remove('visible');
    }, 501);
  };

  function moveFocusToTop(e: React.KeyboardEvent) {
    if (e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      btnRef.current?.focus();
    }
  }
  function moveFocusToBottom(e: React.KeyboardEvent) {
    if (e.key === 'Tab' && e.shiftKey) {
      e.preventDefault();
      lastEl.current?.focus();
    }
  }

  return (
    <header className="header">
      <span className="logo">Petopia</span>
      <nav className="navbar" role="navigation">
        <button
          ref={menuRefBtn}
          aria-label="open navigation"
          aria-controls="link-list"
          aria-expanded="false"
          onClick={() => handleClick()}
          className="nav__menu-bars"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="11"
          >
            <g fill="#2D314D" fillRule="evenodd">
              <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
            </g>
          </svg>
        </button>
        <div onKeyUp={closeNav} ref={slideRef} className="slide-nav">
          <button
            ref={btnRef}
            onClick={closeNav}
            aria-label="close navigation"
            className="nav__menu-close"
            onKeyDown={moveFocusToBottom}
          >
            <svg
              aria-hidden="false"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
            >
              <g fill="#2D314D" fillRule="evenodd">
                <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
                <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
              </g>
            </svg>
          </button>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              {' '}
              <a href="#">About Us</a>
            </li>
            <li>
              <a onKeyDown={moveFocusToTop} ref={lastEl} href="#">
                Delivery
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
