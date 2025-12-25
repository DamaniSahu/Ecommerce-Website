import React from "react";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col gap-4 p-5 bg-red-300 font-serif">
      <div className="bg-red-300 shadow-lg text-black p-5">
        <h1 className="font-semibold text-lg lg:text-4xl underline">
          About Us
        </h1>
        <p className="text-md lg:text-3xl">Welcome to Our E-Commerce Store!</p>
        <p className="text-md lg:text-2xl ">
          We are committed to providing high-quality products at affordable
          prices, all in one convenient place. Our goal is to make online
          shopping simple, fast, and enjoyable for everyone. This website is
          designed with a user-friendly interface that allows customers to
          easily browse products, add items to the cart, and manage their
          shopping experience smoothly.
        </p>
      </div>

      <div className="bg-red-300 shadow-lg text-black p-5">
        <h1 className="font-semibold text-lg lg:text-4xl underline">
          Our Mission
        </h1>
        <p className="text-md lg:text-2xl">
          To deliver reliable products with a smooth and secure online shopping
          experience while focusing on customer satisfaction.
        </p>
      </div>

      <div className="bg-red-300 shadow-lg text-black p-5">
        <h1 className="font-semibold text-lg lg:text-4xl underline">
          Why Choose Us?
        </h1>
        <ul className="pl-8">
          <li className="text-md lg:text-2xl list-disc">
            Easy and clean website design
          </li>
          <li className="text-md lg:text-2xl list-disc">
            Simple cart functionality
          </li>
          <li className="text-md lg:text-2xl list-disc">
            Affordable and quality products
          </li>
          <li className="text-md lg:text-2xl list-disc">
            Beginner-friendly and smooth user experienc
          </li>
        </ul>
      </div>

      <div className="bg-red-300 shadow-lg text-black p-5">
        <h1 className="font-semibold text-lg lg:text-4xl underline">
          Our Vision
        </h1>
        <p className="text-md lg:text-2xl">
          We aim to grow this platform into a trusted online shopping
          destination by continuously improving features and providing better
          services to our users.
        </p>
      </div>

      <div className="flex justify-center items-center gap-2 mt-5">
        <a href="https://www.facebook.com/">
          <FiFacebook />
        </a>
        <a href="https://www.instagram.com/">
          <IoLogoInstagram />
        </a>
        <a href="https://www.youtube.com/">
          <AiOutlineYoutube />
        </a>
        <a href="https://in.linkedin.com/?mcid=6844056167778418689&src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.sign%20in%20to%20linkedin_d.c_tid.kwd-3500001_n.g_mt.e_geo.1007828&cid=&gclsrc=aw.ds&gad_source=1&gad_campaignid=14650114788&gbraid=0AAAAABKX7wGLJy3lXA2ThnkEiAx5YY0qh&gclid=EAIaIQobChMIwPiH15DZkQMVZ6JmAh0s-gHSEAAYASAAEgKcdfD_BwE">
          <FaLinkedinIn />
        </a>
      </div>
      <p className="text-center">@2025 - BeautyProduct</p>
    </div>
  );
};

export default About;
