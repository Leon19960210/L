let url=$request.url,body=null;if(url.includes("app.bilibili.com/x/v2/splash/list")){let i=JSON.parse($response.body);if(i.data?.list){for(let e of i.data.list)e.duration=0,e.begin_time=2240150400,e.end_time=2240150400;body=JSON.stringify(i)}}else if(url.includes("app.bilibili.com/x/v2/feed/index?")){let i=JSON.parse($response.body);i.data?.items&&(i.data.items=i.data.items.filter((i=>!i.banner_item&&!i.ad_info&&-1===i.card_goto?.indexOf("ad")&&["small_cover_v2","large_cover_v1","large_cover_single_v9"].includes(i.card_type))),body=JSON.stringify(i))}else if(url.includes("app.bilibili.com/x/v2/feed/index/story?")){let i=JSON.parse($response.body);i.data?.items&&(i.data.items=i.data.items.filter((i=>!i.ad_info&&-1===i.card_goto?.indexOf("ad"))),body=JSON.stringify(i))}else if(url.includes("app.bilibili.com/x/resource/show/tab")){let i=JSON.parse($response.body);if(i.data?.tab?.length<4)i.data.tab.push({id:1411,tab_id:"bangumi",name:"动画",uri:"bilibili://following/home_activity_tab/6544",pos:4}),body=JSON.stringify(i);else{let e=!1;const t=[39,40,41,774,857,545,151,442,99,100,101,554,556],a=[177,178,179,181,102,104,106,486,488,489];i.data?.tab&&(i.data.tab=i.data.tab.filter((i=>t.includes(i.id))),e=!0),i.data?.top&&(i.data.top=[{id:176,icon:"http://i0.hdslb.com/bfs/archive/d43047538e72c9ed8fd8e4e34415fbe3a4f632cb.png",tab_id:"消息Top",name:"消息",uri:"bilibili://link/im_home",pos:1}],e=!0),i.data?.bottom&&(i.data.bottom=i.data.bottom.filter((i=>a.includes(i.id))),e=!0),e&&(body=JSON.stringify(i))}}else if(url.includes("app.bilibili.com/x/v2/account/mine")){let i=JSON.parse($response.body);if(i.data?.sections_v2){const e=[396,397,398,399,402,404,407,410,425,426,427,428,430,432,433,434,494,495,496,497,500,501];i.data.sections_v2.forEach((i=>{["创作中心","創作中心"].includes(i.title)&&(i.title=void 0,i.type=void 0),i.items=i.items.filter((i=>e.includes(i.id))),i.button={},i.be_up_title=void 0,i.tip_icon=void 0,i.tip_title=void 0})),i.data?.live_tip&&(i.data.live_tip={}),i.data?.answer&&(i.data.answer={}),i.data.vip_section=void 0,i.data.vip_section_v2=void 0,i.data.vip_type=2,i.data.vip.type=2,i.data.vip.status=1,i.data.vip.vip_pay_type=1,i.data.vip.due_date=466982416e4,body=JSON.stringify(i)}}else if(url.includes("app.bilibili.com/x/v2/account/myinfo?")){let i=JSON.parse($response.body);i.data?.vip&&(i.data.vip.type=2,i.data.vip.status=1,i.data.vip.vip_pay_type=1,i.data.vip.due_date=466982416e4,body=JSON.stringify(i))}else if(url.includes("app.bilibili.com/x/v2/search/square")){let i=JSON.parse($response.body);i.data=[{type:"history",title:"搜索历史"}],body=JSON.stringify(i)}else if(url.includes("api.live.bilibili.com/xlive/app-room/v1/index/getInfoByRoom")){let i=JSON.parse($response.body);i.data&&(i.data.activity_banner_info=void 0,i.data.shopping_info={is_show:0},body=JSON.stringify(i))}else if(url.includes("pgc/page/bangumi")||url.includes("pgc/page/cinema/tab?")){let i=JSON.parse($response.body);i.result?.modules&&(i.result.modules.forEach((i=>{i.style.startsWith("banner")?i.items=i.items.filter((i=>i.link.includes("play"))):i.style.startsWith("function")?i.items=i.items.filter((i=>i.blink.startsWith("bilibili"))):i.style.startsWith("tip")&&(i.items=[])})),body=JSON.stringify(i))}else console.log("匹配到其他url：\n"+url);body?$done({body:body}):$done({});