import VanillaTilt from './vanila-tilt';
const HomeImg = () =>{
    VanillaTilt.init(document.querySelector(".ooyes"), {
        
		max: 25,
		speed: 400,
        'data-tilt': true,
        'data-tilt-full-page-listening': true
	});
	
    return(
        <div className="bhap">
            
            <img className = "ooyes"src='images/homeimg.jpg' width={250} />
            <div></div>
            <h1>Elegance Is a Way Of
Expression And
It Lasts Longer Than Life</h1>
<h2>Longer than life</h2>
<script type="text/javascript" src="vanilla-tilt.js"></script>
	
        </div>
        
    )

}
export default HomeImg;