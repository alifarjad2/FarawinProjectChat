import Search from "./Search";
import Chats from "./Chats";
import { useState } from "react";


const Sidebar = () => {
    const [clicked, setClicked] = useState(false);
    const [plus, setPlus] = useState(false);

    return (
        <>
            <img style={{ marginRight: "20px", cursor: "pointer" }}
                onClick={() => setClicked(true)}
                src="../../public/img/person-lines-fill.svg"
                id="contactList"
                className="lg:hidden ml-2 w-6 align-text-bottom"
                alt="contact-icon" />

            <div id="contactBox"
                style={clicked ? ({
                    width: "300px",
                    position: "absolute",
                    display: "flex",
                    zIndex: "1000",
                    background: "black",
                    borderRadius: "24px",
                    padding: "20px",
                    marginTop: "-20px",
                    marginRight: "15px",
                    animation: "fadeInLeft 1s",

                }) : (null)}
                className="col-start-1 col-span-1 hidden lg:block">


                <div style={clicked ? { display: "block" } : null} className="flex lg:block">
                    <div onClick={() => setClicked(false)}
                        style={{
                            background: "white",
                            cursor: "pointer"
                        }}
                        id="closeIcon" className=" lg:hidden">

                        <img style={{
                            width: "30px",
                            height: "30px",
                            position: "absolute",
                            left: "250px",
                        }}
                            src="../../public/img/x.svg"
                            className=""
                            alt="close-icon" />

                    </div>


                    <i onClick={() => setPlus(true)}
                        style={
                            {
                                color: "white",
                                marginRight: "160px",
                                paddingLeft: "20px",
                                fontSize: "20px",
                                marginTop: "18px"
                            }}
                        className="fa fa-plus"
                    ></i>



                    <i style={
                        {
                            color: "white",
                            paddingLeft: "20px",
                            fontSize: "20px",
                            marginTop: "18px"
                        }}
                        className="fa fa-retweet"
                    ></i>

                    <Search />
                    <Chats />

                </div>
            </div>

            <div
                style={plus ? ({
                    width: "300px",
                    position: "absolute",
                    display: "flex",
                    zIndex: "1000",
                    background: "linear-gradient(10deg, rgb(35, 32, 64) 0%, rgb(34, 166, 211) 98.77%)",
                    borderRadius: "25px",
                    padding: "25px",
                    marginTop: "10px",
                    marginRight: "66px",
                    animation: "fadeInLeft 1s",

                }) : (null)}
                className="col-start-1 col-span-1 hidden ">

                <form>
                    <i onClick={() => setPlus(false)}
                    style={{color:"white", marginLeft:"280px"}} 
                    className="fa fa-times"></i>
                    <h4 style={{color:"white",
                                paddingLeft:"45px"
                }}className="fw-bold">مخاطب جدید</h4>
                    
                    <label
                        style={{
                            color: "#fff",
                            fontSize: "12px",
                            paddingLeft: "270px",
                            marginTop: "20px",
                        }}
                    >موبایل:</label>
                    <div>

                        <input
                            style={{
                                fontSize: "12px",
                                fontWeight: "bold",
                                color: "rgb(169, 169, 169)",
                                borderTopColor: "white",
                                borderLeftColor: "white",
                                borderRightColor: "white",
                                borderRadius: "10px",
                                width: "250px",
                            }}
                            id="mobile"
                            name="mobile"
                            // value={mobile}
                            // onChange={(e) =>
                            //     setmobile(e.target.value)}
                            autoFocus
                            type="tel"
                            className="form-control"
                            placeholder="شماره موبایل را وارد کنید ..."
                            aria-describedby="email-address"
                        />
                        {/* <p
                       style={{
                        color:"red",
                        fontSize:"10px",
                        fontFamily:"BYekan"
                    }}>{formErrors.mobile}</p> */}
                    </div>

                    <div>
                        <label
                            style={{
                                color: "#fff",
                                fontSize: "12px",
                                paddingLeft: "210px",
                                marginTop: "20px",
                            }}
                        > نام و نام خانوادگی :</label>
                        <input
                            style={{
                                fontSize: "12px",
                                fontWeight: "bold",
                                color: "rgb(169, 169, 169)",
                                borderTopColor: "white",
                                borderLeftColor: "white",
                                borderRightColor: "white",
                                borderRadius: "10px",
                                width: "250px",
                                
                            }}
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="نام و نام خانوادگی را وارد کنید ..."
                            aria-describedby="name"
                        />
                        {/* <p
                       style={{
                        color:"red",
                        fontSize:"10px",
                        fontFamily:"BYekan"
                    }}>{formErrors.password}</p> */}
                    </div>

                    <button style={{paddingLeft:"60px",
                                    background:"linear-gradient(92deg, rgb(135, 252, 196) 0%, rgb(40, 193, 245) 98.77%)",
                                    borderRadius:"25px",
                                    marginLeft:"44px",
                                    marginTop:"25px",
                                    paddingLeft:"80px",
                                    paddingRight:"80px",
                                    paddingTop:"5px",
                                    paddingBottom:"5px",
                                    color:"white"  
                }}
                        type="submit"
                        >افزودن مخاطب</button>

                </form>
            </div>
        </>
    )
}

export default Sidebar;