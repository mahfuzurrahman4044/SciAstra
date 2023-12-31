import "./Chatbot.css";
import chatBotImg from "../assets/Chatbot/pngtree-smart-chatbot-cartoon-clipart-png-image_6620453.png";

const Chatbot = () => {
  return (
    <div className="chatbot-container w-40">
      <img className="h-8 lg:w-8" src={chatBotImg} alt="" />{" "}
      <span className="">FAQ</span>
    </div>
  );
};

export default Chatbot;
