import { createFileRoute } from '@tanstack/react-router'
import { designSolutions, softwareSolutions,ItInfrastructureSolutions } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { BgSectionHomeDesk, BgSectionHomeMob, Whyus1,Whyus2 } from "../utils";
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export const Route = createFileRoute('/services')({
  component: Services
})

function Services() {
    const [activeIndex, setActiveIndex] = useState(null);

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


  return (
		<main>
			<section className="w-screen Headline ">
				<div className="w-full h-full absolute -z-10">
					<img
						className="md:hidden w-full h-full  object-cover "
						src={BgSectionHomeMob}
					/>
				</div>
				<div className="w-full h-full absolute  -z-10">
					<img
						className="hidden md:block w-full h-full  object-cover "
						src={BgSectionHomeDesk}
					/>
				</div>
				<Navbar />
				{/* page 1 */}
				<div className="md:flex flex-row-reverse h-screen items-center justify-center p-5 md:p-16">
					<div className="w-full md:w-[45vw] ">
						<div className="flex flex-col mb-5 py-5">
							<h1 className="flex justify-center items-center text-2xl md:text-4xl text-[#e2e0ee] md:text-black font-extrabold mb-4">
								Design Solutions
							</h1>
							<p className="text-md md:text-lg text-gray-300 text-center px-3 md:px-16 font-normal">
								We use a wide range of advanced design tools to create websites,
								web portals and applications, mobile apps that are easy to use
								and easy to maintain across all platforms. And we identify your
								passions and develop a brand which reflects your business, both
								online and offline.
							</p>
						</div>
						<div className="px-5 md:px-12 mt-3 pb-5">
							{designSolutions.map((el, idx) => (
								<div key={idx} className="mb-2 ">
									<h1
										onClick={() => handleToggle(idx)}
										className="text-lg font-extrabold cursor-pointer flex md:text-black text-[#e2e0ee] items-center "
									>
										<FontAwesomeIcon
											icon={faXmark}
											className={`text-[#c4beeb] font-bold transition-all duration-200 ${
												activeIndex === idx ? "" : "rotate-45"
											}`}
										/>
										&nbsp; {el.title}
									</h1>
									{activeIndex === idx && (
										<div className="p-2 description text-sm md:text-lg rounded-md text-gray-400">
											{el.description}
										</div>
									)}
								</div>
							))}
						</div>
					</div>
					<div className="md:flex relative gap-2 w-[45vw] hidden justify-center items-center flex-nowrap">
						{/* <img src={Whyus1} alt="whyus1" /> */}
						<img src={Whyus2} alt="whyus2" />
					</div>
				</div>
				{/* page2 */}
				<div className="md:flex h-screen items-center justify-center p-5 md:p-16">
					<div className="w-full md:w-[45vw] ">
						<div className="flex flex-col mb-5 py-5">
							<h1 className="flex justify-center items-center text-2xl md:text-4xl text-black font-semibold mb-4">
								Software Solutions
							</h1>

							<p className="text-md md:text-lg text-gray-600 text-center px-3 md:px-16 font-normal">
								Every Organisation is unique in its own way and they have their
								own unique requirements. Our custom made applications not only
								meet your needs, but excel your expectations. We do this by
								understanding and taking account of each requirement in detail
								through interactions and then trans- forming these requirements
								into software features.
							</p>
						</div>
						<div className="px-5 md:px-12 mt-3 pb-5">
							{softwareSolutions.map((el, idx) => (
								<div key={idx} className="mb-2 ">
									<h1
										onClick={() => handleToggle(idx)}
										className="text-lg font-bold cursor-pointer flex items-center "
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
										<div className="p-2 text-sm md:text-lg description rounded-md ">
											{el.description}
										</div>
									)}
								</div>
							))}
						</div>
					</div>
					<div className="md:flex gap-2 w-[45vw] hidden justify-center items-center flex-nowrap">
						{/* <img src={Whyus1} alt="whyus1" /> */}
						<img src={Whyus2} alt="whyus2" />
					</div>
				</div>
				{/* page3 */}
				<section>
					<div className="w-full h-full absolute -z-10">
						<img
							className="md:hidden w-full h-full  object-cover "
							src={BgSectionHomeMob}
						/>
					</div>
					<div className="w-full h-full absolute  -z-10">
						<img
							className="hidden md:block w-full h-full  object-cover "
							src={BgSectionHomeDesk}
						/>
					</div>
					<div className="md:flex h-screen flex-row-reverse items-center justify-center p-5 md:p-16">
						<div className="w-full md:w-[45vw] ">
							<div className="flex flex-col mb-5 py-5">
								<h1 className="flex justify-center items-center  text-2xl md:text-4xl text-[#e2e0ee] md:text-black font-semibold mb-4">
									IT solutions
								</h1>

								<p className="text-lg md:text-md text-gray-300 text-center px-3 md:px-16 font-normal">
									We handle configuration and setup of servers, deployment of
									servers, setup of all network devices, cables and
									workstations, installation of server OS, network maintenance
									and support, server management/support, mail server and user
									account services etc.
								</p>
							</div>
							<div className="px-5 md:px-12 mt-3 pb-5">
								{ItInfrastructureSolutions.map((el, idx) => (
									<div key={idx} className="mb-2 ">
										<h1
											onClick={() => handleToggle(idx)}
											className="text-lg font-bold cursor-pointer md:text-black text-[#e2e0ee] flex items-center "
										>
											<FontAwesomeIcon
												icon={faXmark}
												className={`text-[#c4beeb] font-bold transition-all duration-200 ${
													activeIndex === idx ? "" : "rotate-45"
												}`}
											/>
											&nbsp; {el.title}
										</h1>
										{activeIndex === idx && (
											<div className="p-2 text-sm md:text-lg description rounded-md text-gray-400 ">
												{el.description}
											</div>
										)}
									</div>
								))}
							</div>
						</div>
						<div className="md:flex gap-2 w-[45vw] hidden justify-center items-center flex-nowrap">
							<img src={Whyus2} alt="whyus2" />
						</div>
					</div>
				</section>
      </section>
      <Footer/>
		</main>
	);
}
