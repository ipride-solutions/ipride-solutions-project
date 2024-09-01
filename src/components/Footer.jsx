import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhoneAlt,
	faEnvelope,
	faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookF,
	faTwitter,
	faLinkedinIn,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { BgSectionHomeDesk, BgSectionHomeMob, ComLogo } from '../utils';
import { contact, pages, services } from '../constants';


const Footer = () => {
  
    return (
			<section className="bg-[#4733C9] md:bg-transparent text-white pt-20  w-screen 2xl:h-[70vh]  flex items-center justify-center ">
				<img
					src={BgSectionHomeDesk}
					className="-z-10 absolute w-full h-3/4 md:block hidden object-cover"
				/>
				<div className="container px-5 md:px-20  lg:px-32 2xl:px-0 2xl:text-3xl ">
					<div className="flex flex-col text-xs md:text-base md:flex-row font-medium justify-between md:items-start mb-10 pb-5 border-b-2 border-zinc-400">
						<div className="flex items-center md:items-start mx-4 md:flex-nowrap space-y-2 md:space-y-0 flex-wrap  justify-between 2xl:text-3xl">
							<div className="flex items-center space-x-2 mr-8 ">
								<FontAwesomeIcon
									icon={faPhoneAlt}
									className="text-xl 2xl:text-3xl"
								/>
								<span>+91-9561322211</span>
							</div>
							<div className="flex items-center space-x-2 mr-8">
								<FontAwesomeIcon
									icon={faEnvelope}
									className="text-xl 2xl:text-3xl"
								/>
								<span>contact@i-pride.in</span>
							</div>
							<div className="flex items-center space-x-2">
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									className="text-xl 2xl:text-3xl"
								/>
								<span>Roseland Residency, H102, Pune 411027</span>
							</div>
						</div>

						<div className="mb-8 md:mb-0 2xl:text-3xl">
							<button className="flex items-center text-white py-2 px-4 rounded-lg font-medium">
								GET IN TOUCH &nbsp;
								<svg
									className="w-4 h-4 2xl:w-14 2xl:h-14"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 12h14m-7-7l7 7-7 7"
									></path>
								</svg>
							</button>
						</div>
					</div>

					<div className="flex flex-col md:flex-row justify-between">
						<div className="flex flex-col md:w-1/2 items-center md:items-start mb-8 md:mb-0">
							<img src={ComLogo} className="2xl:scale-150" />
							<p className="text-md mt-3 text-center md:text-left 2xl:text-2xl">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
								voluptatibus quisquam odio unde rem dolorum tempore dignissimos
								fuga explicabo distinctio.
							</p>
						</div>

						<div className="mb-8 md:mb-0">
							<h3 className="text-lg 2xl:text-4xl 2xl:mb-9 font-semibold mb-3">
								PAGES
							</h3>
							<ul className="2xl:space-y-7">
								{pages.map((el, idx) => (
									<li className="mb-2">
										<a href="#" className="hover:underline">
											<b>&gt;</b> {el}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Services */}
						<div>
							<h3 className="text-lg 2xl:text-4xl 2xl:mb-9 font-semibold mb-3">
								SERVICES
							</h3>
							<ul className="2xl:space-y-7">
								{services.map((el, idx) => (
									<li className="mb-2">
										<a href="#" className="hover:underline">
											<b>&gt;</b> {el.cardTitle}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="flex space-x-4 mt-4 ">
						<a href="#" className="hover:text-gray-400">
							<FontAwesomeIcon
								icon={faFacebookF}
								className="border-2 shadow-md shadow-gray-700 px-3 py-2 rounded-full "
							/>
						</a>
						<a href="#" className="hover:text-gray-400">
							<FontAwesomeIcon
								icon={faTwitter}
								className="border-2 shadow-md shadow-gray-700 p-2 rounded-full"
							/>
						</a>
						<a href="#" className="hover:text-gray-400">
							<FontAwesomeIcon
								icon={faLinkedinIn}
								className="border-2 p-2 shadow-md shadow-gray-700 rounded-full"
							/>
						</a>
						<a href="#" className="hover:text-gray-400">
							<FontAwesomeIcon
								icon={faWhatsapp}
								className="border-2 p-2 shadow-md shadow-gray-700 rounded-full"
							/>
						</a>
					</div>

					{/* Copyright */}
					<div className="text-center mt-10 ">
						<p>© Copyright by I-PRIDE — All rights reserved.</p>
					</div>
				</div>
			</section>
		);
  
}

export default Footer