
import React from "react";
import LocationSearchInput from "../forms/LocationSearchInput";


const AddressLookup = ({ onLocationSelect = () => {}}) => {



    return (
        <section class="hero is-fullheight hpwh-bg-img">
            <div class="hero-body">
                <div class="container is-justify-content-flex-start">
                    <div className='columns'>
                        <div className='column is-two-thirds has-text-white'>
                            <h1 class="is-size-2">
                                Find out how much you can save by installing a heat pump.
                            </h1>
                            <h2 class="mt-3 mb-6 is-size-5">
                                Let's start with your address so we can look up local rebates.
                            </h2>
                            <LocationSearchInput onLocationSelect={onLocationSelect} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default AddressLookup;