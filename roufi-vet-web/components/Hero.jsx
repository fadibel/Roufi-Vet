const Hero = () => {
    return (
        <div
            className=" pt-16  h-[800px]  bg-center    bg-cover  bg-no-repeat"
            style={{ backgroundImage: "url('/assets/Hero.png')" }}
        >
            <div className="absolute top-[320px] left-10 md:left-80 text-white max-w-lg text-center">
                <h1 className="text-4xl md:text-[3.1rem] font-bold leading-tight">
                    WHERE HOMETOWN VALUES MEET VETERINARY EXPERTISE
                </h1>
            </div>
            {/* <div className="md:mt-[615px] mt-[710px] bottom-0 left-0 w-full">
                <img
                    src="/assets/Mountain-Divider-Hero.svg"
                    alt="Mountain Divider"
                    className="w-full object-cover "
                />
            </div> */}
        </div>

    )
}
export default Hero;