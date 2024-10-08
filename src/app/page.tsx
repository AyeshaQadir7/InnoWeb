"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-white bg-deepCharcoal min-h-screen font-poppins overflow-x-hidden scroll-smooth">
      <Head>
        <title>Inno Web</title>
        <meta name="description" content="Web Design Agency" />
        <link rel="icon" href="/assets/innoweb.png" />
      </Head>

      <div className="relative z-10">
        {/* Navbar */}
        <nav
          className={`flex justify-between items-center p-6
        fixed md:relative top-0 left-0 right-0 z-50
        bg-deepCharcoal backdrop-blur-lg md:bg-opacity-100 md:backdrop-blur-none`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/assets/innoweb.png"
              className="cursor-pointer"
              alt="logo"
              width={120}
              height={40}
            />
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex gap-10 cursor-pointer">
            <li className="hover:text-pink-500 transition-colors duration-300">
              Products
            </li>
            <li className="hover:text-pink-500 transition-colors duration-300">
              Solutions
            </li>
            <li className="hover:text-pink-500 transition-colors duration-300">
              Customer
            </li>
            <li className="hover:text-pink-500 transition-colors duration-300">
              Pricing
            </li>
            <li className="hover:text-pink-500 transition-colors duration-300">
              Resources
            </li>
          </ul>

          {/* Register Button */}
          <button className="hidden md:flex items-center font-medium text-white hover:text-gray-200 transition-colors duration-300">
            REGISTER NOW
            <i className="fa-solid fa-arrow-right pl-2"></i>
          </button>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed h-3/4 top-0 left-0 right-0 bottom-0 z-40 
          bg-deepCharcoal bg-opacity-70 border-white border-opacity-20 shadow-lg  backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col text-center">
              <li className="text-lg mb-4 hover:text-pink-500 transition-colors duration-300">
                Products
              </li>
              <li className="text-lg mb-4 hover:text-pink-500 transition-colors duration-300">
                Solutions
              </li>
              <li className="text-lg mb-4 hover:text-pink-500 transition-colors duration-300">
                Customer
              </li>
              <li className="text-lg mb-4 hover:text-pink-500 transition-colors duration-300">
                Pricing
              </li>
              <li className="text-lg mb-4 hover:text-pink-500 transition-colors duration-300">
                Resources
              </li>
            </ul>
            <button className="flex items-center mt-4 font-medium text-white hover:text-gray-200 transition-colors duration-300">
              REGISTER NOW
              <i className="fa-solid fa-arrow-right pl-2"></i>
            </button>
          </div>
        )}


        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-center mt-10 md:mt-0 px-6 space-y-8 md:space-y-0 md:space-x-8">

          {/* Left Section */}
          <div className="flex justify-between space-y-4 order-2 md:order-1 md:w-1/4 md:flex-col ">
            <div className="w-44 h-2/4  m-4 md:ml-10 rounded-xl bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 p-6 shadow-lg ">
              <p className="text-2xl font-medium tracking-wider">240+ <br /> <span className="font-light text-base">PARTNERS</span>
              </p>
            </div>

            <div className="w-44 h-2/4  m-4 md:ml-10 rounded-xl bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 p-6 shadow-lg">
              <p className="text-2xl font-medium tracking-wider">92% <br />
                <span className="font-light text-base">FASTER TECH</span>
              </p>
            </div>
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-center order-1 md:order-2 md:w-1/2">
            <h1 className="tracking-widest text-5xl mt-8 md:text-6xl font-bold text-center mb-2">
              Web Design <br />
              <span className="text-vividMagenta">Agency.</span>
            </h1>

            {/* Hero Image */}
            <div className="relative w-full max-w-md mt-8 md:mt-1">
              <Image
                src="/assets/heroimage.png"
                alt="Hero Image"
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-start order-3 mb-12 md:order-3 md:w-1/4 px-4 md:px-0">
            <p className="text-lg font-light text-start">
              Transforming your vision into stunning, responsive websites that
              captivate and convert.
            </p>
            <button className="bg-white text-black rounded-full p-3 mt-4 text-xs font-semibold hover:bg-gray-200 transition-colors duration-300">
              GET STARTED
            </button>
          </div>
        </section>


        {/* Banner */}
        <section className="relative mt-14 inset-0 transform -skew-y-2 py-4 text-white bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 shadow-lg border-x-0 md:mt-0">

          <div className="relative z-10 container mx-auto px-3">
            <div className="flex flex-wrap justify-between md:justify-between items-center space-x-3 ">
              <a href="#" className="text-sm font-light md:text-lg md:font-normal px-0 py-1">
                Website Design
              </a>
              <a
                href="#"
                className="text-sm md:text-lg md:font-normal text-electricOrange md:px-2 md:py-1"
              >
                <i className="fa-solid fa-star"></i>
              </a>
              <a href="#" className="text-sm font-light md:text-lg md:font-normal px-0 py-1 hidden md:flex">
                Dashboard
              </a>
              <a
                href="#"
                className="text-sm md:text-lg md:font-normal text-electricOrange md:px-2 md:py-1 hidden md:flex"
              >
                <i className="fa-solid fa-star"></i>
              </a>
              <a href="#" className="text-sm font-light md:text-lg md:font-normal px-0 py-1">
                UI/UX
              </a>
              <a
                href="#"
                className="text-sm md:text-lg md:font-normal text-electricOrange md:px-2 md:py-1"
              >
                <i className="fa-solid fa-star"></i>
              </a>
              <a href="#" className="text-sm font-light md:text-lg md:font-normal px-0 py-1">
                Development
              </a>
              <a
                href="#"
                className="text-sm md:text-lg md:font-normal text-electricOrange md:px-2 md:py-1 hidden md:flex"
              >
                <i className="fa-solid fa-star"></i>
              </a>
              <a href="#" className="text-sm font-light md:text-lg md:font-normal px-0 py-1 hidden md:flex ">
                Strategy
              </a>
              <a
                href="#"
                className="text-sm md:text-lg md:font-normal text-electricOrange md:px-2 md:py-1 hidden md:flex "
              >
                <i className="fa-solid fa-star"></i>
              </a>
              <a href="#" className="text-sm font-light md:text-lg md:font-normal px-0 py-1 hidden md:flex ">
                NFT Art
              </a>
            </div>
          </div>
        </section>

        {/* Service Section */}
        <section className="mt-28 px-6 md:px-0">

          <h2 className="text-4xl md:text-5xl font-bold text-center tracking-wide">
            Our <span className="text-vividMagenta">Services</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-between mt-16 md:mt-20">
            <div className="md:w-1/2 lg:w-2/5 p-4 md:p-0 ml-10">
              <h3 className="text-xl md:text-4xl font-medium">UI/UX Design</h3>
              <p className="mt-4">
                Hands-on learning via real-life innovation projects. Save Rs 8,210
                On This Course. Create immersive UI via wireframes. Conduct
                heuristic evaluations of your UX design.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <i className="fa-solid fa-check text-electricOrange bg-white bg-opacity-10 backdrop-blur-lg p-2 text-lg rounded-full mr-3"></i>
                  User Interface Design
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-check text-electricOrange bg-white bg-opacity-10 backdrop-blur-lg p-2 text-lg rounded-full mr-3"></i>
                  User Experience Design
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-check text-electricOrange bg-white bg-opacity-10 backdrop-blur-lg p-2 text-lg rounded-full mr-3"></i>
                  Mobile Application Design
                </li>
              </ul>

              <button className="mt-6 px-5 py-3 font-light rounded-full bg-transparent text-white border border-white border-opacity-30 shadow-lg hover:bg-graphiteGrey transition-colors duration-300">
                Learn More{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>

            <div className="md:w-1/2 lg:w-2/4 mt-10 md:mt-0">
              <Image
                className="w-12 h-12"
                src="/assets/serviceimage.png"
                alt="service image"
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-16 md:mt-20 text-center text-white bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 p-6 shadow-lg border-x-0">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-4">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold mb-3">5M+</h3>
              <p className="font-extralight">Customers</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold mb-3">450M+</h3>
              <p className="font-extralight">Coverage</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold mb-3">22%</h3>
              <p className="font-extralight">Earnings</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold mb-3">8.03%</h3>
              <p className="font-extralight">Interest</p>
            </div>
          </div>
        </section>

        {/* Customer Section */}
        <section className="py-12 px-6 md:px-0">
          <h2 className="text-4xl md:text-5xl font-semibold text-center tracking-wide text-white mb-8 mt-24">
            Our Happy <span className="text-vividMagenta">Customers</span>
          </h2>

          <div className="mt-20 flex justify-center">
            <div className="flex flex-nowrap md:overflow-visible overflow-x-scroll overflow-y-visible px-4 gap-6">

              {/* Card 1 */}
              <div className="snap-center flex-shrink-0 w-72 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 rounded-lg p-6 shadow-lg transition-transform duration-500 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <Image
                    className="w-14 h-14 rounded-full"
                    src="/assets/c2.png"
                    alt="Customer Image"
                    height={56}
                    width={56}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Sophia Wilson
                    </h3>
                    <p className="text-sm text-gray-400">CEO of Alpha</p>
                  </div>
                </div>
                <p className="mt-4 text-white text-opacity-80">
                  "Such a seamless experience from start to finish. I had an
                  issue, but customer service resolved it within minutes! I'll
                  definitely be back for more."
                </p>
                <div className="mt-4 text-yellow-500">
                  <i className="fa-solid fa-star mr-2"></i>
                  <i className="fa-solid fa-star mr-2"></i>
                  <i className="fa-solid fa-star mr-2"></i>
                  <i className="fa-solid fa-star mr-2"></i>
                  <i className="fa-solid fa-star mr-2"></i>
                </div>
              </div>

              {/* Card 2 */}
              <div className="snap-center flex-shrink-0 w-72 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 rounded-lg p-6 shadow-lg transition-transform duration-500 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <Image
                    className="w-14 h-14 rounded-full"
                    src="/assets/c1.jpg"
                    alt="Customer Image"
                    height={56}
                    width={56}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Jhon Doe</h3>
                    <p className="text-sm text-gray-400">Founder of Beta</p>
                  </div>
                </div>
                <p className="mt-4 text-white text-opacity-80">
                  "I had a fantastic experience with this company. The quality exceeded my expectations. Highly recommend!"
                </p>
                <div className="mt-4 text-yellow-500">
                  <i className="fa-solid fa-star mr-2"></i>
                  <i className="fa-solid fa-star mr-2"></i>
                  <i className="fa-solid fa-star mr-2"></i>
                  <i className="fa-solid fa-star mr-2"></i>
                  <i className="fa-solid fa-star mr-2"></i>
                </div>
              </div>

              {/* Card 3 */}
              <div className="snap-center flex-shrink-0 w-72 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 rounded-lg p-6 shadow-lg transition-transform duration-500 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <Image
                    className="w-14 h-14 rounded-full"
                    src="/assets/c3.jpg"
                    alt="Customer Image"
                    height={56}
                    width={56}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      David Brown
                    </h3>
                    <p className="text-sm text-gray-400">Founder of Gamma</p>
                  </div>
                </div>
                <p className="mt-4 text-white text-opacity-80">
                  "Absolutely in love with the quality and attention to detail.
                  The customer service was fantastic, and delivery was super
                  fast!"
                </p>
                <div className="mt-4 text-yellow-500">
                  <i className="fa-solid fa-star mr-2"></i>
                  <i className="fa-solid fa-star mr-2"></i>
                  <i className="fa-solid fa-star mr-2"></i>
                  <i className="fa-solid fa-star mr-2"></i>
                  <i className="fa-solid fa-star mr-2"></i>
                </div>
              </div>

              {/* Card 4 */}
              <div className="snap-center flex-shrink-0 w-72 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 rounded-lg p-6 shadow-lg transition-transform duration-500 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <Image
                    className="w-14 h-14 rounded-full"
                    src="/assets/c4.jpg"
                    alt="Customer Image"
                    height={56}
                    width={56}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Alex Johnson
                    </h3>
                    <p className="text-sm text-gray-400">Founder of Delta</p>
                  </div>
                </div>
                <p className="mt-4 text-white text-opacity-80">
                  "Super impressed by the product quality and the user-friendly
                  website. I've recommended this to all my friends, and they love
                  it too!"
                </p>
                <div className="mt-4 text-yellow-500">
                  <i className="fa-solid fa-star mr-2"></i>
                  <i className="fa-solid fa-star mr-2"></i>
                  <i className="fa-solid fa-star mr-2"></i>
                  <i className="fa-solid fa-star mr-2"></i>
                  <i className="fa-solid fa-star mr-2"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
            {/* Logo and Description */}
            <div className="md:w-1/3">
              <Image
                className="mb-8"
                src="/assets/innoweb.png"
                alt="logo"
                width={120}
                height={40}
              />
              <p className="text-sm font-extralight">
                Cryptocurrency is a type of virtual currency that uses
                cryptography to secure transactions that are digitally recorded on
                a distributed ledger, such as a blockchain.
              </p>

              <div className="flex space-x-7 mt-8 text-xl">
                <i className="fa-brands fa-facebook-f text-electricOrange bg-white bg-opacity-10 backdrop-blur-lg py-3 px-4 text-lg rounded-full cursor-pointer"></i>
                <i className="fa-brands fa-twitter text-electricOrange bg-white bg-opacity-10 backdrop-blur-lg py-3 px-3 text-lg rounded-full cursor-pointer"></i>
                <i className="fa-brands fa-instagram text-electricOrange bg-white bg-opacity-10 backdrop-blur-lg py-3 px-3 text-lg rounded-full cursor-pointer"></i>
                <i className="fa-brands fa-linkedin-in text-electricOrange bg-white bg-opacity-10 backdrop-blur-lg py-3 px-3 text-lg rounded-full cursor-pointer"></i>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Useful Links */}
              <div className="text-xs">
                <h3 className="font-semibold mb-4 text-base">Useful Links</h3>
                <ul>
                  <li className="mb-4  font-light hover:text-gray-300 transition-colors duration-300">
                    <a href="#">iOS Apps</a>
                  </li>
                  <li className="mb-4 font-light hover:text-gray-300 transition-colors duration-300">
                    <a href="#">Contact Us</a>
                  </li>
                  <li className="mb-4 font-light hover:text-gray-300 transition-colors duration-300">
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li className="mb-4 font-light hover:text-gray-300 transition-colors duration-300">
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div className="text-xs">
                <h3 className="font-semibold mb-4 text-base">Contact Us</h3>
                <ul className="leading-6">
                  <li className="mb-4 font-light hover:text-gray-300 transition-colors duration-300">
                    <a href="#">+91 000000000</a>
                  </li>
                  <li className="mb-4 font-light hover:text-gray-300 transition-colors duration-300">
                    <a href="#">ayeshaabdulqadir7@gmail.com</a>
                  </li>
                  <li className="mb-4 font-light hover:text-gray-300 transition-colors duration-300">
                    <a href="#">Dgin St. Ceelina Delaware 10299</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="p-4 mt-4 text-sm font-extralight text-center border-t-2 border-white border-opacity-20">
            <p>All Rights Reserved © InnoWeb 2024</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
