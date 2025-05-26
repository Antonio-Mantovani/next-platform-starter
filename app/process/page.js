'use client'; // This page needs client-side interactivity for file input and processing

import { useState } from 'react';

export default function ProcessPage() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleProcessDocument = async () => {
        if (!selectedFile) {
            setError('Please select a PDF file.');
            return;
        }

        setProcessing(true);
        setError(null);
        setResults(null);

        // In a real application, you would send the file to your backend for processing here.
        // For this frontend example, we'll simulate a result after a short delay.
        setTimeout(() => {
            setProcessing(false);
            // Simulate successful attribute extraction
            const mockResults = {
                'Invoice Number': 'INV-2025-123',
                'Total Amount': '$1,250.00',
                'Issue Date': '2025-05-26',
                'Customer Name': 'Acme Corp'
            };
            setResults(mockResults);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 md:p-10 flex flex-col items-center">
            <div className="max-w-3xl w-full bg-gray-800 rounded-lg shadow-xl p-8 md:p-10 mt-10 mb-10">
                <h1 className="text-3xl font-bold text-center mb-8 text-indigo-400">Process Documents</h1>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <strong className="font-bold">Error!</strong>
                        <span className="block sm:inline"> {error}</span>
                    </div>
                )}

                <div className="mb-6">
                    <label htmlFor="pdf-upload" className="block text-gray-300 text-sm font-bold mb-2">
                        Upload PDF File
                    </label>
                    <input
                        id="pdf-upload"
                        type="file"
                        accept=".pdf"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                        onChange={handleFileChange}
                    />
                </div>

                <button
                    className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transition duration-200 ease-in-out ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handleProcessDocument}
                    disabled={processing || !selectedFile}
                >
                    {processing ? 'Processing...' : 'Extract Attributes'}
                </button>

                {results && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Extraction Results</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                            Attribute
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                            Value
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(results).map(([key, value]) => (
                                        <tr key={key}>
                                            <td className="px-5 py-3 border-b border-gray-700 bg-gray-800 text-sm">
                                                <p className="text-gray-300">{key}</p>
                                            </td>
                                            <td className="px-5 py-3 border-b border-gray-700 bg-gray-800 text-sm">
                                                <p className="text-gray-300">{value}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
