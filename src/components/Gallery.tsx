

const Gallery = () => {
    // Placeholder images - in a real app these would be actual work samples
    const images = [
        "/gallery/our-work-001.webp",
        "/gallery/our-work-002.webp",
        "/gallery/our-work-003.webp",
        "/gallery/our-work-004.webp",
        "/gallery/our-work-005.webp",
        "/gallery/our-work-006.webp"
    ];

    return (
        <section className="py-20 bg-white" id="gallery">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-secondary mb-4">Our Work</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A showcase of our finest lash extensions.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="aspect-square overflow-hidden rounded-xl group cursor-pointer">
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
