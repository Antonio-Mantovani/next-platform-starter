import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16 p-6 md:p-10 bg-gray-900 text-white"> {/* Added dark background and white text */}
            <section className="text-center">
                <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white"> {/* White text */}
                    Unlock Document Insights Faster with <span className="text-indigo-400">External-VDU</span> {/* Adjusted accent color */}
                </h1>
                <p className="mb-8 text-lg text-gray-300 sm:text-xl lg:text-2xl"> {/* Lighter gray text */}
                    Stop wasting time on manual data extraction. Experience the power of AI to instantly pull key information from your documents.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
                    <Link href="/process" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-gray-900 bg-indigo-400 hover:bg-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> {/* Dark text on light background */}
                        Start Processing Documents
                    </Link>
                    <Link href="/billing" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-indigo-400 bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> {/* Light text on darker background */}
                        See Pricing
                    </Link>
                </div>
            </section>

            <section className="py-8 md:py-12">
                <div className="max-w-5xl mx-auto">
                    <h2 className="mb-6 text-3xl font-semibold text-white">Key Benefits</h2> {/* White text */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-800 rounded-lg shadow-md"> {/* Darker card background */}
                            <h3 className="mb-2 text-xl font-semibold text-indigo-400">Time Savings</h3> {/* Adjusted accent color */}
                            <p className="text-gray-300">Automate information extraction and reclaim valuable time.</p> {/* Lighter gray text */}
                        </div>
                        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                            <h3 className="mb-2 text-xl font-semibold text-indigo-400">Improved Accuracy</h3>
                            <p className="text-gray-300">Reduce human error and ensure reliable data extraction.</p>
                        </div>
                        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                            <h3 className="mb-2 text-xl font-semibold text-indigo-400">Easy to Use</h3>
                            <p className="text-gray-300">Get started quickly without complex setup or training.</p>
                        </div>
                        {/* You can add more benefits here */}
                    </div>
                </div>
            </section>

            {/* You can add more sections like "How it Works" or Testimonials here */}

            <footer className="py-6 text-center text-gray-400 border-t border-gray-700"> {/* Lighter gray text and border */}
                <p>&copy; {new Date().getFullYear()} External-VDU. All rights reserved.</p>
            </footer>
        </div>
    );
}
