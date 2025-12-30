import React, { useState } from 'react';
import ProfileModel from './ProfileModel';
import BookAppointmentModel from './BookAppointment';

const OurDoctors = ({ setOpenProfile, openProfile }) => {
  const DOCTORS = [
    {
      id: 1,
      name: "Dr. Sarah Peterson",
      role: "Senior Cardiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80",
      education: "Harvard Medical School",
      email: "sarah.p@medisync.com",
      experience: "14+ Years",
      availability: "Tomorrow"
    },
    {
      id: 2,
      name: "Dr. Marcus Chen",
      role: "Neurologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80",
      education: "Johns Hopkins University",
      email: "marcus.c@medisync.com",
      experience: "10+ Years",
      availability: "Available Today"
    },
    {
      id: 3,
      name: "Dr. Elena Rodriguez",
      role: "Pediatrician",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=80",
      education: "Stanford Medicine",
      email: "Elena.Rodriguez@medisync.com",
      experience: "12+ Years",
      availability: "Jan 05"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      role: "Orthopedic Surgeon",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80",
      education: "Yale School of Medicine",
      email: "James.Wilson@medisync.com",
      experience: "18+ Years",
      availability: "Tomorrow"
    }
  ];
  const [doc,setDoc]=useState(null);
  const [BookAppointment, setBookAppointment] = useState(false);

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#FDFCFB]">
      {openProfile && <ProfileModel doc={doc} setOpenProfile={setOpenProfile} />}
     {BookAppointment&&<BookAppointmentModel isOpen={BookAppointment} onClose={() => setBookAppointment(false)} />}
     
     
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="mb-20">
          <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">The Medical Board</p>
          <h2 className="text-5xl md:text-7xl font-light text-slate-900 leading-tight">
            Meet our <span className="italic font-bold">Specialists.</span>
          </h2>
         
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCTORS.map((doc) => (
            <div key={doc.id} className="group">
              {/* Image Container */}
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-6 shadow-xl shadow-slate-200/50">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />

                {/* Availability Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm">
                  <p className="text-[8px] font-black uppercase tracking-widest text-blue-600">Next Slot</p>
                  <p className="text-[10px] font-bold text-slate-900">{doc.availability}</p>
                </div>

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button onClick={()=>{ setDoc(doc); setOpenProfile(true);}} className="bg-white cursor-pointer text-blue-600 px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-all">
                    View Profile
                  </button>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="px-2">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{doc.name}</h3>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">{doc.role}</p>

                <div className="space-y-2 border-t border-slate-100 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Education</span>
                    <span className="text-[10px] text-slate-700 font-medium text-right">{doc.education}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Experience</span>
                    <span className="text-[10px] text-slate-700 font-medium">{doc.experience}</span>
                  </div>
                </div>

                <button onClick={() => setBookAppointment(true)} className="w-full mt-6 bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-800 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default OurDoctors;