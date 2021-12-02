import React, {useRef} from 'react';
import Popover from '@mui/material/Popover';

const PlaybackRate = ({playbackRate, onPlaybackRateChange}) => {
    const containerRef = useRef(null);
    const playbackRateValue = [0.5, 1, 1.5, 2];
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'popover' : undefined;


    return (
        <div ref={containerRef}>
            <button className="button" onClick={handlePopover}>
                <div className="controls-panel__playback-rate_white-color">
                    {playbackRate}X
                </div>
            </button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                container={containerRef.current}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div className="controls-panel__playback-rate">
                    {
                        playbackRateValue.map(rate => (
                            <button className="button" key={rate} onClick={() => onPlaybackRateChange(rate)}>
                                <div className="controls-panel__popover-value controls-panel__playback-rate_red-color">
                                    {rate + 'X'}
                                </div>
                            </button>
                        ))
                    }
                </div>
            </Popover>
        </div>

    );
};

export default PlaybackRate;