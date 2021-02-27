hostname=*.zhihu.com,api.zhihu.com, link.zhihu.com,i.weread.qq.com,vira.llsapp.com,p.du.163.com,*.kuwo.cn,mp.weixin.qq.com，api.weibo.cn, mapi.weibo.com, *.uve.weibo.com,api.bilibili.com, app.bilibili.com,*.amemv.com,api1.dobenge.cn,mp.bybutter.com,api.termius.com,photos.adobe.io,dict.eudic.net,api.jiaonizuocai.com,www.xmind.cn,mob2015.kekenet.com,greasyfork.org, openuserjs.org,api.m.jd.com,trade-acs.m.taobao.com


; 英语流利说
^https?://vira.llsapp.com/api/v2/readings/limitation url response-body .* response-body .
;^https?://vira.llsapp.com/api/v2/readings/limitation url response-body .* response-body {}

; 知乎跳转 PC 版
^https://(www\.)?zhihu.com/ url request-header \r\nUser-Agent:.+\r\n request-header \r\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko)  Chrome/71.0.3578.98 Safari/537.36\r\n

; 微信读书 
^https?://i.weread.qq.com/pay url script-response-body http://api.170312.xyz/addid?url=https://raw.githubusercontent.com/yxiaocai/quanx/master/js/iweread.js&id=0B9CBB085C99&id=0B9CBB08

; 网易蜗牛读书
^https?://p\.du\.163\.com/readtime/info.json url reject
  
^https://p\.du\.163\.com/gain/readtime/info.json url response-body "tradeEndTime":\d{10} response-body "tradeEndTime":1679685290


; 去微信公众号底部广告(Choler)

^https?://mp.weixin.qq.com/mp/getappmsgad url script-response-body http://api.170312.xyz/addid?url=https://Choler.github.io/Surge/Script/WeChat.js&id=0B9CBB085C99&id=0B9CBB08

# 酷我音乐SVIP (By yxiaocai)
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Kuwo.js
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?uid\=\d+ url 302 http://musicpay.kuwo.cn/music.pay?uid=1

# 网易蜗牛读书VIP (By yxiaocai and JO2EY)
^https?://p\.du\.163\.com/readtime/info.json url reject
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wnyd.js

# 知乎去广告 (By onewayticket255)
https://api.zhihu.com/(ad|drama|fringe|commercial|market/popover|search/(top|preset|tab)|.*featured-comment-ad) url reject-200
https://api.zhihu.com/people/ url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20people.js
https://api.zhihu.com/moments/recommend url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20feed.js
https://api.zhihu.com/topstory/recommend url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20recommend.js
https://api.zhihu.com/v4/questions url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20answer.js
https?://link.zhihu.com/?target= url script-request-header https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20link.js

# 去微博应用内广告 (By yichahucha)
^https?://(sdk|wb)app.uve.weibo.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list|photo/info) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js

# 哔哩哔哩番剧开启1080P+
^https:\/\/ap(p|i)\.bilibili\.com\/((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/bilifj.js

# 抖音去广告去水印 (By Choler)
^https?:\/\/.+?\.amemv\.com\/aweme\/v\d\/(feed|aweme\/post|follow\/feed|nearby\/feed|search\/item|general\/search\/single|hot\/search\/video\/list)\/ url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Aweme.js
^https?:\/\/.+?\.amemv\.com\/aweme\/v\d\/(feed|aweme\/post|follow\/feed|nearby\/feed|search\/item|general\/search\/single|hot\/search\/video\/list)\/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Aweme.js

# 水印精灵 vip (By Alex0510)
^https:\/\/api1\.dobenge\.cn\/api\/user\/getuserinfo url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/syjl.js

# NiChi 图片插画 解锁素材
^https?:\/\/mp\.bybutter\.com\/mood\/(official-templates|privileges) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/NiChi.js

# PicsArt美易 视频剪辑pro
^https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/PicsArt.js

#Termius 
https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/Terminus.js

#lightroom
^https:\/\/photos\.adobe\.io\/v2\/accounts* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/Lightroom.js

#每日英语阅读/每日外刊 解锁课程  (By chamberlen)
^https:\/\/dict\.eudic\.net\/jingting\/GetThisChapterTaskStatus? url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/mryy.js

#酷我换肤(已经有的皮肤需要先从本地皮肤删除再换 By@ s y)
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/theme)  url script-response-body   https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/themekuwo.js

# YouTube去广告
^https?:\/\/.+\.googlevideo\.com\/.+&oad url reject-img
^https?:\/\/.+\.googlevideo\.com\/.+ctier url reject-img
^https?:\/\/youtubei\.googleapis\.com\/youtubei\/.+ad_ url reject-img
^https?:\/\/youtubei\.googleapis\.com\/youtubei\/.+log_ url reject-img
^https?:\/\/.+\.youtube\.com\/get_midroll_ url reject-img
^https?:\/\/premiumyva\.appspot\.com\/vmclickstoadvertisersite url reject-img
^https?:\/\/.+\.youtube\.com\/api\/stats\/ads url reject-img
^https?:\/\/.+\.youtube\.com\/api\/stats\/.+adformat url reject-img
^https?:\/\/.+\.youtube\.com\/pagead\/ url reject-img
^https?:\/\/.+\.youtube\.com\/ptracking url reject-img

#菜谱大全解锁vip (By @photonmang)
https?:\/\/api\.jiaonizuocai\.com url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/cpdq.js

# XMind思维导图 (by @JigsaWo)
https:\/\/www\.xmind\.cn\/\_res\/devices url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/XMind.js

# 可可英语会员
^https:\/\/mob2015\.kekenet\.com\/keke\/mobile\/index\.php url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/kkyy.js

# 油猴转换器 (by Peng-YM)
https:\/\/greasyfork\.org\/scripts\/.*\.user\.js url script-response-body https://raw.githubusercontent.com/Peng-YM/QuanX/master/Rewrites/GreasyFork/greasy-fork.js

#京东历史比价 (by yichahucha)
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js

#淘宝历史比价 (by yichahucha)
^http://.+/amdc/mobileDispatch url script-request-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js
^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js
