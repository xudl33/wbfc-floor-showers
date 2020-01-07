<template>
  <div class="fs-products-show-hor-link" :id="'fs-products-show-hor-link' + _uid" :class="showTemplete?'is-show-templete':''">
    <div class="fs-products-show-container">
      <div v-if="pgtDataFlag || showTemplete">
        <!-- 宣传信息插槽 -->
        <slot name="pgt-header" :pgtData='pgtData' v-if="pgtData || pgtDivider || showTemplete">
          <el-row v-if="!showTemplete && pgtData.mainTitle">
            <el-col :span="24">
              <!-- 宣传主标题插槽 -->
              <slot name="pgt-header-main" :pgtData='pgtData'>
                <div class="pgt-main-title">{{pgtData.mainTitle}}</div>
              </slot>
            </el-col>
          </el-row>
          <el-row v-if="showTemplete">
            <div class="pgt-main-title is-show-templete">&nbsp;</div>
          </el-row>
          <el-row v-if="!showTemplete && pgtData.subTitle">
            <el-col :span="24">
              <!-- 宣传副标题插槽 -->
              <slot name="pgt-header-sub" :pgtData='pgtData'>
                <div class="pgt-main-sub">{{pgtData.subTitle}}</div>
              </slot>
            </el-col>
          </el-row>
          <el-row v-if="showTemplete">
            <div class="pgt-main-sub is-show-templete">&nbsp;</div>
          </el-row>
        </slot>
      </div>
      <div v-if="dividerFlag || showTemplete">
        <!-- 分割线插槽 -->
        <slot name="divider" v-if="!showTemplete && pgtDivider" :divider='pgtDivider'>
          <el-divider v-bind="pgtDivider"></el-divider>
        </slot>
        <el-divider v-if="showTemplete" class="is-show-templete"></el-divider>
      </div>
      <div>
        <el-row>
          <el-col class="title-container" :span="navIsVertical?6:24" :class="navIsVertical?'is-vertical':''">
            <el-row class="title-line" v-if="showTemplete || navDataFlag || categoryDataFlag || categoryAllFlag" :class="navIsVertical?'is-vertical':''">
              <template>
                <el-col class="nav-header">
                  <!-- 楼层信息插槽 -->
                  <slot name="nav-header" :navData='navData'>
                    <div v-if="navDataFlag || showTemplete">
                      <div class="line-item main-title" v-if="!showTemplete && navData.mainTitle">
                        <!-- 楼层主标题插槽 -->
                        <slot name="nav-header-main" :navData='navData'>
                          <span>{{navData.mainTitle}}</span>
                        </slot>
                      </div>
                      <div class="line-item main-title is-show-templete" v-if="showTemplete"><span>&nbsp;</span></div>
                      <div class="line-item sub-title" v-if="!showTemplete && navData.subTitle">
                        <!-- 楼层副标题插槽 -->
                        <slot name="nav-header-sub" :navData='navData'>
                          <span>{{navData.subTitle}}</span>
                        </slot>
                      </div>
                      <div class="line-item sub-title is-show-templete" v-if="showTemplete"><span>&nbsp;</span></div>
                    </div>
                    <div v-else>
                      <div class="line-item main-title"><span>&nbsp;</span></div>
                      <div class="line-item sub-title"><span>&nbsp;</span></div>
                    </div>
                  </slot>
                </el-col>
                <el-col class="nav-category">
                  <div class="category-line">
                    <template v-if="navIsVertical">
                      <div class="ver-category-table">
                        <div class="ver-category-cell" v-for="(cate, index) in categoryData.list" :key="'category-item-' + index">
                          <el-button round class="ver-category-item">
                            <a v-if="cate.href" :href="cate.href">{{cate.text}}</a>
                          </el-button>
                        </div>
                      </div>
                      <div class="category-item is-show-templete" v-if="showTemplete"><span>&nbsp;</span></div>
                      <div class="category-all" v-if="!showTemplete && categoryAllFlag && categoryAll && categoryAll.label">
                        <!-- 查看全部插槽 -->
                        <slot name="category-all" :categoryAll='categoryAll'>
                          <el-link v-bind="categoryAll">{{categoryAll.label}}</el-link>
                        </slot>
                      </div>
                      <div class="category-all is-show-templete" v-if="showTemplete"><span>&nbsp;</span></div>
                    </template>
                    <template v-else>
                      <div class="line-item main-title">
                        <span>&nbsp;</span>
                      </div>
                      <div class="line-item" v-if="!showTemplete && categoryDataFlag && categoryData && categoryData.list">
                        <!-- 商品分类插槽 -->
                        <slot name="category-list" v-if="categoryData.list" :categoryData='categoryData'>
                          <div v-if="categoryData.list&&categoryData.list.length > 0">
                            <el-breadcrumb v-bind="categoryData" class="category-item">
                              <el-breadcrumb-item v-for="(cate, index) in categoryData.list" :key="'category-item-' + index">
                                <a v-if="cate.href" :href="cate.href">{{cate.text}}</a>
                                <span v-else>{{cate.text}}</span>
                              </el-breadcrumb-item>
                            </el-breadcrumb>
                          </div>
                        </slot>
                      </div>
                      <div class="line-item category-item is-show-templete" v-if="showTemplete"><span>&nbsp;</span></div>
                      <div class="line-item category-item" v-if="!categoryDataFlag"><span>&nbsp;</span></div>
                      <div class="line-item category-all" v-if="!showTemplete && categoryAllFlag && categoryAll && categoryAll.label">
                        <!-- 查看全部插槽 -->
                        <slot name="category-all" :categoryAll='categoryAll'>
                          <el-link v-bind="categoryAll">{{categoryAll.label}}</el-link>
                        </slot>
                      </div>
                      <div class="line-item category-all is-show-templete" v-if="showTemplete"><span>&nbsp;</span></div>
                      <div class="line-item category-all" v-if="!categoryAllFlag"><span>&nbsp;</span></div>
                    </template>
                  </div>
                </el-col>
              </template>
            </el-row>
          </el-col>
          <el-col class="product-container" :span="navIsVertical?18:24">
            <el-row class="product-line" :class="navIsVertical?'is-vertical':''">
              <el-col>
                <!-- 产品展示列表插槽 -->
                <slot name="product-list" :productData='productData'>
                  <el-col :span="colCount" v-for="(o, index) in rowCount" :key="o" class="product-list" v-if="showTemplete || (productData.list&&productData.list.length > 0)">
                    <!-- 单个产品控件插槽 -->
                    <slot name="product-item" :productItem='productData.list[index]'>
                      <el-card class="product-item" body-style="padding: 0px;height: 100%;" shadow="never" v-if="productData.list[index]">
                        <div class="product-item-body" :class="showTemplete?'is-show-templete':''">
                          <!-- 单个产品el-card控件显示插槽 -->
                          <slot name="product-item-body" :productItem='productData.list[index]'>
                            <div class="product-item-image" :class="!showTemplete&&!productData.list[index].img?'nodata':''">
                              <!-- 单个产品el-card控件显示商品图片插槽 -->
                              <slot name="product-item-image" :productItem='productData.list[index]'>
                                <div class="product-item-image" v-if="showTemplete"></div>
                                <img border="0" v-if="!showTemplete && productData.list[index].img" :src="productData.list[index].img" class="image" />
                              </slot>
                            </div>
                            <div class="product-item-content">
                              <div class="product-item-title" :class="!showTemplete&&!productData.list[index].title?'nodata':''">
                                <!-- 单个产品el-card控件显示商品标题插槽 -->
                                <slot name="product-item-title" :productItem='productData.list[index]'>
                                  <div class="product-item-title" v-if="showTemplete"></div>
                                  <span v-else :title="productData.list[index].title">{{getProductTitle(productData.list[index].title)}}</span>
                                </slot>
                              </div>
                              <div class="product-item-desc clearfix" :class="!showTemplete&&!productData.list[index].desc?'nodata':''">
                                <!-- 单个产品el-card控件显示商品描述插槽 -->
                                <slot name="product-item-desc" :productItem='productData.list[index]'>
                                  <div class="product-item-desc" v-if="showTemplete"></div>
                                  <span v-else>{{productData.list[index].desc}}</span>
                                </slot>
                              </div>
                            </div>
                          </slot>
                        </div>
                      </el-card>
                    </slot>
                  </el-col>
                </slot>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<style type="text/css" scoped>
.fs-products-show-hor-link {
  --percentOneHeight: calc(var(--itemHeight) * 0.0333333333333333);
  --tplColor1: #ced0d1;
  --tplColor2: #949494;
  --tplColor3: #716f6f;
  --productLine: 2;
  --verNavBackground: url('');
}

.fs-products-show-hor-link {
  background-color: var(--bgColor);
  text-align: center;
}

.fs-products-show-hor-link .hidden {
  display: none;
}

.fs-products-show-hor-link.is-show-templete {
  background-color: #434343;
}

.title-line {
  text-align: left;
  padding: 0.5rem 0.5rem 0rem 0.5rem;
}

.title-line.is-vertical {
  padding: 0rem;
}

.title-line .line-item {
  display: inline-block;
  margin-right: 0.5rem;
  max-width: 100%;
  word-break: break-word;
}

.title-line .line-item:last-child {
  margin-right: 0rem;
}

.pgt-main-title,
.main-title {
  font-size: 2rem;
  color: var(--mainColor);
}

.main-title>span,
.category-all a {
  position: relative;
  position: relative;
  top: -0.2rem;
}

.category-line {
  text-align: right;
}

.category-item .el-breadcrumb__inner a:hover,
.category-item .el-breadcrumb__inner.is-link:hover {
  color: var(--mainColor);
  cursor: pointer;
}

.category-item .el-breadcrumb__item:last-child .el-breadcrumb__inner,
.category-item .el-breadcrumb__item:last-child .el-breadcrumb__inner a {
  font-weight: 700;
  color: #303133;
  cursor: pointer;
}

.category-item .el-breadcrumb__item:last-child .el-breadcrumb__inner,
.category-item .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover {
  color: var(--mainColor);
}

.title-line.is-vertical {
  height: calc((var(--itemHeight) * var(--productLine)) + (var(--productLine) * 1rem) - 1rem);
  background: var(--mainColor);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: var(--verNavBackground);
  box-sizing: border-box;
/*  border: 2px solid transparent;*/
  margin: 0.5rem;
}

.is-show-templete .title-line.is-vertical {
  background: var(--tplColor1);
}

.title-line.is-vertical .nav-header,
.is-show-templete .title-line.is-vertical {
  width: 100%;
  line-height: unset;
  padding-top: calc(4 * var(--percentOneHeight));
  padding-right: calc(3 * var(--percentOneHeight));
  padding-bottom: calc(2 * var(--percentOneHeight));
  padding-left: calc(3 * var(--percentOneHeight));
}

.title-line.is-vertical .nav-category,
.is-show-templete .title-line.is-vertical .nav-category {
  padding: calc(3 * var(--percentOneHeight));
  padding-top: 0rem;
}


.title-line.is-vertical .category-all a {
  color: #fff;
  margin-top: 1rem;
}

.title-line.is-vertical .nav-category {
  width: 100%;
}

.title-line.is-vertical .category-line {
  text-align: left;
}

.title-line.is-vertical .line-item {
  color: #fff;
}

.title-line.is-vertical .sub-title {
  margin-top: calc(1.5 * var(--percentOneHeight));
  display: block;
}

.ver-category-table {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.ver-category-cell {
  display: inline-grid;
  padding: var(--percentOneHeight);
}

.ver-category-cell:nth-child(odd) {
  padding-left: 0rem;
  padding-right: 0.5rem;
}

.ver-category-cell:nth-child(even) {
  padding-left: 0.5rem;
  padding-right: 0rem;
}

.ver-category-item {
  border-color: transparent;
  background-color: #0000004f;
}

.ver-category-item a {
  color: #fff;
  text-decoration: none;
}

.ver-category-item.el-button:focus,
.ver-category-item.el-button:hover {
  background-color: #ffffff63;
}

.product-item {
  margin: 0.5rem 0.5rem;
  background-color: transparent;
  border: none;
  height: var(--itemHeight);
}

.product-item-body {
  cursor: pointer;
  border: 2px solid var(--bgColor);
  /* 否则可能会因为百分比高度的问题 hover加边框时导致被挤折行的问题*/
  background-color: #fff;
  height: 100%;
  box-sizing: border-box;
}

.fs-products-show-hor-link.is-show-templete .product-item-body {
  border: 2px solid #434343;
}

.product-item-body div {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

.fs-products-show-hor-link .product-item-body:hover {
  color: #FFFFFF;
  background-color: var(--mainColor);
  border: 2px solid var(--mainColor);
}

.product-item-body:hover .product-item-desc {
  color: #FFFFFF;
}

.product-item-body .product-item-image {
  width: 100%;
  height: 75%;
}

.product-item-body .product-item-content {
  height: 25%;
  font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
}

.product-item-body .product-item-title {
  height: 50%;
  padding: var(--percentOneHeight);
  text-align: left;
}

.product-item .image {
  width: 100%;
  height: 100%;
}

.product-item-desc {
  height: 50%;
  padding: 0rem var(--percentOneHeight) var(--percentOneHeight) var(--percentOneHeight);
  text-align: left;
  font-size: 1.5rem;
}

.product-item-desc {
  color: #FE4300;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.pgt-main-title.is-show-templete {
  background-color: var(--tplColor1);
}

.pgt-main-sub.is-show-templete {
  background-color: var(--tplColor2);
}

.el-divider.is-show-templete {
  background-color: var(--tplColor2);
}

.nav-header {
  width: 33%;
  line-height: 1;
}

.nav-category {
  width: 67%;
}

.nav-header .main-title.is-show-templete {
  width: 30%;
  display: inline-block;
  background-color: var(--tplColor1);
}

.nav-header .main-title.is-show-templete {
  background: var(--tplColor2);
}

.is-vertical .nav-header .main-title.is-show-templete,
.is-vertical .nav-header .sub-title.is-show-templete {
  width: 100%;
}

.nav-header .sub-title.is-show-templete {
  width: 50%;
  display: inline-block;
  background-color: var(--tplColor3);
}

.category-line .category-item.is-show-templete {
  width: 50%;
  background-color: var(--tplColor1);
}

.is-vertical .category-line .category-item.is-show-templete {
  width: 100%;
  margin-bottom: var(--percentOneHeight);
  height: calc((var(--itemHeight) * var(--productLine)) / 4);
  background-color: var(--tplColor2);
}

.category-line .category-all.is-show-templete {
  width: 10%;
  background-color: var(--tplColor3);
}

.is-vertical .category-all.is-show-templete {
  width: 100%;
}

.product-item-body.is-show-templete .product-item-content {
  background-color: #fff;
}

.product-item-body.is-show-templete .product-item-image,
.product-item-image.nodata {
  background-color: var(--tplColor1);
}

.product-item-body.is-show-templete .product-item-title,
.product-item-title.nodata {
  background-color: var(--tplColor3);
}

.product-item-body.is-show-templete .product-item-desc,
.product-item-desc.nodata {
  background-color: var(--tplColor2);
}

</style>
<script>
export default {
  name: 'fs-products-show-hor-link',
  data() {
    return {
      tempShowInfo: {} // 临时行列数据  缓存是为了避免行列输入错误时 产品列表变化的问题
    };
  },
  props: {
    showTemplete: { // 是否显示为模板
      type: Boolean,
      default () {
        return false;
      }
    },
    pgtDataFlag: {
      type: Boolean,
      default () {
        return true;
      }
    },
    navIsVertical: { // 楼层信息是否为垂直版
      type: Boolean,
      default () {
        return false;
      }
    },
    navDataFlag: {
      type: Boolean,
      default () {
        return true;
      }
    },
    dividerFlag: {
      type: Boolean,
      default () {
        return false;
      }
    },
    categoryDataFlag: {
      type: Boolean,
      default () {
        return true;
      }
    },
    categoryAllFlag: {
      type: Boolean,
      default () {
        return true;
      }
    },
    pgtData: { // 宣传数据
      type: Object, // {mainTitle:'宣传主标题', subTitle: '宣传副标题'}
      default () {
        return {};
      }
    },
    pgtDivider: { // 宣传栏分割线 其他配置请参考 https://element.eleme.cn/#/zh-CN/component/divider
      type: Object,
      default () {
        return {};
      }
    },
    navData: { // 导航数据
      type: Object, // {mainTitle:'楼层主标题', subTitle: '楼层副标题'}
      default () {
        return {};
      }
    },
    categoryData: {
      type: Object,
      default () {
        return { // 其他配置请参考 https://element.eleme.cn/#/zh-CN/component/breadcrumb
          separator: '/', // 分隔符
          list: [], // 分类列表 {text:'显示文字', href:'跳转链接'}
        }
      }
    },
    categoryAll: { // 是否显示'查看全部链接'
      type: Object,
      default () {
        return { // 其他配置请参考 https://element.eleme.cn/#/zh-CN/component/link
        }
      }
    },
    productData: {
      type: Object,
      default () {
        return {
          list: [] // 产品列表 {text:'显示文字', href:'跳转链接'}
        };
      }
    },
    productHeight: { // 配色方案
      type: String,
      default () {
        return '30rem';
      }
    },
    colorSchemes: { // 配色方案
      type: Object,
      default () {
        return {
          mainColor: '#F86400',
          bgColor: '#FFFBEF'
        }
      }
    },
    showInfo: { // 显示信息
      type: Object,
      default: () => {
        return {
          row: 2, // 行数
          col: 4 // 列数
        }
      }
    },
    productTitleMaxLength: {
      type: Number,
      default: () => {
        return 40;
      }
    }
  },
  computed: {
    rowCount() {
      let isNum = (Number.isInteger(this.showInfo.col) && this.showInfo.col > 0) && (Number.isInteger(this.showInfo.row) && this.showInfo.row > 0);
      if (isNum) return (24 / this.changeNum(this.showInfo.col)) * this.showInfo.row;
      // 如果不是数字就返回缓存值
      return (24 / this.changeNum(this.tempShowInfo.col)) * this.tempShowInfo.row;
    },
    colCount() {
      let isNum = (Number.isInteger(this.showInfo.col) && this.showInfo.col > 0) && (Number.isInteger(this.showInfo.row) && this.showInfo.row > 0);
      if (isNum) return this.changeNum(this.showInfo.col);
      // 如果不是数字就返回缓存值
      return this.changeNum(this.tempShowInfo.col);
    }
  },
  watch: {
    'showInfo.col': {
      immediate: true,
      handler(val, oldVal) {
        // 如果不是数字就把之前的值缓存起来
        Number.isInteger(val) && val > 0 ? this.$set(this.tempShowInfo, 'col', val) : Number.isInteger(oldVal) ? this.$set(this.tempShowInfo, 'col', oldVal) : '';
      }
    },
    'showInfo.row': {
      immediate: true,
      handler(val, oldVal) {
        // 如果不是数字就把之前的值缓存起来
        Number.isInteger(val) && val > 0 ? this.$set(this.tempShowInfo, 'row', val) : Number.isInteger(oldVal) ? this.$set(this.tempShowInfo, 'row', oldVal) : '';

        // 如果是竖版的 需要变化楼层信息高度
        if (this.navIsVertical) {
          this.setProductLineHeight();
        }
      }
    },
    colorSchemes: {
      handler() {
        this.setColorSchemes();
      },
      deep: true
    },
    productHeight: {
      handler() {
        this.setColorSchemes();
      }
    },
    'navData.verNavBackground': {
      handler(val) {
        this.setVerNavBackground(val);
      }
    }
  },
  methods: {
    setVerNavBackground(val) {
      if (val) {
        this.setDomProperty('--verNavBackground', 'url(' + val + ')');
      }
    },
    getProductTitle(desc) {
      var res = desc;
      if (res) {
        if (res.length > this.productTitleMaxLength) {
          res = res.substring(0, this.productTitleMaxLength - 3) + '...';
        } else {
          for (var i = 0; i < (this.productTitleMaxLength - res.length); i++) {
            res += ' ';
          }
        }
      }
      return res;
    },
    changeNum(val) { // 将列数改变为24的分数 用来适配el-col的布局
      var colDev = 24 / val;
      if ((colDev + '').indexOf('.') > 0) {
        colDev = 24 / Math.floor(colDev);
      }
      return colDev;
    },
    setProductLineHeight() {
      if (Number.isInteger(this.showInfo.row) && this.showInfo.row > 0) {
        this.setDomProperty('--productLine', this.showInfo.row);
        /*this.$nextTick(function() {
          // 减4是因为有4像素的产品边框 目的是与产品列表对其且高度一致
          let oneLineHeight = document.querySelector('#fs-products-show-hor-link' + this._uid + ' .product-line').offsetHeight - 4;
          this.setDomProperty('--productListHeight', oneLineHeight + 'px');
        });*/
      }
    },
    setColorSchemes() {
      this.setDomProperty('--itemHeight', this.productHeight);
      this.setDomProperty('--mainColor', this.colorSchemes.mainColor);
      this.setDomProperty('--bgColor', this.colorSchemes.bgColor);
    },
    setDomProperty(name, val) {
      let dom = document.querySelector("#fs-products-show-hor-link" + this._uid);
      if (dom) {
        dom.style.setProperty(name, val);
      }
    }
  },
  created() {
    if (this.showTemplete) {
      if (this.navIsVertical) {
        this.productData.list = [{}, {}, {}, {}, {}, {}];
      } else {
        this.productData.list = [{}, {}, {}, {}, {}, {}, {}, {}];
      }
    }
    /*    this.tempShowInfo = Object.assign({}, this.showInfo);*/
  },
  mounted() {
    this.setColorSchemes();
    this.setProductLineHeight();
    this.setVerNavBackground(this.navData.verNavBackground);
  }
}

</script>
