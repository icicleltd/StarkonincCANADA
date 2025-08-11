import React from 'react';

const Contact = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-background/80 backdrop-blur-md py-12 px-4">
      <div className="max-w-4xl w-full space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <h2 className="text-3xl font-semibold">Hey! Let&apos;s Talk</h2>
          <p className="text-lg">We&apos;re happy to answer your questions.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8 hidden md:block">
            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p> 264 St. Niagara Falls, Ontario, Canada</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                <p>connect@starkon.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p>+905-351-4319</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">What are you looking for?</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block mb-1">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full p-2 border rounded"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-2 border rounded"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <label htmlFor="businessEmail" className="block mb-1">Business Email</label>
                    <input
                      type="email"
                      id="businessEmail"
                      className="w-full p-2 border rounded"
                      placeholder="Business Email"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="companyName" className="block mb-1">Company Name</label>
                    <input
                      type="text"
                      id="companyName"
                      className="w-full p-2 border rounded"
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1">Your Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-2 border rounded"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-1 rounded-lg font-medium text-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>Copyright © 2025 | All Rights Reserved   User Agreement   Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;