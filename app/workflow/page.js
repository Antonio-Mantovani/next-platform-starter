'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WorkflowCreationPage() {
    const [attributes, setAttributes] = useState('');

    const handleAttributeChange = (event) => {
        setAttributes(event.target.value);
    };

    const handleSaveWorkflow = () => {
        // In a real application, you would store these attributes
        // (e.g., in user's session or database).
        console.log('Attributes to extract:', attributes.split('\n').filter(Boolean));
        alert('Workflow attributes saved (for this session). You can now process documents.');
        // Optionally, redirect the user to the /process page
        // router.push('/process');
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 md:p-10 flex flex-col items-center">
            <div className="max-w-xl w-full bg-gray-800 rounded-lg shadow-xl p-8 md:p-10 mt-10 mb-10">
                <h1 className="text-3xl font-bold text-center mb-8 text-indigo-400">Create Extraction Workflow</h1>

                <div className="mb-6">
                    <label htmlFor="attributes" className="block text-gray-300 text-sm font-bold mb-2">
                        Enter attributes to extract (one per line):
                    </label>
                    <textarea
                        id="attributes"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 h-40"
                        value={attributes}
                        onChange={handleAttributeChange}
                        placeholder="e.g.,\nInvoice Number\nTotal Amount\nIssue Date\nCustomer Name"
                    />
                </div>

                <button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transition duration-200 ease-in-out mb-6 w-full"
                    onClick={handleSaveWorkflow}
                >
                    Save Workflow Attributes
                </button>

                <p className="text-center text-gray-400 mb-8">
                    Once saved, proceed to the <Link href="/process" className="text-indigo-400 hover:text-indigo-300 transition">Document Processing</Link> page to use this workflow.
                </p>

                {/* Back to Home Link */}
                <div className="text-center mt-8">
                    <Link href="/" className="text-indigo-400 hover:text-indigo-300 transition duration-200 ease-in-out">
                        &larr; Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}