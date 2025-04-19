import React from "react";

const Contact = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* HERO */}
      <section
        className="bg-cover bg-center bg-no-repeat py-40 text-white relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092918360-3b72f5f30cbe?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold mb-4 drop-shadow-xl">Get in Touch</h1>
          <p className="text-2xl drop-shadow-md max-w-2xl mx-auto">
            Whether you have a question, feedback, or a business proposal—we’re here to listen.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
              <h2 className="text-4xl font-bold mb-8 text-indigo-600">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    placeholder="Inquiry about partnership"
                    className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Type your message here..."
                    className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-indigo-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-10">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-indigo-600">Contact Information</h2>
                <p className="text-lg mb-6 max-w-md">
                  Our team is here to assist you with any concerns. Feel free to contact us via phone, email, or drop by at our office.
                </p>
                <ul className="space-y-4 text-lg">
                  <li>
                    <strong>📍 Address:</strong> 123 ShopEase Blvd, Commerce City, CA 90210
                  </li>
                  <li>
                    <strong>📞 Phone:</strong> +1 (555) 123-4567
                  </li>
                  <li>
                    <strong>✉️ Email:</strong> support@shopease.com
                  </li>
                  <li>
                    <strong>⏰ Hours:</strong> Mon - Fri, 9:00AM - 6:00PM
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Stay Connected</h3>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-200"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-200"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-200"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019835130574!2d-122.41990668468088!3d37.77492977975945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f00a0f5%3A0x73b9f5f9815f07e0!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2s!4v1639522822609!5m2!1sen!2s"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-4">Stay Connected With ShopEase</h2>
          <p className="mb-6 text-xl max-w-xl mx-auto">
            Subscribe to our newsletter for the latest updates, deals, and community news.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full w-full sm:w-80 text-black focus:outline-none"
            />
            <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
