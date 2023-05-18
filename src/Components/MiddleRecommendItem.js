import bluetoothSpeaker from '../images/bluetoothSpeaker.png';

const MiddleRecommendItem = () => {
    return(
        <>
            <div className="middle_recommend_container">
                <div className="middle_recommend_info_container">
                    <div className="middle_recommend_img_container for_mobile">
                        <img src={bluetoothSpeaker} alt="bluetoothSpeaker" className='bluetoothSpeaker_image_mobile' />
                    </div>

                    <span className="product_explain_text">Portable Wireless Speaker</span>
                    <span className="product_name">Beats Pill <span className="plus_icon">+</span></span>
                    <span className="choose_color_text">Available Colors</span>
                    <span className="find_text">Find your Color</span>
                    <div className="colors_container">
                        <div className="white_color">

                        </div>
                        <div className="red_color">

                        </div>
                        <div className="black_color">

                        </div>
                    </div>
                    <div className="purchase_container">
                        <span className="cost_text">$299.95</span>
                        <button className="buy_button black_btn mobile_middle_btn">Buy Now</button>
                    </div>
                    <span className="purchase_gift_text">$60 apple Music gift card with purchase of select Beats products.</span>
                </div>
                <div className="middle_recommend_img_container for_desktop">
                    <img src={bluetoothSpeaker} alt="bluetoothSpeaker" className='bluetoothSpeaker_image_desktop' />
                </div>
            </div>
        </>
    );
}

export default MiddleRecommendItem;