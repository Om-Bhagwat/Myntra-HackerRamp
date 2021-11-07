import React,{useEffect,useState} from "react";
import axios from "axios";

// css imports
import "./Swipe.css";

const Slider = (props) => {

	const useTip = "Tap on Right Half of image if you like it and on Left Half if you don't.";

	const animateSwipe = async (likeType) => {
		let img0 = document.querySelector('.image0');
		let img1 = document.querySelector('.image1');
		let img2 = document.querySelector('.image2');
		if (likeType === "like") {
			document.querySelector(".use").innerHTML = "<strong>L I K E D</strong>";
			await rightToLeft();
		} else {
			document.querySelector(".use").innerHTML = "<strong>D I S L I K E D</strong>";
			await leftToRight();
		}
		setTimeout(() => {
			document.querySelector(".use").textContent = useTip;
		}, 700);

		// set new random one 
		// img2.src = "./img/1636177446098puma.jpg";

		setTimeout(() => {
			animationCleanUp(img0, img1, img2, likeType);
		},300);
	}

	const rightToLeft = async () => {
		let pos = 100;
		let img2 = document.querySelector('.image2');
		let id = null;
		clearInterval(id);
		id = setInterval(frame, 1);
		function frame() {
			if(pos > 0) {
				pos -= 2;
				img2.style.left = pos+'%';
			} else clearInterval(id);
		}
	}
	const leftToRight = async () => {
		let pos = -100;
		let img2 = document.querySelector('.image0');
		let id = null;
		clearInterval(id);
		id = setInterval(frame, 1);
		function frame() {
			if(pos < 0) {
				pos += 2;
				img2.style.left = pos+'%';
			} else clearInterval(id);
		}
	}

	const animationCleanUp = (img0, img1, img2, likeType) => {
		if (likeType === "like") {
			// image 1 src = image 2 src 
			img1.src = img2.src.valueOf();
			document.querySelector('.image2').style.removeProperty("left");
		} else {
			// image 1 src = image 0 src 
			img1.src = img0.src.valueOf();
			document.querySelector('.image0').style.removeProperty("left");
		}
		// console.log(img0, img1, img2);
		// return {zero: img0, one: img1, two: img2}
	}

	// const {
    //     phone_number,
    //     name
    // } = props;

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
    },[])
	

	return (
		<div id="swipe-container">

			<div id="swipe-panel">
				<h3 className="swipe-title">
					The title of the cloth that is appearing
				</h3>
				<div className="disliked"
					onClick={() => animateSwipe("dislike")}
				></div>
				<div className="liked" 
					onClick={() => animateSwipe("like")}
				></div>
				<img className="image0"  src="./img/1636177446098puma.jpg" 
				alt="image0" />
				<img className="image1"  src="./img/1636177446098puma.jpg" 
				alt="image1" />
				<img className="image2"  src="./img/1636177068177white.jpg" 
				alt="image2" />
				<p className="use">{useTip}</p>
			</div>

			<div id="swipe-list">
				<h4>TRENDING TODAY</h4>
				<div className="rank-list">
				{loadproduct ? (
					<>loading . . .</>
				):(
					<>
					{product.map((pr)=>{
						return(
						<div className="rank-item">
							<img src={`./img/${pr.img}`} alt="product" />
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