import Navbar from "../Navbar/Navbar";
import DeliveryPerson from "@/assets/images/delivery_person.svg";
import ShoppingBag from "@/assets/icons/shopping-bag.svg";
import Truck from "@/assets/icons/truck.svg";
import Package from "@/assets/icons/package.svg";
import { useLocation } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <div className="home-landing">
          <h1 className="home-landing-title">Smart Customer Services</h1>
          <h3 className="home-landing-subtitle">Food Department</h3>
          <img
            className="home-landing-img w-75 p-3 img-fluid mx-auto d-block"
            src={DeliveryPerson}
          />
        </div>
        <div className="about">
          <h3 className="about-header">About Us</h3>
          <p id="about-desc">
            Smart Customer Services (SCS) is an innovative online system
            designed to revolutionize the way we plan our trips within cities
            and neighborhoods, especially for shopping and delivery purposes.
            The system was developed with the primary goal of reducing the
            negative impacts of traffic on the quality of life, such as stress,
            frustration, delays, and air pollution, while also providing an
            efficient and convenient shopping experience for customers. With
            SCS, customers can easily browse and purchase products online from
            various warehouses located near their destination address. The
            system intelligently plans the most efficient and eco-friendly route
            for the delivery of these products, reducing the number of vehicles
            on the road and minimizing travel time. This helps to decrease
            traffic congestion, which in turn improves the flow of traffic and
            reduces the likelihood of accidents. The benefits of using SCS
            extend far beyond the obvious environmental benefits. Customers can
            also enjoy the convenience of shopping from the comfort of their
            homes, without the hassle of physically visiting a store. SCS also
            helps to reduce delivery costs and eliminates the need for multiple
            delivery attempts, which can save both time and money.
          </p>
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
                <img className="services-img" src={Truck} />
              </div>
              <div className="col-sm">
                <h4 className="services-subheader">Past Orders</h4>
                <img className="services-img" src={Package} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
