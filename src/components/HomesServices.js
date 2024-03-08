import img1 from '../assets/imgserv1.jpeg'
import img2 from '../assets/imgserv2.jpeg'
import img3 from '../assets/imgserv3.jpeg'
import img4 from '../assets/imgserv4.jpeg'
import { Link } from 'react-router-dom'
import Logo from "../assets/de-emicslogo.png"
import { FaServicestack } from 'react-icons/fa6'

const HomesServices = ({servicsLink}) => {
  return (
    <div className='homes-services'>
      <div className='homes-services-statement'>
        <h3>Our Services <FaServicestack/></h3>
        <h4>De emics services</h4>
        <p>
          <span class="demics-abt">DE-EMICS GRANDHOTEL</span> offers 200 spacious guest
          rooms overlooking a breath-taking surrounding landscape
          and offering a magnificent view over the Dead Sea, all
          customized for contemporary class accommodation and
          maximum enjoyment.
          Each room is meticulously crafted to epitomize contemporary elegance, with every detail thoughtfully curated to provide the utmost in comfort and sophistication. Whether you're seeking a peaceful retreat or a lavish escape, our accommodations are designed to exceed your expectations, offering a harmonious blend of modern luxury and timeless charm.
        </p>
       {servicsLink && <Link to={servicsLink} className='btn-primary'>Know More</Link>}
      </div>
      <div className='homes-services-img'>
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
        <img src={img3} alt="img3" />
        <img src={img4} alt="img4" />
        <img src={Logo} alt="logo" />
      </div>
    </div>
  )
}

export default HomesServices