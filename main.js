	let menu = document.querySelector('#menu-bar');
	let navbar = document.querySelector('.navbar');

	menu.addEventListener('click', () =>{
		menu.classList.toggle('fa-times');
		navbar.classList.toggle('nav-toggle');
	});

	window.onscroll = () =>{
		menu.classList.remove('fa-times');
		navbar.classList.remove('nav-toggle');
	}

<input type="radio" name="Photos" id="check1" checked>
<input type="radio" name="Photos" id="check2" >
<input type="radio" name="Photos" id="check3" >




<div class="projects">
	<div class="heading">
	   <h1>PROJECTS</h1>
	   <div class="headings"> 
	   <label for="check1">All Projects</label>
	   <label for="check2">Interior</label>
	   <label for="check3">Exterior</label>
	   </div>
	</div>

	<div class="photo-gallery">
		
		<div class="pic place">
		<a href="#"><img src="image/1.jpg"></a>
		<div class="pg">
			<a href="#">khulna</a>
		</div>
		</div>

		<div class="pic enterior">
		<a href="#" class="l"><img src="image/2.jpg"></a>
		<div class="pg">
			<a href="#">Barisal</a>
		</div>
		</div>

		<div class="pic enterior">
		<a href="#" class="l"><img src="image/3.jpg"></a>
		<div class="pg">
			<a href="#">Barisal</a>
		</div>

		</div>
		<div class="pic exterior">
		<a href="#" class="l"><img src="image/3.jpg"></a>
		<div class="pg">
			<a href="#">Barisal</a>
		</div>

		</div>
		<div class="pic exterior">
		<a href="#" class="l"><img src="image/4.jpg"></a>
		<div class="pg">
			<a href="#">Barisal</a>
		</div>
		</div>
		
	</div>
	
</div>
















.big-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border: 20px solid;
  border-color: #FAA51A;
  border-radius: 50%;
  background: transparent;
  bottom: 50%;
  right: 50%;
  transform: translate(-40%, 38%);
}

.big-circle:after {
  content: "";
  position: absolute;
  width: 360px;
  height: 360px;
  background-color: #fff;
  border-radius: 50%;
  top: calc(50% - 180px);
  left: calc(50% - 180px);
}



.square {
  position: absolute;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(181%, 11%);
  opacity: 0.2;
}