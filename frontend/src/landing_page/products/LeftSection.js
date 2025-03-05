import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
        <div className='container mt-5'>
            <div className='row p-5'>
                <div className='col-6'>
                    <img src={imageURL}></img>
                </div>
    
                <div className='col-6 p-5 mt-5'>
                    <h>{productName}</h>
                    <p>{productDescription}</p>
                    <div>
                    <a href={tryDemo}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft: "50px"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay}><img src="media\images\googlePlayBadge.svg"/></a>
                    <a href={appStore} style={{marginLeft: "50px"}}><img src="media\images\appstoreBadge.svg"/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;