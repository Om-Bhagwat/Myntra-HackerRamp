// css imports
import "./Swipe.css";

const Slider = () => {

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
		img1.src = "./img/1636177068177white.jpg";
		// img2.src = "./img/1636177068177white.jpg";
		img2.style.left = "100%";
	}

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
			</div>
		</div>
	);
}

export default Slider;