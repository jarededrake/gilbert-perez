import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='home-photo-container'>
        <div className='photo-container-left'>
          <h1>Fast, Reliable</h1>
          <h1>Safe</h1>
          <h1>Moving</h1>
        </div>
        <div className='photo-container-right'>
          <img
            src='https://media.istockphoto.com/photos/furniture-delivery-service-concept-picture-id1053078714?b=1&k=20&m=1053078714&s=170667a&w=0&h=MbJ_0ABlNn4IVB3tM93vgmz1Nf56PvhkX9-NBTJOWKE='
            alt=''
          />
        </div>
      </div>

      <div className='main-info'>
        <h1>Move with us</h1>
        <div className='card-one-info'>
          <div className='card-one-picture'>
            <img
              src='https://media.istockphoto.com/photos/happy-manual-worker-unloading-cardboard-boxes-from-delivery-van-picture-id1186578902?b=1&k=20&m=1186578902&s=170667a&w=0&h=pz0WCWnRGVAKMLRYley3cLxzENzs6e5bxD2tSOqn1yc='
              alt=''
            />
          </div>
          <div className='card-one-text'>
            <h3>Hourly Rates</h3>
            <h5>$125 For two men and a truck</h5>
            <h5>$175 For 3 man and a truck</h5>
            <h5>$200 For 4 man a truck</h5>
            <h5>Call or text to get a quote</h5>
          </div>
        </div>
        <div className='card-two-info'>
          <div className='card-two-picture'>
            <img
              src='https://media.istockphoto.com/photos/its-moving-day-picture-id1147468408?b=1&k=20&m=1147468408&s=170667a&w=0&h=UPh1xXoW3fIlwdhFcIQv9rOPMsjwDwNsnuKaGKUob8k='
              alt=''
            />
          </div>
          <div className='card-two-text'>
            <h3>Packing Services</h3>
            <h5>Single Item Moves</h5>
            <h5>Piano Moves</h5>
            <h5>Grand Piano Moves</h5>
            <h5>Up Right Piano Moves</h5>
            <h5>Safe Moves Up to 500 lbs</h5>
          </div>
        </div>
        <div className='card-three-info'>
          <div className='card-three-picture'>
            <img
              src='https://images.pexels.com/photos/7464643/pexels-photo-7464643.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
            />
          </div>
          <div className='card-three-text'>
            <h3>Out of State Moves</h3>
            <h5>Call, Email, or Text for quote</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
