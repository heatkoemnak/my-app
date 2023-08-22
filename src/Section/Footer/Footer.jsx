import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-800">
        <div className="container">
          <div className="wrap1">
            <div className="link-wrap">
              <h5 className="uppercase mb-6 font-bold">Links</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <Link to="">FAQ</Link>
                </li>
                <li className="mt-2">
                  <Link to="">Help</Link>
                </li>
                <li className="mt-2">
                  <Link to="">Support</Link>
                </li>
              </ul>
            </div>
            <div className="link-wrap ">
              <h5 className="uppercase mb-6 font-bold">Legal</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <Link to="">Terms</Link>
                </li>
                <li className="mt-2">
                  <Link to="">Privacy</Link>
                </li>
              </ul>
            </div>
            <div className="link-wrap ">
              <h5 className="uppercase mb-6 font-bold">Social</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <Link to="">Facebook</Link>
                </li>
                <li className="mt-2">
                  <Link to="">Linkedin</Link>
                </li>
                <li className="mt-2">
                  <Link to="">Twitter</Link>
                </li>
              </ul>
            </div>
            <div className="link-wrap ">
              <h5 className="uppercase mb-6 font-bold">Company</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <Link to="">Official Blog</Link>
                </li>
                <li className="mt-2">
                  <Link to="">About Us</Link>
                </li>
                <li className="mt-2">
                  <Link to="">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* End of Footer */}
          <div className="pt-2">
            <div
              className="flex pb-5 px-3 m-auto pt-5
                                        border-t border-gray-500 text-gray-400 text-sm
                                        flex-col md:flex-row max-w-6xl"
            >
              <div className="mt-2">
                © 2021 Company, Inc. All Rights Reserved.
              </div>
              <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-facebook-f"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-twitter-alt"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-youtube"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-linkedin"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-instagram"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
