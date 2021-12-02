import React, {memo} from 'react';
import TopControls from "./TopControls";
import MiddleControls from "./MiddleControls";
import BottomControls from "./BottomControls";

const Controls = (props) => {
    const {
        onToggleFullScreen, onPlayPause, playing, onRewindForward, onMuted, muted, onVolumeChange, volume,
        onPlaybackRateChange, playbackRate, played, onSeek, onSeekMouseDown, onSeekMouseUp, totalDuration, elapsedTime,
        type, forwardIcon, rewindIcon
    } = props;
    return (
        <div className="controls">
            <div className="controls__wrapper">
                <TopControls volume={volume}/>
                <MiddleControls
                    playing={playing}
                    elapsedTime={elapsedTime}
                    type={type}
                    forwardIcon={forwardIcon}
                    rewindIcon={rewindIcon}
                    onPlayPause={onPlayPause}
                />
                <BottomControls
                    played={played}
                    volume={volume}
                    muted={muted}
                    playing={playing}
                    playbackRate={playbackRate}
                    totalDuration={totalDuration}
                    elapsedTime={elapsedTime}
                    onToggleFullScreen={onToggleFullScreen}
                    onPlayPause={onPlayPause}
                    onRewindForward={onRewindForward}
                    onMuted={onMuted}
                    onVolumeChange={onVolumeChange}
                    onPlaybackRateChange={onPlaybackRateChange}
                    onSeek={onSeek}
                    onSeekMouseDown={onSeekMouseDown}
                    onSeekMouseUp={onSeekMouseUp}
                />
            </div>
        </div>
    );
};

export default memo(Controls);