import { useState} from "react";
import farawin from "farawin";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"



const Register = () => {

    
    const [mobile, setmobile] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [formErrors, setformErrors] = useState({});
    const navigate = useNavigate();

    const validPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;



    const validate = (mobile, password, confirmPassword) => {
        const errors = {};
        if (!mobile) {
            errors.mobile = "این فیلد الزامی است"
        } else if (!farawin.mobileRegex.test(mobile)) {
            errors.mobile = "شماره موبایل وارد شده معتبر نیست"
        }
        if (!password) {
            errors.password = "این فیلد الزامی است"
        } else if (!validPass.test(password)) {
            errors.password = "رمز عبور باید حداقل 8 کاراکتر  شامل حروف بزرگ و کوچک باشد"
        }

        if (!confirmPassword) {
            errors.confirmPassword = "این فیلد الزامی است"
        } else if (password !== confirmPassword) {
            errors.confirmPassword = "رمز عبور وارد شده یکسان نیست"
        }

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(mobile, password, confirmPassword))


        async function getValues() {
            try {
                if (farawin.mobileRegex.test(farawin.toEnDigit(mobile)) &&
                    validPass.test(password) &&
                    password === confirmPassword) {

                    const response = await farawin.testRegister(mobile, password, '22222222222222');
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
                         navigate("/");
                    }else{
                        toast.info(message, {
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
                
            >  ثبت نام </h2>

            <form onSubmit={handleSubmit}>
                <label
                    style={{
                        color: "#000000",
                        fontSize: "10px",
                        paddingLeft: "270px",
                        marginTop: "20px",
                    }}
                >موبایل</label>
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
                            marginRight: "22px"
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
                        aria-describedby="email-address"
                    />
                    <p
                        style={{
                            color: "red",
                            fontSize: "10px",
                            fontFamily: "BYekan"
                        }}>{formErrors.mobile}</p>
                </div>

                <div>
                    <label
                        style={{
                            color: "#000000",
                            fontSize: "10px",
                            paddingLeft: "260px",
                            marginTop: "20px",
                        }}
                    >رمز عبور</label>
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
                            marginRight: "22px"
                        }}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) =>
                            setpassword(e.target.value)}
                        type="password"
                        className="form-control"
                        placeholder="رمز عبور را وارد کنید ..."
                        aria-describedby="password"
                    />
                    <p
                        style={{
                            color: "red",
                            fontSize: "10px",
                            fontFamily: "BYekan"
                        }}>{formErrors.password}</p>
                </div>

                <div>
                    <label
                        style={{
                            color: "#000000",
                            fontSize: "10px",
                            paddingLeft: "235px",
                            marginTop: "20px",
                        }}
                    >تکرار رمز عبور</label>
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
                            marginRight: "22px"
                        }}
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                        value={confirmPassword}
                        onChange={(e) =>
                            setconfirmPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        placeholder="رمز عبور را مجدد وارد کنید ..."
                        aria-describedby="Confirm Password"
                    />
                    <p style={{
                        color: "red",
                        fontSize: "10px",
                        fontFamily: "BYekan"
                    }}>{formErrors.confirmPassword}</p>
                </div>

                <button type="submit"

                    className="BTN">
                    ثبت نام
                </button>

                 <Link className="Login" style={{
                      textDecoration: "none", color: "black",}} to="/">
                         ورود
                 </Link>
                

            </form>
        </div>


    )
}

export default Register;