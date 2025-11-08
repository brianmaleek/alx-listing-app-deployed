import React, { useState } from "react";
import { ACCOMMODATION_TYPES, APP_NAME } from "@/constants";
import Image from "next/image";

const Header: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Search query:', searchQuery);
    };

    return (
        <header className="bg-white shadow-md border-b border-gray-200">
            {/* Main Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Image src="/assets/Logos/Airbnb_Logo_0.svg" alt={APP_NAME} width={40} height={40} />
                        <span className="text-xl font-bold text-blue-600">{APP_NAME}</span>
                    </div>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="flex-1 max-w-lg mx-8">
                        <div className="flex items-center bg-gray-100 rounded-full border hover:shadow-md transition-shadow">
                            <input
                                type="text"
                                placeholder="Search Destination"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 px-6 py-3 bg-transparent rounded-l-full focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors mr-1"
                            >
                                🔍
                            </button>
                        </div>
                    </form>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-2">
                        <button className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full transition-colors">
                            List your home
                        </button>
                        <button className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full transition-colors">
                            Sign In
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            {/* Accommodation Types */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-6 py-4 overflow-x-auto">
                        {ACCOMMODATION_TYPES.map((type) => (
                            <button
                                key={type}
                                onClick={() => setSelectedType(type)}
                                className={`flex flex-col items-center p-2 rounded-lg transition-colors min-w-0 ${
                                    selectedType === type
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                                }`}
                            >
                                <Image
                                    src={`/assets/Listing images/${type.toLowerCase()}.svg`}
                                    alt={type}
                                    width={24}
                                    height={24}
                                    className="mb-1"
                                />
                                <span className="text-xs font-medium whitespace-nowrap">{type}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;