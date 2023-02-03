import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DonatePage() {
    return(
        <>
            <Navbar/>
            <Section/>
            <Footer/>
        </>
    )
}
export default DonatePage;

function Section(){
    return(
        <>
            <div className="flex flex-row">
                <div className="w-full  xl:px-20  bg-green-400">
                    <div className=" px-20 bg-green-300">
                        <h3 className=" font-Poppins font-semibold text-lg text-center">Money Donation</h3>
                        
                        <div className="w-[300px]">
                            <img className=" object-cover" src="src\asset\payment.jpg"/>
                        </div>
                    </div>
                </div>
                <div className="w-full  xl:px-20 h-36  bg-green-400">
                    <div className=" bg-black">dfege</div>
                </div>
            </div>
        </>
    )
}