import React, {memo, useRef} from 'react';
import Slider from '@mui/material/Slider';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import useHover from "../hooks/useHover";
import Zoom from "@mui/material/Zoom";

const VolumeSlider = ({onMuted, muted, onVolumeChange, volume}) => {
    const volumeSliderRef = useRef(null);
    const volumeSliderBtnRef = useRef(null);
    const isHovering = useHover(volumeSliderBtnRef, volumeSliderRef);

    return (
        <div className="volume-slider">
            <div className="volume-slider__container">
                <button
                    className="button volume-slider__button"
                    onClick={onMuted}
                    ref={volumeSliderBtnRef}
                    style={{width: isHovering ? 'calc(100% + 15px)' : 0}}
                >
                    <div className="volume-slider__block">
                        {
                            volume === 0 || muted ?
                                <VolumeOffIcon className="icon icon__volume"/>
                                :
                                volume < 0.5 ?
                                    <VolumeDownIcon className="icon icon__volume"/>
                                    :
                                    <VolumeUpIcon className="icon icon__volume"/>
                        }
                    </div>
                </button>
                <Zoom in={isHovering} exit={false}>
                    <div
                        className="volume-slider__pos"
                        ref={volumeSliderRef}
                        style={{transform: isHovering ? 'translateX(-20px)' : 'translateX(-50px)'}}
                    >
                        <Slider
                            className="volume-slider_color"
                            min={0}
                            max={1}
                            step={0.01}
                            value={volume}
                            onChange={onVolumeChange}
                            onChangeCommitted={onVolumeChange}
                        />
                    </div>
                </Zoom>
            </div>
        </div>
    )
};

export default memo(VolumeSlider);