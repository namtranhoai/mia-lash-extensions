

const Contact = () => {
    return (
        <section className="py-20 bg-background" id="contact">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-secondary mb-4">Contact Us</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ready to enhance your natural beauty? Get in touch with us today.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="font-medium text-lg mb-2 text-secondary">Visit Us</h3>
                        <p className="text-gray-500 text-center">119 Trent Cres<br />Saskatoon, SK</p>
                    </div>

                    <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="font-medium text-lg mb-2 text-secondary">Call Us</h3>
                        <p className="text-gray-500 text-center">
                            <a href="tel:+13062306089" className="hover:text-primary transition-colors">
                                (306) 230-6089
                            </a>
                        </p>
                    </div>

                    <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="font-medium text-lg mb-2 text-secondary">Email Us</h3>
                        <p className="text-gray-500 text-center">
                            <a href="mailto:mia.lash.extensions@gmail.com" className="hover:text-primary transition-colors break-all">
                                mia.lash.extensions@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="font-medium text-lg mb-2 text-secondary">Follow Us</h3>
                        <div className="flex gap-4 mt-2">
                            <a href="https://www.facebook.com/mia.lash.extension" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/mialash.ca/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm-3.772 1.792c-1.019.047-1.571.221-1.939.365-.506.196-.874.429-1.26.815-.386.386-.619.754-.815 1.26-.144.368-.318.92-.365 1.939-.047 1.086-.058 1.414-.058 4.198 0 2.785.011 3.112.058 4.198.047 1.019.221 1.571.365 1.939.196.506.429.874.815 1.26.386.386.754.619 1.26.815.368.144.92.318 1.939.365 1.086.047 1.414.058 4.198.058 2.785 0 3.112-.011 4.198-.058 1.019-.047 1.571-.221 1.939-.365.506-.196.874-.429 1.26-.815.386-.386.619-.754.815-1.26.144-.368.318-.92.365-1.939.047-1.086.058-1.414.058-4.198 0-2.785-.011-3.112-.058-4.198-.047-1.019-.221-1.571-.365-1.939-.196-.506-.429-.874-.815-1.26-.386-.386-.754-.619-1.26-.815-.368-.144-.92-.318-1.939-.365-1.086-.047-1.414-.058-4.198-.058-2.785 0-3.112.011-4.198.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.792a3.343 3.343 0 100 6.686 3.343 3.343 0 000-6.686zM17.338 5.333a1.194 1.194 0 110 2.388 1.194 1.194 0 010-2.388z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 bg-white p-4 rounded-2xl shadow-sm">
                    <div className="w-full h-[400px] rounded-xl overflow-hidden">
                        <iframe
                            width="100%"
                            height="100%"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=119%20Trent%20Cres%2C%20Saskatoon%2C%20SK&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            title="Mia Lash Extensions Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
