import './sub.css'
const Subji = () =>{
   
       
    return(<div className='opopo' id = "scrollTarget">
        <header>CONTACT US</header>
        <form id="form" class="topBefore">
		
    <input id="name" type="text" placeholder="NAME"/>
    <input id="email" type="text" placeholder="E-MAIL"/>
    <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
<input id="submit" type="submit" value="SUBMIT!"/>

</form>
</div>

    )
}
export default Subji;