import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import './home.css'


const Home = () => {

    return (
        <>

            <section className="h-full bg-[#34393C]">
                <div style={{
                    paddingBottom: "5px",
                    paddingTop: "5px"
                }}
                    className="lg:container flex h-full justify-center mx-auto py-8">
                    <div className="w-[90%] md:w-[80%] lg:w-[97%] xl:w-[95%] 2xl:w-[80%] 3xl:w-[70%] overflow-hidden self-center">
                        <div className="grid grid-cols-3 bg-[#202329] rounded-3xl p-5 overflow-hidden ">
                            <Sidebar />
                            <Chat />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;