"use client";

import SupportCardInfo from "@/components/Card/support_card";
import React, { useState } from "react";
import CreateSupportModal from "../createsupportmodal";
import SupportCardMessage from "@/components/Card/support_card_message";
interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SupportContent: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const [supportMessage, setSupportMessage] = useState<string>("");
  const [activeCards, setActiveCards] = useState([]);

  const messages = [
    {
      id: 1,
      date: "31.12.2024 10:29",
      message: "i am test",
      name: "Hiddenbay Urla Emre",
      url: "/app-assets/avatar/H.svg",
    },
    {
      id: 2,
      date: "31.12.2024 10:29",
      message: "i am test",
      name: "Hiddenbay Urla Emre",
      url: "/app-assets/avatar/H.svg",
    },
  ];
  const toggleCard = (id: string | number) => {
    setActiveCards((prev: any) => {
      if (prev.includes(id)) {
        return prev.filter((cardId: string | number) => cardId !== id);
      }
      return [...prev, id];
    });
  };
  const handleMessageChange = (event: any) => {
    setSupportMessage(event.target.value);
  };
  const handleSubmit = () => {
    console.log(supportMessage);
  };
  return (
    <>
      <div className="support">
        <div className="row">
          <div className="col-md-3">
            <div className="topics">
              <div className="card-content">
                <ul className="support-list" id="support-list">
                  <SupportCardInfo
                    cat={"100033"}
                    date={"19.12.2024"}
                    subject={"Ideas"}
                    subinfo={"birileri var mı?"}
                  />
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9 support-image">
            <div className="card card-back">
              <div id="support-detail-information">
                <div className="title">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">19.12.2024 - Ideas</h4>
                    </div>
                  </div>
                </div>
                <div className="support-text-input">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    id="support-message-textarea"
                    maxLength={10000}
                    onChange={handleMessageChange}
                    value={supportMessage}
                  />
                  <button
                    className="btn btn-success support-send-message"
                    data-item="d36c8062-d03c-48d9-8b42-70923d9bfdc5"
                    onClick={handleSubmit}
                  >
                    <i className="ft-arrow-right"></i> Send
                  </button>
                </div>
              </div>
              <div id="support-message-container">
                {messages.map((message, index) => (
                  <SupportCardMessage
                    msg={message}
                    key={message.id}
                    toggleCard={toggleCard}
                    activeCards={activeCards}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CreateSupportModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default SupportContent;
