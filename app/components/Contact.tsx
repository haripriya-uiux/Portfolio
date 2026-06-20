"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAFA] border-t border-[#E5E5E5]">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 border-b border-[#E5E5E5] pb-6 mb-12">
          <div className="font-plus-jakarta text-[12px] font-bold text-[#E34330] uppercase tracking-widest">
            GET IN TOUCH
          </div>
          <h2 className="font-syne text-[36px] md:text-[44px] font-bold text-black uppercase tracking-widest leading-none">
            LET'S START A CONVERSATION
          </h2>
        </div>

        <p className="font-roboto text-[15px] font-medium text-[#8C8C8C] mb-10">
          Reach out via any channel below.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Side: Contact Info Blocks */}
          <div className="flex flex-col space-y-6">
            
            <div className="border border-[#E5E5E5] bg-transparent p-6 flex items-start gap-4">
              <div className="mt-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-roboto text-[11px] font-bold text-[#8C8C8C] uppercase tracking-widest">PHONE</span>
                <span className="font-syne text-[15px] font-bold text-black">+91 9790900531</span>
              </div>
            </div>

            <div className="border border-[#E5E5E5] bg-transparent p-6 flex items-start gap-4">
              <div className="mt-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-roboto text-[11px] font-bold text-[#8C8C8C] uppercase tracking-widest">EMAIL ME</span>
                <span className="font-syne text-[15px] font-bold text-black">haripriya.uiux@gmail.com</span>
              </div>
            </div>

            <div className="border border-[#E5E5E5] bg-transparent p-6 flex items-start gap-4">
              <div className="mt-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-roboto text-[11px] font-bold text-[#8C8C8C] uppercase tracking-widest">LINKEDIN</span>
                <a href="https://linkedin.com/in/haripriyauiuxdesigner" className="font-syne text-[15px] font-bold text-black hover:underline underline-offset-4">
                  https://linkedin.com/in/haripriyauiuxdesigner
                </a>
              </div>
            </div>

          </div>

          {/* Right Side: Contact Form */}
          <div className="border border-[#E5E5E5] bg-transparent p-8 md:p-10 flex flex-col">
            <h3 className="font-syne text-[18px] font-bold text-black uppercase tracking-widest mb-8">
              LEAVE A MESSAGE
            </h3>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2 text-left">
                <label htmlFor="name" className="font-roboto text-[11px] font-bold text-[#8C8C8C] uppercase tracking-widest">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Franklin Paul"
                  className="border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] font-roboto outline-none focus:border-black transition-colors placeholder:text-[#CCCCCC]"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2 text-left">
                <label htmlFor="email" className="font-roboto text-[11px] font-bold text-[#8C8C8C] uppercase tracking-widest">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g., franklinpaul@gmail.com"
                  className="border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] font-roboto outline-none focus:border-black transition-colors placeholder:text-[#CCCCCC]"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2 text-left">
                <label htmlFor="message" className="font-roboto text-[11px] font-bold text-[#8C8C8C] uppercase tracking-widest">
                  HOW CAN I HELP YOU? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe..."
                  className="border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] font-roboto outline-none focus:border-black transition-colors resize-none placeholder:text-[#CCCCCC]"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white px-6 py-4 font-syne text-[14px] font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors mt-4"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
