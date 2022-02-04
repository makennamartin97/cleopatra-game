import React from 'react';

//showing account number and balance once connected to metamask
const Home = (props) => {
  return (
    <div className='home'>
      <p>Account: {props.currentAccount}</p>
      <p>Balance: {props.balance} ETH</p>
    </div>
  );
};
export default Home;