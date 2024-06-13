import React from 'react';
import './proposal.css';

const Proposal = () => {
    const handleYes = () => {
        alert("Yay! I'm so happy! I love you so much");
    };

    // const handleNo = () => {
    //     alert("Oh no! Maybe next time.");
    // };

    return (
        <div className="proposal-container">
            <h1>To my baby Oluwaseun Deborah Jegede</h1>
            <p>
                Every moment spent imagining and thinking about you feels like a beautiful dream come true. 
                Your smile brightens my day and your voice makes my heart race. 
                I can't imagine my life without you, and I want to cherish every moment together.
            </p>
            <p>
                Would you do me the honor of being my girlfriend and make me the happiest person in the world?
            </p>
            <button className="yes-button" onClick={handleYes}>Yes</button>
            {/* <button className="no-button" onClick={handleNo}>No</button> */}
        </div>
    );
};

export default Proposal;
