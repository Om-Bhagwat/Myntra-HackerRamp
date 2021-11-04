import React , {useState} from "react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
// import { render } from "react-dom";

import CompanyLogo from "../../img/myntraLogo.png";

import "./Friends.css";

// const ratingChanged = (newRating) => {
//     console.log(newRating);
// };

function Friends(){

    const [search , setSearch] = useState("");
    const [show , setShow ] = useState(false);

    const search_function =async(e)=>{
        e.preventDefault();

        try{
            const response = await axios.post(
                "http://localhost:3003/api/user/getnames",
                {
                    name : search,
                }
            )

            console.log(response);
            setShow(true);
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className="container-fluid">
            <div className="col-xs-3 col-md-3 Left_div_friends">
                <h3 className="friend-list-head">FRIENDS LIST</h3>
                <div className="friend-list-body">
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>Harsh</h6>
                            <p>5 Mutual Friends</p>
                        </div>
                    </div>
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>Ayush</h6>
                            <p>5 Mutual Friends</p>
                        </div>
                    </div>
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>Om</h6>
                            <p>3 Mutual Friends</p>
                        </div>
                    </div>
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>Parth</h6>
                            <p>6 Mutual Friends</p>
                        </div>
                    </div>
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>Yash</h6>
                            <p>8 Mutual Friends</p>
                        </div>
                    </div>
                </div>
                <h3 className="friend-list-head">REQUESTS</h3>
                <div className="friend-list-body">
                    {/* !!!!! Use this one as template !!!! */}
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>
                                {/* uncomment the link tag below */}
                                {/* <Link to="localhost:3003/profile/:id"> */}
                                Priyanshi
                                {/* </Link> */}
                            </h6>
                            <p>10 Mutual Friends</p>
                        </div>
                    </div>
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>Harshista</h6>
                            <p>5 Mutual Friends</p>
                        </div>
                    </div>
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>Parth</h6>
                            <p>6 Mutual Friends</p>
                        </div>
                    </div>
                    <div className="friends_box">
                        <div className="friend-list-pic"></div>
                        <div className="info_tab">
                            <h6>Yash</h6>
                            <p>8 Mutual Friends</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xs-9 col-md-9 right_div_friends">
                <div className="search_Bar">
                    <input
                        className="search_input"
                        placeholder="Search Friends"
                        value = {search}
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                    <button onClick={search_function} >Search</button>
                </div>
                {show ? (
                    <div className="search_results">
                        <div className="results">
                            <div className="profile_car">
                                <div className="oir">
                                    {/* Photo */}
                                    <div className="cir"></div>
                                    <div>Om Bhagwat</div>
                                </div>
                                <div>
                                    {/* icon */}
                                    <h5>Accept</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                ):(
                    <>
                    </>
                )}
                <div className="WishlistNames">
                    <div className="circle_img"></div>
                    <div className="in">
                        <h3>Parth Bhardwaj's Wishlist</h3>
                        <div className="bt">
                            <button>Remove Friend</button>
                            <button>Block Friend</button>
                        </div>
                    </div>
                </div>
                {/* <hr className="line"/> */}
                <div className="help-dialogue">
                    <h4>
                        Help your friend choose better by rating items in their wishlist
                    </h4>
                </div>

                <div className="friend_wishlist">

                    <div className="wishlist_card">

                        <div className="card_left">
                            <img
                                className="prod_im"
                                src={CompanyLogo}
                                alt="product_image"
                            />
                        </div>

                        <div className="card_right">
                                <h5 className="card-title">Men Black JORDAN</h5>
                                <h5 className="card-brand">ONE TAKE 2</h5>
                                <h6 className="card-cost" style={{
                                    margin:"10px 0 0 0",
                                    fontSize:"1.5rem"
                                }}>Rs. 8295</h6>
                                <p style={{ 
                                    color: "green",
                                    fontSize:"1.1rem"
                                }}>
                                    inclusive of all taxes
                                </p>
                                {/* {
                                    render(
                                        <ReactStars
                                            count={5} size={25}
                                            onChange={ratingChanged}
                                            activeColor="#ffd700"
                                        />
                                    )
                                } */}
                        </div>
                    </div>

                    <div className="wishlist_card">
                        <div className="card_left">
                            <img
                                className="prod_im"
                                src={CompanyLogo}
                                alt="product_image"
                            />
                        </div>
                        <div className="card_right">
                            <div>
                                <h5>Men Black JORDAN</h5>
                                <h5>ONE TAKE 2</h5>
                            </div>
                            <br></br>
                            <div>
                                <h6>Rs. 8295</h6>
                                <p style={{ color: "green" }}>
                                    inclusive of all taxes
                                </p>
                                <ReactStars
                                    count={5}
                                    size={25}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="wishlist_card">
                        <div className="card_left">
                            <img
                                className="prod_im"
                                src={CompanyLogo}
                                alt="product_image"
                            />
                        </div>
                        <div className="card_right">
                            <div>
                                <h5>Men Black JORDAN</h5>
                                <h5>ONE TAKE 2</h5>
                            </div>
                            <br></br>
                            <div>
                                <h6>Rs. 8295</h6>
                                <p style={{ color: "green" }}>
                                    inclusive of all taxes
                                </p>
                                <ReactStars
                                    count={5}
                                    size={25}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="wishlist_card">
                        <div className="card_left">
                            <img
                                className="prod_im"
                                src={CompanyLogo}
                                alt="product_image"
                            />
                        </div>
                        <div className="card_right">
                            <div>
                                <h5>Men Black JORDAN</h5>
                                <h5>ONE TAKE 2</h5>
                            </div>
                            <br></br>
                            <div>
                                <h6>Rs. 8295</h6>
                                <p style={{ color: "green" }}>
                                    inclusive of all taxes
                                </p>
                                <ReactStars
                                    count={5}
                                    size={25}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="wishlist_card">
                        <div className="card_left">
                            <img
                                className="prod_im"
                                src={CompanyLogo}
                                alt="product_image"
                            />
                        </div>
                        <div className="card_right">
                            <div>
                                <h5>Men Black JORDAN</h5>
                                <h5>ONE TAKE 2</h5>
                            </div>
                            <br></br>
                            <div>
                                <h6>Rs. 8295</h6>
                                <p style={{ color: "green" }}>
                                    inclusive of all taxes
                                </p>
                                <ReactStars
                                    count={5}
                                    size={25}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="wishlist_card">
                        <div className="card_left">
                            <img
                                className="prod_im"
                                src={CompanyLogo}
                                alt="product_image"
                            />
                        </div>
                        <div className="card_right">
                            <div>
                                <h5>Men Black JORDAN</h5>
                                <h5>ONE TAKE 2</h5>
                            </div>
                            <br></br>
                            <div>
                                <h6>Rs. 8295</h6>
                                <p style={{ color: "green" }}>
                                    inclusive of all taxes
                                </p>
                                <ReactStars
                                    count={5}
                                    size={25}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="wishlist_card">
                        <div className="card_left">
                            <img
                                className="prod_im"
                                src={CompanyLogo}
                                alt="product_image"
                            />
                        </div>
                        <div className="card_right">
                            <div>
                                <h5>Men Black JORDAN</h5>
                                <h5>ONE TAKE 2</h5>
                            </div>
                            <br></br>
                            <div>
                                <h6>Rs. 8295</h6>
                                <p style={{ color: "green" }}>
                                    inclusive of all taxes
                                </p>
                                <ReactStars
                                    count={5}
                                    size={25}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Friends;