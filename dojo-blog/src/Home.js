import {useState} from 'react';

const Home = () => {
    const [status, setStatus] = useState('Sad');

    const handleClick = (e)=>{
        alert("hello!")
        console.log(e)
    }

    const handleSecondClick = (name, e)=>{
        alert("Hello, " + name)
        console.log(e)
    }

    const handleThirdClick = () => {
        setStatus("Happy!")
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={(e) => handleSecondClick("Sococo", e)}>Click me!</button>
            <h1>{ status }</h1>
            <button onClick={handleThirdClick}>Change State!</button>
        </div>
     );

}
 
export default Home;