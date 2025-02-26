const About = () => {
    return (
        <div className="relative bg-white">

            <div className="relative z-10 bg-cover bg-center bg-no-repeat px-6 py-4 md:pt-5 pb-10"
                style={{ backgroundImage: "url('/assets/Welcome-Topography-Pattern.png')" }}>
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-[#ff0302] text-3xl font-semibold">WELCOME TO</h2>
                    <h1 className="text-3xl md:text-5xl font-bold text-[#1a8b00]">Roufi Vet VETERINARY CLINIC</h1>
                    <p className="mt-12 text-gray-700 text-lg"> We’re a small-town neighborhood clinic that offers all the advantages of modern veterinary technology. Our treatment expertise ranges from animals as small as hamsters to as large as draft horses. </p>

                    <p className="mt-5 text-gray-700 text-lg"> Whatever their size, we’re dedicated to providing the best veterinary care to animals in Roufi Vet and surrounding areas. We take pride in delivering personalized, compassionate care to our patients in a comfortable veterinary facility that is locally owned and operated or with our dedicated farmhouse service.</p>

                    <p className="mt-5 text-gray-700 text-lg">Whether it’s routine vaccinations or a complex medical problem, we’re here for you and the animals you care about</p>


                    <button className=" mt-16 px-5 py-2 border border-2 border-[#ff0302]  text-xl font-semibold text-[#ff0302]">
                        Make Appointment
                    </button>
                </div>
            </div>

            {/* <div className=" bottom-0 left-0 w-full">
        <img 
          src="/assets/Curved-Divider.svg" 
          alt="Mountain Divider"
          className="w-full object-cover"
        />
      </div> */}


        </div>
    );
};

export default About;
