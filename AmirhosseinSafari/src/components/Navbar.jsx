import { useState } from "react";





const Navbar = () => {
    const [edit, setEdit] = useState(false);
  
    
  
    return (
        <>
        
            <div className="flex  items-center">
                <div>
                     
                   
                   <div className="ml-2 w-full">
                            <div className="flex justify-between items-center">
                            
                            <div style={{ borderRadius:"15px"}} 
                                className="text-center w-[50px] leading-[50px] bg-[#a9d2fe] ">ع م</div>
                                <h6 className="text-[#e5e6ea]">علی موسوی</h6>
                                
                            </div>
                        </div>
                   
                </div>
                
               
                    <i onClick={() => setEdit(true)}
                        style={
                            {
                                color:"white",
                                marginRight:"auto" ,
                                paddingLeft:"20px" ,
                                fontSize:"20px" ,
                                marginTop:"18px"
                            }}  
                    className="fa fa-pencil  "></i>
               
                
                <i style={{ color:"white" ,
                            paddingLeft:"20px",
                            fontSize:"20px",
                            marginTop:"18px"}} 
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

                <form>
                    <i onClick={() => setEdit(false)}
                    style={{color:"white", marginLeft:"280px"}} 
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

                    <button style={{marginRight:"0px"}}
                        type="submit"
                        className="BTN">ذخیره</button>



                </form>
            </div>
        </> 
    )
}





export default Navbar;