import FrontendLayout from "@/layouts/frontend-layout";
import { Link, usePage, useForm } from "@inertiajs/react";
import { SharedData } from "@/types";

export default function Home() {
    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        email: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/subscribe');
    };
    return (
        <FrontendLayout>
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

                h1, h2, h3 {
                font-family: 'Oswald', sans-serif;
                }

                /* Floating shapes */
                .shape-triangle {
                width: 0; height: 0;
                border-left: 18px solid transparent;
                border-right: 18px solid transparent;
                border-bottom: 30px solid #22c55e;
                }

                .shape-circle-purple {
                width: 18px; height: 18px;
                border-radius: 50%;
                background: #a855f7;
                }

                .arc-orange {
                width: 52px;
                height: 26px;
                border-top: 4px solid #f97316;
                border-radius: 50% 50% 0 0;
                }

                /* Image Backgrounds */
                .img-top {
                background-image: url('assets/images/img-top.jpg');
                background-size: cover;
                background-position: center;
                }
                .img-bottom {
                background-image: url('assets/images/img-fire.jpg');
                background-size: cover;
                background-position: center;
                }
                .img-fire {
                background-image: url('assets/images/img-bottom.jpg');
                background-size: cover;
                background-position: center;
                }

                /* Mobile specific adjustment for the grid */
                @media (max-width: 768px) {
                .left-panel-container {
                    height: 40vh !important;
                    width: 100% !important;
                }
                }

                /* Slide-in animation */
                @keyframes fadeUp {
                from { opacity: 0; transform: translateY(28px); }
                to   { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-up { animation: fadeUp 0.7s ease both; }
                .delay-1 { animation-delay: 0.1s; }
                .delay-2 { animation-delay: 0.25s; }
                .delay-3 { animation-delay: 0.4s; }
                .delay-4 { animation-delay: 0.55s; }
                `}} />
            <div className="flex flex-col md:flex-row min-h-screen">
                <div className="left-panel-container w-full md:w-[46%] grid grid-cols-2 grid-rows-2 md:h-screen gap-2 flex-shrink-0">
                    <div className="img-top relative overflow-hidden ">
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="img-fire relative overflow-hidden row-span-1 md:row-span-2">
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                    <div className="img-bottom relative overflow-hidden ">
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center p-8 md:p-14 relative overflow-hidden">
                    <div className="hidden sm:block absolute top-[10%] left-[10%] shape-triangle" />
                    <div className="hidden sm:block absolute bottom-[15%] left-[5%] shape-circle-purple" />
                    <div className="hidden sm:block absolute top-[10%] right-[10%] arc-orange" />
                    <div className="hidden sm:block absolute top-[15%] right-[5%]">
                        <svg width={38} height={26} viewBox="0 0 38 26" fill="none">
                            <path
                                d="M2 13 Q8 2, 14 13 Q20 24, 26 13 Q32 2, 38 13"
                                stroke="#3b82f6"
                                strokeWidth="3.5"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <div className="max-w-[520px] w-full text-center ">
                        <div className="flex justify-center mb-6 delay-1">
                            <img
                                src="assets/images/Group.png"
                                alt="Logo"
                                className="w-20 h-20 md:w-24 md:h-24 object-contain"
                            />
                        </div>
                        <div className="flex justify-center mb-5 delay-2">
                            <div className="inline-flex items-center gap-2  px-4 py-1.5 rounded-full border border-red-100">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                                <span className="text-sm text-gray-800 font-medium">
                                    Launch Incoming
                                </span>
                            </div>
                        </div>
                        <h1 className="text-4xl font-medium font-inter text-gray-900 leading-[1.1] mb-5 tracking-tight delay-3">
                            Sign Up To Our Email List To Get Notified When We Launch
                        </h1>
                        <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed delay-3">
                            An exclusive collection crafted for the bold. Experience the fusion of
                            modern aesthetics and timeless elegance.
                        </p>
                        <form onSubmit={handleSubmit} className="flex h-14 rounded-lg overflow-hidden shadow-sm border border-gray-200 mb-6 delay-4">
                            <input
                                type="email"
                                className="flex-1 px-5 text-gray-800 outline-none bg-gray-100 placeholder:text-gray-400"
                                placeholder="Your Email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 transition-colors uppercase tracking-wider text-sm"
                            >
                                Join
                            </button>
                        </form>
                        {recentlySuccessful && (
                            <p className="text-center text-green-600 text-sm mt-2">Successfully subscribed!</p>
                        )}
                        {errors.email && (
                            <p className="text-center text-red-600 text-sm mt-2">{errors.email}</p>
                        )}
                        <div className="flex flex-col items-center justify-center gap-2 mt-6 delay-5">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-900 flex items-center justify-center text-lg overflow-hidden">
                                    <img
                                        src="assets/images/Face 1.png"
                                        alt="Face 1"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-900 flex items-center justify-center text-lg overflow-hidden">
                                    <img
                                        src="assets/images/Face 2.png"
                                        alt="Face 2"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-900 flex items-center justify-center text-lg overflow-hidden">
                                    <img
                                        src="assets/images/Face 3.png"
                                        alt="Face 3"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm font-medium">
                                <span className="font-bold text-gray-900">
                                    Join 39k other creatives
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </FrontendLayout>
    );
}
