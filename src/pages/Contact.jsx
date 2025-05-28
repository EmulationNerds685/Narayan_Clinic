import React, { useState } from 'react';
import axios from 'axios';
import FeedbackDialog from '../components/Feedback';

const Contact = () => {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    feedback: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState('');
  const [isSubmittingMessage, setIsSubmittingMessage] = useState(false);
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingMessage(true);
    try {
      const result = await axios.post(`${backendURL}/contact`, formData);
      setResponse(result.data.message || 'Message sent successfully!');
      setIsError(false);
    } catch (err) {
      console.error(err);
      setResponse('There was an error sending your message.');
      setIsError(true);
    } finally {
      setDialogOpen(true);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmittingMessage(false);
    }
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingFeedback(true);
    try {
      const result = await axios.post(`${backendURL}/feedback`, feedbackData);
      setResponse(result.data.message || 'Feedback submitted successfully!');
      setIsError(false);
    } catch (err) {
      console.error(err);
      setResponse('There was an error submitting your feedback.');
      setIsError(true);
    } finally {
      setDialogOpen(true);
      setFeedbackData({ name: '', feedback: '' });
      setIsSubmittingFeedback(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto !py-10 !px-4 sm:!px-6 lg:!px-8 w-full">
      <h2 className="text-center !mb-8 text-3xl font-bold text-blue-600">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info + Map */}
        <div className="!space-y-6">
          <div className="bg-white rounded-lg shadow-md !p-6 !space-y-4">
            <div className="!mt-4">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.312158118437!2d85.15537607415408!3d25.594541477457266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59001b844559%3A0xc68a23d3c5f4ed77!2sNarayan%20Heart%20%26%20Maternity%20Centre!5e0!3m2!1sen!2sin!4v1747651924946!5m2!1sen!2sin"
                width="100%"
                height="400"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold">Our Clinic</h3>
            <div>
              <p className="font-medium">📍 Address:</p>
              <p>MIG, 245, Lohia Nagar, kankarbagh,Patna-800020</p>
            </div>
            <div>
              <p className="font-medium">📞 Phone:</p>
              <p>+91 9708441467 | +91 98361 97624</p>
            </div>
            <div>
              <p className="font-medium">✉️ Email:</p>
              <p>narayanheartmaternitycentre@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form and Feedback */}
        <div className="!space-y-6">
          <div className="bg-white rounded-lg shadow-md !p-6 !space-y-4">
            <h3 className="text-xl font-semibold text-blue-600 !mb-4">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="!space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 !mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full !px-3 !py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 !mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full !px-3 !py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 !mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full !px-3 !py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmittingMessage}
                className={`w-full flex justify-center !py-2 !px-4 border border-blue-600 rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmittingMessage ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmittingMessage ? (
                  <>
                    <svg className="animate-spin !-ml-1 !mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-md !p-6 !space-y-4">
            <h3 className="text-xl font-semibold text-blue-600 !mb-4">
              Give Us Your Feedback
            </h3>

            <form onSubmit={handleFeedbackSubmit} className="!space-y-4">
              <div>
                <label htmlFor="feedback-name" className="block text-sm font-medium text-gray-700 !mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="feedback-name"
                  name="name"
                  required
                  value={feedbackData.name}
                  onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
                  className="w-full !px-3 !py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="feedback-text" className="block text-sm font-medium text-gray-700 !mb-1">
                  Your Feedback
                </label>
                <textarea
                  id="feedback-text"
                  name="feedback"
                  rows="4"
                  required
                  value={feedbackData.feedback}
                  onChange={(e) => setFeedbackData({ ...feedbackData, feedback: e.target.value })}
                  className="w-full !px-3 !py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmittingFeedback}
                className={`w-full flex justify-center !py-2 !px-4 border border-blue-600 rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmittingFeedback ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmittingFeedback ? (
                  <>
                    <svg className="animate-spin !-ml-1 !mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : 'Submit Feedback'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Feedback dialog */}
      <FeedbackDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        isError={isError}
        message={response}
      />
    </div>
  );
};

export default Contact;