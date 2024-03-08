import React from 'react'
import Imgone from "../assets/abt-img1.jpeg";
import Imgtwo from "../assets/abt-img2.jpeg";
import Imgthree from "../assets/abt-img3.jpeg";
import Imgfour from "../assets/abt-img4.jpeg";
import Logo from "../assets/de-emicslogo.png"
import { Link } from 'react-router-dom';


const HomeAboutCard = ({link}) => {
  return (
    <div className='home-about-card'>
      <div className="home-about">
        <h3>About Us</h3>
        <h4>Welcome to De-Emics Grand Hotel</h4>
        <p class="demics">
          At <span class="demics-abt">DE-EMICS GRANDHOTEL</span>, we
          redefine the essence of hospitality, offering
          an exquisite retreat, Our commitment is to
          provide an unparalleled experience,
          ensuring every guest feels indulged and at
          home.
          <span class="sports"><i>Swimming Pool</i>: Dive into relaxation with
            our pristine swimming pool. Whether it's a
            refreshing morning swim or a leisurely
            afternoon by the water, our pool offers a
            tranquil escape.</span>
          <span class="sports"><i>Air-Conditioned Comfort</i>: Each of our
            thoughtfully designed rooms boasts modern
            amenities, including top-notch airconditioning to ensure your stay is always
            cool and comfortable.</span>
        </p>
        {link && <Link to={link} className='btn-primary'>Know More</Link>}
      </div>
      <div className='home-about-img'>
        <img src={Imgone} alt="imgOne" />
        <img src={Imgtwo} alt="imgTwo" />
        <img src={Imgthree} alt="imgThree" />
        <img src={Imgfour} alt="imgFour" />
        <img src={Logo} alt="logo" />
      </div>
    </div>
  )
}

export default HomeAboutCard