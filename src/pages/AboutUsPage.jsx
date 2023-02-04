import  Footer  from "../components/Footer";
import React from "react";
import Navbar from "../components/Navbar";
import Page404 from "../components/Page404";
function AboutUsPage  ()  {
  return (
    <>
      <Navbar />
      {/* <Page404/> */}
      <Body/>
      <Footer/>
    </>
  );
};
export default AboutUsPage;
function Body() {
  return(
      <>
    <div className="w-full " align="center">
      <img
        src="src\asset\AboutUs.jpg"
        alt="About us Image"
        className="object-cover max-w-full h-auto sm:w-full sm:h-[420px] md:h-[570px] lg:h-[550px]"
      />
      <br />
      <p className="text-2xl lg:h-[70px]">
        Andrew and Janine Judd hail from Adelaide, South Australia.
      </p>
      <p>
        {" "}
        The vision of Kep Gardens was born in December, 2006 after a holiday in
        Cambodia and has grown from there. We were impressed by the overwhelming
        friendliness and <br />
        determination of the people despite their long and violent history that
        resulted in their poor socioeconomic conditions, particularly in the
        rural communities. We had been <br />
        seeking avenues to contribute in a valuable and meaningful way to
        society in the later years of our life that could be achievable with
        limited monetary resources. What <br />
        started out as a holiday has turned into a determination to help make a
        brighter future for the children and youth in a small, Cambodian, rural
        community.
      </p>
      <br />
      <p>
        Andrew has a mechanical engineering and building background gaining a
        Degree in Mechanical Engineering and building various houses in
        Adelaide. Janine gained a <br />
        Business College Diploma and completed her teaching certificate in Papua
        New Guinea. Both taught their skills for 5 years in Papua New Guinea.
        Janine was involved in <br />
        Special Education teaching and finance for over 15 years in various
        Adelaide schools while Andrew concentrated on manufacturing engineering
        and construction projects.
      </p>
      <br />
      <p className="text-1xl lg:h-[120px]">
        The project has been self-funded but our objective is to ensure that the
        project is sustainable in the long term. We receive some funds through
        the generosity of <br />
        individuals and the maintenance work of our trade skills section.
      </p>
    </div>
    <div
      className="lg:h-[100px]"
      style={{ display: "flex", alignItems: "center" }}
    >
    </div>
    <div className="" align="center">
      <h1 className="text-2xl md:h-[100px] lg:h-[60px]" align="center">
        {" "}
        Contact Us{" "}
      </h1>
      <p className="lg:h-[70px]" align="center">
        {" "}
        To contact us for any reason, please send an email to
        kepgardens513@gmail.com <br />
        Subscribe to our newsletter to keep up with the latest happenings at Kep
        Gardens. <br />
        Check out our Facebook page and YouTube account below.
      </p>
      <br />
      <p>You can contact us in any of the following ways:</p>

      {/* tap contact form */}
      <div className="flex justify-center py-10 px-3">
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form class="space-y-6" action="#">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white text-center">
              Contact Form
            </h5>
            <div>
              <div className=" grid grid-cols-1">
                <div>
                  <div className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-2">
                    Full Name:
                  </div>
                  <input
                    type="first-name"
                    name="first-name"
                    id="first-name"
                    class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder:gray-400 dark:text-white "
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="text-address"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Address:
              </label>
              <input
                type="email-address"
                name="email-address"
                id="email-address"
                placeholder="Enter your email address"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="5ber"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number:
              </label>
              <input
                type="tell"
                name="tell"
                id="tell"
                placeholder="Enter your phone number"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="text"
                class="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Enquiry:
              </label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Writing here..."
                class="bg-gray-50 border border-gray-300 text-gray-1000 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div class="flex items-start"></div>
            <div className=" grid grid-cols-5"></div>
            <button
              type="submit"
              class="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-geen-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              SEND
            </button>
            <br />
          </form>
        </div>
      </div>
      {/* End contact form */}
    </div>
  </>
  )

}
