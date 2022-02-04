import React,{useState} from 'react';
import scroll from '../images/scroll-stick.svg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Login from "./Login";
import Home from "./Home";
//importing web3 javascript library to send requests to metamask 
//and use its helper methods
import Web3 from "web3";



function Pyramid() {
    //initializing temporary variables
    const minted = 0;
    const totalSupply = 0;
    //using state hooks to show modal/whitepaper if button clicked
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    //state hooks for network connection, default set to false
    const [isConnected, setIsConnected] = useState(false);
    //use state hooks to store current account, default is null
    const [currentAccount, setCurrentAccount] = useState(null);
    const [balance, setBalance] = useState(0);
  
    //need to pass in provider from Login component()
    const onLogin = async (provider) => {
        const web3 = new Web3(provider);
        //fetching accounts w help from web3 library helper methods
        const accounts = await web3.eth.getAccounts();

        //if zero accounts found
        if (accounts.length === 0) {
            console.log("Please connect to MetaMask!");
        //if connected and have the account,
        //set to current by using state hooks
        } else if (accounts[0] !== currentAccount) {
            //setting the account fetched to current
            setCurrentAccount(accounts[0]);
            //fetching account balance and converting to wei
            const accBalanceEth = web3.utils.fromWei(
                await web3.eth.getBalance(accounts[0]),
                "ether"
            );
            //storing balance as number set to 6 digits
            setBalance(Number(accBalanceEth).toFixed(6));
            //setting state to true
            setIsConnected(true);
        }
    };

    //if logged out, set connected to false
    const onLogout = () => {
        setIsConnected(false);
    };

    //setting state to show fullscreen responsive modal when 
    //whitepaper button clicked
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    
    return (
        
        <div className="section" >
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>WHITEPAPER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Once upon a time, in a faraway metaverse, a ship of eager adventurers sailed the oceans in search of new worlds. The ship's cabin boy shouted, “Land ho! Land ho!” and the ship moored at a large, uninhabited island. By a stroke of luck, this island had an overabundance of gold deposits, so the adventurers turned into Goldminers. They ferried gold bars to the mainland and grew rich enough to hire helpers. But their fortune didn't last long. Treasure-seeking pirates heard about an island that offered a wealth of riches, and they promptly hurried to the island to rob any passing ships!</p>
                <p>No one could stop the fearsome Pirates and the robberies that took place from day to day, from hour to hour. So the island's Governor signed a treaty with the Pirates: the Goldminers would pay the Pirates a fee with $GGOLD mined for safe sailing up to the mainland. But if a Goldminer returns to the mainland and no longer wants to pay the fee, the Pirates would rob that Goldminer blind if they caught up with them.</p>

                <p>Gold Hunt is a homage to the famous Wolf Game, which was hugely popular but had to deviate from the original plan and stop selling tokens. We coveted the best parts from the original game and brought the fight to a new reality, where barbaric Pirates and courageous Goldminers fight for gold on Treasure Island. Most of the mechanics will be well-known to those who've played before. So we invite you to delve into the revived and incredibly exciting adventure in order to play to the end, because we have fixed all the bugs and vulnerabilities of the original game that inspired us.</p>
                </Modal.Body>
            </Modal>
            <div className="bg">
                    <div className='intro'>
                        <h4>CLEOPATRA AND EGYPTIAN COBRAS COMPETING FOR <span>$CCLEO</span> IN THE METAVERSE PYRAMIDS. GET RICH IN AN HONEST WAY BY MINING <span>$CCLEO</span> OR TEAM UP WITH THE BARBARIC COBRAS TO GET THE TREASURES YOU TRULY DESERVE.</h4>
                        <div className='buttons'>
                            <Button className="btn" onClick={() => handleShow('xxl-down')}>WHITEPAPER</Button>
                        </div>
                    </div>
                    <div className='scrollsection'>
                        <div className='ss'>
                            <img className='scroll' src={scroll} alt="scroll"/>
                            <h3>MINTING: {minted}/{totalSupply} Minted</h3>

                            {!isConnected && <Login onLogin={onLogin} onLogout={onLogout} />}
                            {isConnected && (
                            <Home currentAccount={currentAccount} balance={balance} />)}

                            <h4>GAME STATUS</h4>
                            <h5>CLEOPATRA MINTED: 35,996 </h5>
                            <h5>CLEOPATRA STAKED: 16,582</h5>
                            <h5>COBRA MINTED: 4,000</h5>
                            <h5>COBRA STAKED: 1,811</h5>
                            <h5>CLEOPATRA STOLEN: 2,569</h5>
                            <h5>COBRA STOLEN: 300</h5>
                            <div id="spot2"></div>
                            <h5>$CCLEO ACCUMULATED: 2,400,000,000</h5>
                            <h5>$CCLEO TOTAL SUPPLY: 605,086,366</h5>
                            <img className='scroll' src={scroll} alt="scroll"/>
                        </div>
                        <div className='ss'>
                            <img className='scroll' src={scroll} alt="scroll"/>
                            <h3>YOUR WALLET FUNDS: $CCLEO</h3>
                            <h5>UNSTAKED</h5>
                            <div className='box'></div>
                            <h5>STAKED</h5>
                            <div className='box'></div>
                            <h5>SELECT TOKENS TO STAKE, CLAIM OR UNSTAKE</h5>
                            <img className='scroll' src={scroll} alt="scroll"/>
                        </div>
                    </div>
            </div>
        </div>
       
    )
    
}

export default Pyramid;