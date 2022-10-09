// index.js
Page({

    /**
     * 
        https://express-5z2i-11221-5-1258381983.sh.run.tcloudbase.com
    
        wx.cloud.callContainer({
        "config": {
            "env": "prod-2gom7yr2404bc764"
        },
        "path": "/api/count",
        "header": {
            "X-WX-SERVICE": "express-5z2i"
        },
        "method": "POST",
        "data": {
            "action": "inc"
        }
        })

        https://github.com/WeixinCloud/wxcloudrun-express
    
    
            aqkd4YXZ
    
        */
    // 视频网站

    // 音乐网站
    // 搜索网站
    // 游戏网站
    data: {
        content: [{
            title: "视频网站分享",
            list: [{
                title: '百度',
                href: "https://www.baidu.com"
            },{
                title: '网站1',
                href: "xxxx"
            },{
                title: '网站1',
                href: "xxxx"
            },{
                title: '网站1',
                href: "xxxx"
            },{
                title: '网站1',
                href: "xxxx"
            }]
        }, {
            title: "音乐网站分享",
            list: [{
                title: '网站1',
                href: "xxxx"
            }]
        }, {
            title: "搜索网站分享",
            list: [{
                title: '网站1',
                href: "xxxx"
            }]
        }, {
            title: "游戏网站分享",
            list: [{
                title: '网站1',
                href: "xxxx"
            }]
        }, {
            title: "旅游网站分享",
            list: [{
                title: '网站1',
                href: "xxxx"
            }]
        }, {
            title: "旅游网站分享",
            list: [{
                title: '网站1',
                href: "xxxx"
            }]
        }, {
            title: "旅游网站分享",
            list: [{
                title: '网站1',
                href: "xxxx"
            }]
        }, {
            title: "旅游网站分享",
            list: [{
                title: '网站1',
                href: "xxxx"
            }]
        }, {
            title: "旅游网站分享",
            list: [{
                title: '网站1',
                href: "xxxx"
            }]
        }, {
            title: "旅游网站分享",
            list: [{
                title: '网站1',
                href: "xxxx"
            }]
        }, {
            title: "旅游网站分享",
            list: [{
                title: '网站1',
                href: "xxxx"
            }]
        }]
    },
    openUrl:function(item){
        var data = item.target.dataset.item.href;
        console.log(data)
        wx.navigateTo({
          url: `../out/out?url=${data}`,
        })
    }
})