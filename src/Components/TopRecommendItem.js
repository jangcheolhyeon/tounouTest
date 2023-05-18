import headPhone from '../images/headphone.png'

const TopRecommendItem = () => {
    return(
        <>
            <div className="top_recommend_item_container">
                <div className="top_recommend_background">
                    <div className="best_item_img">
                        <img src={headPhone} alt="headphone" className='headphone_image' />
                    </div>

                    <div className="best_item_text">
                        <span className="top_text">Beats studio Wireless</span>
                        <span className="mid_text">Experience your <br></br>music like never before.</span>
                        <div className="purchase_container">
                            <span className="cost_text">$299.95</span>
                            <button className="buy_button orange_btn">BUY NOW</button>
                        </div>
                        <span className="bottom_text">$60 apple Music gift card with purchase of select Beats products.</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopRecommendItem;