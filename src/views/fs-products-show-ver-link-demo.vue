<template>
  <div class="demo">
    <FsProductsShowHorLink :nav-is-vertical="true" v-for="(pd, index) in prodList" :key="'FSProductsShowHorLink' + index" v-bind="pd" :ref="'FSProductsShowHorLink' + index">
      <!-- <template v-slot:pgt-header="sc">
        <el-row>
          <el-col :span="24"><div class="pgt-main-title">{{sc.pgtData.mainTitle}}+11111111</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"><div class="">{{sc.pgtData.subTitle}}+111111111</div></el-col>
        </el-row>
      </template> -->
      <template v-slot:divider>
        <br/><br/><br/>
      </template>
      <!--       <template v-slot:product-item-desc="sc">
        <span>{{sc.productItem.desc}}</span>
      </template> -->
    </FsProductsShowHorLink>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import FsProductsShowHorLink from '../components/fs-products-show-hor-link/fs-products-show-hor-link'
export default {
  name: 'FSProductsShowHorLinkTemplete', // 商品展示列表(分类横版) 链接跳转  模板
  components: {
    FsProductsShowHorLink,
  },
  data () {
    return {
      prodList:[{
        showInfo: {
          row: 2,
          col: 3
        },
        pgtData: {
          mainTitle: '优质农产品推荐',
          subTitle: '取得“三品一标”认证；具有一定影响力和生产规模',
          divider: {
            enabled: true
          }
        },
        navData: {
          mainTitle: '禽畜肉蛋',
          subTitle: '基地直供 精选特供',
          verNavBackground: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578291723453&di=9a68cb731dcb471d20ac9fd78ca7887e&imgtype=0&src=http%3A%2F%2Ffile01.16sucai.com%2Fd%2Ffile%2F2011%2F1122%2F20111122085754766.jpg'
        },
        dividerFlag: true,
        categoryData:{
          separator: '+',
          list:[{
            text: '肉类',
            href: '/'
          },
          {
            text: '蛋类',
            href: '/'
          },
          {
            text: '活禽',
            href: '/'
          },
          {
            text: '活畜',
            href: '/'
          },
          {
            text: '特种类',
            href: '/'
          }
        ]},
        categoryAll:{
          label: '查看全部>'
        },
        productData:{
          list:[{
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '【破损包赔】农家散养乌鸡蛋30枚 蛋生鲜绿壳土鸡蛋笨鸡蛋柴鸡蛋 各种鸡蛋 要超过40长度',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'http://pic1.16pic.com/00/38/26/16pic_3826044_b.jpg',
              title: '11111111111',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: 'aslalksaklasklasklas',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '【破损包赔】农家散养乌鸡蛋30枚 sdasd dadasqqeq',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '§№☆★○●◎◇◆□〓↓↑→←▲▲△■＃＆＠＼＾＿￣',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '【破损包赔】农家散养乌鸡蛋30枚 sdasd dadasqqeq',
              desc: '¥38.9 ~ 49.9'
            }
          ]
        }
      },{
        showInfo: {
          row: 2,
          col: 3
        },
        pgtData: {
          divider: {
            enabled: false
          }
        },
        navData: {
          mainTitle: '农副加工',
          subTitle: '资源稳定 量大优惠',
          verNavBackground: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578291723645&di=1751e4138b66bbeb3cb494e50abd04b7&imgtype=0&src=http%3A%2F%2Fdl.ppt123.net%2Fpptbj%2F201204%2F2012041517270852.jpg'
        },
        colorSchemes:{
          mainColor: '#E0A959',
          bgColor: '#fff'
        },
        categoryData:{
          list:[{
            text: '休闲速食品',
            href: '/'
          },
          {
            text: '营养滋补品',
            href: '/'
          },
          {
            text: '茶叶',
            href: '/'
          },
          {
            text: '干果',
            href: '/'
          },
          {
            text: '坚果',
            href: '/'
          },
          {
            text: '肉质品加工',
            href: '/'
          }
        ]}/*,
        categoryAll:{
          label: '查看全部>'
        }*/,
        productData:{
          list: [
          {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '§№☆★○●◎◇◆□〓↓↑→←▲▲△■＃＆＠＼＾＿￣',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '【破损包赔】农家散养乌鸡蛋30枚 sdasd dadasqqeq',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '§№☆★○●◎◇◆□〓↓↑→←▲▲△■＃＆＠＼＾＿￣',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '【破损包赔】农家散养乌鸡蛋30枚 sdasd dadasqqeq',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '§№☆★○●◎◇◆□〓↓↑→←▲▲△■＃＆＠＼＾＿￣',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '【破损包赔】农家散养乌鸡蛋30枚 sdasd dadasqqeq',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '§№☆★○●◎◇◆□〓↓↑→←▲▲△■＃＆＠＼＾＿￣',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '【破损包赔】农家散养乌鸡蛋30枚 sdasd dadasqqeq',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '§№☆★○●◎◇◆□〓↓↑→←▲▲△■＃＆＠＼＾＿￣',
              desc: '¥38.9 ~ 49.9'
            }
          ]
        }
      },{
        showInfo: {
          row: 2,
          col: 3
        },
        navData: {
          mainTitle: '粮米油面',
          subTitle: '品种丰富 以质论价',
          verNavBackground: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578400279624&di=fde540141ff0a4361193d97e48c182ef&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201406%2F16%2F200729s7ddyzryy5jhv2hv.jpg'
        },
        colorSchemes:{
          mainColor: '#00947E',
          bgColor: '#EFF1F0'
        },
        categoryData:{
          list:[{
            text: '食用油',
            href: '/'
          },
          {
            text: '豆类作物',
            href: '/'
          },
          {
            text: '米食面食',
            href: '/'
          },
          {
            text: '豆制品',
            href: '/'
          },
          {
            text: '谷物粉淀粉',
            href: '/'
          },
          {
            text: '香辛料',
            href: '/'
          }
        ]},
        categoryAll:{
          label: '查看全部>'
        },
        productData:{
          list: [
          {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '§№☆★○●◎◇◆□〓↓↑→←▲▲△■＃＆＠＼＾＿￣',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '【破损包赔】农家散养乌鸡蛋30枚 sdasd dadasqqeq',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '§№☆★○●◎◇◆□〓↓↑→←▲▲△■＃＆＠＼＾＿￣',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '【破损包赔】农家散养乌鸡蛋30枚 sdasd dadasqqeq',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '§№☆★○●◎◇◆□〓↓↑→←▲▲△■＃＆＠＼＾＿￣',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '【破损包赔】农家散养乌鸡蛋30枚 sdasd dadasqqeq',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '§№☆★○●◎◇◆□〓↓↑→←▲▲△■＃＆＠＼＾＿￣',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '【破损包赔】农家散养乌鸡蛋30枚 sdasd dadasqqeq',
              desc: '¥38.9 ~ 49.9'
            },
            {
              img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              title: '§№☆★○●◎◇◆□〓↓↑→←▲▲△■＃＆＠＼＾＿￣',
              desc: '¥38.9 ~ 49.9'
            }
          ]
        }
      }],
      pgtData2: {
        mainTitle: '222',
        subTitle: '22'
      }
    }
  },
  methods:{
  }
}

</script>
<style type="text/css" scoped>
.demo{
  width: 75%;
  margin: auto;
}
</style>