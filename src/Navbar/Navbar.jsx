import { Link } from "react-router-dom";
import logo from "../assets/logo/unnamed.png"

const Navbar = () => {
  return (
          <div className="navbar lg:px-10">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-white">
              <li>
                <details>
                  <summary>Research Institutes</summary>
                  <ul className="p-2 bg-transparent">
                    <li><Link>IISC</Link></li>
                    <li><Link>IISER</Link></li>
                    <li><Link>NISER</Link></li>
                    <li><Link>ISI</Link></li>
                    <li><Link>CMI</Link></li>
                    <li><Link>IACS</Link></li>
                    <li><Link>CEBS</Link></li>
                  </ul>
                </details>
              </li>

              <li><Link to="https://www.sciastra.com/courses/">Courses</Link></li>

              <li><Link to="https://www.sciastra.com/selections/">Selections</Link></li>

              <li>
                <details>
                  <summary>Our Team</summary>
                  <ul className="p-2 bg-transparent">
                    <li><Link>Mission</Link></li>
                    <li><Link>Team</Link></li>
                    <li><Link>Book a session</Link></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Resources</summary>
                  <ul className="p-2 bg-transparent">
                    <li><Link>Blogs</Link></li>
                    <li><Link>Material</Link></li>
                    <li><Link>Web Stories</Link></li>
                    <li><Link>Alumni Login</Link></li>
                  </ul>
                </details>
              </li>
              <li><Link to="https://www.sciastra.com/contact/">Contact Us</Link></li>
              </ul>
            </div>
            <Link className=""><img className="lg:w-16 w-10 lg:h-16 h-10 rounded-full" src={logo} alt="" /></Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">
            <li>
                <details>
                  <summary className="font-semibold">Research Institutes</summary>
                  <ul className="p-2 bg-transparent">
                    <li><Link>IISC</Link></li>
                    <li><Link>IISER</Link></li>
                    <li><Link>NISER</Link></li>
                    <li><Link>ISI</Link></li>
                    <li><Link>CMI</Link></li>
                    <li><Link>IACS</Link></li>
                    <li><Link>CEBS</Link></li>
                  </ul>
                </details>
              </li>

              <li className="font-semibold"><Link to="https://www.sciastra.com/courses/">Courses</Link></li>

              <li className="font-semibold"><Link to="https://www.sciastra.com/selections/">Selections</Link></li>

              <li>
                <details>
                  <summary className="font-semibold">Our Team</summary>
                  <ul className="p-2 bg-transparent">
                    <li><Link>Mission</Link></li>
                    <li><Link>Team</Link></li>
                    <li><Link>Book a session</Link></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="font-semibold">Resources</summary>
                  <ul className="p-2 bg-transparent">
                    <li><Link>Blogs</Link></li>
                    <li><Link>Material</Link></li>
                    <li><Link>Web Stories</Link></li>
                    <li><Link>Alumni Login</Link></li>
                  </ul>
                </details>
              </li>
              <li className="font-semibold"><Link to="https://www.sciastra.com/contact/">Contact Us</Link></li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link className="btn bg-gradient-to-r from-indigo-600 to-sky-400">Login</Link>
          </div>
        </div>
  );
};

export default Navbar;
