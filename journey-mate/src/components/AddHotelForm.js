import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './addhotel.css';

const AddHotelForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const onSubmit = (data) => {
        axios.post('http://localhost:5000/api/products/add', data)
            .then(() => {
                alert('Hotel added successfully!');
                reset();
            })
            .catch(error => {
                console.error('There was an error adding the hotel!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='fom'>
            <h2 className='htwo'>Add New Hotel</h2>

            <div className='division'>
                <label className='lbl'>Hotel Name:</label>
                <input
                    className='ipnt'
                    type="text"
                    placeholder="Hotel Name"
                    {...register("name", { required: "Hotel Name is required" })}
                />
                {errors.name && <small className="error">{errors.name.message}</small>}
            </div>

            <div className='division'>
                <label className='lbl'>Distance from Center (in meters):</label>
                <input
                    className='ipnt'
                    type="number"
                    placeholder="Distance from Center"
                    {...register("distanceFromCenter", { required: "Distance from Center is required" })}
                />
                {errors.distanceFromCenter && <small className="error">{errors.distanceFromCenter.message}</small>}
            </div>

            <div className='division'>
                <label className='lbl'>Free Airport Taxi:</label>
                <input
                    className='ipnt'
                    type="checkbox"
                    {...register("freeTaxi")}
                />
            </div>

            <div className='division'>
                <label className='lbl'>Room Type:</label>
                <input
                    className='ipnt'
                    type="text"
                    placeholder="Room Type"
                    {...register("roomType", { required: "Room Type is required" })}
                />
                {errors.roomType && <small className="error">{errors.roomType.message}</small>}
            </div>

            <div className='division'>
                <label className='lbl'>Features:</label>
                <input
                    className='ipnt'
                    type="text"
                    placeholder="Features"
                    {...register("features", { required: "Features are required" })}
                />
                {errors.features && <small className="error">{errors.features.message}</small>}
            </div>

            <div className='division'>
                <label className='lbl'>Price (₹):</label>
                <input
                    className='ipnt'
                    type="number"
                    placeholder="Price"
                    {...register("price", { required: "Price is required" })}
                />
                {errors.price && <small className="error">{errors.price.message}</small>}
            </div>

            <div className='division'>
                <label className='lbl'>Rating:</label>
                <input
                    className='ipnt'
                    type="number"
                    step="0.1"
                    placeholder="Rating"
                    {...register("rating")}
                />
            </div>

            <div className='division'>
                <label className='lbl'>Rating Label:</label>
                <input
                    className='ipnt'
                    type="text"
                    placeholder="Rating Label"
                    {...register("ratingLabel")}
                />
            </div>

            <div className='division'>
                <label className='lbl'>Free Cancellation:</label>
                <input
                    className='ipnt'
                    type="checkbox"
                    {...register("freeCancellation")}
                />
            </div>

            <div className='division'>
                <label className='lbl'>Image URL:</label>
                <input
                    className='ipnt'
                    type="text"
                    placeholder="Image URL"
                    {...register("image")}
                />
            </div>

            <button className='butto' type="submit">Add Hotel</button>
        </form>
    );
};

export default AddHotelForm;
