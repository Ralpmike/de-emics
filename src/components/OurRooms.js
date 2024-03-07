import room1 from '../assets/deemics-room1.jpeg'
import room2 from '../assets/deemics-room2.jpeg'
import room3 from '../assets/deemics-room3.jpeg'


const OurRooms = () => {
  return (
    <div className='our-rooms'>
      <div className="rooms">
        <img src={ room1} alt="" />
        <p>Customize your experience with a choice between smoking and non-smoking rooms, providing the perfect ambiance tailored to your preference and ensuring a comfortable environment for all guests.</p>
      </div>
      <div className="rooms">
        <img src={ room2} alt="" />
        <p>Stay seamlessly connected with convenient direct dial phones and unwind with a variety of entertainment options, including satellite TV, ensuring you never miss a moment of your favorite shows or movies.</p>
      </div>
      <div className="rooms">
        <img src={ room3} alt="" />
        <p>Stay productive or entertained with complimentary high-speed wired and wireless internet access, allowing you to browse, stream, or work from the comfort of your room with ease and convenience.</p>
      </div>
     
    </div>
  )
}

export default OurRooms