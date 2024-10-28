import React from 'react'
import "./descriptionbox.css"
const Descriptionbox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
             <div className="descriptionbox-navbox">
                Description
             </div>
             <div className="descriptionbox-navbox fade">
                Reviews (122)
             </div>
        </div>
             <div className="descriptionbox-description">
                <p>
                    Yappity Yappity yap yap Yappity Yappity yap yap Yappity Yappity yap yap Yappity 
                    Yappity yap yap Yappity Yappity yap yap Yappity Yappity yap yap 
                </p>
                <p>
                Yappity Yappity yap yap Yappity Yappity yap yap Yappity 
                Yappity yap yap Yappity Yappity yap yap Yappity Yappity yap yap Yappity Yappity yap yap
                </p>
             </div>
    </div>
  )
}
export default Descriptionbox;