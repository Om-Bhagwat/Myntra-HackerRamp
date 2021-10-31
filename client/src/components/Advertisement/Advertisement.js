//imports
import React from "react";

// css imports
import "./Advertisement.css";

// img imports
import LongAd1 from "../../img/longAd.png";
import LongAd2 from "../../img/longAd2.png";
import ShortAd from "../../img/shortAd.png";

function Advertisement(){

    return(
        <div>
            <div className="row short_pic">
                <div className="col-xs-12 col-md-12 SaleisLive">
                    <img src={ShortAd} alt="Ad Banner" />
                </div>
            </div>
            <div className="row long_pic">
                <div className="col-xs-12 col-md-12 Hdfc">
                    <img src={LongAd1} alt="Long Ad Banner" />
                </div>
                <div className="col-xs-12 col-md-12 Buy1Get1">
                    <img src={LongAd2} alt="Long Ad Banner 2" />
                </div>
            </div>
        </div>
    )
}

export default Advertisement;