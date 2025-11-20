

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="font-serif text-2xl font-bold mb-2">Mia Lash Extensions</h3>
                        <p className="text-gray-400 text-sm">Soft, natural and elegant eyelash extensions.</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://www.facebook.com/mia.lash.extension" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">Facebook</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/mialash.ca/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">Instagram</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm-3.772 1.792c-1.019.047-1.571.221-1.939.365-.506.196-.874.429-1.26.815-.386.386-.619.754-.815 1.26-.144.368-.318.92-.365 1.939-.047 1.086-.058 1.414-.058 4.198 0 2.785.011 3.112.058 4.198.047 1.019.221 1.571.365 1.939.196.506.429.874.815 1.26.386.386.754.619 1.26.815.368.144.92.318 1.939.365 1.086.047 1.414.058 4.198.058 2.785 0 3.112-.011 4.198-.058 1.019-.047 1.571-.221 1.939-.365.506-.196.874-.429 1.26-.815.386-.386.619-.754.815-1.26.144-.368.318-.92.365-1.939.047-1.086.058-1.414.058-4.198 0-2.785-.011-3.112-.058-4.198-.047-1.019-.221-1.571-.365-1.939-.196-.506-.429-.874-.815-1.26-.386-.386-.754-.619-1.26-.815-.368-.144-.92-.318-1.939-.365-1.086-.047-1.414-.058-4.198-.058-2.785 0-3.112.011-4.198.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.792a3.343 3.343 0 100 6.686 3.343 3.343 0 000-6.686zM17.338 5.333a1.194 1.194 0 110 2.388 1.194 1.194 0 010-2.388z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {currentYear} Mia Lash Extensions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
