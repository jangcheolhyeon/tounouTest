import Footer from "./Components/Footer";
import MiddleRecommendItem from "./Components/MiddleRecommendItem";
import Product from "./Components/Product";
import TopNavi from "./Components/TopNavi";
import TopRecommendItem from "./Components/TopRecommendItem";
import UserEmailContainer from "./Components/UserEmailContainer";
import "./style.css";

import yellowHeadPhone from '../src/images/yellowHeadPhone.png';
import bluetoothEarPhone from '../src/images/bluetoothEarPhone.png';
import bluetoothHeadPhone from '../src/images/bluetoothHeadPhone.png';
import bluetoothBrownEarPhone from "../src/images/bluetoothBrownEarPhone.png";
import pinkEarPhone from "../src/images/pinkEarPhone.png";
import blackEarPhone from "../src/images/blackEarPhone.png";


function App() {
  const productList = [
    {id : 1, name : "Beats[]", firstSentence: "Up to 8 hours of battery life", secondSentence:"With Fast fuel, a 5-minute charge = 2", thirdSentence: "hours of playback", cost : 299.95, img : yellowHeadPhone, alt : "headPhone"},
    {id : 2, name : "Beats[]", firstSentence: "Up to 8 hours of battery life", secondSentence:"With Fast fuel, a 5-minute charge = 2", thirdSentence: "hours of playback", cost : 199.95, img : bluetoothEarPhone, alt : "earPhone"},
    {id : 3, name : "Beats[]", firstSentence: "Up to 8 hours of battery life", secondSentence:"With Fast fuel, a 5-minute charge = 2", thirdSentence: "hours of playback", cost : 199.95, img : bluetoothHeadPhone, alt : "headPhone"},
    {id : 4, name : "Beats[]", firstSentence: "Up to 8 hours of battery life", secondSentence:"With Fast fuel, a 5-minute charge = 2", thirdSentence: "hours of playback", cost : 999.95, img : pinkEarPhone, alt : "earPhone"},
    {id : 5, name : "Beats[]", firstSentence: "Up to 8 hours of battery life", secondSentence:"With Fast fuel, a 5-minute charge = 2", thirdSentence: "hours of playback", cost : 99.95, img : bluetoothBrownEarPhone, alt : "earPhone"},
    {id : 6, name : "Beats[]", firstSentence: "Up to 8 hours of battery life", secondSentence:"With Fast fuel, a 5-minute charge = 2", thirdSentence: "hours of playback", cost : 299.95, img : blackEarPhone, alt : "earPhone"}
  ];

  return (
    <>
      <div className="app_container">
        <TopNavi />
        <TopRecommendItem />

        <div className="middle_container">
          <MiddleRecommendItem />
          <div className="product_list_container">
            {productList.map((item) => {
              return <Product key={item.id} item={item} />
            })}
          </div>
          <UserEmailContainer />
        </div>

        <Footer />

      </div>
    </>
  );
}

export default App;
