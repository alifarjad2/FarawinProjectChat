import { useState } from "react";
import { toast } from "react-toastify";
import farawin from "farawin";
import { useContext } from "react";
import { UserContext , PhoneContext } from "../pages/Home";





const Navbar = () => {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState('');
    const [formErrors, setformErrors] = useState({});
    const [flag, setFlag] = useState('');
   
    const [user , setUser] = useContext(UserContext);
    const [userphone , setUserphone] = useContext(PhoneContext);
    
  
    if(flag === true){
        location.reload();
    }

    const validate = (userphone,name) =>{
        const errors ={};
        if(!userphone){
            errors.mobile = "این فیلد الزامی است"
        }else if(!farawin.mobileRegex.test(userphone)){
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
        setformErrors(validate(userphone, name))
        
        async function getValues() {
            try {
                if (farawin.mobileRegex.test(farawin.toEnDigit(userphone)) && name.length >= 3) {

                    const response = await farawin.testEditContact(userphone, name);
                    const { code, message } = response;
                    if (code === "200") {
                        toast.success(message, {
                            position: "top-right",
                            closeButton: true,
                            closeOnClick: true,
                        }
                        )
                        setEdit(false);
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
        
            <div style={{background:"rgb(46, 51, 61)",
                         borderRadius:"10px",
                         paddingRight:"2px",
                         paddingTop:"2px",
                         paddingBottom:"2px"
                        }} className="flex  items-center">
                <div>
                     
                   
                   <div className="ml-2 w-full">
                            <div className="flex justify-between items-center">
                            
                            <div style={{ borderRadius:"15px"}} 
                                className="text-center w-[50px] leading-[50px] bg-[#a9d2fe] ">
                            {user === "" ? "?" : null}    
                            {user.charAt(0)}{" "}
                            {(user.charAt(0))!== user.charAt(user.length-1) ? user.charAt(user.length-1): null}
                                     </div>
                                <h6 className="text-[#e5e6ea]">{user === "" ? "یک مخاطب انتخاب کنید ..."  : null}{user}</h6>
                                
                            </div>
                        </div>
                   
                </div>
                
               
                    <i onClick={() => setEdit(true)}
                        style={
                            {
                                color:"aqua",
                                marginRight:"auto" ,
                                paddingLeft:"20px" ,
                                fontSize:"20px" , 
                                marginTop:"18px",
                                cursor:"pointer"
                            }}  
                    className="fa fa-pencil  "></i>
               
                
                <i style={{ color:"white" ,
                            paddingLeft:"20px",
                            fontSize:"20px",
                            marginTop:"18px",
                           cursor:'pointer'}} 
                            onClick={() => setFlag(true)}
                  className="fa fa-retweet ml-3"></i>
            </div>

            <div
                style={edit ? ({
                    width: "300px",
                    position: "absolute",
                    display: "flex",
                    zIndex: "1000",
                    background: "linear-gradient(10deg, rgb(35, 32, 64) 0%, rgb(34, 166, 211) 98.77%)",
                    borderRadius: "25px",
                    padding: "25px",
                    marginTop: "-15px",
                    marginRight: "-25px",
                    animation: "fadeInLeft 1s",

                }) : (null)}
                className="col-start-1 col-span-1 hidden ">

                <form onSubmit={handleSubmit}>
                    <i onClick={() => setEdit(false)}
                    style={{color:"white",
                     marginLeft:"280px",
                     cursor:"pointer"}} 
                    className="fa fa-times"></i>
                    <h4 style={{color:"white",
                                paddingLeft:"45px"
                }}className="fw-bold">ویرایش محاطب </h4>
                    
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
                            value={userphone}
                            autoFocus
                            type="tel"
                            className="form-control"
                            aria-describedby="email-address"
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

                    <button style={{marginRight:"0px"}}
                        type="submit"
                        className="BTN">ذخیره</button>



                </form>
            </div>
        </> 
    )
}





export default Navbar;