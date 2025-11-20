

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-accent/20 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <img src="/mia-logo.png" alt="Mia Lash Extensions Logo" className="h-12 w-auto" />
                        <span className="font-serif text-xl font-bold text-secondary tracking-wider hidden sm:block">
                            Mia Lash Extensions
                        </span>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <a href="#about" className="text-secondary hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide">About</a>
                        <a href="#services" className="text-secondary hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide">Services</a>
                        <a href="#gallery" className="text-secondary hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide">Gallery</a>
                        <a href="#testimonials" className="text-secondary hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide">Testimonials</a>
                        <a href="#contact" className="text-secondary hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide">Contact</a>
                    </nav>
                    <div className="flex items-center">
                        <a href="tel:+13062306089" className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
