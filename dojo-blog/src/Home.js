const Home = () => {

    const handleClick = (e)=>{
        alert("hello!")
        console.log(e)
    }

    const handleSecondClick = (name, e)=>{
        alert("Hello, " + name)
        console.log(e)
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={(e) => handleSecondClick("Sococo", e)}>Click me!</button>
        </div>
     );

}
 
export default Home;