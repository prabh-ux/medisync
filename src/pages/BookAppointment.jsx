import React, { useState } from 'react';

const BookAppointmentModel = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-[32px] sm:rounded-[40px] shadow-2xl border border-white/20 scrollbar-hide">
        
        {!isSubmitted ? (
          <div className="p-8 sm:p-12 md:p-14">
            {/* Header */}
            <div className="mb-8 sm:mb-10 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                📅
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Book Appointment</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-2">Secure your slot with our world-class specialists.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    // text-base (16px) prevents iOS auto-zoom on focus
                    className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-base sm:text-sm focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-base sm:text-sm focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Department</label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-base sm:text-sm focus:ring-2 focus:ring-blue-600/20 outline-none transition-all appearance-none cursor-pointer">
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Pediatrics</option>
                    <option>General Consultation</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    ↓
                  </div>
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <button 
                  type="submit"
                  className="w-full cursor-pointer bg-blue-600 text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] active:scale-95 hover:bg-slate-900 transition-all shadow-xl shadow-blue-100"
                >
                  Confirm Registration
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-6 italic px-4 leading-relaxed">
                  By clicking confirm, you agree to our privacy policy and clinical terms.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Success State */
          <div className="p-12 sm:p-20 text-center animate-in zoom-in duration-500">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-8 shadow-inner">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h3>
            <p className="text-slate-500 text-sm">Our medical concierge will contact you shortly.</p>
          </div>
        )}

        {/* Close Icon - Larger tap target for mobile */}
        <button 
          onClick={onClose}
          className="absolute  cursor-pointer  top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 flex items-center justify-center text-slate-300 hover:text-slate-900 transition-colors bg-white/50 backdrop-blur-sm rounded-full"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default BookAppointmentModel;