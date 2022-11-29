import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ cat }) => {

    const { name, _id } = cat;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                {/* <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p> */}
                {/* <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p> */}
                {/* <p><small>Price: ${price}</small></p> */}
                <div className="card-actions justify-center">


                    <Link to={`/category/${_id}`}>
                        <button className="btn btn-primary">Show All </button>
                    </Link>
                    {/* <label
                            // disabled={slots.length === 0}
                            htmlFor="booking-modal"
                            className="btn btn-primary text-white"
                        // onClick={() => setTreatment(appointmentOption)}
                        >Show All</label> */}
                </div>
            </div>
        </div>
    );

};

export default CategoryCard;