import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hotel.css";

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const photos = [
        {src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/31761701.jpg?k=e30756af0b7545220db010dddc03f8f10e08df86dbad8adf0e005aa055e6cf77&o=&hp=1"
        },
        {src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/31761685.jpg?k=d32aabec20db3ace3ad8b0186b78a71dfc5032e31f81b4c56dd74dcda1464f3d&o=&hp=1"
        },
        {src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/31761694.jpg?k=26fd01935559a51e4ea7aad0c4efd0801fda550bf8357384e390dbde86b75520&o=&hp=1"
        },
        {src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/31761705.jpg?k=1b1f3e278f54c46bb4eacdb7fd2e51a1d0ad3c013bbc9215733519190b6d0478&o=&hp=1"
        },
        {src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/31761690.jpg?k=34f20517584350150ae9a641e3937281035a9814dc2b1f60df6bc27301c7ff26&o=&hp=1"
        },
        {src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/31761717.jpg?k=36ceb1fc0bcdbe8e9e3050d71eac5130520e141d6114cc8ea60840251040795e&o=&hp=1"
        },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };
    const navigate = useNavigate();

    const handleMove = (direction) => {
        let newSlideNumber;
        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
            } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
            }
            setSlideNumber(newSlideNumber);
    };

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg"/>
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>   
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow" onClick={() => navigate(`/register`)}>Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Plaza Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Tiruchchirāppalli</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 300m from center
                    </span>
                    <span className="hotelPriceHighlight">
                    – Great location - show map – Railway access
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo,i)=>(
                            <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg"/>
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Trichy</h1>
                            <p className="hotelDesc">
                            Plaza Hotel Trichy is situated in Tiruchchirāppalli,
                             within 10 km of Sri Ranganathaswamy Temple and 600 metres of Central Bus Station.
                              Featuring a restaurant, the 3-star hotel has air-conditioned rooms with free WiFi,
                               each with a private bathroom. There is free private parking and the property features 
                               paid airport shuttle service.Rooms include a wardrobe and a flat-screen TV, 
                               and some rooms at the hotel have a balcony.Asian and vegetarian breakfast options are available each morning at Plaza Hotel Trichy.
                              Round-the-clock assistance is available at the reception, where staff speak English, Hindi and Tamil.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 1-night stay!</h1>
                            <span>
                              The nearest airport is Tiruchirappalli International Airport, 5 km from Plaza Hotel Trichy.
                            </span>
                            <h2>
                                <b>₹1,465</b> (per night)
                            </h2>
                            <button onClick={() => navigate(`/book`)}>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList></MailList>
                <Footer></Footer>
            </div>
        </div>
    );
};


export default Hotel