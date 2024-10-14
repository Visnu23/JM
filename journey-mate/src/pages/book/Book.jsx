import React from 'react';
import "./book.css";
import { useForm } from "react-hook-form";
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

export default function ReservationForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        console.log('Form Data:', data);
        try {
            const response = await axios.post('http://localhost:5000/api/reservations/add', data);
            console.log('Response:', response.data);
            alert('Reservation made successfully!');
            reset();
        } catch (error) {
            console.error('Error submitting reservation:', error);
            alert('Failed to make reservation');
        }
    };

    return (
        <div>
        <Navbar/>
        <Header type="list"/>
        <div className="reservation-container">
            <h2 className='rrf'>Room Reservation Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="reservation-form">
                <div className="form-group">
                    <label htmlFor="fullName" className='blab'>Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        className='ipt selec'
                        placeholder="Full Name"
                        {...register("fullName", { required: "Full Name is required" })}
                    />
                    {errors.fullName && <small className="error">{errors.fullName.message}</small>}
                </div>

                <div className="form-group">
                    <label htmlFor="email" className='blab'>Email</label>
                    <input
                        type="email"
                        id="email"
                        className='ipt selec'
                        placeholder="Email"
                        {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" } })}
                    />
                    {errors.email && <small className="error">{errors.email.message}</small>}
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber" className='blab'>Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        className='ipt selec'
                        placeholder="Phone Number"
                        {...register("phoneNumber", { required: "Phone Number is required" })}
                    />
                    {errors.phoneNumber && <small className="error">{errors.phoneNumber.message}</small>}
                </div>

                <div className="form-group">
                    <label htmlFor="roomType" className='blab' >Room Type</label>
                    <select id="roomType" className='ipt selec' {...register("roomType", { required: "Room Type is required" })}>
                        <option value="">Select Room Type</option>
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        <option value="Suite">Suite</option>
                    </select>
                    {errors.roomType && <small className="error">{errors.roomType.message}</small>}
                </div>

                <div className="form-group">
                    <label htmlFor="numberOfGuests" className='blab'>Number of Guests</label>
                    <input
                        type="number"
                        id="numberOfGuests"
                        className='ipt selec'
                        placeholder="Number of Guests"
                        {...register("numberOfGuests", { required: "Number of Guests is required" })}
                    />
                    {errors.numberOfGuests && <small className="error">{errors.numberOfGuests.message}</small>}
                </div>

                <div className="form-group">
                    <label htmlFor="checkInDate" className='blab'>Check-In Date</label>
                    <input
                        type="date"
                        className='idate'
                        id="checkInDate"
                        {...register("checkInDate", { required: "Check-In Date is required" })}
                    />
                    {errors.checkInDate && <small className="error">{errors.checkInDate.message}</small>}
                </div>

                <div className="form-group">
                    <label htmlFor="checkOutDate" className='blab'>Check-Out Date</label>
                    <input
                        type="date"
                        className='idate'
                        id="checkOutDate"
                        {...register("checkOutDate", { required: "Check-Out Date is required" })}
                    />
                    {errors.checkOutDate && <small className="error">{errors.checkOutDate.message}</small>}
                </div>

                <div className="form-group form-check">
                    <input
                        type="checkbox"
                        className='iche'
                        id="agreeToTerms"
                        {...register("agreeToTerms", { required: "You must agree to the terms" })}
                    />
                    <label htmlFor="agreeToTerms" className='blab'>I agree to the terms and conditions</label>
                    {errors.agreeToTerms && <small className="error">{errors.agreeToTerms.message}</small>}
                </div>

                <button type="submit" className="submit-button">Submit Reservation</button>
            </form>
        </div>
        </div>
    );
}
