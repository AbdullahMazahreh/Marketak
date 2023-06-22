import './CardDetails.css'
function CardDetails({ title, description, price, image }){
return(
    <>
    <div className='CardDetails-container'>
            <div className='CardDetails-image'>
                <img src={image} alt={title} />
                <h3 className="CardDetails-title">{title}</h3>
            </div>
            
            <div className='CardDetails-description'>
              <h2> {description}</h2> 
                <h3 className='CardDetails-price'>{price}$</h3>
                <button className='addtocard-btn'>add Card</button>
            </div>
          
                
                
            
        </div> 
    </>
)


}
export default CardDetails;