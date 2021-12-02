import React, {useCallback, useRef, useState} from 'react';
import ReactPlayer from "react-player";
import video from '../video/video.mp4'
import Controls from "./Controls";
import toggleFullscreen from 'toggle-fullscreen';
import format from '../utils/formatTime';

let count = 0;

const Player = () => {
    const wrapperRef = useRef(null);
    const playerRef = useRef(null);
    const controlsRef = useRef(null);

    const [playerState, setPlayerState] = useState({
        playing: false,
        muted: false,
        volume: 1,
        playbackRate: 1.0,
        played: 0,
        seeking: false,
        type: null,
    });
    const [rewindIcon, setRewindIcon] = useState(false);
    const [forwardIcon, setForwardIcon] = useState(false);

    const currentTime = playerRef.current ? playerRef.current.getCurrentTime() : '0:00';
    const duration = playerRef.current ? playerRef.current.getDuration() : '0:00';

    const elapsedTime = format(currentTime);
    const totalDuration = format(duration);

    const toggleFullScreen = useCallback(() => toggleFullscreen(wrapperRef.current), []);

    const handlePlayPause = () => {
        setPlayerState({...playerState, playing: !playerState.playing});
    }

    const handleRewindForward = (value) => {
        if (value > 0) {
            setRewindIcon(true);
            playerRef.current.seekTo(playerRef.current.getCurrentTime() + value);
            setTimeout(() => setRewindIcon(false), 300);
        }
        if (value < 0) {
            setForwardIcon(true);
            playerRef.current.seekTo(playerRef.current.getCurrentTime() + value);
            setTimeout(() => setForwardIcon(false), 300);
        }
    };

    const handleMute = () => {
        setPlayerState({...playerState, muted: !playerState.muted});
    };

    const handleVolumeChange = (e, newValue) => {
        setPlayerState({...playerState, volume: newValue, muted: newValue === 0 ? true : false});
    };

    const handlePlaybackRateChange = (rate) => {
        setPlayerState({...playerState, playbackRate: rate});
    };

    const handleProgress = (changeState) => {
        if (count > 3) {
            controlsRef.current.style.visibility = 'hidden';
            count = 0;
        }

        if (controlsRef.current.style.visibility === 'visible') {
            count += 1;
        }

        if (!playerState.seeking) {
            setPlayerState({...playerState, ...changeState});
        }
        ;
    };

    const handleSeekChange = (e, newValue) => {
        setPlayerState({...playerState, played: newValue});
    };

    const handleSeekMouseDown = (e, newValue) => {
        setPlayerState({...playerState, seeking: true});
    };

    const handleSeekMouseUp = (e, newValue) => {
        setPlayerState({...playerState, seeking: false});
        playerRef.current.seekTo(newValue);
    };

    const bufferStart = (state) => {
        setPlayerState({...playerState, type: state.type});
    };

    const bufferEnd = (state) => {
        setPlayerState({...playerState, type: state.type});
    };

    const handleMouseMove = () => {
        controlsRef.current.style.visibility = 'visible';
        count = 0;
    }

    return (
        <div className="player">
            <div className="player__container">
                <div className="player__wrapper" ref={wrapperRef} onMouseMove={handleMouseMove}>
                    <ReactPlayer
                        ref={playerRef}
                        width="100%"
                        height="100%"
                        url={video}
                        playing={playerState.playing}
                        muted={playerState.muted}
                        volume={playerState.volume}
                        playbackRate={playerState.playbackRate}
                        onProgress={handleProgress}
                        onBuffer={bufferStart}
                        onBufferEnd={bufferEnd}
                    />
                    <div ref={controlsRef}>
                        <Controls
                            playing={playerState.playing}
                            muted={playerState.muted}
                            volume={playerState.volume}
                            playbackRate={playerState.playbackRate}
                            played={playerState.played}
                            type={playerState.type}
                            elapsedTime={elapsedTime}
                            totalDuration={totalDuration}
                            rewindIcon={rewindIcon}
                            forwardIcon={forwardIcon}
                            onPlayPause={handlePlayPause}
                            onRewindForward={handleRewindForward}
                            onMuted={handleMute}
                            onVolumeChange={handleVolumeChange}
                            onToggleFullScreen={toggleFullScreen}
                            onPlaybackRateChange={handlePlaybackRateChange}
                            onSeek={handleSeekChange}
                            onSeekMouseDown={handleSeekMouseDown}
                            onSeekMouseUp={handleSeekMouseUp}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;