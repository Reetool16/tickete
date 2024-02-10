import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";

import Plus from "../../asset/plus.svg";
import Cross from "../../asset/cross.svg";
import FaqLeft from "../../asset/faqleft.svg";

import "./Faq.css";

const Faq = () => {
  const [activeKey, setActiveKey] = useState("1"); // State to track the open accordion item

  const accordionData = [
    {
      id: "0",
      header: "What should I do on my first trip to Rome?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "1",
      header: "What are some hidden gems to see in Rome?",
      body: "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
    },
    {
      id: "2",
      header: "How much time should I spend in Rome?",
      body: "The amount of time you spend in Rome depends on your interests and schedule. However, it is recommended to spend at least 3-4 days to explore the main attractions and immerse yourself in the city's rich history and culture.",
    },
    {
      id: "3",
      header: "What food is Rome known for?",
      body: "Rome is known for its delicious cuisine, including pasta dishes like carbonara, amatriciana, and cacio e pepe. You can also enjoy traditional Roman dishes such as supplì (fried rice balls), fried artichokes, and Roman-style pizza. Don't forget to try the gelato and espresso for a sweet treat!",
    },
    {
      id: "4",
      header: "What is the best way to get around Rome?",
      body: "Rome has an extensive public transportation system including buses, trams, and the metro, which can be a convenient way to get around the city. However, many of Rome's attractions are within walking distance of each other, so exploring on foot is also a great option. Additionally, you can rent bicycles or take a guided tour to see the sights.",
    },
  ];

  const toggleAccordion = (id) => {
    setActiveKey(activeKey === id ? "" : id);
  };
  return (
    <div className="custom_container">
      <div className="faq_container">
        <div className="faq_left">
          <p className="faq_left_head">Frequently asked questions</p>
          <p className="faq_left_text">
            Here are some of our most asked questions.
          </p>
          <div className="faq_left_box">
            <div>
              <p className="faq_left_box_text">Still need help?</p>
              <p className="faq_left_box_text">We're here for you.</p>
              <button className="faq_left_chat_btn">Chat with us</button>
            </div>
            <div>
              <img src={FaqLeft} alt="" />
            </div>
          </div>
        </div>
        <div className="faq_right">
          <p className="faq_right_head">Frequently asked questions</p>
          <p className="faq_right_text">
            Here are some of our most asked questions.
          </p>
          <Accordion
            activeKey={activeKey}
            onSelect={(key) => setActiveKey(key)}
          >
            {accordionData.map((item) => (
              <Accordion.Item key={item.id} eventKey={item.id}>
                <Accordion.Header onClick={() => toggleAccordion(item.id)}>
                  {/* Render plus or cross image based on the open state */}
                  {activeKey === item.id ? (
                    <img src={Cross} alt="Cross" className="icon" />
                  ) : (
                    <img src={Plus} alt="Plus" className="icon" />
                  )}
                  {item.header}
                </Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
      <hr
        style={{
          border: "1px solid #DDDDE3",
          marginBottom: "52px",
          marginTop: "0",
        }}
      />
    </div>
  );
};

export default Faq;
