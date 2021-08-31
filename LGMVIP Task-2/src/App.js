import React from 'react';
import './App.css';
import Cards from './Cards';

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const userClick = () => {
    setisButtonClick(true);
    // Fetch data from https://reqres.in/api/users?page=1
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((res) => {
        //  console.log(isDateLoaded);
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className='wholecontainer'>
        <nav className='navbar navbar-expand-lg navbar-light glassnav'>
          <div className='container-fluid '>
            <span className='brandname'>Learn More</span>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul class='navbar-nav ms-auto  me-5'>
                <button className='glassButton' onClick={userClick}>
                  Get Users
                </button>
              </ul>
            </div>
          </div>
        </nav>

        <div className='container'>
          <div className='row justify-content-center '>
            {isButtonClick ? (
              isDateLoaded ? (
                <Cards userData={userData} />
              ) : (
                <div className='col-4 mt-5'>
                  <span className='loader'></span>
                </div>
              )
            ) : (
              <div className='col-6  col-sm-6 instruction'>
                Click the button to get users data
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
