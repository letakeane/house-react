(this.webpackJsonphauntedhouse=this.webpackJsonphauntedhouse||[]).push([[0],{26:function(e,t,o){},32:function(e,t,o){},33:function(e,t,o){"use strict";o.r(t);var n=o(1),s=o(0),i=o.n(s),r=o(15),a=o.n(r),h=(o(26),o(16)),u=o(17),c=o(20),d=o(19),l=[{id:"beginning",html:["You wake up out of a dead sleep.","Your phone screen is shockingly bright as you check the time: 3:12am.","Wait. Something woke you up. There's a faint memory from the edge of wakefulness. What was it? You think back..."],options:[{storyID:"noise",text:"It was a noise, somewhere in the house."},{storyID:"breeze",text:"It was a sensation of movement - like a breeze whispering across your face."}]},{id:"noise",html:["With the rememberance, your heart starts racing.","Calm down, you tell yourself. It was probably ... the pipes or something.","You lie there in the dark, part of you trying to go back to sleep, part of you tense and listening for another noise.","...","...","...","~ t h u d ~","The faint sound, coming from somewhere outside your room, sends a spike of adrenaline through your system.","Was that a footstep? Something falling? Maybe just a distant car door being shut."],options:[{storyID:"listen",text:"Fear grips you - you keep listening, frozen in bed."},{storyID:"get-up",text:"This is ridiculous. You get up and investigate."}]},{id:"breeze",html:["You carefully sit up, running a hand over your face, and look around. Did you leave a window open or something?","But looking around, you see your bedroom window is shut."],options:[{storyID:"lamp",text:"You're a bit shaken, and want some light. You reach over and turn on your lamp."},{storyID:"get-up",text:"You decide to get up and double check the rest of the house, just to be safe."}]},{id:"listen",html:["You lie there, listening intently for another sound. But in the quiet, your mind begins to make up sounds.","The silence continues. Nothing moves. No further thuds, no creaks, no whispers."],options:[{storyID:"fall-asleep",text:"Exhaustion overcomes you as the adrenaline wears off, and you fall back asleep."},{storyID:"call",text:"Despite the quiet and normalcy, your nerves won't stop fizzing. You text your best friend to see if they're awake, needing the comfort of another person's voice."}]},{id:"get-up",html:["You flip on lights as you move through the house.","Halls are empty. Rooms are quiet."],options:[{storyID:"beginning",text:"Start over"},{storyID:"beginning",text:"Start over"}]},{id:"lamp",html:["You reach out a hand toward your lamp, and notice the hairs on your arm are standing on end.","You go still for a moment, a cold squeeze of fear making your heart race.","You try to listen, but your own rushed breathing is making it hard to hear if there's anyone ... anything ... besides you in the darkness."],options:[{storyID:"light",text:"Hurry! Get this light on RIGHT NOW."},{storyID:"covers",text:"You're being silly. Get back under the covers and pull them over your head. Not because you're scared. You're just ... cold! That's all."}]},{id:"fall-asleep",html:["Oops! This is a story in progress and the author hasn't finished it yet! Looks like you've hit a dead end.","Check back another time!"],options:[{storyID:"beginning",text:"Start over"},{storyID:"beginning",text:"Start over"}]},{id:"call",html:["Oops! This is a story in progress and the author hasn't finished it yet! Looks like you've hit a dead end.","Check back another time!"],options:[{storyID:"beginning",text:"Start over"},{storyID:"beginning",text:"Start over"}]},{id:"light",html:["Oops! This is a story in progress and the author hasn't finished it yet! Looks like you've hit a dead end.","Check back another time!"],options:[{storyID:"beginning",text:"Start over"},{storyID:"beginning",text:"Start over"}]},{id:"covers",html:["Oops! This is a story in progress and the author hasn't finished it yet! Looks like you've hit a dead end.","Check back another time!"],options:[{storyID:"beginning",text:"Start over"},{storyID:"beginning",text:"Start over"}]}],y=o(7),g=function(){return Object(n.jsxs)("section",{children:[Object(n.jsx)("h1",{children:"T\xa0h\xa0e\xa0\xa0\xa0H\xa0o\xa0u\xa0s\xa0e"}),Object(n.jsx)("p",{children:Object(n.jsx)("i",{children:"by Leta Keane"})}),Object(n.jsx)(y.b,{to:"/beginning",className:"begin",children:"Begin"})]})},p=function(e){var t=e.story,o=t.options[0],s=t.options[1],i=t.html.map((function(e,t){return Object(n.jsx)("p",{children:e},"scenario".concat(t))}));return Object(n.jsxs)("section",{children:[Object(n.jsx)("div",{className:"scenario",children:i}),Object(n.jsxs)("div",{className:"options",children:[Object(n.jsxs)(y.b,{className:"option1",to:"/".concat(o.storyID),children:[Object(n.jsx)("span",{children:"A:"})," ",o.text]}),Object(n.jsxs)(y.b,{className:"option2",to:"/".concat(s.storyID),children:[Object(n.jsx)("span",{children:"B:"})," ",s.text]})]})]})},b=o(2),m=(o(32),function(e){Object(c.a)(o,e);var t=Object(d.a)(o);function o(){var e;return Object(h.a)(this,o),(e=t.call(this)).state={stories:l,error:""},e}return Object(u.a)(o,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("main",{children:[Object(n.jsx)(b.a,{exact:!0,path:"/",component:g}),Object(n.jsx)(b.a,{path:"/:id",render:function(t){var o=t.match.params.id,s=e.state.stories.find((function(e){return e.id===o}));return Object(n.jsx)(p,{story:s})}})]})}}]),o}(s.Component)),f=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,34)).then((function(t){var o=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;o(e),n(e),s(e),i(e),r(e)}))},j=Object(n.jsxs)(y.a,{children:[" ",Object(n.jsx)(m,{})," "]});a.a.render(Object(n.jsx)(i.a.StrictMode,{children:j}),document.getElementById("root")),f()}},[[33,1,2]]]);
//# sourceMappingURL=main.a6c55ec4.chunk.js.map