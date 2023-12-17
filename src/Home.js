import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img
                    className="home__img"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LPHeader_Gamers_en_US.png"
                    alt="home__img"
                />
                <div className="home__row">
                    <Product
                        id="1232567786"
                        title={
                            "Razer Huntsman V2 TKL Tenkeyless Gaming Keyboard: Fastest Linear Optical Switches"
                        }
                        image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/al-na-9d5791cf-3faf/af665b83-8d77-4c4e-bc8f-a252bf8b4758._CR0,0,1200,628_SX460_QL70_.jpg"
                        price={1}
                        rating={5}
                    />
                    <Product
                        id="1232567786"
                        title={
                            "Razer Huntsman V2 TKL Tenkeyless Gaming Keyboard: Fastest Linear Optical Switches"
                        }
                        image="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/ce99b4f3-5127-4340-9382-0c2c509df211._CR0,0,1200,628_SX460_QL70_.png"
                        price={2}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="1232567786"
                        title={
                            "Razer Huntsman V2 TKL Tenkeyless Gaming Keyboard: Fastest Linear Optical Switches"
                        }
                        image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61is2ZwnHEL._AC_UF894,1000_QL80_FMwebp_.jpg"
                        price={3}
                        rating={5}
                    />
                    <Product
                        id="1232567786"
                        title={
                            "Razer Ornata V3 X Gaming Keyboard: Low-Profile Keys - Silent Membrane Switches - Spill Resistant - Chroma RGB Lighting - Ergonomic Wrist Rest - Classic Blac"
                        }
                        image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61xNbcWbvDL._AC_SL1500_.jpg"
                        price={4}
                        rating={5}
                    />
                    <Product
                        id="1232567786"
                        title={
                            "Logitech G613 LIGHTSPEED Wireless Mechanical Gaming Keyboard, Multihost 2.4 GHz + Blutooth Connectivity - Black"
                        }
                        image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71pqfvJKW5L._AC_SX679_.jpg"
                        price={5}
                        rating={5}
                    />
                    <Product
                        id="1232567786"
                        title={
                            "Razer Huntsman V2 TKL Tenkeyless Gaming Keyboard: Fastest Linear Optical Switches"
                        }
                        image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/811GmQE-xHL._AC_SX466_.jpg"
                        price={6}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="1232567786"
                        title={
                            "Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, Lightsync RGB, Blue VO!CE mic technology and PRO-G audio drivers - Black"
                        }
                        image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71xNjrzG69L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                        price={7}
                        rating={5}
                    />
                    <Product
                        id="1232567786"
                        title={
                            "Razer Huntsman V2 TKL Tenkeyless Gaming Keyboard: Fastest Linear Optical Switches"
                        }
                        image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71LXi404OOL._AC_SL1500_.jpg"
                        price={8}
                        rating={5}
                    />
                    <Product
                        id="1232567786"
                        title={
                            "Razer Huntsman V2 TKL Tenkeyless Gaming Keyboard: Fastest Linear Optical Switches"
                        }
                        image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71kZghCcQEL._AC_SX466_.jpg"
                        price={9}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="1232567786"
                        title={
                            "Razer Huntsman V2 TKL Tenkeyless Gaming Keyboard: Fastest Linear Optical Switches"
                        }
                        image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61kI0PIuXVL._AC_UF894,1000_QL80_FMwebp_.jpg"
                        price={10}
                        rating={5}
                    />
                    <Product
                        id="1232567786"
                        title={
                            "Razer Huntsman V2 TKL Tenkeyless Gaming Keyboard: Fastest Linear Optical Switches"
                        }
                        image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61nKxSAAVFL._AC_SX425_.jpg"
                        price={11}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="1232567786"
                        title={
                            "Razer Huntsman V2 TKL Tenkeyless Gaming Keyboard: Fastest Linear Optical Switches"
                        }
                        image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61hOUZhSfgL._AC_SY879_.jpg"
                        price={12}
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
