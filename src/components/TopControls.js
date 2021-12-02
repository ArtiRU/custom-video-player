import React from 'react';

const TopControls = ({volume}) => {
    return (
        <div className="top-controls">
            <div className="top-controls__flex-container">
                <div className="top-controls__title">Моцарт и Вивальди Реквием По Мечте 2012</div>
                <div className="top-controls__volume-procent">Громкость - {parseInt(volume * 100)}%</div>
            </div>
        </div>
    );
};

export default TopControls;