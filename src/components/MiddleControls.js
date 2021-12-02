import React, {memo, useEffect, useState} from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Replay10Icon from '@mui/icons-material/Replay10';
import Forward10Icon from '@mui/icons-material/Forward10';
import CircularProgress from '@mui/material/CircularProgress';
import Zoom from "@mui/material/Zoom";


const MiddleControls = ({playing, elapsedTime, type, rewindIcon, forwardIcon, onPlayPause}) => {
    const [pauseIcon, setPauseIcon] = useState(false);
    const [playIcon, setPlayIcon] = useState(false);

    useEffect(() => {
        if (playing && elapsedTime !== '0:00') {
            setPauseIcon(true);
            setTimeout(() => setPauseIcon(false), 300);
        } else if (!playing && elapsedTime !== '0:00') {
            setPlayIcon(true);
            setTimeout(() => setPlayIcon(false), 300);
        }
    }, [playing]);

    return (
        <div className="middle-controls" onClick={onPlayPause}>
            <div className="middle-controls__wrapper">
                <Zoom in={pauseIcon || playIcon} className="middle-controls__position-center icon icon__bg-size">
                    {
                        playing ?
                            <PlayArrowIcon/>
                            :
                            <PauseIcon/>
                    }
                </Zoom>
                <div className="middle-controls__position-center">
                    {type === 'waiting' && <CircularProgress className="icon__orange-color" size={50}/>}
                </div>
                <Zoom in={rewindIcon} className="middle-controls__position-center icon icon__bg-size">
                    {
                        <Forward10Icon/>
                    }
                </Zoom>
                <Zoom in={forwardIcon} className="middle-controls__position-center icon icon__bg-size">
                    {
                        <Replay10Icon/>
                    }
                </Zoom>
            </div>
        </div>
    );
};

export default memo(MiddleControls);