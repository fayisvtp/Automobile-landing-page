
import image from '../assets/images/contact.png'
import DateTime from './DateTime';
export default function ContactPage() {
  const containerStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  
  return (
    <div className="col-12 d-flex  w-full flex justify-content-center py-5 contact-area" style={containerStyle}>
     
   
      <div className="col-md-6 col-12">
      <div className="contact-form container px-4 pb-5 py-5 col-10 my-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '30px' }}>

          <h1 className="text-center ">Contact Us</h1>
          <form>
            <div className="mb-3 text-white">
              <label className="form-label ">
                Name
              </label>
              <input type="text" className="form-control" required placeholder='Name' style={{ border: 'none' }}  />
            </div>
            <div className="mb-3 text-white">
              <label  className="form-label">
                Contact Number
              </label>
              <input type="number" className="form-control" required placeholder='Number' style={{ border: 'none' }} />
            </div>
            <div className="mb-3 ">
              <DateTime/>
               
             
        
            </div>
            <button type="submit" className="btn bg-white  col-12">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="col-md-6  bg-danger  col-12">
        <div className="container px-auto my-4">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="100%"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=munnar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                
              ></iframe>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  )
}
