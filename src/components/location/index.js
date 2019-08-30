import React from 'react'

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.6515279869473!2d-58.45710326836204!3d-34.56237746221197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d3ea07df93%3A0x947b5150d5a5bda4!2sBarrio%20Chino%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1567206241788!5m2!1ses-419!2sar" width="100%" 
      height="500px" 
      frameBorder="0" 
      allowFullScreen=""
      title="myFrame"      
      >
      </iframe>
      <div className="location_tag">
        <div>
          Location
        </div>
      </div>
    </div>
  )
}

export default Location
