import React, { useState, useEffect } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { createGlobalState } from "react-hooks-global-state";

//const initialState = { showError:false };
//const { useGlobalState } = createGlobalState(initialState);

function addToast(title) {
  return (
    <div class="alert alert-success" role="alert">
      {title} sepete eklendi.
    </div>
  );
}

//BU COMPONENT! Süslülere dikkat!
const MenuItem = ({ img, title, price, desc }) => {
  const [counter, setCounter] = useState(0);
  let [amount, setAmount] = useState(0);
  //const [showError, setShowError] = useGlobalState('showError');
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  });
  return (
    <div className="menu-items col-lg-6 col-sm-12">
      <img src={img} alt={title} className="photo" />
      <div className="menu-info">
        <div className="menu-title">
          <h4>{title}</h4>
          <h4 className="price">{price}</h4>
        </div>
        <div className="menu-text">{desc}</div>
        <div className="menu-total">
          <br /> Total Amount: {amount}
        </div>
        <div>
          <button
            className="btn btn-success btn-sm d-flex justify-content-right"
            onClick={() => {
              setShowError(true);
            }}
          >
            Sepete Ekle
          </button>
          {showError === true && addToast(title)}
        </div>
      </div>

      <div className="d-grid gap-2 btn-container">
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            setCounter(counter + 1);
            amount = price * (counter + 1);
            // console.log(counter, amount);
            amount = amount.toFixed(2);
            setAmount(amount);
          }}
        >
          +
        </button>

        <button className="btn btn-secondary btn-sm" onClick={() => {}}>
          {counter}
        </button>

        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            if (counter > 0) {
              setCounter(counter - 1);
              amount = price * (counter - 1);
              amount = amount.toFixed(2);
              setAmount(amount);
            } else {
              setCounter(0);
            }
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

//Bu fonksiyon olaak çağrılan, COMPONENT DEĞİL!
/*const MenuItem2 = (data) => {
  return (
    <div className="menu-items col-lg-6 col-sm-12">
      <img src={data.img} alt={data.title} className="photo" />
      <div className="menu-info">
        <div className="menu-title">
          <h4>{data.title}</h4>
          <h4 className="price">{data.price}</h4>
        </div>
        <div className="menu-text">{data.desc}</div>
      </div>
    </div>
  );
};
*/
const App = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const MenuList = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];
  const Buttons = ["All", "Korea", "Japan", "China"];

  return (
    <div className="container menu">
      <div className="title">
        <h2>Assian Kitchen's Menu</h2>
      </div>

      <div className="btn-container d-flex justify-content-center">
        {Buttons.map((value, index) => {
          return (
            <button
              className="btn btn-outline-secondary me-2"
              key={index}
              onClick={() => {
                setSelectedMenu(value);
              }}
            >
              {value}
            </button>
          );
        })}
      </div>
      <div className="btn-container d-flex justify-content-end">
        <button className="btn btn-outline-success me-2" onClick={() => {}}>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>

      <div className="section-center row">
        {MenuList.map((data, index) => {
          if (selectedMenu && selectedMenu !== "All") {
            if (selectedMenu === data.category) {
              return <MenuItem img={data.img} title={data.title} price={data.price} desc={data.desc} />;
            }
          } else {
            return <MenuItem img={data.img} title={data.title} price={data.price} desc={data.desc} />;
          }
        })}
      </div>
    </div>
  );
};

//export {showError, setShowError};
export default App;
