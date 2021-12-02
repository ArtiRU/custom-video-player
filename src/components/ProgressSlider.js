import React, {memo} from 'react';
import Slider from '@mui/material/Slider';
import Tooltip from "@mui/material/Tooltip";

function ValueLabelComponent(props) {
    const {children, value} = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

const ProgressSlider = ({played, onSeek, onSeekMouseDown, onSeekMouseUp, elapsedTime, totalDuration}) => {

    return (
        <div className="progress-bar">
            <div className="progress-bar__slider">
                <Slider
                    className="progress-bar__slider_color"
                    min={0}
                    max={1}
                    step={0.001}
                    value={played}
                    onChange={onSeek}
                    onMouseDown={onSeekMouseDown}
                    onChangeCommitted={onSeekMouseUp}
                    valueLabelDisplay="auto"
                    components={{
                        ValueLabel: (props) => (
                            <ValueLabelComponent {...props} value={elapsedTime}/>
                        )
                    }}
                />
            </div>
            <div className="progress-bar__time-display">{`${elapsedTime} / ${totalDuration}`}</div>
        </div>
    );
};

export default memo(ProgressSlider);