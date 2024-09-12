import React from 'react';
import Image from 'next/image';
export default function Navbar() {

    

    
    return (
        <nav className="bg-white-800 p-4 fixed top-0 w-full z-50 shadow-md mb-20">
            <div className="flex md:mx-auto justify-center items-center lg:space-x-[40rem] sm:space-x-[10rem]">
              
                {/* Logo */}
                <div className=''>
                    <a href="http://girmantech.com">
                        {/* Image Logo */}
                        <Image
                            src="/named_logo.svg"  // Image path from the public folder
                            alt="Girman Tech Logo"
                            width={150}        // Width of the logo
                            height={150}       // Height of the logo
                        />
                    </a>
                </div>

                {/* Links */}
                <div className="sm:space-x-8 lg:space-x-10">
                    <a
                        href="http://girmantech.com"
                        
                        className="text-custom-blue underline "
                       
                    >
                        SEARCH
                    </a>
                    <a
                        href="http://girmantech.com"
                        className="text-black hover:text-red"
                    >
                        WEBSITE
                    </a>
                    <a
                        href="https://linkedin.com/company/girman-technologies"
                        className="text-black hover:text-red"
                    >
                        LINKEDIN
                    </a>
                    <a
                        href="mailto:contact@girmantech.com"
                        className="text-black hover:text-red"
                    >
                        CONTACT
                    </a>
                </div>
            </div>
        </nav>
    );
}
