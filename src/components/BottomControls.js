import React, {memo} from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Replay10Icon from '@mui/icons-material/Replay10';
import Forward10Icon from '@mui/icons-material/Forward10';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PauseIcon from '@mui/icons-material/Pause';
import ProgressSlider from "./ProgressSlider";
import VolumeSlider from "./VolumeSlider";
import PlaybackRate from "./PlaybackRate";

const BottomControls = (props) => {
    const {
        onToggleFullScreen, onPlayPause, playing, onRewindForward, onMuted, muted, onVolumeChange, volume,
        onPlaybackRateChange, playbackRate, played, onSeekMouseUp, onSeekMouseDown, onSeek, elapsedTime, totalDuration
    } = props;

    return (
        <div className="bottom-controls">
            <ProgressSlider
                played={played}
                onSeekMouseUp={onSeekMouseUp}
                onSeekMouseDown={onSeekMouseDown}
                onSeek={onSeek}
                totalDuration={totalDuration}
                elapsedTime={elapsedTime}
            />
            <div className="controls-panel">
                <div className="controls-panel__flex-container">
                    <div className="controls-panel__left">
                        <button className="button" onClick={onPlayPause}>
                            {
                                playing ?
                                    <PauseIcon className="icon icon__play-pause"/>
                                    :
                                    <PlayArrowIcon className="icon icon__play-pause"/>
                            }
                        </button>

                        <button className="button" onClick={() => onRewindForward(-10)}>
                            <Replay10Icon className="icon icon__replay"/>
                        </button>

                        <button className="button" onClick={() => onRewindForward(10)}>
                            <Forward10Icon className="icon icon__forward"/>
                        </button>
                        <VolumeSlider
                            volume={volume}
                            muted={muted}
                            onMuted={onMuted}
                            onVolumeChange={onVolumeChange}
                        />
                    </div>
                    <div className="controls-panel__right">
                        <PlaybackRate onPlaybackRateChange={onPlaybackRateChange} playbackRate={playbackRate}/>
                        <button className="button" onClick={onToggleFullScreen}>
                            <FullscreenIcon className="icon icon__fullscreen"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(BottomControls);