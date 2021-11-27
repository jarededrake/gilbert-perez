import React, { Component } from "react";
import "./QuotePage.css";

const QuotePage = () => {
  return (
    <div className="quote">
      <h1>How would you like to receive this quote?</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <h1>By Email</h1>
            <p>Please fill out this form here:</p>
            <form>
              <form>
                <div class="form row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </form>
              <div class="form row">
                <div class="form-group col">
                  <label for="inputEmail4"></label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Moving From Address"
                />
              </div>
              <div class="form-group">
                <label for="inputAddress2"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Moving To Address"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1"></label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="What else should we know? Moving Date, Special Request..."
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-dark btn-lg">
                Submit
              </button>
            </form>
          </div>
          <div className="col-sm">
            <h1>By Phone</h1>
            <p>867-5309</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
