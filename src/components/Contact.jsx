import React, { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Thank you! Your message has been sent.");
        e.target.reset();
      } else {
        setStatus("Oops! Something went wrong.");
      }
    } catch (err) {
      setStatus("Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-4 bg-gray-800 text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="hidden"
            name="access_key"
            value="607feea6-4c09-484c-a2d2-e53b74ff7621"
          />

          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border rounded text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 rounded border  text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Subject</label>
            <textarea
              name="subject"
              rows="1"
              required
              className="w-full p-2 rounded text-white border"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-2 rounded  text-white border "
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : null}
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center mt-4 text-green-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
