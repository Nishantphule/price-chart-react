
import './App.css';

function App() {
  const Chart = [
    {
     plan:"FREE",
     price:"$0",
     period:"/month",
     user:"✔ Single User",
     storage:"✔ 5GB Storage",
     pub:"✔ Unlimited Public Projects",
     com:"✔ Community Access",
     priv:"✖ Unlimited Private Projects",
     sup:"✖ Dedicated Phone Support",
     dom:"✖ Free Subdomain",
     stat:"✖ Monthly Status Reports"
    },
    {
      plan:"PLUS",
      price:"$9",
      period:"/month",
      user:"✔ 5 Users",
      storage:"✔ 50GB Storage",
      pub:"✔ Unlimited Public Projects",
      com:"✔ Community Access",
      priv:"✔ Unlimited Private Projects",
      sup:"✔ Dedicated Phone Support",
      dom:"✔ Free Subdomain",
      stat:"✖ Monthly Status Reports"
     },
     {
      plan:"PRO",
      price:"$49",
      period:"/month",
      user:"✔ Unlimited User",
      storage:"✔ 150GB Storage",
      pub:"✔ Unlimited Public Projects",
      com:"✔ Community Access",
      priv:"✔ Unlimited Private Projects",
      sup:"✔ Dedicated Phone Support",
      dom:"✔ Unlimited Free Subdomain",
      stat:"✔ Monthly Status Reports"
     }
  ]
  return (
    <div className="App">
      <div className='Price-charts'>
      {Chart.map(data => <List charts={data}/> )}</div> 
      <footer>Created By Nishant</footer>
    </div>
    
  );
}



function List({charts}){
  const styles1 = {
    opacity: 1
  }
  const styles2 = {
    opacity: 1
  }
  const styles3 = {
    opacity: 1
  }
  const styles4 = {
    opacity: 1
  }

  charts.priv.includes("✖")? styles1.opacity = 0.5 : styles1.opacity = 1
  charts.sup.includes("✖")? styles2.opacity = 0.5 : styles2.opacity = 1
  charts.dom.includes("✖")? styles3.opacity = 0.5 : styles3.opacity = 1
  charts.stat.includes("✖")? styles4.opacity = 0.5 : styles4.opacity = 1
  return  (
     <div className='charts'>
       <div className='head'>
       <h5>{charts.plan}</h5>
        <h1 className='price'>{charts.price}</h1><p className='price'>{charts.period}</p>
     </div>
     <hr></hr>
     <div className='services'>
       <p>{charts.user}</p>
       <p>{charts.storage}</p>
       <p>{charts.pub}</p>
       <p >{charts.com}</p>
       <p style={styles1}>{charts.priv}</p>
       <p style={styles2}>{charts.sup}</p>
       <p style={styles3}>{charts.dom}</p>
       <p style={styles4}>{charts.stat}</p>
     </div>
     <button>BUTTON</button>
     </div>
  );
 }

export default App;
