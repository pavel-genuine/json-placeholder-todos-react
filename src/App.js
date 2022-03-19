import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <Blog heading='Love Life' author='Mr.Jorder'  ></Blog>
      <Blog heading='Love coding' author='Mr.charm'  ></Blog>
      <Blog heading='Love starup' author='Mr.lovely'  ></Blog>
      
    </div>
  );
}

function Blog(props){
  return(
    <div>
      <h1>
        Heading : {props.heading} , Author : {props.author}
      </h1>
      <article className='blog'>
        <p style={{backgroundColor:'yellow', border:'3px solid red'}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, rem.
        </p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias ex cum, ipsum exercitationem facilis a?
      </article>
    </div>
  )
}

function Mobile(){


  

  return (
    <div>
      <h4>100</h4>
      <button onClick={Battery} >Battery Down</button>
    </div>
  )



}

export default App;
