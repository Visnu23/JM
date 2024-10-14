import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import FeaturedProps from "../../components/featuredProps/FeaturedProps";
import PropertyList from "../../components/propertyList/PropertyList";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div>
          <Navbar/>
          <Header/>
        <div className="homeContainer">
            <Featured/>
            <h1 className="homeTitle">Explore property types</h1>
            <PropertyList/>
            <h1 className="homeTitle">Homes guests love</h1>
            <FeaturedProps/>
            <MailList/>
            <Footer/>
        </div> 
    </div>
    );
};


export default Home