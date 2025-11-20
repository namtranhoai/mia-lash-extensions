

const CallToAction = () => {
    return (
        <section className="py-20 bg-primary/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-6">
                    Ready to book your lash appointment?
                </h2>
                <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                    Send a message or call to reserve your appointment. Evening and weekend
                    times may be available.
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
        </section>
    );
};

export default CallToAction;
