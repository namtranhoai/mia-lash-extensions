

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-8 relative inline-block">
                    About Mia Lash Extensions
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
                </h2>
                <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
                    <p className="mb-6">
                        Mia Lash Extensions offers professional eyelash extension services in a
                        comfortable home-based studio in Saskatoon. Each set is customized to
                        your eye shape and style preference, with a focus on soft, lightweight
                        and comfortable lashes.
                    </p>
                    <p>
                        High-quality products and careful application are used to help protect
                        your natural lashes while giving you beautiful results that are easy to
                        wear every day.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
