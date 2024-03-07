import { BiDish } from "react-icons/bi";
import Imgone from "../assets/meal1.jpeg";
import Imgtwo from "../assets/meal2.jpeg";
import Imgthree from "../assets/meal3.jpeg";
import Imgfour from "../assets/meal4.jpeg";


const Meals = () => {
  return (
    <div className='meal-services'>
      <div className='meal-services-statement'>
        <h3>Our Meals <BiDish /></h3>
        <h4>De emics meals</h4>
        <p>

          Indulge in the exquisite culinary delights of <span class="demic-meal">DE-EMICS GRANDHOTEL MEALS</span>, where every bite is a symphony of flavor and delight. Savor the tantalizing array of tasty meals meticulously crafted by our talented chefs, using only the freshest ingredients and finest culinary techniques. From sumptuous breakfast spreads to delectable lunch and dinner options, each dish is a culinary masterpiece that promises to tantalize your taste buds and leave you craving for more. Join us for a gastronomic journey like no other and discover the true essence of culinary excellence at DE-EMICS.
        </p>
      </div>
      <div className='meal-services-img'>
        <img src={Imgone} alt="img1" />
        <img src={Imgtwo} alt="img2" />
        <img src={Imgthree} alt="img3" />
        <img src={Imgfour} alt="img4" />
      </div>
    </div>
  )
}

export default Meals