import React from 'react'
import {AiOutlineTwitter, AiOutlineYoutube,AiOutlineFacebook } from 'react-icons/ai'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function VolunteerPage() {
  return (
    <div>
      <Navbar/>
      <BodyVoluteer/>
      {/* <About/> */}
      <Projects/>
      <Information/>
      <Contact/>
      <Footer/>
      
    </div>
    
  )
}
function About () {
  return (
    <section className="bg-secondery text-gray-900 px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-[#51efb0] pb-2">
            About Information 
          </h2>

          <p className="pb-5">
             Hi, this KEP GARDENS is a community development project. It is a non-profit,
             non-government organization with no political or religious affiliations. 
              Kep Gardens is committed to the training and education of young people in a rural Cambodian community.
          </p>
          <p className="pb-5">
             Hi, this KEP GARDENS is a community development project. It is a non-profit,
             non-government organization with no political or religious affiliations.
          </p>

          <p>Ininformation.Hi, this KEP GARDENS is a community development project.</p>
          <p>
             Hi, this KEP GARDENS is a community development project. It is a non-profit,
             non-government organization with no political or religious affiliations.
          </p>
        </div>

        <div className="about-img">
          <img
            src=""
            alt="volunteer"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};
function BodyVoluteer (){
  return (
    <section className="bg-green-200 px-5 text-gray-400 py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-5xl lg:text-6xl">
            Hi, <br />Welcome <span className="text-accent"> to </span>Kep  <br />
            Gardens School
          </h1>

          <p className="py-5">
             The first thing that struck us was how happy, at ease and comfortable the children are at Kep Gardens
          </p>

          <div className="flex py-5 ">
            <a
              href="https://twitter.com/CoderAmrin"
              className="pr-4 inline-block text-accent  hover:bg-green-100"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="https://www.youtube.com/@coderamrin"
              className="pr-4 inline-block text-accent  hover:bg-green-100"
            >
              {" "}
              <AiOutlineYoutube size={40} />{" "}
            </a>
            <a
              href="https://www.facebook.com/CoderAmrin/"
              className="pr-4 inline-block text-accent  hover:bg-green-100"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
          </div>

          <a
            href="/projects"
            className=" btn bg-accent  border-2 border-[#51efb0] text-gray-400 px-6 py-3 hover:bg-transparent"
          >
            Volunteer Stories 
          </a>
        </div>

        <div className="hero-img">
          <img
            src='src\asset\volunteer.jpg'
            alt="coding illustration"
            className="w-[50%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};
function Contact() {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-gray-900">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-[#51efb0] pb-2">
          Contact Us 
        </h2>
  
        <p className="text-size">
          Do you want to volunteer ?
        </p>
        

        <p className="py-2">
          <span className="font-bold">Email:</span> KebGarden@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +88 01624-890723
        </p>
      </div>
    </section>
  );
};

function Information ()  {
  const post = [
    {
      img: "src/asset/book.png",
      title: "Stories",
      url: "https://dev.to/coderamrin/how-to-build-a-counter-app-with-javascript-439p",
    },
    {
      img: "src/asset/book.png",
      title: "Stories",
      url: "https://dev.to/coderamrin/javascript-ultimate-guide-02-the-dom-3ho9",
    },
  ];

  return (
    <section className="bg-green-200 text-gray-400 px-5 py-32" id="Information">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-[#51efb0] pb-2">
            Information volunteer 
          </h2>

          <p className="pb-5">Some of my best Volunteer.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {post.map((item) => {
          return (
            <div>
              <img src={item.img} alt={item.title} />
              <h3 className="py-5 text-2xl">{item.title}</h3>
              <a
                href={item.url}
                className=" btn bg-accent  border-2 border-[#51efb0] text-gray-400 px-6 py-3 hover:bg-transparent"
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
function Projects () {
  const projects = [
    {
      img: 'src/asset/book.png',
      title: "devlog",
      desc: " Volunteer stories",

    },
    {
      img: 'src/asset/book.png',
      title: "uilogs",
      desc: "Volunteer stories",
      view: "https://uilogs.xyz/",
      watch: "https://github.com/Coderamrin/html-templates",
    },
    {
      img: 'src/asset/book.png',
      title: "css projects",
      desc: "Volunteer stories",
    },
    {
      img: 'src/asset/book.png',
      title: "get Inspirred",
      desc: "Volunteer stories",
    },
  ];

  return (
    <section className="bg-primary text-gray-400 px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            This is some of information 
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-gray-400">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-white  hover:bg-green-100 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-white  hover:bg-green-100font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};