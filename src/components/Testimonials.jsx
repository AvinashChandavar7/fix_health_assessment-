import TestimonialsCard from "./TestimonialsCard";

const testimonialsData = [
  {
    id: 1,
    quote: "Your platform is amazing! The features are top-notch, and the customer support is exceptional.",
    author: "John Smith",
    age: 35,
    occupation: "Software Engineer",
    image: '/assets/hero.jpeg'
  },
  {
    id: 2,
    quote: "I couldn't be happier with the results I've achieved using your services. The quality is unmatched!",
    author: "Jane Doe",
    age: 28,
    occupation: "Marketing Specialist",
    image: '/assets/hero1.jpeg'
  },
  {
    id: 3,
    quote: "Thank you for making my experience so seamless. Your attention to detail is truly appreciated.",
    author: "Alex Johnson",
    age: 42,
    occupation: "Financial Analyst",
    image: '/assets/hero2.jpeg'
  },
  {
    id: 4,
    quote: "Thank you for making my experience so seamless. Your attention to detail is truly appreciated.",
    author: "Alex Johnson",
    age: 42,
    occupation: "Financial Analyst",
    image: '/assets/hero2.jpeg'
  },
];

const Testimonials = () => {
  return (

    <div className="w-full h-full flex  flex-col items-center justify-center  " >

      <h2 className="lg:text-6xl text-4xl font-semibold mb-10 ">Testimonials</h2>

      <div className="flex lg:flex-row flex-col w-full items-center justify-center">
        {testimonialsData.map((testimonial) => (
          <TestimonialsCard
            key={testimonial.id}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
