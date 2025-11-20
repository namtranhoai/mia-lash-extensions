

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-b from-background to-accent/20 pt-20 pb-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="animate-fade-in-up">
                    <img
                        src="/mia-logo.png"
                        alt="Mia Lash Extensions"
                        className="w-32 h-32 mx-auto mb-8 rounded-full shadow-xl border-4 border-white"
                    />
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6 tracking-tight">
                        Mia Lash Extensions
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        Soft, natural and elegant eyelash extensions for everyday confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+13062306089"
                            className="px-8 py-4 bg-primary text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            Call to Book
                        </a>
                        <a
                            href="https://m.me/mia.lash.extension"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-full font-medium text-lg hover:bg-primary/5 transition-all duration-300"
                        >
                            Message on Facebook
                        </a>
                    </div>

                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
};

export default Hero;
