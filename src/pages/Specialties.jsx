import React from 'react';

const Specialties = () => {
  const MEDICAL_DEPTS = [
    { 
      id: 1, 
      title: "Cardiology", 
      icon: "❤️", 
      stats: "12 Specialists", 
      desc: "Advanced heart care focusing on prevention, diagnostics, and surgical intervention.",
      color: "from-rose-500/10 to-transparent"
    },
    { 
      id: 2, 
      title: "Neurology", 
      icon: "🧠", 
      stats: "08 Specialists", 
      desc: "Treating complex disorders of the nervous system with precision and innovative tech.",
      color: "from-blue-500/10 to-transparent"
    },
    { 
      id: 3, 
      title: "Pediatrics", 
      icon: "🧸", 
      stats: "15 Specialists", 
      desc: "Compassionate healthcare for infants, children, and adolescents in a friendly environment.",
      color: "from-emerald-500/10 to-transparent"
    },
    { 
      id: 4, 
      title: "Orthopedics", 
      icon: "🦴", 
      stats: "10 Specialists", 
      desc: "Comprehensive bone and joint care, from sports medicine to total joint replacement.",
      color: "from-orange-500/10 to-transparent"
    },
    { 
      id: 5, 
      title: "Dermatology", 
      icon: "✨", 
      stats: "06 Specialists", 
      desc: "Advanced skin health solutions covering clinical, surgical, and aesthetic dermatology.",
      color: "from-purple-500/10 to-transparent"
    },
    { 
      id: 6, 
      title: "Ophthalmology", 
      icon: "👁️", 
      stats: "05 Specialists", 
      desc: "Preserving vision through expert eye surgery and comprehensive vision care.",
      color: "from-cyan-500/10 to-transparent"
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Medical Excellence</p>
            <h2 className="text-4xl md:text-6xl font-light text-slate-900 leading-tight">
              World-class <span className="font-bold italic">Specialities.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs pb-2 border-l-2 border-blue-600 pl-6 leading-relaxed">
            Every department is equipped with the latest diagnostic technology and staffed by industry leaders.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEDICAL_DEPTS.map((dept) => (
            <div 
              key={dept.id} 
              className="group relative bg-white rounded-[48px] p-10 border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2"
            >
              {/* Subtle Background Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 rounded-[22px] bg-slate-50 flex items-center justify-center text-3xl grayscale group-hover:grayscale-0 group-hover:bg-white group-hover:shadow-lg transition-all duration-500">
                    {dept.icon}
                  </div>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                    {dept.stats}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">{dept.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 opacity-80 group-hover:opacity-100">
                  {dept.desc}
                </p>

               
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-700 -z-0"></div>
            </div>
          ))}
        </div>

       
       
      </div>
    </section>
  );
};

export default Specialties;