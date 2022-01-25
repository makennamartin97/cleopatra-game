import React,{useState} from 'react';

const Home = (props) => {
  return (
    <div className='home'>
      <p>Account: {props.currentAccount}</p>
      <p>Balance: {props.balance} ETH</p>
    </div>
  );
};
export default Home;