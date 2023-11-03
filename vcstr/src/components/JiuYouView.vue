<!--  -->
<template>
    <div class="">
        <div class="fx">
            <h1>九游手游排行榜</h1>
            <div class="right"></div>
        </div>
        <ul>
            <li v-for="(item, index) in dongzuo" :key="index">
                <img :src="item.src" alt="">
                <div class="nair">
                    <a href="#" class="naira">{{ item.name }}</a>
                    <b>
                        <i>{{ item.flow }}M</i>
                        <i>{{ item.role }}</i>
                        <i class="dir"></i>
                        <a href="#" class="dirc">{{ item.download }}</a>
                    </b>
                    <b class="info">
                        {{ item.title }}
                    </b>
                </div>
                <em>{{ item.id }}</em>
            </li>
        </ul>
        <div style="clear: both;"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dongzuo: [
                {
                    id: 1,
                    name: "海岛奇兵九游版最新版 v29.119 官网安卓版全民枪王腾讯版v1.6.2安卓网版",
                    src: "https://pic.59370.com/upload/2016-6/20166301111556938.png",
                    role: "策略塔防",
                    flow: "78.8",
                    download: "游戏下载",
                    title: "海岛奇兵九游版是一款战争题材的策略塔防手游。在游戏中，您将与邪恶的黑暗守卫展开一场史诗般的战争。你忍心看到美丽的岛屿被敌人入侵吗？现在就带领您的远征军登陆，抢占每一个滩头堡，解救被奴役的岛民，探索未知"
                }, {
                    id: 2,
                    name: "幻城手游九游手游v1.1.87安卓版",
                    src: "https://pic.59370.com/upload/2016-9/201699104182068.png",
                    role: "角色扮演",
                    flow: "337.9",
                    download: "游戏下载",
                    title: "幻城九游版是一款由中国人气玄幻小说改编而成的动作冒险类精品手游。游戏改编自郭敬明小说幻城，将经典剧情、人物设定与游戏玩法进行了完美融合，并在战斗细节上做了重大革新。玩家在游戏的同时，还能够与好友进行即"

                }, {
                    id: 3,
                    name: "阴阳师手游九游版apkv1.0.17安卓版",
                    src: "https://pic.59370.com/upload/2016-10/201610221019117670.jpg",
                    role: "回合网游",
                    flow: "775.2",
                    download: "游戏下载",
                    title: "阴阳师九游版想必大家都听说此游戏，此次小编带来的是九游版，唯美的画风，豪华的声优阵容，让玩家享受rpg手游，让玩家享受更多的游戏体验。如果你也喜欢这款回合制手游的话，赶紧来下载吧！游戏介绍阴阳师是网易游戏"
                }, {
                    id: 4,
                    name: "时空猎人九游高清版v5.1.293安卓版",
                    src: "https://pic.59370.com/upload/2016-10/20161022103443786.png",
                    role: "动作竞技",
                    flow: "260.1",
                    download: "游戏下载",
                    title: "阴阳师九游版想必大家都听说此游戏，此次小编带来的是九游版，唯美的画风，豪华的声优阵容，让玩家享受rpg手游，让玩家享受更多的游戏体验。如果你也喜欢这款回合制手游的话，赶紧来下载吧！游戏介绍阴阳师是网易游戏"
                }, {
                    id: 5,
                    name: "梦幻西游手游九游客户端v1.271.0安卓版",
                    src: "https://pic.59370.com/upload/2016-6/20166211645478441.png",
                    role: "回合网游",
                    flow: "1126.4",
                    download: "游戏下载",
                    title: "梦幻西游九游版是一款根据西游记而改编的回合制手机RPG游戏。《梦幻西游》手游由梦幻西游团队倾力打造，网易CEO丁磊亲自担纲监制，成就回合制MMORPG手游巅峰之作！Q版造型的可爱人物，浓郁古典风的精美场景，优化更新"
                }, {
                    id: 6,
                    name: "cok列王的纷争九游最新版v6.01.0安卓版",
                    src: "https://pic.59370.com/upload/2016-6/20166211024165646.png",
                    role: "策略塔防",
                    flow: "80.7",
                    download: "游戏下载",
                    title: "COK列王的纷争九游版是一款非常好玩的战争策略手游。在游戏中你可以和全球玩家一同参与到比赛中来，发展自己的城市，对敌人发起进攻进攻强队资源，成为在列王的纷争中成为最强的王者。喜欢的朋友们快来59370手游网下"
                }, {
                    id: 7,
                    name: "皇室战争九游版本v1.6.2安卓版",
                    src: "https://pic.59370.com/upload/2016-6/20166211035415894.png",
                    role: "卡牌游戏",
                    flow: "9.12",
                    download: "游戏下载",
                    title: "部落冲突皇室战争九游版本是一款集塔防、策略、MOBA等多种游戏元素与一体的手机游戏。以部落冲突为原型，结合大胆的创新思想，为玩家们带来一场与以往卡牌游戏不一样的战斗体验，喜欢卡牌游戏的朋友们千万不要错过哦"
                }, {
                    id: 8,
                    name: "暗黑黎明九游客户端v2.0.1官网安卓版",
                    src: "https://pic.59370.com/upload/2016-6/2016629184396182.png",
                    role: "动作竞技",
                    flow: "277.1",
                    download: "游戏下载",
                    title: "暗黑黎明九游版是一款由国民女神范冰冰代言的ARPG类魔幻手游。游戏有着四大经典职业双天赋，专属技能一键切换，获得超激爽的战斗体验;移植正统暗黑装备特色，呈现原汁原味的暗黑游戏。喜欢的玩家们来59370手游网下载"
                }, {
                    id: 9,
                    name: "暖暖环游世界九游版v4.7.0安卓版",
                    src: "https://pic.59370.com/upload/2016-6/20166301412233252.png",
                    role: "休闲养成",
                    flow: "193.5",
                    download: "游戏下载",
                    title: "暖暖环游世界九游版是一款集休闲和角色扮演游戏元素于一体的美少女换装手游。游戏中主角因为一份意外的生日礼物，一张神秘的藏宝图，暖暖的环球旅程由此开启！一路上惊喜不断，卖萌萝莉装、性感泳装、帅气男装、特色"
                }, {
                    id: 10,
                    name: "笑傲江湖九游版v1.0.22官网安卓版",
                    src: "https://pic.59370.com/upload/2016-6/20166301518563466.png",
                    role: "即时网游",
                    flow: "192.3",
                    download: "游戏下载",
                    title: "笑傲江湖九游客户端是一款以经典武侠为题材而推出的动作竞技类武侠手游。它凭借着其精美的画面，流畅爽快的战斗和所营造出的江湖氛围获得了玩家长期的高度关注。风格迥异的十大门派，错综复杂的原着剧情、恢弘大气的"
                }, {
                    id: 11,
                    name: "不良人九游版v1.3.0安卓版",
                    src: "https://pic.59370.com/upload/2016-7/2016711723536726.png",
                    role: "仙侠网游",
                    flow: "208.3",
                    download: "游戏下载",
                    title: "不良人九游版是一款根据知名动漫画江湖之不良人改编而成的武侠风格角色扮演手游。游戏将原著与游戏主线巧妙结合，战斗紧张刺激，主线剧情清晰流畅一气呵成！李星云、陆林轩、姬如雪、张子凡、黑白无常等人气角色悉数"
                }, {
                    id: 12,
                    name: "诛仙九游客户端v1.83.0安卓版",
                    src: "https://pic.59370.com/upload/2016-8/20168181720335734.jpg",
                    role: "仙侠网游",
                    flow: "390.4",
                    download: "游戏下载",
                    title: "诛仙九游版本不仅继承延续了端游特色玩法，还高度还原原著经典剧情。游戏画风极度唯美，人物角色也是极为有特色的，游戏采用代表未来趋势的Unity5引擎，首度实现手游领域的真3D全景飞翔，为玩家展现极尽唯美的仙侠画"
                }, {
                    id: 13,
                    name: "放开那三国九游版本v5.0.9安卓版",
                    src: "https://pic.59370.com/upload/2016-9/201699152239904.jpg",
                    role: "三国网游",
                    flow: "167.0",
                    download: "游戏下载",
                    title: "放开那三国九游版是一款由九游推出的Q版三国类精品卡牌手游。游戏不仅延续经典特色，更带来众多超越前作的非凡体验。经典画风武将、专属战斗动作、傲娇对话独白、演绎Q萌新境界。碎屏级怒气必杀特效，腾空、连击、爆"
                }
            ]
        }
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
    margin: 0;
    padding: 0;

}

.fx {
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #e2e2e2;
}

.height {
    height: 20px;
    width: 200px;
    margin-top: 5px;
    float: right;
}

li {
    height: 85px;
    width: 100%;
    overflow: hidden;
    padding: 20px 0px;
    border-bottom: 1px dashed #e2e2e2;
    float: left;
}

.fx h1 {
    font-size: 18px;
    float: left;
    color: #333;
    border: none;
    line-height: normal;
    position: static;
}

ul {
    list-style: none;
}

img {
    width: 85px;
    height: 85px;
    border-radius: 20%;
    float: left;
}

.nair {
    display: inline-block;
    width: 750px;
    height: 85px;
    float: left;
    margin-left: 15px;

}

a {
    color: #444;
    text-decoration: none;
}

.nair .naira {
    display: inline-block;
    width: 100%;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    color: #666;
    font-weight: bold;
    overflow: hidden;
    text-align: left
}

em {
    font-weight: bold;
    display: inline-block;
    width: 56px;
    background-color: #adb1b4;
    text-align: center;
    line-height: 85px;
    height: 85px;
    font-size: 25px;
    color: #fff;
    border-radius: 5px;
    float: right;
    text-decoration: none;
    font-style: normal;
}

b {
    display: inline-block;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
}

i {
    height: 22px;
    line-height: 22px;
    padding-right: 10px;
    color: #666;
    display: inline-block;
    float: left;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;

}

.dir {
    margin-left: 15px;
    width: 22px;
    background: url(https://www.59370.com/statics/images/case.jpg)no-repeat 0px -66px
}

.dirc {
    margin-left: 30px;
    display: inline-block;
    float: left;
    height: 22px;
    width: 75px;
    text-align: center;
    line-height: 22px;
    border-radius: 3px;
    color: #fff;
    background-color: #ff6600;
    font-size: 12px;
}

.info {
    font-size: 12px;
    color: #999;
    line-height: 20px;
    height: 40px;
    overflow: hidden;
    width: 100%;
}
</style>