import React, { useState } from 'react';
import { useAuth } from "../hook/useAuth";
import { useNavigate, Link } from "react-router";

const Watermarks = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.04] text-black">
        {/* Top Left Artistic Lotus */}
        <svg className="absolute -top-32 -left-32 w-[600px] h-[600px] -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.2">
            <path d="M50 95 C 45 70 45 35 50 15 C 55 35 55 70 50 95 Z" fill="currentColor" fillOpacity="0.4"/>
            <path d="M50 95 C 35 80 20 50 10 35 C 30 45 40 65 50 95 Z" fill="currentColor" fillOpacity="0.3"/>
            <path d="M50 95 C 65 80 80 50 90 35 C 70 45 60 65 50 95 Z" fill="currentColor" fillOpacity="0.3"/>
            <path d="M50 95 C 25 90 10 75 0 60 C 20 75 35 85 50 95 Z" fill="currentColor" fillOpacity="0.2"/>
            <path d="M50 95 C 75 90 90 75 100 60 C 80 75 65 85 50 95 Z" fill="currentColor" fillOpacity="0.2"/>
            <circle cx="50" cy="10" r="2" fill="currentColor" />
            <circle cx="10" cy="30" r="1.5" fill="currentColor" />
            <circle cx="90" cy="30" r="1.5" fill="currentColor" />
        </svg>

        {/* Top Right Mandala Half */}
        <svg className="absolute -top-20 -right-20 w-[450px] h-[450px]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3">
            <circle cx="100" cy="0" r="20" strokeDasharray="1 2" />
            <circle cx="100" cy="0" r="40" />
            <circle cx="100" cy="0" r="45" strokeDasharray="0.5 1" />
            <circle cx="100" cy="0" r="60" />
            <path d="M40 0 Q 30 15 40 30 Q 55 20 60 0 Z" fill="currentColor" fillOpacity="0.1"/>
            <path d="M60 0 Q 70 30 80 40 Q 90 25 100 20 Z" fill="currentColor" fillOpacity="0.1"/>
            <path d="M100 40 Q 85 50 70 60 Q 80 75 100 80 Z" fill="currentColor" fillOpacity="0.1"/>
            <circle cx="100" cy="0" r="80" strokeDasharray="2 3" />
        </svg>

        {/* Bottom Right Paisley (Ambi) */}
        <svg className="absolute -bottom-10 -right-10 w-[350px] h-[450px]" viewBox="0 0 100 150" fill="none" stroke="currentColor" strokeWidth="0.4">
            <path d="M50 140 C 20 140 5 110 5 80 C 5 50 30 20 50 20 C 70 20 90 40 90 60 C 90 80 70 90 60 80 C 50 70 60 50 70 50 C 80 50 85 60 85 70 C 85 100 65 120 50 140 Z" fill="currentColor" fillOpacity="0.1"/>
            <path d="M50 125 C 30 125 15 100 15 80 C 15 55 35 35 50 35 C 65 35 75 50 75 60" />
            <circle cx="50" cy="80" r="10" strokeDasharray="1 1" />
            <circle cx="50" cy="80" r="4" fill="currentColor" />
            <path d="M50 140 Q 40 150 50 160" />
            <path d="M40 135 Q 30 145 40 155" />
            <path d="M60 135 Q 70 145 60 155" />
        </svg>

        {/* Middle Left Henna Elements */}
        <svg className="absolute top-1/2 -left-24 w-[300px] h-[300px] -translate-y-1/2 opacity-70" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3">
            <path d="M10 50 Q 30 30 50 50 T 90 50" />
            <path d="M10 50 Q 30 70 50 50 T 90 50" fill="currentColor" fillOpacity="0.1" />
            <circle cx="50" cy="50" r="5" fill="currentColor" />
            <circle cx="30" cy="50" r="2" fill="currentColor" />
            <circle cx="70" cy="50" r="2" fill="currentColor" />
            <path d="M50 45 Q 50 25 60 20" />
            <path d="M50 55 Q 50 75 60 80" />
            <circle cx="60" cy="20" r="1" />
            <circle cx="60" cy="80" r="1" />
        </svg>
    </div>
);

const RaagaLogo = () => (
    <div className="flex flex-col items-center mb-8 md:mb-12 relative w-max mx-auto">
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Playfair+Display:wght@600&family=Nunito:wght@400;600&display=swap');
            .font-caveat { font-family: 'Caveat', cursive; }
            .font-playfair { font-family: 'Playfair Display', serif; }
            .font-nunito { font-family: 'Nunito', sans-serif; }
        `}</style>
        
        {/* Grid lines behind logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-12 flex flex-col justify-between opacity-15 pointer-events-none">
            <div className="border-t border-black w-full"></div>
            <div className="border-t border-black w-full"></div>
            <div className="border-t border-black w-full"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] flex justify-between opacity-15 pointer-events-none">
            <div className="border-l border-black h-full"></div>
            <div className="border-l border-black h-full"></div>
            <div className="border-l border-black h-full"></div>
        </div>

        <div className="relative z-10 flex items-center text-6xl md:text-[80px] font-playfair text-[#111]">
            <span className="leading-none tracking-tight">र</span>
            <span className="relative leading-none mx-1 md:mx-2 flex flex-col items-center">
                <span className="absolute -top-[1.4rem] md:-top-[2rem] text-[#b91c1c] z-20">
                    <svg width="48" height="36" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-8 md:w-16 md:h-12 drop-shadow-sm">
                        <path d="M12 2C12 2 9 8 5 9C8 10 10 15 12 20C14 15 16 10 19 9C15 8 12 2 12 2Z"/>
                        <path d="M12 20C12 20 8 18 2 12C6 15 9 17 12 20Z"/>
                        <path d="M12 20C12 20 16 18 22 12C18 15 15 17 12 20Z"/>
                    </svg>
                </span>
                <span className="border-t-[3px] md:border-t-[4px] border-[#111] pt-1">aa</span>
            </span>
            <span className="leading-none tracking-tight">गा</span>
        </div>

        {/* Decorative handwritten text */}
        <div className="absolute -left-20 -top-16 hidden lg:flex flex-col items-end opacity-80">
            <div className="text-right mb-2">
                <p className="font-caveat text-xl text-gray-800 whitespace-nowrap">The marigold</p>
                <p className="font-caveat text-xl text-gray-800 whitespace-nowrap">humble yet divine,</p>
            </div>
            <svg width="40" height="40" viewBox="0 0 100 100" className="opacity-40" strokeDasharray="4 4">
                <path d="M90 90 Q 50 90 50 50 T 10 10" fill="none" stroke="black" strokeWidth="2"/>
                <polygon points="10,10 20,5 5,20" fill="black"/>
            </svg>
        </div>

        <div className="absolute -right-20 -bottom-24 hidden lg:flex flex-col items-start opacity-80">
            <svg width="40" height="40" viewBox="0 0 100 100" className="opacity-40 mb-2" strokeDasharray="4 4">
                <path d="M10 10 Q 50 10 50 50 T 90 90" fill="none" stroke="black" strokeWidth="2"/>
                <polygon points="90,90 80,95 95,80" fill="black"/>
            </svg>
            <div className="text-left">
                <p className="font-caveat text-xl text-gray-800 whitespace-nowrap">From our heart</p>
                <p className="font-caveat text-xl text-gray-800 whitespace-nowrap">to yours</p>
            </div>
        </div>
    </div>
);

const Login = () => {
    const { handleLogin } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleLogin({
                email: formData.email,
                password: formData.password
            });
            navigate("/");
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <main className="h-screen flex flex-col md:flex-row-reverse bg-white text-black font-sans selection:bg-black selection:text-white overflow-hidden">
            {/* Form Section (Now on the Right) */}
            <section className="w-full md:w-[60%] lg:w-[55%] flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-4 bg-[#f8f8f8] relative z-10 h-full overflow-y-auto">
                <Watermarks />
                
                <div className="max-w-[420px] w-full mx-auto md:mx-0 my-auto py-8 relative z-10">
                    <RaagaLogo />

                    {/* Increased space-y to 8 to match the registration form height visually */}
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Email */}
                        <div className="relative pt-4">
                            <label className="text-[10px] leading-none tracking-[0.1em] font-bold text-black/40 absolute top-0 left-0 uppercase">EMAIL ADDRESS</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-[90%] bg-transparent border-0 border-b border-black py-3 text-base placeholder:text-black/20 focus:ring-0 focus:outline-none focus:border-black rounded-none"
                                placeholder="EMAIL@STREET.COM"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative pt-4">
                            <div className="absolute top-0 right-[10%] z-10">
                                <a href="#" className="text-[10px] leading-none tracking-[0.1em] font-bold text-black/60 hover:text-black uppercase underline underline-offset-4">FORGOT?</a>
                            </div>
                            <label className="text-[10px] leading-none tracking-[0.1em] font-bold text-black/40 absolute top-0 left-0 uppercase">PASSWORD</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-[90%] bg-transparent border-0 border-b border-black py-3 text-base placeholder:text-black/20 focus:ring-0 focus:outline-none focus:border-black rounded-none"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="pt-6 space-y-4 w-[90%]">
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-4 text-[12px] leading-none tracking-[0.15em] font-bold uppercase hover:bg-black/80 transition-colors duration-200 active:translate-y-[1px]"
                            >
                                SIGN IN
                            </button>

                            <p className="text-center text-sm text-gray-600 mt-4">
                                NO ACCOUNT YET? <Link to="/register" className="font-bold text-black underline underline-offset-4">SIGN UP</Link>
                            </p>
                        </div>
                    </form>

                    <div className="mt-8 pt-6 border-t border-black/10 hidden lg:block w-[90%]">
                        <p className="text-[10px] leading-none tracking-[0.1em] font-bold text-black/40 uppercase text-center">
                            Two languages, one legacy. A confluence of culture and craft.
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Section (Now on the Left) */}
            <section className="hidden md:flex md:w-[40%] lg:w-[45%] relative bg-black flex-col justify-center overflow-hidden">
                <img
                    alt="Streetwear model"
                    className="absolute inset-0 w-full h-full object-contain grayscale contrast-125 opacity-90 p-2"
                    src="../../../../public/_.jpeg"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-12 pointer-events-none">
                    <div className="flex justify-start">
                        <span className="bg-black text-white px-3 py-2 text-[10px] leading-none tracking-[0.15em] font-bold uppercase border border-white/20">ACCESS // GRANTED</span>
                    </div>
                    <div className="space-y-4">
                        <div className="text-white text-5xl lg:text-6xl font-nunito tracking-wide mix-blend-difference">
                            <span className="italic font-medium">रaaगा</span>
                        </div>
                        <div className="h-[2px] bg-white w-16"></div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Login;