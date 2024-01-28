import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function About() {
    return(
        <>
        <Navbar/>
         <section className="w-[100%] h-[100vh] bg-[#ff410717] p-10 " >
            <div className="w-[100%] h-[400px]  bg-[#ff4107]  flex items-center justify-center">
               <h1 className="text-center font-bold text-[40px] text-white ">Wellcome to About Us Page</h1>
            </div>
         </section>
         <Footer/>
        </>
    )
}