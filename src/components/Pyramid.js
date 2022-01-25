import React,{useState} from 'react';
import scroll from '../images/scroll-stick.svg'
import MetamaskAlert from './MetamaskAlert';
import Login from "./Login";
import Web3 from "web3";
import Home from "./Home";



function Pyramid() {
    


    return (
        
            
        <div className="section1" >
            <div className="bg">
                <div className='main'>
                
                <div className='intro'>
                    <h4>CLEOPATRA AND EGYPTIAN COBRAS COMPETING FOR $CLEO IN THE METAVERSE PYRAMIDS. GET RICH IN AN HONEST WAY BY MINING $CLEO OR TEAM UP WITH THE BARBARIC COBRAS TO GET THE TREASURES YOU TRULY DESERVE.</h4>
                    <div className='buttons'>
                        <button className="btn">WHITEPAPER</button>
                    </div>
                    

                </div>
                <div className='scrollsection'>
                    <img className='scroll' src={scroll} alt="scroll"/>
                    <h2>Minting</h2>
                    

                    
                    
                    <h5>GAME STATUS</h5>
                    <h5>GOLDMINER MINTED: 35,996 </h5>
                    <h5>GOLDMINER STAKED:
                    16,582</h5>
                    <h5>PIRATE MINTED:
                    4,000</h5>
                    <h5>PIRATE STAKED:
                    1,811</h5>
                    <h5>GOLDMINER STOLEN:
                    2,569</h5>
                    <h5>PIRATE STOLEN:
                    300</h5>
                    <h5>$GGOLD ACCUMULATED:
                    2,400,000,000</h5>
                    <h5>$GGOLD TOTAL SUPPLY:
                    605,086,366</h5>
                    </div>
       
                </div>
     

            </div>


   
 
        </div>
       
    )
    
}

export default Pyramid;