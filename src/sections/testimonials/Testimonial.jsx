import Card from "../../components/Card"

const Testimonial = ({testimonial}) => {
  return (
    <Card className="light">
  
 


        <div className="testimonial__client">
            <div className="testimonial__client-avatar">
                <img src={testimonial.avatar} alt="Certifications"   />
            </div>
            {/* <div className="testimonial__client-details">
                <h6>{testimonial.name}</h6>
                <small>{testimonial.profession}</small>
            </div> */}
        </div>
        <div style={{
         
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
     
    
         }}>
        <a href="https://www.linkedin.com/in/harsh-soni-hs/details/certifications/" className="btn sm primary" target="_blank" rel="noopner noreferrer"
        
        > {testimonial.quote}</a></div>
    </Card>
  )
}

export default Testimonial