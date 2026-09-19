import { useState } from "react";

function Chatbot() {

    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: "bot",
            text: "Hello! 👋 How can we help you?"
        }
    ]);

    const faqs = [
        {
            question: "What products do you provide?",
            answer:
                "We provide medical and surgical equipment solutions for hospitals, clinics and healthcare facilities."
        },
        {
            question: "Do you provide repair services?",
            answer:
                "Yes, we provide equipment repair, preventive maintenance and technical support."
        },
        {
            question: "How can I request a quote?",
            answer:
                "You can request a quote by filling out the enquiry form in our Contact section."
        },
        {
            question: "Which brands do you deal in?",
            answer:
                "We deal in medical and healthcare equipment from various manufacturers and brands."
        }
    ];

    const handleQuestion = (faq) => {

        setMessages((prev) => [
            ...prev,
            {
                type: "user",
                text: faq.question
            },
            {
                type: "bot",
                text: faq.answer
            }
        ]);
    };

    return (
        <div className="chat-widget">

            {!isOpen && (
                <button
                    className="chat-toggle"
                    onClick={() => setIsOpen(true)}
                >
                    💬
                </button>
            )}


            {isOpen && (

                <div className="chat-box">

                    <div className="chat-header">

                        <div>
                            <h3>Ajay Enterprises</h3>
                            <p>Online</p>
                        </div>

                        <button
                            className="close-chat"
                            onClick={() => setIsOpen(false)}
                        >
                            ×
                        </button>

                    </div>


                    <div className="chat-body">

                        {messages.map((message, index) => (

                            <div
                                key={index}
                                className={
                                    message.type === "user"
                                        ? "user-message"
                                        : "bot-message"
                                }
                            >
                                {message.text}
                            </div>

                        ))}


                        <div className="faq-options">

                            {faqs.map((faq, index) => (

                                <button
                                    key={index}
                                    className="faq-question"
                                    onClick={() => handleQuestion(faq)}
                                >
                                    {faq.question}
                                </button>

                            ))}

                        </div>

                    </div>

                </div>

            )}

        </div>
    );
}

export default Chatbot;