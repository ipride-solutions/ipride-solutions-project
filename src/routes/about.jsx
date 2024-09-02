import { createFileRoute } from "@tanstack/react-router";
import Footer from "../components/footer";
import {
  BgSectionHomeDesk,
  BgSectionHomeMob,
  SectionBack,
  SectionBack2,
} from "../utils";
import Navbar from "../components/Navbar";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <main className="w-screen Headline">
      <section className="w-screen h-screen ">
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
        <div className="w-full md:p-10     flex flex-col  h-[90vh] px-2">
          <h1 className=" text-white py-5 font-bold md:text-6xl  text-4xl   text-center ">
            A Joint Venture of <br className="md:hidden" /> IPRIDE and Savex
          </h1>
          <div className="w-full h-2/3 flex justify-evenly p-2   drop-shadow-2xl shadow-black shadow-lg md:flex-row md:p-10 bg-white bg-opacity-75 rounded-3xl flex-col ">
            <div className="w-full   text-[#0F016C]">
              <h3 className="text-2xl  font-bold text-center md:text-4xl md:p-5 ">
                About IPRIDE
              </h3>
              <ul className="list-disc px-5 text-sm md:text-xl md:pt-7">
                <li>
                  IPride is a leading provider of IT solutions and services.
                </li>
                <li className="text-justify">
                  We offer a wide range of solutions, including cloud computing,
                  data center, security, networking, storage, and
                  virtualization.
                </li>
                <li className="text-justify">
                  We also offer a variety of managed IT services, such as IT
                  consulting, IT support, and IT project management.
                </li>
              </ul>
            </div>
            <div className="w-full text-[#0F016C]">
              <h3 className="text-2xl font-bold text-center  md:text-4xl md:p-5 ">
                About Savex
              </h3>
              <ul className="list-disc px-5 text-sm md:text-xl md:pt-7">
                <li>
                  Savex is a leading distributor of IT products and solutions in
                  India.
                </li>
                <li className="text-justify">
                  Savex has a strong presence in Pune, with a large network of
                  partners and customers.
                </li>
                <li className="text-justify ">
                  Savex offers a wide range of products and solutions from
                  leading IT vendors.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Second */}
      <section id="ABoutSec" className="w-screen -mt-14  h-screen">
        <div className="w-full  px-2 h-full flex  justify-center items-center">
          <div className="w-screen h-full -z-10   absolute">
            <img
              className="w-full h-full   object-cover md:object-cover"
              src={SectionBack}
            />
          </div>
          <div className="w-11/12  h-5/6 hidden md:flex  rounded-3xl ">
            <section className="w-1/2 flex justify-center items-center h-full">
              <p className="w-full Bay   text-[#432ae9]  shadow-black drop-shadow-2xl  text-center p-5 text-9xl">
                Why a joint business venture?
              </p>
            </section>
            <section className="w-1/2 h-full">
              <ul className="list-disc font-bold font-mono text-2xl   h-full  px-5   flex justify-evenly flex-col   md:pt-7 ">
                <li className="text-justify">
                  IPride and Savex have complementary strengths.
                </li>
                <li className="text-justify">
                  Businesses in Pune will be able to get a one-stop shop for all
                  of their IT needs.
                </li>
                <li className="text-justify">
                  IPride has expertise in IT solutions and services, while Savex
                  has expertise in IT distribution.
                </li>
                <li className="text-justify">
                  Businesses in Pune will have access to a wider range of IT
                  solutions and services.
                </li>
                <li className="text-justify">
                  A joint business venture will allow IPride and Savex to offer
                  a more comprehensive range of IT solutions and services to
                  businesses in Pune.
                </li>
              </ul>
            </section>
          </div>
          <div className="w-11/12 bg-opacity-65 md:hidden  bg-gray-100 border-2 p-5  h-5/6 shadow-black drop-shadow-xl rounded-3xl text-[#180c69]">
            <h2 className="text-6xl font-mono font-extrabold text-center py-10 ">
              Benefits <br /> of <br /> Venture
            </h2>
            <ul className="list-disc font-bold px-5 text-md flex flex-col  md:text-xl md:pt-7">
              <li className="text-justify">
                IPride and Savex have complementary strengths.
              </li>
              <li className="text-justify">
                Businesses in Pune will be able to get a one-stop shop for all
                of their IT needs.
              </li>
              <li className="text-justify">
                IPride has expertise in IT solutions and services, while Savex
                has expertise in IT distribution.
              </li>
              <li className="text-justify">
                Businesses in Pune will have access to a wider range of IT
                solutions and services.
              </li>
              <li className="text-justify">
                A joint business venture will allow IPride and Savex to offer a
                more comprehensive range of IT solutions and services to
                businesses in Pune.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Third */}
      <section className="w-screen  font-mono " id="timeline">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#4733C9", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #4733C9" }}
            date="in 2015"
            iconStyle={{ background: "#4733C9", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBuildingColumns} />}
          >
            <h3 className="vertical-timeline-element-title md:text-xl md:pb-2">
              IPride Started ..
            </h3>
            <h4 className="vertical-timeline-element-subtitle hidden md:block">
              Helping businesses in Pune to improve their IT infrastructure and
              security.
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#4733C9", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #4733C9" }}
            date="2015-2023"
            iconStyle={{ background: "#4733C9", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title md:pb-2 md:text-2xl">
              Worked with Government, BFSI Clients, MSME
            </h3>
            <h4 className="vertical-timeline-element-subtitle hidden md:block">
              Offers a wide range of solutions, including cloud computing, data
              center, security, networking, storage, and virtualization.
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#4733C9", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #4733C9" }}
            date="2023 - Present"
            iconStyle={{ background: "#4733C9", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faHandshake} />}
          >
            <h3 className="vertical-timeline-element-title md:pb-2 md:text-2xl">
              Partnership with Savex
            </h3>
            <h4 className="vertical-timeline-element-subtitle hidden md:block">
              A joint business venture will allow us to offer a more
              comprehensive range of IT solutions and services to businesses in
              Pune.
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
      <Footer />
    </main>
  );
}
