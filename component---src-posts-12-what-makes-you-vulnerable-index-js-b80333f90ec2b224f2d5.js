(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0ZEA":function(e,t,a){e.exports=a.p+"static/health-d376aa7f85fb83be664a4adc22b8bba8.svg"},"4Nup":function(e,t,a){"use strict";a.r(t);a("q1tI");var i=a("N0nX"),s=a("ymH4"),n=a("50jQ"),o=a.n(n),l=a("mbmo"),r=a.n(l),h=a("uAdr"),c=a.n(h),u=a("RkZ3"),b=a.n(u),d=a("0ZEA"),f=a.n(d),m=a("lRMi"),p=a.n(m),y=a("yaGA"),v=a.n(y),g=a("b06G"),w=a.n(g),j=a("IA4J"),O=a("qKvR");t.default=function(){return Object(O.b)(i.a,{title:s.title,summary:s.summary,tags:s.tags,date:s.date},Object(O.b)("p",null,"With the basics of the implementation done, it’s time to implement some of the more advanced functionality. The former state of the application contained visualisations about the gold and damage. These statistics don’t need processing, they are directly available in the data updates themselves. The information in the proposed vulnerability and jungle pathing visualisations however, needs to be determined in some way based on the data updates as they are not directly given. In this blog post, I’ll go over the used vulnerability formula while the next one will go into detail about how the jungle pathing is tracked."),Object(O.b)("h2",null,"Vulnerability"),Object(O.b)("p",null,"Devising a formula that captures the vulnerability of a player truthfully based on the available data is probably challenging. While designing the prototype I already figured out what factors should be taken into account: availability of the summoner spells, health, positioning, defensive statistics and mana. Not all of these factors are just as significant though so I weighted them in the following manner:"),Object(O.b)(j.a,{src:o.a}),Object(O.b)("p",null,"The availability of summoner spells was considered the most important with the reasoning that one can still use flash for instance to escape a situation with low health, mana or inferior positioning. Health and positioning were given equal weights, as were defensive statistics and mana. Let’s see how these vulnerability scores for the different factors are measured."),Object(O.b)("p",null,"Every (possibly defensive) summoner spell is attributed a score, the higher the score, the more value the summoner spell has for an escape."),Object(O.b)(j.a,{src:r.a}),Object(O.b)("p",null,"These scores are summed up for every summoner spell that is still available."),Object(O.b)(j.a,{src:c.a}),Object(O.b)("p",null,"From there on, the vulnerability score for the summoner spells is determined with a negative linear dependency. Only a player with both flash and cleanse available can attain a vulnerability score of 0 for this factor. Failing to pick any summoner spells with a defensive use automatically results in a vulnerability score of 1."),Object(O.b)(j.a,{src:b.a}),Object(O.b)("p",null,"Health has to be dealt with in a different way since it scales throughout the game and with the acquisition of health granting items. It also has a relative aspect, players tend to focus the player with the least health on the enemy team. Therefore the current health scaled to the highest maximum health over all the players, regulates this factor’s vulnerability."),Object(O.b)(j.a,{src:f.a}),Object(O.b)("p",null,"Positioning is by far the hardest one to construct a formula for. The simplest way to take positioning into account is to average the distance to all enemy players and ally players and let these averages tip the balance the right way. The averages are scaled to the maximum possible distance players can be removed from each other on the map."),Object(O.b)(j.a,{src:p.a}),Object(O.b)("p",null,"Defensive statistics are similar to the health case above. There’s also a relative scaling to all the players but for the movement speed, only enemy players are taken into account. Armor and magic resist are given the largest weights while crowd control reduction and movement speed influence the factor’s vulnerability in a lesser way."),Object(O.b)(j.a,{src:v.a}),Object(O.b)("p",null,"Only a severe lack of mana that prevents one from using a (possibly defensive) ability can cause the vulnerability of a player to go up. To that end, the vulnerability for this factor is determined again with a negative linear dependency but only if a player’s mana drops below 200. This score is fixed to 0 for champions that don’t need mana for their abilities."),Object(O.b)(j.a,{src:w.a}),Object(O.b)("p",null,"A likely problem with this way of working is that the factors can’t influence each other. The overall vulnerability formula is linear in the vulnerabilities for the different factors. A player with extraordinary defensive statistics and full health isn’t as vulnerable to their positioning as an ADC is for instance. A nonlinear equation could take these kind of situations into account. The evaluations will have to point out if the more simple, linear approach is sufficient to estimate the vulnerabilities."))}},"50jQ":function(e,t,a){e.exports=a.p+"static/vulnerability-f1cd65ff4380338e00572e96599dc33d.svg"},RkZ3:function(e,t,a){e.exports=a.p+"static/summoners3-1e13f4882c8b1bf70072d6d8317b93ea.svg"},b06G:function(e,t,a){e.exports=a.p+"static/mana-33dc71577a708f29689592c0e28dd82b.svg"},lRMi:function(e,t,a){e.exports=a.p+"static/position-88169c6ffb48ab38ca6df819cff8186c.svg"},mbmo:function(e,t,a){e.exports=a.p+"static/summoners1-1c707a65938bba504b3a4ff37addfece.svg"},uAdr:function(e,t,a){e.exports=a.p+"static/summoners2-1a8a3919e7d7c3480d33de113f5a6f0c.svg"},yaGA:function(e,t,a){e.exports=a.p+"static/stats-8506af99bf7a8fb76d52f33d627de7df.svg"},ymH4:function(e,t){e.exports={title:"What makes you vulnerable?",page:"what-makes-you-vulnerable",tags:["thesis","data","visualisation","esports"],summary:"With the basics of the implementation done, it's time to implement some of the more advanced functionality. The former state of the application contained ...",date:new Date(Date.UTC(2018,3,10)),componentPath:"./src/posts/12-what-makes-you-vulnerable/index.js",link:"/posts/what-makes-you-vulnerable"}}}]);