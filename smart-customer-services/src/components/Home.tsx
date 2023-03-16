import Navbar from "./Navbar";
import DeliveryPerson from '@/assets/images/delivery_person.svg';
import ShoppingBag from '@/assets/icons/shopping-bag.svg';
import Truck from '@/assets/icons/truck.svg';


export default function Home() {
  return <div className="home">
    <Navbar/>
    <div className="home-content">
      <div className="home-landing">
        <h1 className="home-landing-title">Smart Customer Services</h1>
        <h3 className="home-landing-subtitle">Food Department</h3>
        <img className="home-landing-img w-75 p-3 img-fluid mx-auto d-block" src={DeliveryPerson}/>
      </div>
      <div className="about">
        <h3 className="about-header">About Us</h3>
        <p id="about-desc">SCS is an online system that aims to plan for smart green trips inside the city and its neighborhood for online shopping and then delivery
          to the destinations. Considering the traffic as a serious threat to the quality of life these years, the world has been looking
          for various solutions to decrease the stress, frustration, delays and terrible air pollutions being caused through it. SCS
          attempts to provide a smart green solution on this regard by providing online shopping services and then delivery of the
          purchased items from the warehouses selected/close to the destination address.</p>
      </div>
      <div className="services">
        <h3 className="services-header">Our Services</h3>
        <div className="container text-center">
          <div className="row col-gap">
            <div className="col-sm">
              <h4 className="services-subheader">Online Shopping</h4>
              <img className="services-img" src={ShoppingBag} />
            </div>
            <div className="col-sm">
              <h4 className="services-subheader">Delivery</h4>
              <img className="services-img" src={Truck}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
