import React from "react";
import Layout1 from "../../../layout/layout1";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./style.scss";

const Contact = () => {
  return (
    <Layout1 position="relative" textColor="black">
      <div className="contact-container container">
        <div className="left">
          <form className="form-container">
            <div className="group-input">
              <input
                type="text"
                className="input-text group"
                placeholder="First name"
              />
              <input
                type="text"
                className="input-text group"
                placeholder="Last name"
              />
            </div>
            <input
              type="text"
              className="input-text"
              placeholder="Email address"
            />
            <input type="text" className="input-text" placeholder="Subect" />
            <textarea
              rows={6}
              className="input-text text-area"
              placeholder="What do you want to know?"
            ></textarea>
            <button className="btn-submit">send</button>
          </form>
        </div>
        <div className="right">
          <h1 className="title-text">Send us a message</h1>
          <h4 className="small-title-text">
            You will hear from us within 24 hours
          </h4>
          <p className="info-text">
            <BsTelephone className="icon" />
            +233 27-270-2909
          </p>
          <p className="info-text">
            <BsTelephone className="icon" />
            +233 55-250-7040
          </p>
          <p className="info-text">
            <AiOutlineMail className="icon" />
            abdularafatphotos@gmail.com
          </p>
        </div>
      </div>
    </Layout1>
  );
};

export default Contact;
