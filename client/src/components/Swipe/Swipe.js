import React,{useEffect,useState} from "react";
import axios from "axios";

// css imports
import "./Swipe.css";

const Slider = (props) => {
	// const swipeRight = () => {
	// 	document.getElementById("swipe-panel").
	// }

	// document.querySelector('.box').addEventListener('click', function () {
	// 	this.scroll({
	// 		left: 0,
	// 		top: 0,
	// 		behavior: 'smooth'
	// 	})
	// });


	const {
        phone_number,
        name
    } = props;


	const [product,setProduct]=useState([]);
    const [loadproduct,setloadProduct]=useState(true);
	
    useEffect(()=>{

        async function Load_Products(){
            try{
                const response = await axios.get(
                    "http://localhost:3003/api/user/showSorted"
                    
                     
                )
    
                console.log(response.data.arr2);
                setProduct(response.data.arr2);
                setloadProduct(false);
            }catch(error){
                console.log(error);
            }
        }

 



        Load_Products();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
	

	return (
		<div id="swipe-container">

			<div id="swipe-panel">
				<h3 className="swipe-title">
					The title of the cloth that is appearing
				</h3>
				<div className="disliked"></div>
				<div className="liked"></div>
				<img className="image1" 
				src="./img/1636177446098puma.jpg"
				alt="image1" />
				<img className="image2" 
				src="./img/1636177446098puma.jpg"
				alt="image2" />
				<p className="use">
					Tap on Right Half of image if you like it and on Left Half if you don't.
				</p>
			</div>

			{/* <div id="swipe-list">
				<h4>TRENDING TODAY</h4>
				<div className="rank-list">
					<div className="rank-item">
						<img src="./img/1636177446098puma.jpg" alt="Joota1" />
						<h6>Some Joota Of Some Company and some more text to increase size</h6>
					</div>
					<div className="rank-item">
						<img src="./img/1636177446098puma.jpg" alt="Joota1" />
						<h6>Some Joota</h6>
					</div>
					<div className="rank-item">
						<img src="./img/1636177446098puma.jpg" alt="Joota1" />
						<h6>Some Joota Of Some Company and some more text to increase size</h6>
					</div>
					<div className="rank-item">
						<img src="./img/1636177446098puma.jpg" alt="Joota1" />
						<h6>Some Joota Of Some Company and some more text to increase size</h6>
					</div>
					<div className="rank-item">
						<img src="./img/1636177446098puma.jpg" alt="Joota1" />
						<h6>Some Joota Of Some Company and some more text to increase size</h6>
					</div>
					<div className="rank-item">
						<img src="./img/1636177446098puma.jpg" alt="Joota1" />
						<h6>Some Joota Of Some Company and some more text to increase size</h6>
					</div>
					<div className="rank-item">
						<img src="./img/1636177446098puma.jpg" alt="Joota1" />
						<h6>Some Joota Of Some Company and some more text to increase size</h6>
					</div>
					
				</div>
			</div> */}

			<div id="swipe-list">
				<h4>TRENDING TODAY</h4>
				<div className="rank-list">
				{loadproduct ?(
            <>
                loading . . .
            </>
        ):(
			<>
		 {product.map((pr)=>{
			 return(

				<div className="rank-item">
				<img src={`./img/${pr.img}`} alt="Joota1" />
				<h6>{pr.p_name}</h6>
			</div>


			 );


			})}
			</>

		)}


					
				</div>
			</div>
			


		</div>
	);
}

export default Slider;