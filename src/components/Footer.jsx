import { Link, useLocation } from "react-router-dom";
import { scrollToTopSlowly } from "../components/Navbar"
export default function Footer(){
    return(
        <footer className="card variant-outlined !bg-white/20">
            <div className="max-w-6xl mx-auto space-y-16 px-6 py-16 2xl:px-0">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8">
                <Link To="/"  onClick={scrollToTopSlowly}>
                    <img src="banner_sem_fundo.png" alt="banner Jonas Sarmento" width={300}/>
                </Link>
                <div className="flex gap-3">
                    <a
                    href="https://www.instagram.com/jonassarmentof/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                    className="size-8 flex m-auto text-body hover:text-primary-600 dark:hover:text-primary-500"
                    >
                    <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path 
                            fill="currentColor" 
                            d="M7.5 2A5.5 5.5 0 0 0 2 7.5v9A5.5 5.5 0 0 0 7.5 22h9A5.5 5.5 0 0 0 22 16.5v-9A5.5 5.5 0 0 0 16.5 2zM7.5 4h9A3.5 3.5 0 0 1 20 7.5v9A3.5 3.5 0 0 1 16.5 20h-9A3.5 3.5 0 0 1 4 16.5v-9A3.5 3.5 0 0 1 7.5 4zM18 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-6 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                        />
                    </svg>
                    </a>
                    <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="twitter"
                    className="size-8 flex m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                    >
                    <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                    >
                        <path
                        fill="currentColor"
                        d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
                        />
                    </svg>
                    </a>
                    <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="youtube"
                    className="size-8 flex m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                    >
                    <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path 
                            fill="currentColor" 
                            d="M13.5 3H16V0h-3a5 5 0 0 0-5 5v3H5v3h3v10h3v-10h3l1-3h-4V5a2 2 0 0 1 2-2z"
                        />
                    </svg>

                    </a>
                </div>
                </div>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {/* Enterprise Section */}
                <div>
                    <span className="font-medium text-gray-950 dark:text-white">Enterprise</span>
                    <ul className="mt-4 list-inside space-y-4">
                    <li>
                        <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                        >
                        About
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                        >
                        Customers
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                        >
                        Enterprise
                        </a>
                    </li>
                    
                    </ul>
                </div>
                
                {/* Product Section */}
                <div>
                    <span className="text-sm font-medium text-gray-950 dark:text-white">Product</span>
                    <ul className="mt-4 list-inside space-y-4">
                    <li>
                        <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                        >
                        Security
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                        >
                        Customization
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                        >
                        Enterprise
                        </a>
                    </li>
                    
                    </ul>
                </div>
                
                {/* Docs Section */}
                <div>
                    <span className="text-sm font-medium text-gray-950 dark:text-white">Docs</span>
                    <ul className="mt-4 list-inside space-y-4">
                    <li>
                        <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                        >
                        Introduction
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                        >
                        Installation
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                        >
                        Utils
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                        >
                        Principles
                        </a>
                    </li>
                    
                    
                    </ul>
                </div>
                
                {/* Community Section */}
                <div>
                    <span className="text-sm font-medium text-gray-950 dark:text-white">Contact</span>
                    <ul className="mt-4 list-inside space-y-4">
                    <li>
                        <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                        >
                        Instagram
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                        >
                        Email
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                        >
                        Facebook
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                        >
                        X 
                        </a>
                    </li>
                    </ul>

                    {/* Newsletter Subscription Form */}
                    <form className="mt-12 max-w-xs w-full">
                    <div className="space-y-2.5 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400">
                        <label className="block font-medium text-sm" htmlFor="email">
                        Subscribe to our newsletter
                        </label>
                        <input
                        className="input variant-mixed sz-md"
                        placeholder="Your email"
                        type="email"
                        id="email"
                        required
                        name="email"
                        />
                        <span className="hidden peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-gray-500 dark:text-gray-400 text-sm">
                        Helper message
                        </span>
                    </div>
                    <button type="submit" className="btn variant-neutral sz-md mt-3">
                        <span>Subscribe</span>
                    </button>
                    </form>
                </div>
                </div>
                <div className="flex items-center justify-between rounded-md px-6 py-3 card variant-soft">
                <span className="text-title">&copy; People Change 2025</span>
                <a href="#" className="text-sm text-body hover:text-primary-600 dark:hover:text-primary-500">
                    Licence
                </a>
                </div>
            </div>
        </footer>

    )

}