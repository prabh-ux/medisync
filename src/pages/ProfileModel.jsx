import React from 'react';

const ProfileModel = ({ setOpenProfile,doc }) => {
 

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
       
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-lg rounded-[40px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header/Cover */}
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
          <button 
            onClick={() => setOpenProfile(false)}
            className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white flex items-center justify-center transition-all"
          >
            ✕
          </button>
        </div>

        {/* Profile Info */}
        <div className="px-8 pb-10">
          <div className="relative -mt-12 mb-6 flex items-end justify-between">
            <div className="p-1 bg-white rounded-[32px]">
              <img 
                src={doc.image}
                alt="User" 
                className="w-24 h-24 rounded-[28px] object-cover"
              />
            </div>
            <div className="pb-2">
              <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-100">
                Verified
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900">{doc.name}</h3>
            <p className="text-slate-500 text-sm font-medium">{doc.role}</p>
          </div>

          {/* Medical Summary Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Education</p>
              <p className="text-lg font-bold text-slate-800">{doc.education}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Experience</p>
              <p className="text-lg font-bold text-slate-800">{doc.experience}</p>
            </div>
          </div>

         

       
          
        </div>
      </div>
    </div>
  );
};

export default ProfileModel;