const About = () => {
    return (
      <div className="relative bg-white">
        {/* Background Section */}
        <div className="relative z-10 bg-cover bg-center bg-no-repeat px-6 py-20 md:pt-16" 
          style={{ backgroundImage: "url('/assets/Welcome-Topography-Pattern.png')" }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[#1a8b00] text-2xl font-semibold">WELCOME TO</h2>
            <h1 className="text-3xl md:text-5xl font-bold text-[#C7A875]">BUFFALO VETERINARY CLINIC</h1>
            <p className="mt-6 text-gray-700">
              We’re a small-town neighborhood clinic that offers all the advantages of modern veterinary technology...
            </p>
            <button className="mt-8 px-6 py-3 bg-blue-700 text-white rounded-lg shadow-lg hover:bg-blue-800">
              MAKE AN APPOINTMENT
            </button>
          </div>
        </div>
  
        {/* Wavy SVG Background */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
          <svg viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" 
              d="M0,256L80,234.7C160,213,320,171,480,165.3C640,160,800,192,960,202.7C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
            </path>
          </svg>
        </div>
      </div>
    );
  };
  
  export default About;
  