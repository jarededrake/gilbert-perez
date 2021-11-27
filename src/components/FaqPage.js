import React, { Component } from "react";
import "./FaqPage.css";

const FaqPage = () => {
  return (
    <div className='Faq'>
      <div className='faq-info'>
        <h4>Frequently Asked Questions</h4>
      </div>
      <div className='faq-card'>
        <div className='faq-card-question'>
          <div className='question'>
            <h1>Q.</h1>
          </div>
          <div className='question-text'>
            <h6>How do you avoid moving damages?</h6>
          </div>
        </div>
        <div className='faq-card-answer'>
          <div className='answer'>
            <h1>A.</h1>
          </div>
          <div className='answer-text'>
            <h6>
              Before anything is moved we wrap all of your furniture in moving
              blankets
            </h6>
          </div>
        </div>
      </div>
      <div className='faq-card'>
        <div className='faq-card-question'>
          <div className='question'>
            <h1>Q.</h1>
          </div>
          <div className='question-text'>
            <h6>Will inclement weather delay my shipment?</h6>
          </div>
        </div>
        <div className='faq-card-answer'>
          <div className='answer'>
            <h1>A.</h1>
          </div>
          <div className='answer-text'>
            <h6>
              The only time you shipment will be delayed due to inclement
              weather is if it is unsafe to drive in such as a white out
              blizzard.
            </h6>
          </div>
        </div>
      </div>
      <div className='faq-card'>
        <div className='faq-card-question'>
          <div className='question'>
            <h1>Q.</h1>
          </div>
          <div className='question-text'>
            <h6>Do you offer packing services?</h6>
          </div>
        </div>
        <div className='faq-card-answer'>
          <div className='answer'>
            <h1>A.</h1>
          </div>
          <div className='answer-text'>
            <h6>
              Absoluely we do and we pack your stuff as though its our own.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
