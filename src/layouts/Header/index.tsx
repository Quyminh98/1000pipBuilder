import { Button, Container } from "../../components";

function Header() {
    return (
        <div className="bg-transparent absolute top-0 w-full z-10 pt-12">
            <Container>
                <div className="flex justify-between ">
                    <div className="flex ">
                        <a href="" className="text-white font-bold text-lg mr-10 flex items-center justify-center">
                            ferrymanx10
                        </a>
                        <ul className="flex gap-3 items-center justify-center">
                            <li className="text-white font-bold hover:cursor-pointer hover:text-orange-400">Home</li>
                            <span>|</span>
                            <li className="text-white font-bold hover:cursor-pointer hover:text-orange-400">About Us</li>
                            <span>|</span>
                            <li className="text-white font-bold hover:cursor-pointer hover:text-orange-400">How It Works</li>
                            <span>|</span>
                            <li className="text-white font-bold hover:cursor-pointer hover:text-orange-400">Performance</li>
                            <span>|</span>
                            <li className="text-white font-bold hover:cursor-pointer hover:text-orange-400">FAQ</li>
                            <span>|</span>
                            <li className="text-white font-bold hover:cursor-pointer hover:text-orange-400">Contact Us</li>
                            <span>|</span>
                            <li className="text-white font-bold hover:cursor-pointer hover:text-orange-400">Join Us</li>

                        </ul>
                    </div>
                    <Button className="text-white font-bold text-lg border-white border-2 px-3 py-1 rounded-3xl">JOIN NOW</Button>
                </div>

            </Container>
        </div>
    )
}

export default Header;