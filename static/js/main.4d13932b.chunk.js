(this["webpackJsonpcustom-video-player"]=this["webpackJsonpcustom-video-player"]||[]).push([[0],{119:function(e,n,t){},122:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),o=t(31),s=t.n(o),r=t(12),l=t(7),i=t(70),u=t.n(i),j=t.p+"static/media/video.bdc1cd12.mp4",d=t(2),b=function(e){var n=e.volume;return Object(d.jsx)("div",{className:"top-controls",children:Object(d.jsxs)("div",{className:"top-controls__flex-container",children:[Object(d.jsx)("div",{className:"top-controls__title",children:"\u041c\u043e\u0446\u0430\u0440\u0442 \u0438 \u0412\u0438\u0432\u0430\u043b\u044c\u0434\u0438 \u0420\u0435\u043a\u0432\u0438\u0435\u043c \u041f\u043e \u041c\u0435\u0447\u0442\u0435 2012"}),Object(d.jsxs)("div",{className:"top-controls__volume-procent",children:["\u0413\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u044c - ",parseInt(100*n),"%"]})]})})},m=t(47),p=t.n(m),O=t(49),v=t.n(O),f=t(51),_=t.n(f),x=t(50),y=t.n(x),h=t(161),g=t(151),k=function(e){var n=e.playing,t=e.elapsedTime,a=e.type,o=e.rewindIcon,s=e.forwardIcon,r=e.onPlayPause,i=Object(c.useState)(!1),u=Object(l.a)(i,2),j=u[0],b=u[1],m=Object(c.useState)(!1),O=Object(l.a)(m,2),f=O[0],x=O[1];return Object(c.useEffect)((function(){n&&"0:00"!==t?(b(!0),setTimeout((function(){return b(!1)}),300)):n||"0:00"===t||(x(!0),setTimeout((function(){return x(!1)}),300))}),[n]),Object(d.jsx)("div",{className:"middle-controls",onClick:r,children:Object(d.jsxs)("div",{className:"middle-controls__wrapper",children:[Object(d.jsx)(g.a,{in:j||f,className:"middle-controls__position-center icon icon__bg-size",children:n?Object(d.jsx)(p.a,{}):Object(d.jsx)(v.a,{})}),Object(d.jsx)("div",{className:"middle-controls__position-center",children:"waiting"===a&&Object(d.jsx)(h.a,{className:"icon__orange-color",size:50})}),Object(d.jsx)(g.a,{in:o,className:"middle-controls__position-center icon icon__bg-size",children:Object(d.jsx)(y.a,{})}),Object(d.jsx)(g.a,{in:s,className:"middle-controls__position-center icon icon__bg-size",children:Object(d.jsx)(_.a,{})})]})})},N=Object(c.memo)(k),S=t(75),w=t.n(S),C=t(160),R=t(158);function T(e){var n=e.children,t=e.value;return Object(d.jsx)(R.a,{enterTouchDelay:0,placement:"top",title:t,children:n})}var M=function(e){var n=e.played,t=e.onSeek,c=e.onSeekMouseDown,a=e.onSeekMouseUp,o=e.elapsedTime,s=e.totalDuration;return Object(d.jsxs)("div",{className:"progress-bar",children:[Object(d.jsx)("div",{className:"progress-bar__slider",children:Object(d.jsx)(C.a,{className:"progress-bar__slider_color",min:0,max:1,step:.001,value:n,onChange:t,onMouseDown:c,onChangeCommitted:a,valueLabelDisplay:"auto",components:{ValueLabel:function(e){return Object(d.jsx)(T,Object(r.a)(Object(r.a)({},e),{},{value:o}))}}})}),Object(d.jsx)("div",{className:"progress-bar__time-display",children:"".concat(o," / ").concat(s)})]})},P=Object(c.memo)(M),D=t(74),E=t.n(D),L=t(72),I=t.n(L),U=t(73),F=t.n(U),V=function(e,n){var t=Object(c.useState)(!1),a=Object(l.a)(t,2),o=a[0],s=a[1],r=function(){return s(!0)},i=function(){return s(!1)};return Object(c.useEffect)((function(){if(e.current&&n.current){var t=e.current,c=n.current;return t.addEventListener("mouseover",r),t.addEventListener("mouseenter",r),t.addEventListener("mouseleave",i),c.addEventListener("mouseover",r),c.addEventListener("mouseenter",r),c.addEventListener("mouseleave",i),function(){t.removeEventListener("mouseover",r),t.removeEventListener("mouseenter",r),t.removeEventListener("mouseleave",i),c.removeEventListener("mouseover",r),c.removeEventListener("mouseenter",r),c.removeEventListener("mouseleave",i)}}}),[e,n]),o},z=function(e){var n=e.onMuted,t=e.muted,a=e.onVolumeChange,o=e.volume,s=Object(c.useRef)(null),r=Object(c.useRef)(null),l=V(r,s);return Object(d.jsx)("div",{className:"volume-slider",children:Object(d.jsxs)("div",{className:"volume-slider__container",children:[Object(d.jsx)("button",{className:"button volume-slider__button",onClick:n,ref:r,style:{width:l?"calc(100% + 15px)":0},children:Object(d.jsx)("div",{className:"volume-slider__block",children:0===o||t?Object(d.jsx)(I.a,{className:"icon icon__volume"}):o<.5?Object(d.jsx)(F.a,{className:"icon icon__volume"}):Object(d.jsx)(E.a,{className:"icon icon__volume"})})}),Object(d.jsx)(g.a,{in:l,exit:!1,children:Object(d.jsx)("div",{className:"volume-slider__pos",ref:s,style:{transform:l?"translateX(-20px)":"translateX(-50px)"},children:Object(d.jsx)(C.a,{className:"volume-slider_color",min:0,max:1,step:.01,value:o,onChange:a,onChangeCommitted:a})})})]})})},B=Object(c.memo)(z),X=t(159),J=function(e){var n=e.playbackRate,t=e.onPlaybackRateChange,o=Object(c.useRef)(null),s=a.a.useState(null),r=Object(l.a)(s,2),i=r[0],u=r[1],j=Boolean(i),b=j?"popover":void 0;return Object(d.jsxs)("div",{ref:o,children:[Object(d.jsx)("button",{className:"button",onClick:function(e){u(e.currentTarget)},children:Object(d.jsxs)("div",{className:"controls-panel__playback-rate_white-color",children:[n,"X"]})}),Object(d.jsx)(X.a,{id:b,open:j,anchorEl:i,onClose:function(){u(null)},container:o.current,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"left"},children:Object(d.jsx)("div",{className:"controls-panel__playback-rate",children:[.5,1,1.5,2].map((function(e){return Object(d.jsx)("button",{className:"button",onClick:function(){return t(e)},children:Object(d.jsx)("div",{className:"controls-panel__popover-value controls-panel__playback-rate_red-color",children:e+"X"})},e)}))})})]})},H=function(e){var n=e.onToggleFullScreen,t=e.onPlayPause,c=e.playing,a=e.onRewindForward,o=e.onMuted,s=e.muted,r=e.onVolumeChange,l=e.volume,i=e.onPlaybackRateChange,u=e.playbackRate,j=e.played,b=e.onSeekMouseUp,m=e.onSeekMouseDown,O=e.onSeek,f=e.elapsedTime,x=e.totalDuration;return Object(d.jsxs)("div",{className:"bottom-controls",children:[Object(d.jsx)(P,{played:j,onSeekMouseUp:b,onSeekMouseDown:m,onSeek:O,totalDuration:x,elapsedTime:f}),Object(d.jsx)("div",{className:"controls-panel",children:Object(d.jsxs)("div",{className:"controls-panel__flex-container",children:[Object(d.jsxs)("div",{className:"controls-panel__left",children:[Object(d.jsx)("button",{className:"button",onClick:t,children:c?Object(d.jsx)(v.a,{className:"icon icon__play-pause"}):Object(d.jsx)(p.a,{className:"icon icon__play-pause"})}),Object(d.jsx)("button",{className:"button",onClick:function(){return a(-10)},children:Object(d.jsx)(_.a,{className:"icon icon__replay"})}),Object(d.jsx)("button",{className:"button",onClick:function(){return a(10)},children:Object(d.jsx)(y.a,{className:"icon icon__forward"})}),Object(d.jsx)(B,{volume:l,muted:s,onMuted:o,onVolumeChange:r})]}),Object(d.jsxs)("div",{className:"controls-panel__right",children:[Object(d.jsx)(J,{onPlaybackRateChange:i,playbackRate:u}),Object(d.jsx)("button",{className:"button",onClick:n,children:Object(d.jsx)(w.a,{className:"icon icon__fullscreen"})})]})]})})]})},q=Object(c.memo)(H),A=function(e){var n=e.onToggleFullScreen,t=e.onPlayPause,c=e.playing,a=e.onRewindForward,o=e.onMuted,s=e.muted,r=e.onVolumeChange,l=e.volume,i=e.onPlaybackRateChange,u=e.playbackRate,j=e.played,m=e.onSeek,p=e.onSeekMouseDown,O=e.onSeekMouseUp,v=e.totalDuration,f=e.elapsedTime,_=e.type,x=e.forwardIcon,y=e.rewindIcon;return Object(d.jsx)("div",{className:"controls",children:Object(d.jsxs)("div",{className:"controls__wrapper",children:[Object(d.jsx)(b,{volume:l}),Object(d.jsx)(N,{playing:c,elapsedTime:f,type:_,forwardIcon:x,rewindIcon:y,onPlayPause:t}),Object(d.jsx)(q,{played:j,volume:l,muted:s,playing:c,playbackRate:u,totalDuration:v,elapsedTime:f,onToggleFullScreen:n,onPlayPause:t,onRewindForward:a,onMuted:o,onVolumeChange:r,onPlaybackRateChange:i,onSeek:m,onSeekMouseDown:p,onSeekMouseUp:O})]})})},G=Object(c.memo)(A),K=t(76),Q=t.n(K),W=function(e){if(isNaN(e))return"0:00";var n=new Date(1e3*e),t=n.getUTCHours(),c=n.getUTCMinutes(),a=n.getUTCSeconds().toString().padStart(2,"0");return t?"".concat(t,":").concat(c.toString().padStart(2,"0"),":").concat(a):"".concat(c,":").concat(a)},Y=0,Z=function(){var e=Object(c.useRef)(null),n=Object(c.useRef)(null),t=Object(c.useRef)(null),a=Object(c.useState)({playing:!1,muted:!1,volume:1,playbackRate:1,played:0,seeking:!1,type:null}),o=Object(l.a)(a,2),s=o[0],i=o[1],b=Object(c.useState)(!1),m=Object(l.a)(b,2),p=m[0],O=m[1],v=Object(c.useState)(!1),f=Object(l.a)(v,2),_=f[0],x=f[1],y=n.current?n.current.getCurrentTime():"0:00",h=n.current?n.current.getDuration():"0:00",g=W(y),k=W(h),N=Object(c.useCallback)((function(){return Q()(e.current)}),[]);return Object(d.jsx)("div",{className:"player",children:Object(d.jsx)("div",{className:"player__container",children:Object(d.jsxs)("div",{className:"player__wrapper",ref:e,onMouseMove:function(){t.current.style.visibility="visible",Y=0},children:[Object(d.jsx)(u.a,{ref:n,width:"100%",height:"100%",url:j,playing:s.playing,muted:s.muted,volume:s.volume,playbackRate:s.playbackRate,onProgress:function(e){Y>3&&(t.current.style.visibility="hidden",Y=0),"visible"===t.current.style.visibility&&(Y+=1),s.seeking||i(Object(r.a)(Object(r.a)({},s),e))},onBuffer:function(e){i(Object(r.a)(Object(r.a)({},s),{},{type:e.type}))},onBufferEnd:function(e){i(Object(r.a)(Object(r.a)({},s),{},{type:e.type}))}}),Object(d.jsx)("div",{ref:t,children:Object(d.jsx)(G,{playing:s.playing,muted:s.muted,volume:s.volume,playbackRate:s.playbackRate,played:s.played,type:s.type,elapsedTime:g,totalDuration:k,rewindIcon:p,forwardIcon:_,onPlayPause:function(){i(Object(r.a)(Object(r.a)({},s),{},{playing:!s.playing}))},onRewindForward:function(e){e>0&&(O(!0),n.current.seekTo(n.current.getCurrentTime()+e),setTimeout((function(){return O(!1)}),300)),e<0&&(x(!0),n.current.seekTo(n.current.getCurrentTime()+e),setTimeout((function(){return x(!1)}),300))},onMuted:function(){i(Object(r.a)(Object(r.a)({},s),{},{muted:!s.muted}))},onVolumeChange:function(e,n){i(Object(r.a)(Object(r.a)({},s),{},{volume:n,muted:0===n}))},onToggleFullScreen:N,onPlaybackRateChange:function(e){i(Object(r.a)(Object(r.a)({},s),{},{playbackRate:e}))},onSeek:function(e,n){i(Object(r.a)(Object(r.a)({},s),{},{played:n}))},onSeekMouseDown:function(e,n){i(Object(r.a)(Object(r.a)({},s),{},{seeking:!0}))},onSeekMouseUp:function(e,t){i(Object(r.a)(Object(r.a)({},s),{},{seeking:!1})),n.current.seekTo(t)}})})]})})})},$=function(){return Object(d.jsx)(Z,{})};t(119),t(120);s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)($,{})}),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.4d13932b.chunk.js.map