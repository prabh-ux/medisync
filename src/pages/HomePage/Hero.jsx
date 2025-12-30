import React, { useState } from 'react'
import BookAppointmentModel from '../BookAppointment';
import { Navigate, useNavigate } from 'react-router';

const Hero = () => {
    const [BookAppointment, setBookAppointment] = useState(false);
  const navigate = useNavigate();
  return (
   <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
        {/* Decorative Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-50/40 blur-[100px] rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-700">Accepting New Patients</p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light text-slate-900 leading-[1.1]">
              Next-Gen <span className="font-bold italic">Healthcare</span> for your family.
            </h1>
            
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              MediSync combines world-class medical expertise with seamless digital integration. Experience a clinic that moves at the speed of your life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={()=>setBookAppointment(true)} className="bg-blue-600 cursor-pointer text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-blue-100">
                Book Consultation
              </button>
              <button onClick={()=>navigate('/doctors')} className="bg-white border cursor-pointer  border-slate-200 text-slate-800 px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
                Our Specialists
              </button>
            </div>

            {/* Trust Stats */}
            <div className="flex gap-12 pt-8 border-t border-slate-100">
              <div>
                <p className="text-2xl font-bold text-slate-900">15k+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Happy Patients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">4.9/5</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Clinic Rating</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
                alt="Modern Clinic" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
              />
              {/* Floating Information Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-xl p-6 rounded-[32px] border border-white/40 flex items-center justify-between">
                <div>
                  <p className="text-slate-900 font-bold">In-House Lab</p>
                  <p className="text-xs text-slate-500">Results within 24 hours</p>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl">🔬</div>
              </div>
            </div>
          </div>
        </div>

             {BookAppointment&&<BookAppointmentModel isOpen={BookAppointment} onClose={() => setBookAppointment(false)} />}

      </section>
  )
}

export default Hero