
import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
// import { CopyToClipboard } from 'react-copy-to-clipboard';


const DoctorsDetails = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { id } = useParams();
    const location = useLocation();
    const { doctor } = location.state || {};
    
    const achievements = ['Developed a new vaccine protocol.', 'Published in the Journal of Pediatrics.', 'Awarded Pediatrician of the Year 2023.']
    const success = ['Cured over 3000 children with chronic diseases.', 'High patient satisfaction rates.', 'Led a successful community health initiative.']
    const experience = ['15 years in Pediatrics.', 'Head of Pediatrics at XYZ Clinic.', 'Trained in advanced pediatric care.']

    if (!doctor) {
        return <h2>Doctor not found</h2>;
    }
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <div className="card bg-white shadow-xl rounded-lg w-full max-w-4xl p-6">
                <div className="card-body">
                    <h2 className="text-primary font-bold text-3xl text-center mb-8">{`Meet ${doctor.name}`}</h2>
                    <div className="border-b-2 border-teal-400 mb-8">{`${doctor.name}'s Information`}</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center text-lg mb-8">
                        <div className="text-left">
                            <p className="mt-2 text-gray-800"><span className="font-bold text-teal-500">Specialty:</span> {doctor.specialty}</p>
                            <p className="mt-2 text-gray-800"><span className="font-bold text-teal-500">Country:</span> {doctor.country}</p>
                            <p className="mt-2 text-gray-800"><span className="font-bold text-teal-500">Email:</span> {doctor.email}</p>
                        </div>
                        <div className="text-left">
                            <div className="mt-2 text-gray-800">
                                <span className="font-bold text-teal-500">Details:</span>
                                <p className="mt-1">{doctor.details}</p>
                            </div>
                        </div>
                    </div>

                    <div className="join join-vertical w-full mt-12">
                        <div className="collapse collapse-arrow join-item border border-base-300 rounded-lg mb-4">
                            <input type="radio" name="accordion-4" defaultChecked />
                            <div className="collapse-title text-xl text-teal-600 font-bold">
                                Achievements Of The Last 2 Years
                            </div>
                            <div className="collapse-content text-accent font-medium list-disc ml-6">
                                <li>{achievements[0]}</li>
                                <li>{achievements[1]}</li>
                                <li>{achievements[2]}</li>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300 rounded-lg mb-4">
                            <input type="radio" name="accordion-4" />
                            <div className="collapse-title text-xl text-teal-600 font-bold">
                                Success Of The Last 2 Years
                            </div>
                            <div className="collapse-content text-accent font-medium list-disc ml-6">
                                <li>{success[0]}</li>
                                <li>{success[1]}</li>
                                <li>{success[2]}</li>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300 rounded-lg">
                            <input type="radio" name="accordion-4" />
                            <div className="collapse-title text-xl text-teal-600 font-bold">
                                Important Experiences
                            </div>
                            <div className="collapse-content text-accent font-medium list-disc ml-6">
                                <li>{experience[0]}</li>
                                <li>{experience[1]}</li>
                                <li>{experience[2]}</li>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <button className="btn btn-primary" onClick={toggleAccordion}>
                            {isOpen ? 'Close' : 'Open'} Your Meet Link :
                        </button>
                    </div>

                    {isOpen && (
                        <div className="mt-8 text-center text-accent font-medium list-disc ml-6">
                            <p>
                                Your MeetLink is : <Link to="" className="text-blue-500 underline">http://meet.google.com/jhu-wqer-ncs</Link> click.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default DoctorsDetails;
