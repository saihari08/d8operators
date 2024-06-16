import logo from './logo.svg';
import './App.css';

function App() {

  let score=0;
  return (
    <div className="App">
      <h1>Operators</h1>
      <button onClick={()=>{
        let a=30;
        let b=55;
        //let c=a+b;
        let c=5+6*2;
        let d=(5+6)*2;
        
        //alert(c);
        console.log(c);
        console.log(d);
        
      let reminder=44 % 10;
      console.log(reminder);
      
      }}>Arithmetic operators</button>
      
      <button onClick={()=>{
        score++;
        console.log(score)
      }}>Increment</button>

<button onClick={()=>{
        score--;
        console.log(score)
      }}>Decrement</button>
     <hr></hr> 
     <button onClick={()=>{
      console.log(score);
      score+=10;
      console.log(score);
      score*=5;
      console.log(score);
      score/=3;
      console.log(score);
      score-=15;
      console.log(score);
     }}>Assignment Operators</button>

<button onClick={()=>{
  let engmarks=88;
  console.log(engmarks>=35);
  console.log(engmarks<=35);
  console.log(engmarks>75);
  console.log(engmarks<35);
  console.log(engmarks!=55);
  console.log(engmarks==35);
  
  //engmarks >=35?"pass":"fail";
  
  if(engmarks >=35){
    console.log(`Student passed in english`)
  }else{
    console.log(`Student failed in english`)
  }
}}>Assignment Operators</button>
</div>
  );
}

export default App;
