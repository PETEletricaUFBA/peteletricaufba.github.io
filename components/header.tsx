import Link from "next/link";
import Logo from "./logo";
import { useState, useEffect, useRef } from "react";

const menu = [
  {
    name: "Página Inicial",
    link: "/"
  },
  {
    name: "Blog",
    link: "/corrente-alternativa",
  },
  {
    name: "Atividades",
    link: "/atividades",
  }
];

function Header(): JSX.Element {
  const [active, setActive] = useState(false);
  const [ensinoDropdownActive, setEnsinoDropdownActive] = useState(false);
  const [sobreDropdownActive, setSobreDropdownActive] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setActive(!active);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setActive(false);
      setEnsinoDropdownActive(false);
      setSobreDropdownActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setActive(false);
    setEnsinoDropdownActive(false);
    setSobreDropdownActive(false);
  };

  return (
    <header className="navigation">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent text-center" ref={navRef}>
          <div className="container-fluid">
            <Link href="/" passHref>
              <a className="navbar-brand">
                <Logo />
              </a>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              onClick={handleClick}
              aria-controls="navbarNav"
              aria-expanded={active}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${active ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav mx-auto">
                {menu.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <Link href={item.link} passHref>
                      <a className="nav-link" title={item.name} onClick={handleLinkClick}>
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}

               {/* Dropdown Ensino */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownEnsino"
                    role="button"
                    onClick={() => {
                      setEnsinoDropdownActive(!ensinoDropdownActive);
                      setSobreDropdownActive(false);
                    }}
                    aria-expanded={ensinoDropdownActive}
                  >
                    Ensino
                  </a>
                  <ul className={`dropdown-menu ${ensinoDropdownActive ? 'show' : ''}`} aria-labelledby="navbarDropdownEnsino">
                    <li>
                      <Link href="/cursos" passHref>
                        <a className="dropdown-item text-center" onClick={() => setEnsinoDropdownActive(false)}>Videoaulas</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/manutencao" passHref>
                        <a className="dropdown-item text-center" onClick={() => setEnsinoDropdownActive(false)}>Manual do Calouro</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Dropdown Sobre nós */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownSobre"
                    role="button"
                    onClick={() => {
                      setSobreDropdownActive(!sobreDropdownActive);
                      setEnsinoDropdownActive(false);
                    }}
                    aria-expanded={sobreDropdownActive}
                  >
                    Sobre nós
                  </a>
                  <ul className={`dropdown-menu ${sobreDropdownActive ? 'show' : ''}`} aria-labelledby="navbarDropdownSobre">
                    <li>
                      <Link href="/downloads" passHref>
                        <a className="dropdown-item text-center" onClick={() => setSobreDropdownActive(false)}>Planejamentos</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team" passHref>
                        <a className="dropdown-item text-center" onClick={() => setSobreDropdownActive(false)}>Time</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <Link href="/prosel" passHref>
                <a title="Processo Seletivo" className="btn btn-sm btn-primary ml-lg-3" onClick={handleLinkClick}>
                  Processo Seletivo
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
