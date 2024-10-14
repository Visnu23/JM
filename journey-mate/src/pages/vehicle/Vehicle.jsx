import "./vehicle.css";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroi from './img/hero_img.png';
import ai1 from './img/about-info-item-1.png';
import ai2 from './img/about-info-item-2.png';
import ai3 from './img/about-info-item-3.png';
import car1 from './img/cars/car-1.png';
import car2 from './img/cars/car-2.png';
import car3 from './img/cars/car-3.png';
import car4 from './img/cars/car-4.png';
import car5 from './img/cars/car-5.png';
import car6 from './img/cars/car-6.png';

const Vehicle = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Header type="list"></Header>
        <div className="hero-page">
            <div className="hero-headlines">
                <h1>
                    Easy And Fast Way To <b className="accent">Rent</b> A Car with JourneyMate.
                </h1>
                <p>
                    we offer a wide extend of rental cars to suit your needs.wether
                    you are arranging a weekend travel or a business trip.
                </p>
                <button className="bot-2 bot-hero">
                    Get Started
                </button>
            </div>
            <img src={heroi} alt="" className="hero-page-img"/>
        </div>
        <section className="about" id="about">
            <div className="about-container">
                <h1>Your Premier Choice for Effortless Car Rentals</h1>
                <p className="about-subline">
                    Experience the ultimate convinence with JourneyMate, where renting a 
                    car is as easy as a few clicks.
                </p>
                <div className="about-info">
            <div className="about-info-item">
                <hr className="about-hr" />
                <img src={ai1} alt="img" />
                <h5>Efficiency</h5>
                <p>
                JourneyMate stands for its streamlined booking process, ensuring 
                customer can quickly and easily book their desired vehicles.
                </p>
            </div>
            <div className="about-info-item">
                <hr className="about-hr" />
                <img src={ai2} alt="img" />
                <h5>Diverse Fleet</h5>
                <p>
                JourneyMate boasts a diverse fleet of well-maintained vehicles,
                catering to the varied needs and preferences of its customers.
                </p>
            </div>
            <div className="about-info-item">
                <hr className="about-hr" />
                <img src={ai3} alt="img" />
                <h5>Expectational Service</h5>
                <p>
                Beyond just providing vehicles, JourneyMate is commited to
                delivering expectational customer service at every touchpoint.
                </p>
              </div>
             </div>
            </div>
        </section>
        <section className="collection" id="collection">
            <h1>Our Car Collections</h1>

            <div className="collection-container">
                <div class="car-container">
                <img src={car1} alt="" />
                    <div class="car-details">
                        <h2>Mercedes-AMG GT R</h2>
                        <p>₹8000/Day</p>
                        <p>Location: Noida</p>
                        <button class="book-now">Book Now</button>
                    </div>
                </div>
                <div class="car-container">
                <img src={car2} alt="" />
                    <div class="car-details">
                        <h2>BMW 428i - F32</h2>
                        <p>₹6000/Day</p>
                        <p>Location: Mumbai</p>
                        <button class="book-now">Book Now</button>
                    </div>
                </div>
                <div class="car-container">
                <img src={car3} alt="" />
                    <div class="car-details">
                        <h2>Toyoto 86 - Coupe</h2>
                        <p>₹4000/Day</p>
                        <p>Location: Chennai</p>
                        <button class="book-now">Book Now</button>
                    </div>
                </div>
                <div class="car-container">
                <img src={car4} alt="" />
                    <div class="car-details">
                        <h2>2018 Lexus LS</h2>
                        <p>₹4000/Day</p>
                        <p>Location: Bangalore</p>
                        <button class="book-now">Book Now</button>
                    </div>
                </div>
                <div class="car-container">
                <img src={car5} alt="" />
                    <div class="car-details">
                        <h2>Rolls Royce Dawn</h2>
                        <p>₹10000/Day</p>
                        <p>Location: Bangalore</p>
                        <button class="book-now">Book Now</button>
                    </div>
                </div>   
                <div class="car-container">
                <img src={car6} alt="" />
                    <div class="car-details">
                        <h2>Lamborghini Venemo</h2>
                        <p>₹10000/Day</p>
                        <p>Location: Trichy</p>
                        <button class="book-now">Book Now</button>
                    </div>
                </div>
                </div>
               <button className="botsee">
                <p>See All Cars</p>
                <FontAwesomeIcon icon={faArrowRightLong}/>
               </button>
        </section>
        <MailList/>
    <div className="fo">
    <Footer/>
    </div>
    </div>
  )
}

export default Vehicle