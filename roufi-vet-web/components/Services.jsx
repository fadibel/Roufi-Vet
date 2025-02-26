const Services = () => {
    return (
        <section className="relative bg-gray-50 py-20 px-6 text-center">
          {/* Curved Divider at the Top */}
          {/* <div className="absolute top-0 left-0 w-full">
            <img 
              src="/assets/Curved-Divider.svg" 
              alt="Curved Divider" 
              className="w-full object-cover"
            />
          </div> */}
    
          {/* Services Content */}
          <div className="relative z-10 max-w-[66rem] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a8b00]">OUR SERVICES</h2>
            <p className="text-[#0D2C40] text-lg mt-5 leading-relaxed">
              We offer comprehensive services for large and small animals, with a focus on 
              preventative care such as annual wellness exams, vaccinations, nutritional 
              counseling, and parasite prevention. Our skilled and caring medical team is 
              also here when the animal you care about needs experienced diagnostics, 
              orthopedic services, and more.
            </p>
    
            {/* Buttons */}
            <div className="mt-20 flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-white text-[#ff0302] text-lg font-semibold px-6 py-3 rounded-md">
                SMALL ANIMAL SERVICES
              </button>
              <button className="bg-white text-[#ff0302] text-lg font-semibold px-6 py-3 rounded-md">
                LARGE ANIMAL SERVICES
              </button>
            </div>
          </div>
        </section>
    )
}

export default Services;