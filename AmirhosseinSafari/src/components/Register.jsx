import { useState,useEffect } from "react";
import farawin from "farawin";
import { toast } from "react-toastify";
import "./Login.css"



const Register = (props) => {

    const [mobile, setmobile] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [formErrors, setformErrors] = useState({});
    // const [isSubmit, setisSubmit] = useState(false);

    const validPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    // useEffect(() => {
    //     console.log(formErrors)
    //     if(Object.keys(formErrors).length === 0 && isSubmit){
    //         console.log(mobile,password,confirmPassword)
    //     }
    // },[formErrors]);

    const validate = (mobile,password,confirmPassword) =>{
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

        if(!confirmPassword){
            errors.confirmPassword = "این فیلد الزامی است"
        }else if(password !== confirmPassword){
            errors.confirmPassword ="رمز عبور وارد شده یکسان نیست"
        }

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(mobile,password,confirmPassword))
        // setisSubmit(true);

        async function getValues() {
            try {
                if (farawin.mobileRegex.test(farawin.toEnDigit(mobile)) && 
                validPass.test(password) && 
                password === confirmPassword) {

                    const response = await farawin.testRegister(mobile, password, 'Amirhossein');
                    const { code, message } = response;

                    if (code === "409") {
                        toast.info(message, {
                            position: "top-right",
                            closeButton: true,
                            closeOnClick: true,
                        })
                    }
                    if (code === "200") {
                        toast.success(message, {
                            position: "top-right",
                            closeButton: true,
                            closeOnClick: true,
                        })
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
            >  Register </h2>

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

                <div>
                    <label
                        style={{
                            color: "#000000",
                            fontFamily: "monospace",
                            fontSize: "10px",
                            paddingRight: "215px",
                            marginTop: "20px",
                        }}
                    >Confirm Password</label>
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
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                        value={confirmPassword}
                        onChange={(e) =>
                            setconfirmPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        placeholder="Type your Confirm Password"
                        aria-describedby="Confirm Password"
                    />
                        <p style={{
                            color:"red",
                            fontSize:"9px",
                            fontFamily:"BYekan"
                          
                        }}>{formErrors.confirmPassword}</p>
                </div>

                <button type="submit"

                    className="BTN">
                    SING UP
                </button>

                <a className="Login"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => props.onFormSwitch("login")}>
                    Login
                </a>

            </form>
        </div>


    )
}

export default Register;