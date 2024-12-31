import React, { useState } from "react";
import emailjs from "emailjs-com";
import avatarImg from "../../assets/main.png";
import TextChange from "../TextChange";
import CV from "../../Components/HarshSangani.pdf";

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.SERVICE, // Replace with your EmailJS Service ID
        import.meta.env.TEMPLATE, // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.PUBLIC  // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          setShowContactForm(false); // Close the form
          setFormData({ name: "", email: "", message: "" }); // Reset the form
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <div className="text-white flex w-full mt-11 justify-between items-start p-10 md:p-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen relative">
      {/* Left Section */}
      <div className="md:w-2/4 md:pt-10 animate-fadeInLeft z-10 relative">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter drop-shadow-lg">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight drop-shadow-md mt-2">Full Stack Developer</p>
        <div className="mt-5 md:mt-10 flex flex-col gap-5">
          <button
            className="button-2d text-white py-2 px-4 text-sm md:text-lg md:py-3 md:px-5 font-semibold rounded-3xl bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-600 hover:to-blue-800 transform hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-all duration-300 ease-in-out shadow-lg animate-bounce"
            onClick={() => setShowContactForm(true)} // Show the contact form
          >
            Contact Me
          </button>
          <button
            className="button-3d text-white py-2 px-4 text-sm md:text-lg md:py-3 md:px-5 font-semibold rounded-3xl bg-gradient-to-r from-pink-400 to-purple-600 hover:from-pink-600 hover:to-purple-800 transform hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out shadow-lg animate-pulse"
          >
            <a href={CV} download className="no-underline">Download CV</a>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="animate-fadeInRight z-10 relative">
        <img
          className="w-80 h-100 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
          src={avatarImg}
          alt="Avatar"
        />
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div id="Contact" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-3 right-3 text-white hover:text-gray-400"
              onClick={() => setShowContactForm(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-5 text-center">Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-600 hover:to-blue-800 rounded-md text-white font-semibold transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
