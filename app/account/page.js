'use client'; // Add this line at the top

import Link from 'next/link';
import { useState } from 'react'; // Import useState if you plan to add more client-side logic

export default function AccountPage() {
    const handleEditProfileClick = () => {
        console.log('Edit Profile Clicked');
        // Add your edit profile logic here
    };

    const handleChangePasswordClick = () => {
        console.log('Change Password Clicked');
        // Add your change password logic here
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 md:p-10 flex flex-col items-center">
            <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-xl p-8 md:p-10 mt-10">
                <h1 className="text-4xl font-bold text-center mb-8 text-white">My Account</h1>

                {/* Profile Information Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Profile Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                                value="John Doe"
                                readOnly
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                                value="john.doe@example.com"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="mt-6 text-right">
                        <button
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                            onClick={handleEditProfileClick} // Using the defined function
                        >
                            Edit Profile
                        </button>
                    </div>
                </section>

                {/* Change Password Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Change Password</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="current-password" className="block text-gray-300 text-sm font-bold mb-2">
                                Current Password
                            </label>
                            <input
                                type="password"
                                id="current-password"
                                className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                                placeholder="Enter current password"
                            />
                        </div>
                        <div>
                            <label htmlFor="new-password" className="block text-gray-300 text-sm font-bold mb-2">
                                New Password
                            </label>
                            <input
                                type="password"
                                id="new-password"
                                className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                                placeholder="Enter new password"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block text-gray-300 text-sm font-bold mb-2">
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                id="confirm-password"
                                className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                                placeholder="Confirm new password"
                            />
                        </div>
                    </div>
                    <div className="mt-6 text-right">
                        <button
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                            onClick={handleChangePasswordClick} // Using the defined function
                        >
                            Change Password
                        </button>
                    </div>
                </section>

                {/* Back to Home Link */}
                <div className="text-center mt-10">
                    <Link href="/" className="text-indigo-400 hover:text-indigo-300 transition duration-200 ease-in-out">
                        &larr; Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}