import "./header.css"
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {format} from "date-fns";
import {useNavigate} from "react-router-dom";

const Header = ({type}) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        guests:2,
        room:1,
    });

    const navigate = useNavigate();

    const handleOption = (name, operation) =>{
        setOptions((prev)=>{return {
            ...prev,
            [name]: operation === "i" ? options[name] +1 : options[name] -1,
        };
      });
    };

    const handleSearch = () =>{
      navigate("/hotels", {state:{destination,date,options}})
    };

    return (
        <div className="header">
            <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem hotel"> 
                <button className="Btn a" onClick={()=>navigate("/")}><FontAwesomeIcon icon={faBed} /> Hotel</button>
                </div>
                <div className="headerListItem takeoff">
                <button className="Btn a" onClick={()=>navigate("/fly")}><FontAwesomeIcon icon={faPlane} /> Takeoff</button>
                </div>
                <div className="headerListItem wheels">
                <button className="Btn a" onClick={()=>navigate("/carr")}><FontAwesomeIcon icon={faCar} /> Wheels</button>
                </div>
            </div>
            { type !== "list" &&
            <>
            <div className="headerSearch">
                <div className="searchBar">
                <FontAwesomeIcon className="sicon" icon={faSearch}/>
                <input type="text" className="sinput" placeholder="Explore travel options..." onChange={e=>setDestination(e.target.value)} />
                </div>
                <div className="calendar">
                <FontAwesomeIcon className="sicon" icon={faCalendarDays}/>
                <span onClick={()=>setOpenDate(!openDate)} className="cal">{`${format(date[0].startDate, "dd/MM/yyyy")} 
                to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date} className="date" minDate={new Date()} />}
                </div>
                <div className="persons">
                <FontAwesomeIcon className="sicon" icon={faPerson}/>
                <span onClick={()=>setOpenOptions(!openOptions)} className="person">{`${options.guests} Guests · ${options.room} Room`}</span>
                {openOptions &&  <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Guests</span>
                        <div className="optionCounter">
                        <button disabled={options.guests <= 1}
                        className="optionCounterBtn" onClick={()=>handleOption("guests","d")}>-</button>
                        <span className="optionCounterNum">{options.guests}</span>
                        <button className="optionCounterBtn" onClick={()=>handleOption("guests","i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Rooms</span>
                        <div className="optionCounter">
                        <button disabled={options.room <= 1}className="optionCounterBtn" onClick={()=>handleOption("room","d")}>-</button>
                        <span className="optionCounterNum">{options.room}</span>
                        <button className="optionCounterBtn" onClick={()=>handleOption("room","i")}>+</button>
                        </div>
                    </div>
                </div>}
                </div>
                <button className="searchbtn" onClick={handleSearch}>Search</button>
            </div>
            <h1 className="headerTitle">Book Your Dream Trip</h1>
            <p className="headerDes">Search and book flights,hotels and cars with ease.</p>
            <div className="headerBtn" onClick={()=>navigate("/register")}>Sign in / Register</div>
            </>}
            </div>
        </div>
    );
};


export default Header