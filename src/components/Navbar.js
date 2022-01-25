import React,{useState} from 'react';
import close from "../images/x-mark-16.png";
import open from "../images/whiteopen.png";
import logo from '../images/finallogo2.png'
import Login from "./Login";
import Home from "./Home";
import Web3 from "web3";



function Navbar(props){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [isConnected, setIsConnected] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);
    const [balance, setBalance] = useState(0);

    const onLogin = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      console.log("Please connect to MetaMask!");
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      const accBalanceEth = web3.utils.fromWei(
        await web3.eth.getBalance(accounts[0]),
        "ether"
      );

      setBalance(Number(accBalanceEth).toFixed(6));
      setIsConnected(true);
    }
  };

  const onLogout = () => {
    setIsConnected(false);
  };
    
    
    return (
        <nav className="nav">
            <div className="logo-nav">

            <div className="logo-container">
                
            Cleopatra Game
            <a href="/"><img src={logo} className="navlogo" alt="logo"/></a>
            </div>

            

                
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/#about">Pyramid</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/#skills" >Mint Ships</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/#skills" >Sail Ships</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/#skills" >Map</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/#skills" >New Land</a>
                </li>
                <li className="option">
                {!isConnected && <Login onLogin={onLogin} onLogout={onLogout} />}
        {isConnected && (
          <Home currentAccount={currentAccount} balance={balance} />
        )}
        </li>
        </div>
            <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <img src={close} className="menu-icon2" />
        ) : (
          <img src={open} className="menu-icon1" />
        )}
      </div>
        </nav>

    )


    
}

export default Navbar;