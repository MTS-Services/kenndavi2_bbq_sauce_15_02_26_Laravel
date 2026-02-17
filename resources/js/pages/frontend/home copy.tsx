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

                .main_wrap {
                    font-family: 'Inter', sans-serif;
                    background-color: #ffffff;
                    background-image: url("assets/images/Coming Soon.png");
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    min-height: 100vh;
                    height: 100vh;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                .content-container {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    overflow: hidden;
                }

                @media (max-width: 768px) {
                    .main_wrap {
                        min-height: auto;
                        height: auto;
                        overflow: visible;
                    }

                    .content-container {
                        overflow: visible;
                    }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(5deg); }
                }

                .float-animation {
                    animation: float 3s ease-in-out infinite;
                }
                `}} />
            <div className="relative main_wrap">
                {/* Header with Responsive Logo */}
                <section className="relative z-10 py-2 md:py-3 flex-shrink-0">
                    <div className="container mx-auto px-4 flex justify-center">
                        <div className="w-32 sm:w-40 md:w-44">
                            <img src="assets/images/sauces.png" alt="Logo" className="w-full h-auto" />
                        </div>
                    </div>
                </section>

                {/* Main Content - Flexbox controlled */}
                <section className="relative z-10 container mx-auto px-4 flex-1 content-container">
                    <div className="flex flex-col justify-center h-full max-w-7xl mx-auto">
                        {/* Top Section - Launch Badge & Hero */}
                        <div className="flex-shrink-0">
                            {/* Launch Badge */}
                            <div className="flex justify-center mb-3 md:mb-4">
                                <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full mr-2" />
                                    <span className="text-xs sm:text-sm text-gray-700">
                                        Launch Incoming
                                    </span>
                                </div>
                            </div>

                            {/* Hero Title */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1B1B1B] font-inter font-medium text-center mb-3 md:mb-4 text-gray-900 leading-tight px-2">
                                Redefining Luxury
                            </h1>

                            {/* Subtitle */}
                            <p className="text-center text-[#262626] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-4 md:mb-5 px-4">
                                An exclusive collection crafted for the bold. Experience the fusion of
                                modern aesthetics and timeless elegance.
                            </p>

                            {/* Email Form */}
                            <div className="max-w-xl mx-auto mb-3 md:mb-4 px-4">
                                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 rounded-lg overflow-hidden">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
                                    />
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 sm:px-10 py-2.5 sm:py-3 text-sm sm:text-base transition duration-300 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none active:bg-red-700 disabled:opacity-50"
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
                            </div>

                            {/* Social Proof */}
                            <div className="flex flex-col items-center mb-4 md:mb-6">
                                <div className="flex -space-x-2 mb-1 sm:mb-2">
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 ring-white">
                                        <img
                                            src="assets/images/Face 1.png"
                                            alt="User avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 ring-white">
                                        <img
                                            src="assets/images/Face 2.png"
                                            alt="User avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 ring-white">
                                        <img
                                            src="assets/images/Face 3.png"
                                            alt="User avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm text-[#4E4E4E]">
                                    Join 39k other creatives
                                </p>
                            </div>
                        </div>

                        {/* Illustration - Constrained height */}
                        <div className="flex-1 flex items-end justify-center overflow-hidden" style={{ maxHeight: '40vh' }}>
                            <div className="relative w-full flex justify-center items-end px-4">
                                <img
                                    src="assets/images/undraw_On_the_way_re_swjt 1.png"
                                    alt="Illustration"
                                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl h-auto object-contain object-bottom"
                                    style={{ maxHeight: '35vh' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </FrontendLayout>
    );
}
