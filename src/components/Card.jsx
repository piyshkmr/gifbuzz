import React from "react";
import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";

const Card = ({ gif }) => {
  return (
    <div className="card">
      <div className="actions">
        {/* facebook  */}
        <FacebookShareButton url={gif.media[0].tinygif.url}>
          <FaFacebook cursor={"pointer"} color="#fff" size={24} />
        </FacebookShareButton>

        {/* telegram  */}
        <TelegramShareButton url={gif.media[0].tinygif.url}>
          <FaTelegram cursor={"pointer"} color="#fff" size={24} />
        </TelegramShareButton>

        {/* whatsapp  */}
        <WhatsappShareButton url={gif.media[0].tinygif.url}>
          <FaWhatsapp cursor={"pointer"} color="#fff" size={24} />
        </WhatsappShareButton>
      </div>
      {/* gif  */}
      <img
        key={gif.id}
        src={gif.media[0].tinygif.url}
        alt={"unable to load.."}
      />
    </div>
  );
};

export default Card;
