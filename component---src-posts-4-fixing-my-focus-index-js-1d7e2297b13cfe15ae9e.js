(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{JY3x:function(e,t,a){"use strict";a.r(t);a("q1tI");var o=a("N0nX"),i=a("y+QM"),s=a("frks"),n=a("qKvR");t.default=function(){return Object(n.b)(o.a,{title:i.title,summary:i.summary,tags:i.tags,date:i.date},Object(n.b)("p",null,"It won’t come as much of a surprise to most of you that I wanted to design live data visualisations for League of Legends specifically. About six years ago, a friend introduced me to the game and I got hooked almost instantly, not only to the game but also to the vibrant community supporting it. The only challenge that I needed to overcome was finding a way to obtain the desired live data, otherwise I wouldn’t even be able to focus on this game for designing live data visualisations."),Object(n.b)("h2",null,"Feed me data please!"),Object(n.b)("p",null,"Luckily, I had some prior experience with obtaining data about League of Legends games. A while ago, I was experimenting with the ",Object(n.b)(s.a,{href:"https://developer.riotgames.com/api-methods/",target:"_blank",rel:"noopener"},"API")," that Riot Games (the firm behind League of Legends) offers. While this API offers a lot of useful statistics, it provides mostly statistics about the end-game state. Timeline data is far more limited and only available every minute which wouldn’t really feel like live data. There’s also a replay system but unfortunately the replay data is encoded and the developers aren’t eager to share information about decoding these files."),Object(n.b)("p",null,"While looking for ways to get my hands on live data, I stumbled on ",Object(n.b)(s.a,{href:"https://www.riotgames.com/explore/research-with-riot",target:"_blank",rel:"noopener"},"this")," page. I got my hopes back up and sent them a proposal explaining why I desperately required their help. My pitch started off an email conversation with various data specialists working at Riot Games. Sadly, the conclusion was that they would fall short of being able to share the ability to get custom logging from a fully-decoded replay. They pointed me to a ",Object(n.b)(s.a,{href:"https://nelsonslog.wordpress.com/2015/08/15/lol-live-match-stats/",target:"_blank",rel:"noopener"},"blog post")," though in which the writer explains how to access the data provided by the esports Riot Games team during live broadcasts."),Object(n.b)("p",null,"Upon further investigation, the sent data contained a lot more information than I was expecting! Not everything that is being sent over the websocket is actually used in the currently provided visualisations by the esports team that are displayed alongside the video stream. Suddenly, I got access to practically every statistic that I wanted, on an interval of a mere second. I could not have wished for anything more!"),Object(n.b)("h2",null,"Log me some"),Object(n.b)("p",null,"At the time of this discovery, the annual World Championship was well underway. The group stage had already passed but luckily there were still a lot more games to come."),Object(n.b)("p",null,"A simple JavaScript script did the trick to connect to the active websocket during the subsequent broadcasts and automatically save the received data in JSON format. These huge files of live game data will allow me to replay the game state from start to finish and test my upcoming live data visualisations. Stay tuned!"))}},"y+QM":function(e,t){e.exports={title:"Fixing my focus",tags:["thesis","data","visualisation","esports"],summary:"It won't come as much of a surprise to most of you that I wanted to design live data visualisations for League of Legends specifically. About six years ago, a friend introduced me to the game ...",date:new Date(Date.UTC(2017,10,28)),componentPath:"./src/posts/4-fixing-my-focus/index.js",link:"/posts/fixing-my-focus"}}}]);