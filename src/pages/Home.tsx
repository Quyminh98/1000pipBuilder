import { Button, Container } from "../components";
import downArrow from "../assets/images/down-arrow.png"
function Home() {
    return (
        <>
            <main>
                <div className="relative w-full h-screen overflow-hidden">
                    <video autoPlay loop id="myvideo" className="absolute w-full h-auto">
                        <source src="https://www.1000pipbuilder.com/wp-content/uploads/2024/04/18d684f6-aa42-4cc7-ac1c-ad8af7de6a06.mp4" />
                    </video>
                    <div className="absolute z-8 w-full h-screen bg-[rgba(0,0,0,0.5)]"></div>
                    <Container className="absolute flex flex-col flex-start z-7 px-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4">
                        <h2 className="text-5xl font-bold text-left">Trusted Forex Signals</h2>
                        <h2 className="text-5xl font-bold text-left ">Your Journey Starts Here</h2>
                        <span className="text-left text-lg">
                            #1 Rated by;
                            &nbsp;<span className="text-blue-500 hover:text-orange-400 hover:cursor-pointer" >Traders Union</span>,
                            &nbsp;<span className="text-blue-500 hover:text-orange-400 hover:cursor-pointer" >Modest Money</span>,
                            &nbsp;<span className="text-blue-500 hover:text-orange-400 hover:cursor-pointer" >Techopedia</span>,
                            &nbsp;<span className="text-blue-500 hover:text-orange-400 hover:cursor-pointer" >Benzinga</span>,
                            &nbsp;<span className="text-blue-500 hover:text-orange-400 hover:cursor-pointer" >WikiJob</span>,
                            &nbsp;& More!
                        </span>
                        <Button className="text-orange-400 font-bold text-lg border-white border-2 px-3 py-1 rounded-3xl w-36 mt-4">Join Now</Button>
                        <h3 className="flex text-4xl font-extrabold text-left gap-3">
                            <img src={downArrow} alt="" />
                            <span className="text-yellow-400">75%</span> OFF FLASH SALE - Ends 25 August
                            <img src={downArrow} alt="" />
                        </h3>

                    </Container>
                </div>

            </main>
        </>
    )
}

export default Home;