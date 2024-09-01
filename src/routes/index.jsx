/* eslint-disable react/no-unknown-property */
import emailjs from '@emailjs/browser';
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowImg,
  BgSectionHomeDesk,
  BgSectionHomeMob,
  HeroSectionImg,
  HeroSectionRating,
  HeroSectionVideoWatch,
  Whyus1,
  Whyus2,
} from "../utils";
import Navbar from "../components/Navbar";
import { dropdown, services } from "../constants";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(useGSAP);

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contactForm = useRef();

  useGSAP(() => {
    if (activeIndex !== null) {
      gsap.from(".description", {
        opacity: 0,
        y: -20,
        duration: 0.5,
      });
    }
  }, [activeIndex]);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleContactFormSubmit = e => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, contactForm.current, {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }).then(() => {
        console.log('SUCCESS!');
    }).catch(error => {
      console.log('FAILED...', error.text);
    });
  };

  return (
    <main className="w-screen">
      <section className="w-screen h-screen ">
        <div className="w-full -z-10 h-full absolute md:hidden">
          <img src={BgSectionHomeMob} className="w-full h-full   " />
        </div>
        <div className="w-full -z-10 h-full absolute hidden md:block">
          <img src={BgSectionHomeDesk} className="w-full h-full object-cover" />
        </div>
        <Navbar />
        <div className="w-screen h-2/3 sm:h-3/4 flex justify-center sm:justify-center ">
          <div className="w-5/6 sm:w-full sm:pl-10 gap-2 h-full  flex sm:justify-between ">
            <div className="w-full md:w-1/2   h-full   font-bold text-[3.4rem] sm:text-[4rem]    text-white">
              <div className="">
                High quality <br /> IT-Solutions to help your problems about
                technology
              </div>
              <div className="hidden md:flex text-lg font-normal w-full h-1/4 text-justify ">
                We provide expert advice and support for all your IT needs,
                ensuring that your technology works seamlessly and efficiently.
                Whether you&apos;re facing technical challenges or looking to
                optimize your IT infrastructure, our high-quality solutions are
                tailored to meet your specific requirements.
              </div>
            </div>
            <div className="hidden md:flex w-1/6 flex-col justify-evenly  h-full">
              <a className="w-full" href="">
                <img
                  src={HeroSectionRating}
                  className="w-full  pointer-events-none object-contain"
                />
              </a>
              <a href="/" className="w-full">
                <img
                  src={HeroSectionVideoWatch}
                  className="w-full hover:scale-105 transition-all   object-contain"
                />
              </a>

              <img
                src={ArrowImg}
                className="w-full pointer-events-none  object-contain"
              />
            </div>
            <div className="w-full sm:w-1/3 hidden  justify-end  md:flex h-full ">
              <img
                src={HeroSectionImg}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-screen flex justify-center   h-1/6  ">
          <div className="w-5/6  ">
            <div className="bg-white w-60 h-16 rounded-full flex  justify-evenly items-center">
              <div className="h-full flex justify-center Headline font-bold items-center">
                Let&apos;s do it
              </div>
              <div className="h-full flex justify-center items-center ">
                <div className="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
                  <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
                    <div className="bg-blue-200 flex items-center gap-1 p-2 rounded-md">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-zinc-600"
                      >
                        <circle
                          strokeLinejoin="round"
                          r="9"
                          cy="12"
                          cx="12"
                        ></circle>
                        <path
                          strokeLinejoin="round"
                          d="M12 3C12 3 8.5 6 8.5 12C8.5 18 12 21 12 21"
                        ></path>
                        <path
                          strokeLinejoin="round"
                          d="M12 3C12 3 15.5 6 15.5 12C15.5 18 12 21 12 21"
                        ></path>
                        <path strokeLinejoin="round" d="M3 12H21"></path>
                        <path strokeLinejoin="round" d="M19.5 7.5H4.5"></path>
                        <g filter="url(#filter0_d_15_556)">
                          <path
                            strokeLinejoin="round"
                            d="M19.5 16.5H4.5"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            color-interpolation-filters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="3"
                            width="17"
                            y="16"
                            x="3.5"
                            id="filter0_d_15_556"
                          >
                            <feFlood
                              result="BackgroundImageFix"
                              floodOpacity="0"
                            ></feFlood>
                            <feColorMatrix
                              result="hardAlpha"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              type="matrix"
                              in="SourceAlpha"
                            ></feColorMatrix>
                            <feOffset dy="1"></feOffset>
                            <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                            <feColorMatrix
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                              type="matrix"
                            ></feColorMatrix>
                            <feBlend
                              result="effect1_dropShadow_15_556"
                              in2="BackgroundImageFix"
                              mode="normal"
                            ></feBlend>
                            <feBlend
                              result="shape"
                              in2="effect1_dropShadow_15_556"
                              in="SourceGraphic"
                              mode="normal"
                            ></feBlend>
                          </filter>
                        </defs>
                      </svg>
                      <span>I-PRIDE</span>
                    </div>
                    <div className="shadow-md bg-blue-200 absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
                    <div className="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0">
                      <div className="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
                    </div>
                  </div>

									<div className="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-blue-200 to-purple-200 p-3 rounded-full cursor-pointer duration-300">
										<svg
											fill="none"
											viewBox="0 0 24 24"
											height="20px"
											width="20px"
											xmlns="http://www.w3.org/2000/svg"
											className="fill-zinc-600"
										>
											<path
												strokeLinejoin="round"
												strokeLinecap="round"
												d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
											></path>
										</svg>
										<span className="text-[0px] group-hover:text-sm duration-300">
											Contact us
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Second Section */}
			<section className="w-screen mb-8 px-4">
				<div className="flex flex-col mb-5">
					<h1 className="flex justify-center items-center text-lg text-[#624DE7] font-semibold my-2">
						Services
					</h1>
					<h5 className="flex justify-center items-center text-center font-extrabold text-2xl md:text-4xl px-5">
						We provide All-in-one Solution for every IT job
					</h5>
				</div>
				<div className="cards flex flex-col sm:flex-row flex-wrap gap-5 items-center justify-center">
					{services.map((el, idx) => (
						<div
							key={idx}
							className="w-full sm:w-[48%] lg:w-[22%] h-[45vh] flex flex-col items-center justify-between border-t-4 border-[#624DE7] shadow-md shadow-gray-200 p-5 md:p-10 rounded-md rounded-br-[50px] mb-5"
						>
							<div className="flex flex-col">
								<h1 className="text-3xl font-bold text-[#624DE7] mb-2">
									{el.cardTitle}
								</h1>
								<p className="text-lg md:text-base text-gray-700 font-normal">
									{el.cardDescription}
								</p>
							</div>
							<div className="text-2xl md:text-xl font-bold">Learn More</div>
						</div>
					))}
				</div>
			</section>

			{/* Why Us Section */}
			<section className="w-screen px-5 md:flex">
				<div className="w-full md:w-[45vw] mr-8">
					<div className="flex flex-col">
						<h1 className="flex justify-center items-center text-lg text-[#624DE7] font-semibold mb-2">
							Why Us
						</h1>
						<h5 className="flex justify-center items-center text-center font-bold text-2xl md:text-3xl mb-2">
							We have over 9+ Years in the Tech Industry
						</h5>
						<p className="text-sm md:text-md text-gray-700 px-3 md:px-7 font-normal">
							We are committed to delivering exceptional technology solutions
							with a focus on innovation, quality, and customer satisfaction.
						</p>
					</div>
					<div className="px-5 md:px-12 mt-3">
						{dropdown.map((el, idx) => (
							<div key={idx} className="mb-2">
								<h1
									onClick={() => handleToggle(idx)}
									className="text-lg font-bold cursor-pointer flex items-center"
								>
									<FontAwesomeIcon
										icon={faXmark}
										className={`text-[#624DE7] font-bold transition-all duration-200 ${
											activeIndex === idx ? "" : "rotate-45"
										}`}
									/>
									&nbsp; {el.title}
								</h1>
								{activeIndex === idx && (
									<div className="p-2 description rounded-md">
										{el.description}
									</div>
								)}
							</div>
						))}
					</div>
			  </div>
			  <div className="md:flex gap-2 w-[45vw] hidden justify-center items-center flex-nowrap">
				  <img src={Whyus1} alt="whyus1" />
				  <img src={Whyus2} alt="whyus2" />
			  </div>

			</section>

      <section className="bg-blue-900 text-white pt-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-0">
          <div className="bg-stone-100 text-gray-900 p-8 md:rounded-b-none rounded-md shadow-lg w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-3">Contact us</h2>
            <p className="mb-9">Contact us today to explore how we can help you achieve your goals.</p>
            <form ref={contactForm} onSubmit={handleContactFormSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full py-3 px-6 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full py-3 px-6 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Project category"
                  className="w-full py-3 px-6 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 md:inline-block md:w-auto w-full"
                type="submit"
              >
                SEND
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left pb-16 md:pl-[50px] pt-10 md:pt-0">
            <h2 className="text-2xl font-bold mb-4">OUR SUCCESS</h2>
            <h3 className="text-3xl font-bold mb-4">We have helped more than 700+ clients worldwide</h3>
            <p className="mb-8">Our proven strategies have consistently delivered results. We take pride in our commitment to customer satisfaction.</p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">90%</div>
                <p>Client satisfaction rating.</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">85%</div>
                <p>Client satisfaction rating.</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">75%</div>
                <p>Client satisfaction rating.</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">90%</div>
                <p>Client satisfaction rating.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
		</main>
	);
}
