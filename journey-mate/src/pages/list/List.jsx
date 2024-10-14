import "./list.css";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {format} from "date-fns";
import { DateRange } from 'react-date-range';
import Searchitem from "../../components/searchitem/Searchitem";


const List = () => {

    const location = useLocation();
    const [destination] = useState(location.state && location.state.destination);
    const [date, setDate] = useState(location.state && location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options] = useState(location.state && location.state.options);
    const items = [
        {
          id: 1,
          title: 'Plaza Hotel',
          distance: '300m from center',
          taxiOp: 'Free airport taxi',
          subtitle: 'Studio Apartment with Air conditioning',
          features: '3 beds - 2 singles, 1 extra-large double',
          cancelOp: 'Free Cancellation',
          cancelOpSubtitle: 'You can cancel later, so lock in this great price today!',
          rating: 8.9,
          price: '₹3000',
          taxOp: 'Includes taxes and fees',
        },
      ];
    
    return (
        <div>
            <Navbar></Navbar>
            <Header type="list"></Header>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span onClick={()=>setOpenDate(!openDate)}>
                      {date && date[0] && `${format(date[0].startDate, "dd/MM/yyyy")} 
                      to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                                  </span>
                            { openDate && date &&(
                        <DateRange onchange={(item) => setDate([item.selection])} minDate={new Date()}
                        ranges={date}></DateRange>
                        )}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Min price <small>per night</small>
                                </span>
                                <input type="number" className="lsOptionInput"/>
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Max price <small>per night</small>
                                </span>
                                <input type="number" className="lsOptionInput"/>
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Guests 
                                </span>
                                <input type="number" min={1} className="lsOptionInput" placeholder={options?.guests} />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Room 
                                </span>
                                <input type="number" min={1} className="lsOptionInput" placeholder={options?.room} />
                            </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                    </div>
                    <div>
      {items.map((item) => (
        <Searchitem key={item.id} item={item} />
      ))}
    </div>
                </div>
            </div>
        </div>
    );
};


export default List;