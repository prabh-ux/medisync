import React from 'react';
import { useNavigate } from 'react-router';

const Footer = () => {
    const currentYear = new Date().getFullYear();
const navigate=useNavigate()
    return (
        <footer className="bg-[#FDFCFB] border-t border-slate-100 pt-20 pb-10 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
                    
                    {/* Column 1: Brand & Bio */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">+</div>
                            <h2 className="text-xl font-bold text-slate-900">Medi<span className="text-blue-600">Sync</span></h2>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Leading the way in medical excellence through technology and compassionate care. Your health, synchronized.
                        </p>
                        <div className="flex gap-4">
                            {['IG', 'TW', 'LI'].map(social => (
                                <button key={social} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400 hover:border-blue-600 hover:text-blue-600 transition-all">
                                    {social}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 mb-8">Navigation</h5>
                        <ul className="space-y-4">
                            {[{name:'Specialties',link:'/specialties'}, {name:'Our Doctors',link:'/doctors'}, {name:'Patient Portal',link:'/portal'},{name:'Our Clinics',link:'/locations'}].map(item => (
                                <li key={item.name}>
                                    <button onClick={()=>{navigate(item.link)}} className="text-sm text-slate-500 cursor-pointer hover:text-blue-600 transition-colors">{item.name}</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Hours */}
                    <div>
                        <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 mb-8">Clinic Hours</h5>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-slate-50 pb-2">
                                <span className="text-sm text-slate-500">Mon — Fri</span>
                                <span className="text-sm font-bold text-slate-800">8AM — 8PM</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-slate-50 pb-2">
                                <span className="text-sm text-slate-500">Saturday</span>
                                <span className="text-sm font-bold text-slate-800">9AM — 5PM</span>
                            </div>
                            <div className="flex justify-between items-center text-rose-500">
                                <span className="text-sm">Sunday</span>
                                <span className="text-[10px] font-black uppercase tracking-widest">Closed</span>
                            </div>
                        </div>
                    </div>

                   
                </div>

                {/* --- BOTTOM BAR --- */}
                <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        © {currentYear} MediSync Healthcare Group. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900">Privacy Policy</button>
                        <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900">Terms of Service</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;