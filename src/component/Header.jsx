import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [show, set_show] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <>
      <nav className="p-2 text-5xl bg-gray-950 h-35 underline-offset-3 navbar bg-body-tertiary">
        
        <div className="flex justify-between text-5xl h-50 underline-offset-3 navbar bg-body-tertiary">
          
          <h1 className="flex justify-center pt-5 align-middle">
           Global Warming
          </h1>

          <div className="pt-0 home_btn">
            <nav className='flex pt-5 pl-20 text-2xl "nav_bar" '>
              {isAuthenticated && (
                <li className=" list-none pr-10">
                  <p> {user.name} </p>
                </li>
              )}
              {isAuthenticated ? (
                <li className=" list-none">
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li className=" list-none">
                  <button onClick={() => loginWithRedirect()}>Log In</button>
                </li>
              )}
              <a href="/">
                <h2 className="pl-20">Home</h2>
              </a>
              <a href="/about us">
                <h2 className="pl-20 ">About Us</h2>
              </a>
              <a href="/contact">
                <h2 className="pl-20 ">Contact Us</h2>
              </a>

              <div>
                <button
                  className="relative px-7"
                  onClick={() => set_show(!show)}
                >
                  More..
                </button>
                {show && (
                  <>
                    <div className="flex flex-col gap-3 absolute z-50 pb-3 right-2  top-[65px">
                      <a
                        href="/Causes"
                        className=" hover:bg-slate-700 rounded-lg p-[1.5px]"
                      >
                        Causes
                      </a>
                      <a
                        href="/Effect"
                        className=" hover:bg-slate-700 rounded-lg p-[1.5px]"
                      >
                        Effect
                      </a>
                      <a
                        href="/Solution"
                        className=" hover:bg-slate-700 rounded-lg p-[1.5px]"
                      >
                        Solutions
                      </a>

                      <a
                        href="/Glob_vs_cli"
                        className=" hover:bg-slate-700 rounded-lg p-[1.5px] text-lg"
                      >
                        Global Warming <br /> vs climate change
                      </a>
                      <a
                        href="/Quiz"
                        className=" hover:bg-slate-700 rounded-lg p-[1.5px] text-lg"
                      >
                        Quiz
                      </a>
                    </div>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      </nav>

      <div className="flex justify-end p-4 Search_btn bg-gray-950 h-35 underline-offset-3 navbar bg-body-tertiary">
        <div className="text-xl container-fluid ">
          <form className=" underline-offset-0 d-flex" role="search">
            <input
              className="p-1 text-3xl bg-transparent border-b-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
