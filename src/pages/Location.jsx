import React, { useState } from 'react';
import FacilityModal from './FacilityModal';
import BookAppointmentModel from './BookAppointment';
const Location = () => {
    const CLINICS = [
        {
            id: 1,
            name: "MediSync Central",
            address: "123 Medical Plaza, Downtown, NY 10001",
            phone: "+1 (800) 111-SYNC",
            hours: "Mon-Sat: 8am - 8pm",
            status: "Open Now",
            type: "Main Hospital",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            name: "MediSync Westside",
            address: "4500 Sunset Blvd, West End, NY 10019",
            phone: "+1 (800) 222-SYNC",
            hours: "Mon-Fri: 9am - 6pm",
            status: "Closing Soon",
            type: "Diagnostic Center",
            // Updated high-quality medical building image
            image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            name: "MediSync Wellness",
            address: "788 Greenway Drive, Brooklyn, NY 11201",
            phone: "+1 (800) 333-SYNC",
            hours: "Mon-Sat: 8am - 5pm",
            status: "Open Now",
            type: "Pediatric Clinic",
            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
        }
    ];
    const [selectedClinic, setSelectedClinic] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showModal, setshowModal] = useState(false);

    const handleOpenModal = (clinic) => {
        setSelectedClinic(clinic);
        setIsModalOpen(true);
    };
    return (
        <div className="min-h-screen bg-[#FDFCFB] pt-28 pb-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Our Network</p>
                    <h2 className="text-5xl md:text-6xl font-light text-slate-900 leading-tight mb-6">
                        Our specialized <span className="italic font-bold">facilities.</span>
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Strategically located across the city to provide you with world-class healthcare within reach.
                    </p>
                </div>

                {/* Locations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CLINICS.map((clinic) => (
                        <div
                            key={clinic.id}
                            className="group bg-white rounded-[48px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={clinic.image}
                                    alt={clinic.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className={`text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-md border border-white/20 ${clinic.status === 'Open Now' ? 'bg-emerald-500/90 text-white' : 'bg-orange-500/90 text-white'
                                        }`}>
                                        {clinic.status}
                                    </span>
                                </div>
                            </div>

                            <div className="p-10 flex flex-col flex-1">
                                <div className="mb-6">
                                    <p className="text-blue-600 text-[9px] font-black uppercase tracking-widest mb-2">{clinic.type}</p>
                                    <h3 className="text-2xl font-bold text-slate-900">{clinic.name}</h3>
                                </div>

                                <div className="space-y-5 mb-10 flex-1">
                                    <div className="flex gap-4">
                                        <span className="text-blue-600 text-lg">📍</span>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{clinic.address}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-blue-600 text-lg">📞</span>
                                        <p className="text-sm text-slate-500 font-medium">{clinic.phone}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-blue-600 text-lg">🕒</span>
                                        <p className="text-sm text-slate-500 font-medium">{clinic.hours}</p>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-slate-50 space-y-3">
                                    <button onClick={() => handleOpenModal(clinic)} className="w-full bg-slate-900 cursor-pointer text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all">
                                        View Facility Details
                                    </button>
                                    <button onClick={() => setshowModal(true)} className="w-full bg-white border border-slate-200 text-slate-600 py-4  cursor-pointer rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">
                                        Book at this branch
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>


            <FacilityModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                clinic={selectedClinic}
            />
                         {showModal&&<BookAppointmentModel isOpen={showModal} onClose={() => setshowModal(false)} />}

        </div>
    );
};

export default Location;