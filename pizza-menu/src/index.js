import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return <div className='container'>
    <Header/>
    <h1>Hello</h1>
    <Menu/>
    <Footer/>
  </div>
}

function Pizza({pizzaObj}) {
  return <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
    <img src={pizzaObj.photoName} alt='test'/>
    <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.price}</span>
      <span>{pizzaObj.soldOut ? 'SOLD OUT': pizzaObj.price}</span>
    </div>
  </li>
}

function Header() {
  const style = {color: 'red', fontSize: '32px', textTransform: 'uppercase'}

  return <header className='header footer'>
    <h1 style={style}>Fast React Pizza Co.</h1>
  </header>
}

function Menu() {
  return (pizzaData &&
    <main className="menu">
      <h2>Our menu</h2>
      <ul className="pizza">
        {pizzaData.map(pizza =>
          <Pizza pizzaObj={pizza} key={pizza.name}/>)}
      </ul>
    </main>)
}

function Footer() {
  return <footer>
    <div className='order'>
      <p>It's open now</p>
      <button className='btn'>Order</button>
    </div>
  </footer>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
