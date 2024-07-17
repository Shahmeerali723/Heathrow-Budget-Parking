"use client"
import React, { useState, useEffect } from 'react';

const DateTimeInput: React.FC<{ type: 'date' | 'time'; placeholder: string } | any> = ({ type, placeholder, onChange,
    classes,
    name, value, disabled, }) => {
    const [isFocused, setIsFocused] = useState(false);


    useEffect(() => {
        const input = document.getElementById(type) as HTMLInputElement;
        if (input) {
            input.addEventListener('blur', () => setIsFocused(false));
            input.addEventListener('focus', () => setIsFocused(true));
        }
    }, [type]);

    return (
        <div className="relative">
            <input
                type={type}
                id={type}
                value={value}
                onChange={onChange}
                name={name}
                placeholder=" " // Empty placeholder to override default placeholder
                className={`bg-transparent  focus:outline-none  text-black placeholder-black w-full p-2 sm:p-3 rounded-lg text-xs sm:text-sm border border-gray-200 ${isFocused || value ? 'text-black' : 'text-white'}`}
            />
            {!isFocused && !value && (
                <span className="absolute left-3 top-3 sm:top-4 text-xs md:text-sm text-gray-500 pointer-events-none">
                    {placeholder}
                </span>
            )}
        </div>
    );
};

export default DateTimeInput;
