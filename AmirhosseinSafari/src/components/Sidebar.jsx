
import Chats from "./Chats";
import { useState } from "react";
import { toast } from "react-toastify";
import farawin from "farawin";

const Sidebar = () => {
    const [clicked, setClicked] = useState(false);
    const [plus, setPlus] = useState(false);
    const [mobile, setmobile] = useState('');
    const [name, setName] = useState('');
    const [formErrors, setformErrors] = useState({});
    const [flag, setFlag] = useState('');


    
if(flag === true){
    location.reload();
}

    const validate = (mobile,name) =>{
        const errors ={};
        if(!mobile){
            errors.mobile = "این فیلد الزامی است"
        }else if(!farawin.mobileRegex.test(mobile)){
            errors.mobile ="شماره موبایل وارد شده معتبر نیست"
        }
        if(!name){
            errors.name = "این فیلد الزامی است"
        }else if(name.length < 3){
            errors.name ="حداقل باید 3 کاراکتر باشد"
        }

        return errors;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(mobile, name))
        
        async function getValues() {
            try {
                if (farawin.mobileRegex.test(farawin.toEnDigit(mobile)) && name.length >= 3) {

                    const response = await farawin.testAddContact(mobile, name);
                    const { code, message } = response;
                    if (code === "200") {
                        toast.success(message, {
                            position: "top-right",
                            closeButton: true,
                            closeOnClick: true,
                        }
                        )
                        setPlus(false);
                    }else{
                        toast.info(message, {
                            position: "top-right",
                            closeButton: true,
                            closeOnClick: true,
                        }
                        )
                    }

                }
            } catch (error) {
                console.log(error);

            }
        }
        getValues();

    }


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
                                marginTop: "18px",
                                cursor:"pointer"
                            }}
                        className="fa fa-plus"
                    ></i>



                    <i style={
                        {
                            color: "white",
                            paddingLeft: "20px",
                            fontSize: "20px",
                            marginTop: "18px",
                            cursor:"pointer"
                        }}
                        onClick={() => setFlag(true)}
                        className="fa fa-retweet"
                    ></i>

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

                <form onSubmit={handleSubmit}>
                    <i onClick={() => setPlus(false)}
                        style={{ color: "white",
                         marginLeft: "280px",
                         cursor:"pointer" }}
                        className="fa fa-times"></i>
                    <h4 style={{
                        color: "white",
                        paddingLeft: "45px"
                    }} className="fw-bold">مخاطب جدید</h4>

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
                            value={mobile}
                            onChange={(e) =>
                                setmobile(e.target.value)}
                            autoFocus
                            type="tel"
                            className="form-control"
                            placeholder="شماره موبایل را وارد کنید ..."
                            
                        />
                        <p
                       style={{
                        color:"orange",
                        fontSize:"12px",
                        fontFamily:"BYekan",
                        marginLeft:"55px"
                
                    }}>{formErrors.mobile}</p>
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
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="نام و نام خانوادگی را وارد کنید ..."
                            aria-describedby="name"
                        />
                        <p
                       style={{
                        color:"orange",
                        fontSize:"12px",
                        fontFamily:"BYekan",
                        marginLeft:"55px"
                    }}>{formErrors.name}</p>
                    </div>

                    <button style={{
                        paddingLeft: "60px",
                        background: "linear-gradient(92deg, rgb(135, 252, 196) 0%, rgb(40, 193, 245) 98.77%)",
                        borderRadius: "25px",
                        marginLeft: "44px",
                        marginTop: "25px",
                        paddingLeft: "80px",
                        paddingRight: "80px",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        color: "white"
                    }}
                        type="submit"
                    >افزودن مخاطب</button>

                </form>
            </div>
        </>
    )
}

export default Sidebar;