<template>
  <div class="demo">
    <FsProductsShowHorLink v-for="(pd, index) in prodList" :key="'FSProductsShowHorLink' + index" v-bind="pd" :ref="'FSProductsShowHorLink' + index">
      <!-- <template v-slot:pgt-header="sc">
        <el-row>
          <el-col :span="24"><div class="pgt-main-title">{{sc.pgtData.mainTitle}}+11111111</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"><div class="">{{sc.pgtData.subTitle}}+111111111</div></el-col>
        </el-row>
      </template> -->
      <template v-slot:divider>
        <hr style="border: 1px dashed #F86400;width: 50%;">
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
  data() {
    return {
      prodList: [{
        pgtData: {
          mainTitle: '优质农产品推荐',
          subTitle: '取得“三品一标”认证；具有一定影响力和生产规模',
          divider: {
            enabled: true
          }
        },
        navData: {
          mainTitle: '禽畜肉蛋',
          subTitle: '基地直供 精选特供'
        },
        dividerFlag: true,
        categoryData: {
          separator: '+',
          list: [{
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
          ]
        },
        categoryAll: {
          label: '查看全部>'
        },
        productData: {
          list: [{
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
      }, {
        pgtData: {
          divider: {
            enabled: false
          }
        },
        navData: {
          mainTitle: '农副加工',
          subTitle: '资源稳定 量大优惠'
        },
        colorSchemes: {
          mainColor: '#E0A959',
          bgColor: '#fff'
        },
        categoryData: {
          list: [{
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
          ]
        }
        /*,
                categoryAll:{
                  label: '查看全部>'
                }*/
        ,
        productData: {
          list: [{
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
      }, {
        navData: {
          mainTitle: '粮米油面',
          subTitle: '品种丰富 以质论价'
        },
        colorSchemes: {
          mainColor: '#00947E',
          bgColor: '#EFF1F0'
        },
        categoryData: {
          list: [{
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
          ]
        },
        categoryAll: {
          label: '查看全部>'
        },
        productData: {
          list: [{
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
  methods: {}
}

</script>
<style type="text/css" scoped>
.demo {
  width: 75%;
  margin: auto;
}

</style>
