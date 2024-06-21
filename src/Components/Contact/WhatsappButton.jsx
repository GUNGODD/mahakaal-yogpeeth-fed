import "./WhatsappButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <div className="whatsapp-button">
      <a
        href="https://wa.me/7834887531?text=hello%20aditya"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default WhatsappButton;
