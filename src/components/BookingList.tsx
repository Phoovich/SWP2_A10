"use client";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {
  const venueItems = useAppSelector((state) => state.bookSlice.bookItems);
  const dispatch = useDispatch<AppDispatch>();

  if (venueItems.length === 0) {
    return (
      <div className="text-center text-gray-600 text-2xl font-serif mt-5">
        No Venue Booking
      </div>
    );
  } else {
    return (
      <>
        {venueItems.map((bookingItem: BookingItem) => (
          <div
            className="bg-gray-200 rounded px-5 py-2 my-2 text-black font-serif"
            key={bookingItem.nameLastname}
          >
            <div className="text-xl">{bookingItem.nameLastname}</div>
            <div className="text-sm">Tel: {bookingItem.tel}</div>
            <div className="text-sm">Location: {bookingItem.venue}</div>
            <div className="text-sm">Date: {bookingItem.bookDate}</div>
            <button
              className=" bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded hover:bg-cyan-600 hover:text-white hover:border-transparent "
              name="Book Venue"
              onClick={() => dispatch(removeBooking(bookingItem))}
            >
              Remove from booking
            </button>
          </div>
        ))}
      </>
    );
  }
}
