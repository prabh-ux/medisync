import React from 'react';

const FacilityModal = ({ isOpen, onClose, clinic }) => {
  if (!isOpen || !clinic) return null;

  const amenities = [
    { icon: "☕", label: "Patient Lounge" },
    { icon: "📶", label: "Free Wi-Fi" },
    { icon: "🅿️", label: "Valet Parking" },
    { icon: "♿", label: "Full Accessibility" },
  ];

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute   inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-[50px] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        
        {/* Left Side: Visuals */}
        <div className="md:w-5/12 relative h-64 md:h-auto">
          <img 
            src={clinic.image} 
            alt={clinic.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <span className="bg-blue-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              {clinic.type}
            </span>
            <h3 className="text-3xl font-bold text-white mt-2">{clinic.name}</h3>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="md:w-7/12 p-8 md:p-12 overflow-y-auto">
          <button 
            onClick={onClose}
            className="absolute  cursor-pointer  top-8 right-8 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-500 transition-all z-10"
          >
            ✕
          </button>

          <section className="mb-10">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">About this Facility</h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              Our {clinic.name} facility is equipped with state-of-the-art diagnostic tools and staffed by top-tier specialists. 
              We prioritize patient comfort and clinical excellence to ensure a seamless healthcare journey.
            </p>
          </section>

          <div className="grid grid-cols-2 gap-8 mb-10">
            {/* Departments */}
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Core Departments</h4>
              <ul className="space-y-2">
                {['Emergency Care', 'Diagnostic Imaging', 'Laboratory', 'Pharmacy'].map(dept => (
                  <li key={dept} className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    {dept}
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities */}
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Amenities</h4>
              <div className="grid grid-cols-2 gap-3">
                {amenities.map(item => (
                  <div key={item.label} className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl">
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-[32px] border border-blue-100 mb-8">
            <div className="flex justify-between items-center mb-4">
              <p className="text-[10px] font-black text-blue-900 uppercase tracking-widest">Contact Info</p>
              <span className="text-[9px] font-bold text-blue-600 bg-white px-2 py-1 rounded-md border border-blue-100">
                {clinic.phone}
              </span>
            </div>
            <p className="text-xs text-blue-800/70 font-medium">📍 {clinic.address}</p>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default FacilityModal;