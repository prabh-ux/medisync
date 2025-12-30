import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookAppointmentModel from './BookAppointment'; // Component name

const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
    
    // CHANGE: Rename state to 'showModal' to avoid conflict with 'BookAppointmentModel'
    const [showModal, setShowModal] = useState(false); 

    const navLinks = [
        { name: 'Specialties', path: '/specialties' },
        { name: 'Our Doctors', path: '/doctors' },
        { name: 'Patient Portal', path: '/portal' },
        { name: 'Locations', path: '/locations' },
    ];

    const handleNavigate = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-[1000] px-6 md:px-12 py-6 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    
                    {/* 1. BRANDING */}
                    <div 
                        className="flex items-center gap-3 cursor-pointer z-[1001]" 
                        onClick={() => handleNavigate('/')}
                    >
                        <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-white text-xl font-bold">+</span>
                        </div>
                        <h1 className="text-xl font-bold text-slate-900">MediSync</h1>
                    </div>

                    {/* 2. DESKTOP NAVIGATION */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavigate(link.path)}
                                className="text-[10px] cursor-pointer font-black uppercase tracking-[0.2em] text-slate-500 hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>

                    {/* 3. MOBILE TOGGLE & BUTTON */}
                    <div className="flex items-center gap-4">
                        {/* Desktop Button - Updated State Call */}
                        <button 
                            onClick={() => setShowModal(true)} 
                            className="hidden sm:block cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-slate-900 transition-all"
                        >
                            Book Visit
                        </button>

                        {/* Hamburger Button */}
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 bg-slate-50 rounded-2xl z-[1001] transition-all active:scale-95"
                        >
                            <span className={`w-5 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-5 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-5 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* 4. MOBILE MENU OVERLAY */}
            <div className={`fixed inset-0 z-[999] bg-white transition-all duration-500 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full pt-32 px-10">
                    <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-center">Menu</p>
                    
                    <div className="flex flex-col gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavigate(link.path)}
                                className="text-4xl font-light text-slate-900 text-left hover:text-blue-600 transition-colors border-b border-slate-50 pb-4"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    <div className="mt-auto mb-16 space-y-6">
                        {/* Mobile Button - Updated State Call */}
                        <button 
                            onClick={() => {
                                setShowModal(true);
                                setIsOpen(false); // Close menu when opening modal
                            }} 
                            className="w-full bg-blue-600 text-white py-5 rounded-[24px] font-bold text-xs uppercase tracking-widest shadow-xl shadow-blue-100"
                        >
                            Book an Appointment
                        </button>
                    </div>
                </div>
            </div>

            {/* 5. MODAL PLACEMENT - MOVED OUTSIDE OVERLAY */}
            <BookAppointmentModel 
                isOpen={showModal} 
                onClose={() => setShowModal(false)} 
            />
        </>
    );
};

export default Header;