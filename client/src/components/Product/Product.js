/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
// react imports.
import React,{useEffect,useState} from "react";
import axios from "axios";
//css imports
import "./Product.css";
// import CompanyLogo from "../../img";
// import xc from "../../../public/img/1636128015780jordan.jpg"



function Product(){

    
    const [product,setProduct]=useState([]);
    const [loadproduct,setloadProduct]=useState(true);



    useEffect(()=>{

        async function Load_Products(){
            try{
                const response = await axios.get(
                    "http://localhost:3003/api/user/getAllproduct"
                    
                     
                )
    
                console.log(response.data.product1);
                setProduct(response.data.product1);
                setloadProduct(false);
            }catch(error){
                console.log(error);
            }
        }

 



        Load_Products();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <div>
            <div className="products">
                {loadproduct ?(
                    <>
                        loading
                    </>
                ):(
                    <>
                        {product.map((pr)=>{

                            return (
                                <div className="card oppa" style={{width: "25rem"}}>
                                <img className="card-img-top" style={{width:"18rem"}} src={`../../../public/img/1636128015780jordan.jpg`} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"><strong>{pr.p_name}</strong></h5>
                                    <p className="card-text">{pr.p_brand}</p>
                                    <p className="card-text"><strong>Rs {pr.p_dis_price}</strong>&nbsp;&nbsp;<strike>{pr.p_orig_price}</strike>&nbsp;&nbsp;<span style={{color:"red"}}>({pr.p_discount}% off)</span></p>
                                </div>
                            </div>

                            )
                        })}
                    </>
                )}


          
           
            </div>
        </div>
    )
}

export default Product;