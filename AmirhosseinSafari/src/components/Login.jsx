import { useState } from "react";
import { toast } from "react-toastify";
import "./Login.css"
import farawin from "farawin";



const Login = (props) => {


    const [mobile, setmobile] = useState('');
    const [password, setpassword] = useState('');
    const [formErrors, setformErrors] = useState({});


    const alertMess = () => {
        toast.info("این امکان هنوز پیاده سازی نشده است.", {
            position: "top-right",
            closeButton: true,
            closeOnClick: true,
        }
        )
    }

    const validPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;


    const validate = (mobile,password) =>{
        const errors ={};
        if(!mobile){
            errors.mobile = "این فیلد الزامی است"
        }else if(!farawin.mobileRegex.test(mobile)){
            errors.mobile ="شماره موبایل وارد شده معتبر نیست"
        }
        if(!password){
            errors.password = "این فیلد الزامی است"
        }else if(!validPass.test(password)){
            errors.password ="رمز عبور باید حداقل 8 کاراکتر  شامل حروف بزرگ و کوچک باشد"
        }

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(mobile,password))

        async function getValues() {
            try {
                if (farawin.mobileRegex.test(farawin.toEnDigit(mobile)) && validPass.test(password)) {

                    const response = await farawin.testLogin(mobile, password);
                    const { code, message } = response;
                    if (code === "200") {
                        toast.success(message, {
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

        <div className="CON">

            <h2
                className="fw-bold"
                style={{ fontFamily: "sans-serif" }}
            >  Login </h2>

            <form onSubmit={handleSubmit}>
                <label
                    style={{
                        color: "#000000",
                        fontFamily: "monospace",
                        fontSize: "10px",
                        paddingRight: "270px",
                        marginTop: "20px",
                    }}
                >Phone</label>
                <div>

                    <input
                        style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "rgb(169, 169, 169)",
                            borderTopColor: "white",
                            borderLeftColor: "white",
                            borderRightColor: "white",
                            borderRadius: "0px",
                            width: "280px",
                            marginLeft: "22px"
                        }}
                        id="mobile"
                        name="mobile"
                        value={mobile}
                        onChange={(e) =>
                            setmobile(e.target.value)}
                        autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Type your phone"
                        aria-describedby="email-address"
                    />
                        <p
                       style={{
                        color:"red",
                        fontSize:"9px",
                        fontFamily:"BYekan"
                    }}>{formErrors.mobile}</p>
                </div>

                <div>
                    <label
                        style={{
                            color: "#000000",
                            fontFamily: "monospace",
                            fontSize: "10px",
                            paddingRight: "260px",
                            marginTop: "20px",
                        }}
                    >Password</label>
                    <input
                        style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "rgb(169, 169, 169)",
                            borderTopColor: "white",
                            borderLeftColor: "white",
                            borderRightColor: "white",
                            borderRadius: "0px",
                            width: "280px",
                            marginLeft: "22px"
                        }}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) =>
                            setpassword(e.target.value)}
                        type="password"
                        className="form-control"
                        placeholder="Type your password"
                        aria-describedby="password"
                    />
                       <p
                       style={{
                        color:"red",
                        fontSize:"9px",
                        fontFamily:"BYekan"
                    }}>{formErrors.password}</p>
                </div>


                <div style={{
                    marginLeft: "165px"
                }}>
                    <a
                        className="Forgot"
                        onClick={alertMess}
                        style={{
                            fontSize: "10px",
                            color: "#000000",
                            paddingLeft: "170px",
                            fontFamily: "sans-serif",
                            backgroundColor: "white",
                            textDecoration: "none",
                            display: "contents"
                        }}
                    >
                        Forgot password?
                    </a>
                </div>

                <button type="submit"
                    className="BTN">
                    Login
                </button>


                <a className="SING"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => props.onFormSwitch("register")}>
                    SING UP
                </a>
            </form>

        </div>

    );
};

export default Login;
