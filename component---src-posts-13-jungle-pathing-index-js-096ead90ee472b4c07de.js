(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Ozdl:function(e,t,a){e.exports=a.p+"static/pathing-61777fbe2bb3f936e2c96d30618ee874.gif"},QSHy:function(e,t,a){"use strict";a.r(t);a("q1tI");var n=a("N0nX"),s=a("gD1f"),i=a("R1hJ"),o=a.n(i),r=a("T24f"),l=a.n(r),h=a("Ozdl"),c=a.n(h),u=a("IA4J"),p=a("qKvR");t.default=function(){return Object(p.b)(n.a,{title:s.title,summary:s.summary,tags:s.tags,date:s.date},Object(p.b)("p",null,"Determining the pathing of junglers when you only have an update on their positions every second, isn’t that straightforward. This blog post delves deeper in the used method that delivers correct results most of the time."),Object(p.b)("p",null,"Every jungle camp has its own circular area on the map. Lanes do too but their shapes are more complex. In the top and bottom lane, an extra circular area encapsulates the tribush. The respawn area in each base is demarcated as well. All of these areas are shown in the figure below."),Object(p.b)(u.a,{src:o.a}),Object(p.b)("p",null,"The whole algorithm is based on how much continuous time junglers spend in these areas. A favorable time period to determine whether or not the jungler is clearing a camp is 1.5 seconds."),Object(p.b)("p",null,"The scuttle crabs move across a considerable part of the river. Defining such a large area in the river could cause a lot of false positives for clearing a scuttle crab since a jungler could just be moving towards a lane, the enemy jungle, an epic monster or simply wants to establish vision. For this reason, scuttle crabs are not included in the jungle pathing."),Object(p.b)("p",null,"Lane areas take up a lot of space on the map. Junglers happen to traverse these areas all the time without actually ganking a lane. Therefore, the algorithm needs to take the distance between the jungler and the enemy laner(s) into account as well. If a jungler stays in a lane area and within a distance of 1000 map units of an enemy laner, the algorithm indicates the movement as a valid gank attempt. The figure below shows every champion surrounded by a circle with a radius of 1000 map units. The algorithm also keeps track of kills/assists/deaths during ganks."),Object(p.b)(u.a,{src:l.a}),Object(p.b)("p",null,"By observing the spawn area, the algorithm can see when players recalled to their base. After a recall, the jungle pathing is cleared as to not clutter the map. The figure below shows the visualised output of the algorithm in action sped up."),Object(p.b)(u.a,{src:c.a}),Object(p.b)("p",null,"Limitations of this method are obvious. If a jungler somehow manages to lure the monsters out of their area without entering the area for 1.5 seconds, it doesn’t get registered. Likewise with smiting away a camp from the enemy jungler from over a wall for instance. The other way around, a jungler staying in a camp area for over 1.5 seconds will get registered as clearing the camp, even if it isn’t up. Luckily, this doesn’t happen that often in pro play because junglers don’t like to waste their time."),Object(p.b)("p",null,"The clarity of showing the pathings on the map can still be improved tremendously. The algorithm could calculate how to draw the arrows on the map in such a way that the amount of overlapping lines is minimal."))}},R1hJ:function(e,t,a){e.exports=a.p+"static/pathing-positions-e695bff0e8728e81e281a61890b40d83.png"},T24f:function(e,t,a){e.exports=a.p+"static/pathing-positions2-45537428e40695baefc6397fdc7ff716.png"},gD1f:function(e,t){e.exports={title:"Jungle pathing",tags:["thesis","data","visualisation","esports"],summary:"Determining the pathing of junglers when you only have an update on their positions every second, isn't that straightforward ...",date:new Date(Date.UTC(2018,3,27)),componentPath:"./src/posts/13-jungle-pathing/index.js",link:"/posts/jungle-pathing"}}}]);