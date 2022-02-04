import React from 'react';



function CodeSubmission() {

        //sample nfts on leaderboard
        //nft image source
        const nftIMG = 'https://opensea.io/bundles/6-crocodile-pill-tops-Mop?embed=true';
        //nft ID
        const nftID = '1';
        //nft attributes
        const nftAttr = '';
        //or as each asset
        const pill1 = {'nftID':'1', 'nftIMG':'https://byopills.mypinata.cloud/ipfs/QmPgCfwJ8h4CiudwwJe2tW4QTAH3nZ6QuYngs1LnUCZUAe', 'nftAttr': 'beige, green power up, orange cap'}
        const pill2 = {'nftID':'2', 'nftIMG':'https://byopills.mypinata.cloud/ipfs/QmcpDePBoNv5bDxTzStmxR4543XW8m8u9M7LFZhJxWE7Vz', 'nftAttr': 'purple, radioactive, alien flesh'}
    
    return (
        <div className="section">
            <div className="bg">
                <div id="codesubmission">
                    <div id="codeform">
                        <h1>$CCLEO CODES</h1>
                        <form>
                            <input type="text" id="NFTID" placeholder="NFT ID"/>
                            <input type="text" id="CodeID" placeholder="CODE"/>
                            <button type="submit" className="btn">ENTER</button>
                        </form>
                    </div>
                    <div className="lboard">
                        <h1>LEADERBOARD</h1>
                        <table striped hover variant="dark">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NFT Image</th>
                                    <th>Attributes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{pill1.nftID}</td>
                                    <td>
                                        <img className="img" src={pill1.nftIMG}/>
                                    </td>
                                    <td className="nftAttr">{pill1.nftAttr}</td>
                                </tr>
                                <tr>
                                    <td>{pill2.nftID}</td>
                                    <td>
                                        <img className="img" src={pill2.nftIMG}/>
                                    </td>
                                    <td className="nftAttr">{pill2.nftAttr}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default CodeSubmission;
