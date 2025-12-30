import React from 'react';

const PatientPortalPage = () => {
  const REVIEWS = [
    {
      id: 1,
      name: "Sarah Jenkins",
      specialty: "Cardiology",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      text: "The cardiac team at MediSync didn't just treat my symptoms; they gave me a comprehensive lifestyle plan. I've never felt more supported in my recovery journey.",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "David Chen",
      specialty: "Orthopedics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      text: "After my knee surgery, the recovery process was seamless. The doctors were transparent about every step.",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      specialty: "Pediatrics",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      text: "As a mother, I value efficiency and care. MediSync provides both. The doctors are amazing with kids.",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Michael Vaughn",
      specialty: "General Medicine",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      text: "Finally a clinic that respects your time. I was in and out for my checkup in 30 minutes with all my questions answered. Highly professional environment.",
      date: "1 month ago"
    },
    {
      id: 5,
      name: "Sophia Lars",
      specialty: "Neurology",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      text: "The neurology department used advanced diagnostics that finally helped identify my chronic migraines. I am forever grateful for their expertise.",
      date: "2 months ago"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- PORTAL HEADER --- */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Patient Experiences</p>
          <h2 className="text-5xl md:text-7xl font-light text-slate-900 tracking-tight">
            The heart of <span className="font-bold italic text-blue-600">MediSync.</span>
          </h2>
        </div>

        {/* --- RATING SUMMARY BAR --- */}
        <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="text-5xl font-bold text-slate-900">4.9</div>
            <div>
              <div className="flex text-yellow-400 text-sm mb-1">★★★★★</div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Average Patient Rating</p>
            </div>
          </div>
          <div className="h-12 w-[1px] bg-slate-100 hidden md:block"></div>
          <div className="flex -space-x-3">
            {[1,2,3,4,5].map(i => (
              <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="user" />
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
              +12k
            </div>
          </div>
      
        </div>

        {/* --- REVIEWS MASONRY GRID --- */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="break-inside-avoid bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-0.5 text-blue-600 text-[10px]">
                  ★★★★★
                </div>
                <span className="text-[9px] text-slate-300 font-bold uppercase tracking-widest">
                  {review.date}
                </span>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{review.name}</h4>
                  <div className="flex items-center gap-2">
                    <p className="text-[9px] text-blue-600 font-black uppercase tracking-widest">{review.specialty}</p>
                    <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                    <span className="text-[8px] text-emerald-500 font-bold uppercase">Verified Treatment</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PatientPortalPage;