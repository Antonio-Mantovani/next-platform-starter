import Link from 'next/link';

export default function BillingPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 md:p-10 flex flex-col items-center">
            <div className="max-w-6xl w-full bg-gray-800 rounded-lg shadow-xl p-8 md:p-10 mt-10 mb-10">
                <h1 className="text-4xl font-bold text-center mb-12 text-white">Billing & Pricing</h1>

                <p className="text-center text-lg text-gray-300 mb-12">
                    Choose the plan that best fits your document processing needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Free Plan */}
                    <div className="flex flex-col bg-gray-700 rounded-lg shadow-md p-8 text-center border border-indigo-600">
                        <h2 className="text-3xl font-bold text-indigo-400 mb-4">Free</h2>
                        <p className="text-5xl font-extrabold mb-6">$0<span className="text-lg font-medium text-gray-400">/month</span></p>
                        <ul className="text-gray-300 text-left flex-grow mb-8 space-y-2">
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Limited Document Uploads</li>
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Basic Text Extraction</li>
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Community Support</li>
                        </ul>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transition duration-200 ease-in-out w-full">
                            Get Started
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="flex flex-col bg-gray-700 rounded-lg shadow-md p-8 text-center border-2 border-indigo-400 transform scale-105">
                        <h2 className="text-3xl font-bold text-indigo-400 mb-4">Pro</h2>
                        <p className="text-5xl font-extrabold mb-6">$49<span className="text-lg font-medium text-gray-400">/month</span></p>
                        <ul className="text-gray-300 text-left flex-grow mb-8 space-y-2">
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Unlimited Document Uploads</li>
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced Data Extraction</li>
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Priority Support</li>
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>API Access</li>
                        </ul>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transition duration-200 ease-in-out w-full">
                            Choose Pro
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="flex flex-col bg-gray-700 rounded-lg shadow-md p-8 text-center border border-indigo-600">
                        <h2 className="text-3xl font-bold text-indigo-400 mb-4">Enterprise</h2>
                        <p className="text-5xl font-extrabold mb-6">$99<span className="text-lg font-medium text-gray-400">/month</span></p>
                        <ul className="text-gray-300 text-left flex-grow mb-8 space-y-2">
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>All Pro Features</li>
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Custom Integrations</li>
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Dedicated Account Manager</li>
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>SLA Guaranteed</li>
                        </ul>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transition duration-200 ease-in-out w-full">
                            Contact Sales
                        </button>
                    </div>
                </div>

                {/* Back to Home Link */}
                <div className="text-center mt-12">
                    <Link href="/" className="text-indigo-400 hover:text-indigo-300 transition duration-200 ease-in-out">
                        &larr; Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
