import { useRef } from 'react';
import emailjs from '@emailjs/browser'; // Updated import

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_z0wpj2p', // Your service ID
        'template_64ydg87', // Your template ID
        form.current,
        'WzSQMuApdylIfRShg' // Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-darkClay p-4">
      <h1 className="text-3xl font-extrabold mb-10 text-black text-center">
        Contact Us
      </h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-white font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            placeholder="Your Full Name"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder="Your Email"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-white font-medium mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Write your message here :- Reciever()"
            required
            rows="5"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-darkClay text-black font-semibold py-2 px-4 rounded-md hover:bg-darkClay1 transition duration-300"
        >
          Click here to Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
