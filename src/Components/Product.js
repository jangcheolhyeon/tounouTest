const Product = ({item}) => {
    return(
        <>
            <div className="product_container">
                <div className="product_img">
                    <img src={item.img} alt={item.alt} /> 
                </div>
                <div className="product_info">
                    <span className="product_name">{item.name}</span>
                    <span className="product_info_text">{item.firstSentence}</span>
                    <span className="product_info_text">{item.secondSentence}</span>
                    <span className="product_info_text">{item.thirdSentence}</span>

                    <div className="purchase_container">
                        <span className="product_cost">${item.cost}</span>
                        <button className="product_buy_btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;