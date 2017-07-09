import * as React from "react";

import { Parallax } from "../../components";
import "./registration.css";

const Registration = () =>
  <div className="registration">
    <Parallax backgroundImage="backgroundImage__city">
      <div className="parallax__text">Introducing MIRCLE</div>
    </Parallax>
    <div className="grid">
      <div className="grid__picture">
        <div className="backgroundImage__picture" />
      </div>
      <p className="block">
        Meeting a new person can be exciting (or frightening depending on your
        personality!); but there is one thing we all agreed on, it is such a
        hassle to ask for their contact details! Imagine asking for their phone
        numbers, and having to type a long list of numbers manually; or ask for
        their facebook account... just the thought of having to go on facebook,
        look up their names, ask them if this is the correct person and send a
        friend request can be very annoying! What if wifi is not available? Like
        meeting someone in the middle of a cruise with no signal within the next
        50km?
      </p>
    </div>
    <Parallax backgroundImage="backgroundImage__phone">
      <div className="parallax__text">
        Activate NFC to add your new friend fast
      </div>
    </Parallax>
    <div className="grid">
      <p className="block">
        With Mircle, all you have to do is activate NFC and tap each others
        phones and it's all sorted for you! You will have access to all his/her
        social media accounts! If your phone does not support NFC, you can enter
        his ID or take a picture of the QR code and it's done! No longer will
        you have to ask for a list of their social media accounts like Facebook
        or Twitter or Instagram... one tap and it is all you need! This sounds
        very corporate bs.
      </p>
      <div className="grid__picture">
        <div className="backgroundImage__picture" />
      </div>
    </div>
    <Parallax backgroundImage="backgroundImage__city">
      <div className="parallax__text">yay...</div>
    </Parallax>
  </div>;

export default Registration;
