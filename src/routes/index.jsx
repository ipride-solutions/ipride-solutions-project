import { createFileRoute } from "@tanstack/react-router";
import { dropdown, services } from "../../constants";
import { useState } from "react";
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
		// If the same index is clicked, toggle it off (close it)
		if (activeIndex === index) {
			setActiveIndex(null);
		} else {
			setActiveIndex(index); // Otherwise, set the clicked index as active
		}
	};

	return (
		<main className="w-screen Headline">
			<section className="w-screen h-screen "></section>
			<section className="w-screen px-5 mb-8">
				<div className="flex flex-col mb-5">
					<h1 className="flex justify-center items-center text-lg text-[#624DE7] font-semibold my-2">
						Services
					</h1>
					<h5 className="flex justify-center items-center text-center font-extrabold text-4xl px-5">
						We provide All-in-one Solution for every IT job
					</h5>
				</div>
				<div className="cards flex flex-col items-center">
					{services.map((el, idx) => (
						<div
							key={idx}
							className="w-3/4 h-[40vh] flex flex-col items-center justify-between border-t-4 border-[#624DE7] shadow-md shadow-gray-200 p-10 rounded-md rounded-br-[50px] mb-5"
						>
							<div className=" flex flex-col ">
								<h1 className="text-3xl font-bold text-[#624DE7] mb-2">
									{el.cardTitle}
								</h1>
								<p className="text-sm text-gray-700 font-normal ">
									{el.cardDescription}
								</p>
							</div>
							<div className="text-xl font-bold">Learn More </div>
						</div>
					))}
				</div>
			</section>
			<section className="w-screen h-screen px-5">
				<div className="flex flex-col">
					<h1 className="flex justify-center items-center text-lg text-[#624DE7] font-semibold mb-2">
						Why Us
					</h1>
					<h5 className="flex justify-center items-center text-center font-bold text-3xl mb-2">
						We have over 9+ Years in the Tech Industry
					</h5>
					<p className="text-md text-gray-700 px-7 font-normal ">
						We are committed to delivering exceptional technology solutions with
						a focus on innovation, quality, and customer satisfaction.
					</p>
				</div>
				<div className="px-12 mt-3">
					{dropdown.map((el, idx) => (
						<div key={idx} className="mb-2">
							<h1
								onClick={() => handleToggle(idx)}
								className="text-lg font-bold cursor-pointer"
							>
								{activeIndex === idx ? (
									<FontAwesomeIcon
										icon={faXmark}
										className={`text-[#624DE7] font-bold transition-all duration-200`}
									/>
								) : (
									<FontAwesomeIcon
										icon={faXmark}
										className={`text-[#624DE7] rotate-45 font-bold transition-all duration-200`}
									/>
								)}
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
			</section>
		</main>
	);
}
