import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const ShowCase = () => {
   const navigate = useNavigate();

    return (
         <section className="py-24 bg-white px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Our Expertise</p>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900">Focused on <span className="font-bold">your wellness.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Primary Care", icon: "🩹", desc: "Comprehensive health checkups and preventative care for all ages." },
              { title: "Cardiology", icon: "❤️", desc: "Advanced heart health monitoring and diagnostic imaging services." },
              { title: "Neurology", icon: "🧠", desc: "Specialized treatment for brain, spine, and nervous system disorders." }
            ].map((service, i) => (
              <div key={i}  className="group p-10 rounded-[40px] bg-[#FDFCFB] border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500">
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{service.desc}</p>
                <button onClick={()=>navigate('/specialties')} className="text-[10px] cursor-pointer font-black uppercase tracking-widest text-blue-600 flex items-center gap-2 group-hover:gap-4 transition-all">
                  Read More <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default ShowCase