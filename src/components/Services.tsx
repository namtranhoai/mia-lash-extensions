

const ServiceCard = ({ title, description, prices }: { title: string, description: string, prices: { label: string, price: string }[] }) => (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100">
        <h3 className="font-serif text-2xl font-bold text-secondary mb-3">{title}</h3>
        <p className="text-gray-500 mb-6 text-sm min-h-[40px]">{description}</p>
        <ul className="space-y-3">
            {prices.map((item, index) => (
                <li key={index} className="flex justify-between items-center text-sm border-b border-gray-50 border-dashed pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="font-bold text-primary text-lg">{item.price}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Services = () => {
    const services = [
        {
            title: "Classic",
            description: "Natural, everyday look with one extension applied to each natural lash.",
            prices: [
                { label: "Full set", price: "$75" },
                { label: "Refill within 2 weeks", price: "$50" },
                { label: "Refill within 3 weeks", price: "$60" },
                { label: "Refill after 4 weeks (new set)", price: "$75" },
            ]
        },
        {
            title: "Hybrid",
            description: "A mix of classic and volume lashes for a slightly fuller, textured look.",
            prices: [
                { label: "Full set", price: "$85" },
                { label: "Refill within 2 weeks", price: "$55" },
                { label: "Refill within 3 weeks", price: "$65" },
                { label: "Refill after 4 weeks", price: "$80" },
            ]
        },
        {
            title: "Volume",
            description: "Soft, full, fluffy look using lightweight volume fans for a glam effect.",
            prices: [
                { label: "Full set", price: "$95" },
                { label: "Refill within 2 weeks", price: "$70" },
                { label: "Refill within 3 weeks", price: "$80" },
                { label: "Refill after 4 weeks", price: "$90" },
            ]
        },
        {
            title: "Mega Volume",
            description: "Extra full and dramatic lashes with dense, dark volume for a bold look.",
            prices: [
                { label: "Full set", price: "$115" },
                { label: "Refill within 2 weeks", price: "$90" },
                { label: "Refill within 3 weeks", price: "$100" },
                { label: "Refill after 4 weeks (new set)", price: "$115" },
            ]
        }
    ];

    return (
        <section id="services" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">
                        Services & Price List
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Choose the perfect style for your eyes. From natural to dramatic, we have it all.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                <div className="mt-12 max-w-3xl mx-auto bg-white rounded-xl p-6 shadow-sm border border-primary/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-secondary">Bottom Lashes (Add-On)</h3>
                            <p className="text-gray-500 text-sm">Add definition to the lower lash line.</p>
                        </div>
                        <span className="font-bold text-primary text-2xl">$30–45</span>
                    </div>
                    <p className="text-xs text-gray-400 text-center border-t border-gray-100 pt-4">
                        * Pricing is based on your lash condition, style and the time needed.
                        Refills are recommended every 2–3 weeks. After 4 weeks, a new set may be required.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
