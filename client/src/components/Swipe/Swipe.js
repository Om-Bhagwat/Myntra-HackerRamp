import React,{useEffect,useState} from "react";
import axios from "axios";

// css imports
import "./Swipe.css";

const Slider = (props) => {

	const useTip = "Tap on Right Half of image if you like it and on Left Half if you don't.";
	let index = 2;
	let p_idCurrent;
	let p_idNext;

	const animateSwipe = async (likeType) => {
		let img0 = document.querySelector('.image0');
		let img1 = document.querySelector('.image1');
		let img2 = document.querySelector('.image2');
		let use = document.querySelector(".use");
		use.style.color = "#fff";
		use.style.fontSize = "1.8rem";
		if (likeType === "like") {
			use.innerHTML = "L I K E D";
			await rightToLeft();
			Like();

		} else {
			use.innerHTML = "D I S L I K E D";
			await leftToRight();
			Dislike();
		}
		setTimeout(() => {
			use.style.removeProperty("color");
			use.style.removeProperty("font-size");
			document.querySelector(".use").textContent = useTip;
		}, 700);

		// set new random one 
		let newSrc = "";
		let listSize = list.length;
		if (index >= listSize) {
			newSrc = `./img/${list[index]}`;
			index++;
			setTimeout(() => {
				animationCleanUp(img0, img1, img2, likeType, newSrc);
			},300);
			p_idCurrent = p_idNext;
			p_idNext = list[index].p_id;
		}
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

	const animationCleanUp = (img0, img1, img2, likeType, newSrc) => {
		if (likeType === "like") {
			// image 1 src = image 2 src 
			img1.src = img2.src.valueOf();
			document.querySelector('.image2').style.removeProperty("left");
			img2.src = newSrc;
		} else {
			// image 1 src = image 0 src 
			
			img1.src = img0.src.valueOf();
			document.querySelector('.image0').style.removeProperty("left");
			img0.src = newSrc;
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
	const [counter, setCounter] = useState(0);

	const [list,setList]=useState([]);
    const [loadlist,setloadList]=useState(true);

	const [productid,setproductId]=useState([]);

	// functions for like and dislike

	const Like = async ()=>{
		console.log(p_idCurrent);
		try{
			const response = await axios.post(
				"http://localhost:3003/api/user/likeProduct",
				{
					p_id : p_idCurrent,
					
				}
				)
				console.log(response);

		}catch(error){
			console.log(error);
		}
	}

	const Dislike = async ()=>{
		console.log(p_idCurrent);
		try{
			const response = await axios.post(
				"http://localhost:3003/api/user/dislikeProduct",
				{
					p_id : p_idCurrent,
					
				}
			)
			console.log(response);

		}catch(error){
			console.log(error);
		}
	}


	
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

		async function Load_list(){
            try{
                const response = await axios.get(
                    "http://localhost:3003/api/user/showRandom"
                )
    
                console.log(response.data.arr2);
                setList(response.data.arr2);
                setloadList(false);
            }catch(error){
                console.log(error);
            }
        }
        Load_list();
        Load_Products();
    },[])
	
	const initProductID = () => {
		p_idCurrent = list[0].p_id;
		p_idNext = list[1].p_id;
	}

	return (
		<div id="swipe-container">

			<div id="swipe-panel" onFocus={initProductID}>
				{loadlist ? (
					<>
						Loading.
					</>
				):(
					<>
						<h3 className="swipe-title">
							The title of the cloth that is appearing
						</h3>
						<div className="disliked"
							onClick={() => animateSwipe("dislike")}
						></div>
						<div className="liked" 
							onClick={() => animateSwipe("like")}
						></div>
						{/* {list.map((val)=>{
							return(
								<>
									<img className={`image${counter}`} src={`./img/${val.img}`} alt="image0" />
								</>
							)
						})} */}
						<img className="image0"  src={`${'./img/'+list[1].img}`} 
						alt="image0" />
						<img className="image1"  src={`${'./img/'+list[0].img}`} 
						alt="image1" />
						<img className="image2"  src={`${'./img/'+list[1].img}`} 
						alt="image2" />
						<p className="use">{useTip}</p>
					</>
				)}

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