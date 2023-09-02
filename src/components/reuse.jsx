import './Him.css';
const Reuse =({ main, i1,i2,i3, title,description })=>{
    return(
    <div className="jin">
        <div className="ga">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <img src={main}/>
        </div>
      <div className="mera">
        <div className="naam">
        <img className="ishan" src={i1} alt="Image 1"/>
        </div>
        <div className="naam">
        <img className="ishan" src={i2}alt="Image 2"/>
        </div>
        <div className="naam">
        <img className="ishan" src={i3} alt="Image 3"/>
        </div>
      </div>
        
    </div>

    )

}
export default Reuse;