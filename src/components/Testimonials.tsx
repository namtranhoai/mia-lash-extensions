

const testimonials = [
    {
        id: 1,
        name: "Colleen Bear",
        text: "I am a very satisfied customer , she was very professional and did a great job , i’m happy with my new eyelash extensions . i recommended my Sister and her daughter to pay a visit to Mia Lash . The atmosphere was clean and very welcoming, no second thoughts for me , i will go see her soon for my next visit!! Thank you Mia lash 😊👏👏",
        rating: 5
    },
    {
        id: 2,
        name: "Angie Tremblay ",
        text: "Very clean and professional,  had a very good experience and love my lashes..very good price as well",
        rating: 5
    },
    {
        id: 3,
        name: "Brenda Melnychuk",
        text: "I had a lash fill from her (fill on top of another’s work ) all I can say is AMAZING . The difference in her technique from my other person is by far the best I’ve had. The place is clean and quiet. If you are looking for a new set or a fill I would recommend Mia Lashes again amazing quality",
        rating: 5
    },
    {
        id: 4,
        name: "Debbie Waldner",
        text: "Very relaxing, reasonable price and job well done",
        rating: 5
    },
    {
        id: 5,
        name: "Chy-Sugar Mez",
        text: "Very kind and professional. I love my eyelash extensions so much.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-secondary/5" id="testimonials">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-secondary mb-4">Client Love</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our beautiful clients have to say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                            <div className="font-medium text-secondary">{testimonial.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
