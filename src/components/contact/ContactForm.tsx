"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { sendEmail } from "../../lib/email";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormData = { name: "", email: "", subject: "", message: "" };

const inputClasses =
  "w-full rounded-lg bg-slate-900/70 border border-slate-700 px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:outline-none transition-all duration-200";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const success = await sendEmail(form);

    if (success) {
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 4000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <motion.div
      className="rounded-xl bg-white/5 backdrop-blur-lg
                  border border-white/10 p-8
                  shadow-lg"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name & Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-medium text-gray-400 mb-1.5">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="What's this about?"
            value={form.subject}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project or idea..."
            value={form.message}
            onChange={handleChange}
            className={`${inputClasses} resize-none`}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full flex items-center justify-center gap-2
                     rounded-lg bg-indigo-600 hover:bg-indigo-700
                     px-6 py-3 text-white font-medium text-sm
                     shadow-lg shadow-indigo-500/25
                     hover:shadow-indigo-500/40
                     disabled:opacity-60 disabled:cursor-not-allowed
                     transition-all duration-200"
        >
          {status === "sending" ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending...
            </>
          ) : (
            <>
              <FiSend className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>

      {/* Toast Notification */}
      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-5 flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium
                        ${
                          status === "success"
                            ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                            : "bg-red-500/10 border border-red-500/20 text-red-400"
                        }`}
          >
            {status === "success" ? (
              <>
                <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
                Message sent successfully!
              </>
            ) : (
              <>
                <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                Something went wrong. Please try again.
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
