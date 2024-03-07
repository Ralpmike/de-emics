import React from 'react'
import { FaEye } from "react-icons/fa6";
import ImgV1 from "../assets/vison-img1.jpeg"
import ImgV2 from "../assets/vison-img2.jpeg"
import Logo from "../assets/de-emicslogo.png"
import ImgV3 from "../assets/imgV3.jpeg"
import { TbTargetArrow } from "react-icons/tb";

const Vison = () => {
  return (
    <div className="vision">
      <div className="vision-statement">

        <h3>Our Vision <FaEye /> </h3>
        <h4>Vision Statement</h4>
        <p>The ideology of our vision is to continue to apply and set the
          highest standards of service quality and in that way justify and
          uphold the reputation that we have among the guests, partners,
          competitors and the wider community. We use and constantly
          introduce environmentally friendly technologies and processes in
          order to remain in balance with nature and also meet the needs
          of
          contemporary society. Tradition is a
          testament to our success but in the future we also want to
          embrace the changes that modern time brings and become more
          attractive in the market and more interesting to our guests and
          partners.
        </p>
        <div className="mission">
          <h3>Our Mission <TbTargetArrow /></h3>
          <h4>Mission Statement</h4>
          <p>
            The mission of De-Emics Grand Hotels is to
            put hospitality services on the highest level in order to satisfy
            the demands and
            expectations of guests. Our aim is to make De-Emics Grand
            Hotels a place for encounters, business success, pleasant
            meetings and gala ceremonies
          </p>
        </div>
      </div>
      <div className='vision-img'>
        <img src={ImgV1} alt="visionone" />
        <img src={ImgV2} alt="visontwo" />
        <img src={Logo} alt="logo" />
        <img src={ImgV3} alt="visionthree" />
      </div>
    </div>
  )
}

export default Vison