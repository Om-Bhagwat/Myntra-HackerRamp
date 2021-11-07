import React,{useEffect,useState} from "react";
import axios from "axios";

// css imports
import "./Swipe.css";

const Slider = (props) => {

	const animateSwipe = () => {
		let pos = 100;
		let img1 = document.querySelector('.image1');
		let img2 = document.querySelector('.image2');
		let id = null;
		clearInterval(id);
		id = setInterval(frame, 1);
		function frame() {
			if(pos > 0) {
				img2.style.left = pos+'%';
				pos -= 2;
			} else
			clearInterval(id);
		}
		// image 1 src = image 2 src 
		img1.src = "./img/1636177068177white.jpg";
		// image 2 src = new random one 
		img2.src = "./img/1636177446098puma.jpg";
		pos = 100;
		img2.style.left = pos + '%';
	}


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
				<div className="liked" 
					onClick={animateSwipe}
				></div>
				<img className="image1" 
				src="./img/1636177446098puma.jpg"
				alt="image1" />
				<img className="image2" 
				src="./img/1636177068177white.jpg"
				alt="image2" />
				<p className="use">
					Tap on Right Half of image if you like it and on Left Half if you don't.
				</p>
			</div>

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