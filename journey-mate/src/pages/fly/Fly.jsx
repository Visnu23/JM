import "./fly.css";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import {faCalendar,faCalendarDays,faListCheck,faLocationDot, faPerson,faSave,faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import plan1 from "./assets/plan-1.jpg";
import plan2 from "./assets/plan-2.jpg";
import plan3 from "./assets/plan-3.jpg";
import lon1 from "./assets/lounge-1.jpg";
import lon2 from "./assets/lounge-2.jpg";

const Fly = () => {
  return (
    <div>
         <Navbar></Navbar>
         <Header type="list"></Header>
         <section class="section__container booking__container">
      <div class="booking__nav">
        <span>Economy Class</span>
        <span>Business Class</span>
        <span>First Class</span>
      </div>
      <form>
        <div class="form__group">
          <span><FontAwesomeIcon icon={faLocationDot}/></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" />
              <label>Location</label>
            </div>
            <p>Where are you going?</p>
          </div>
        </div>
        <div class="form__group">
          <span><FontAwesomeIcon icon={faPerson}/></span>
          <div class="input__content">
            <div class="input__group">
              <input type="number" />
              <label>Travellers</label>
            </div>
            <p>Add guests</p>
          </div>
        </div>
        <div class="form__group">
          <span><FontAwesomeIcon icon={faCalendar}/></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" />
              <label>Departure</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <div class="form__group">
          <span><FontAwesomeIcon icon={faCalendar}/></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" />
              <label>Return</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <button class="bott"><FontAwesomeIcon icon={faSearch}/></button>
      </form>
    </section>
    <section class="section__container plan__container">
      <p class="subheader">TRAVEL SUPPORT</p>
      <h2 class="section__header">Discover with confidence</h2>
      <p class="description">
        Find help with your bookings and travel plans, and seee what to expect
        along your journey.
      </p>
      <div class="plan__grid">
        <div class="plan__content">
          <span class="number">01</span>
          <h4>Travel Requirements for Dubai</h4>
          <p>
            Stay informed and prepared for your trip to Dubai with essential
            travel requirements, ensuring a smooth and hassle-free experience in
            this vibrant and captivating city.
          </p>
          <span class="number">02</span>
          <h4>Multi-risk travel insurance</h4>
          <p>
            Comprehensive protection for your peace of mind, covering a range of
            potential travel risks and unexpected situations.
          </p>
          <span class="number">03</span>
          <h4>Travel Requirements by destinations</h4>
          <p>
            Stay informed and plan your trip with ease, as we provide up-to-date
            information on travel requirements specific to your desired
            destinations.
          </p>
        </div>
        <div class="plan__image">
          <img src={plan1} alt="" />
          <img src={plan2} alt="" />
          <img src={plan3} alt="" />
        </div>
      </div>
    </section>
    <section class="memories">
      <div class="section__container memories__container">
        <div class="memories__header">
          <h2 class="section__header">
            Travel to make memories all around the world
          </h2>
          <button class="view__all">View All</button>
        </div>
        <div class="memories__grid">
          <div class="memories__card">
            <span><FontAwesomeIcon icon={faCalendarDays}/></span>
            <h4>Book & relax</h4>
            <p>
              With "Book and Relax," you can sit back, unwind, and enjoy the
              journey while we take care of everything else.
            </p>
          </div>
          <div class="memories__card">
            <span><FontAwesomeIcon icon={faListCheck}/></span>
            <h4>Smart Checklist</h4>
            <p>
              Introducing Smart Checklist with us, the innovative solution
              revolutionizing the way you travel with our airline.
            </p>
          </div>
          <div class="memories__card">
            <span><FontAwesomeIcon icon={faSave}/></span>
            <h4>Save More</h4>
            <p>
              From discounted ticket prices to exclusive promotions and deals,
              we prioritize affordability without compromising on quality.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section__container lounge__container">
      <div class="lounge__image">
        <img src={lon1} alt="" />
        <img src={lon2} alt="" />
      </div>
      <div class="lounge__content">
        <h2 class="section__header">Unaccompanied Minor Lounge</h2>
        <div class="lounge__grid">
          <div class="lounge__details">
            <h4>Experience Tranquility</h4>
            <p>
              Serenity Haven offers a tranquil escape, featuring comfortable
              seating, calming ambiance, and attentive service.
            </p>
          </div>
          <div class="lounge__details">
            <h4>Elevate Your Experience</h4>
            <p>
              Designed for discerning travelers, this exclusive lounge offers
              premium amenities, assistance, and private workspaces.
            </p>
          </div>
          <div class="lounge__details">
            <h4>A Welcoming Space</h4>
            <p>
              Creating a family-friendly atmosphere, The Family Zone is the
              perfect haven for parents and children.
            </p>
          </div>
          <div class="lounge__details">
            <h4>A Culinary Delight</h4>
            <p>
              Immerse yourself in a world of flavors, offering international
              cuisines, gourmet dishes, and carefully curated beverages.
            </p>
          </div>
        </div>
      </div>
    </section>
    <MailList/>
    <div className="fo">
    <Footer/>
    </div>
    </div>
  )
}

export default Fly