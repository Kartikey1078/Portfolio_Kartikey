import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Linkedin, Github } from "lucide-react"; // Import LinkedIn & GitHub icons

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        form.current,
        "your_user_id" // Replace with your EmailJS user/public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="CONTACT" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center px-6 lg:px-20">
        <h2 className="text-4xl font-extrabold mb-10 text-yellow-400">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Get in Touch
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg shadow-md hover:bg-yellow-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111235.5223530591!2d76.8817195758953!3d29.396335860182784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dda457afbe651%3A0x41d3f6feacaa74d4!2sPanipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1741789470012!5m2!1sen!2sin"
              className="w-full h-96"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Social Media Links */}
            <div className="mt-6 flex justify-center space-x-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kartikey-tyagi-web3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-500 transition"
              >
                <Linkedin size={40} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Kartikey1078"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-500 transition"
              >
                <Github size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
