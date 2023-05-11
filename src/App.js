
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
       <h4>{charts.plan}</h4>
        <h1 className='price'>{charts.price}</h1><small className='price'>{charts.period}</small>
     </div>
     <hr></hr>
     <div className='services'>
       <h3>{charts.user}</h3>
       <h3>{charts.storage}</h3>
       <h3>{charts.pub}</h3>
       <h3 >{charts.com}</h3>
       <h3 style={styles1}>{charts.priv}</h3>
       <h3 style={styles2}>{charts.sup}</h3>
       <h3 style={styles3}>{charts.dom}</h3>
       <h3 style={styles4}>{charts.stat}</h3>
     </div>
     <button>BUY</button>
     </div>
  );
 }

export default App;
