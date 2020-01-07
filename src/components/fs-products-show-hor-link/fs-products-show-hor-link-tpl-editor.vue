<template>
  <div>
    <TempleteEditor :is-edit="true" :tpl-form-elems="tplFormElems" v-model="tplModel" ref="tpl" :tpl-form="tplForm">
      <template v-slot:showTemplete>
        <FsProductsShowHorLink :show-templete="true">
        </FsProductsShowHorLink>
      </template>
      <template v-slot:showComponent>
        <FsProductsShowHorLink v-bind="componentModel" ref="FSProductsShowHorLink">
        </FsProductsShowHorLink>
      </template>
      <template v-slot:form_item_colorSchemes="sc">
        <div class="color-schemes-line">
          <div class="color-schemes-line-text">
            <span>背景色</span>
          </div>
          <el-color-picker popper-class="color-schemes-popper" class="color-schemes-picker" v-model="tplModel.bgColor" :predefine="predefineColors.bgColor"></el-color-picker>
          <div class="color-schemes-line-text">
            <span>高亮色</span>
          </div>
          <el-color-picker popper-class="color-schemes-popper" class="color-schemes-picker" v-model="tplModel.mainColor" :predefine="predefineColors.mainColor"></el-color-picker>
        </div>
      </template>
      <template v-slot:form_item_categoryList="sc">
        <div>
          <el-row>
            <LinkEditor dialogTitle='-添加分类-' :prop-mapping="{label: 'text'}" :submit-dialog="addCategoryData" :dialog-props="{closeOnClickModal:false}" :form-props="{rules: {text: [{ required: true, message: '请输入显示文字', trigger: 'blur' }]}}">
              <template v-slot:view-label="sc">
                <el-button type="primary">添加分类</el-button>
              </template>
            </LinkEditor>
          </el-row>
          <el-table ref="multipleTable" :data="tplModel.categoryList" style="width:100%">
            <el-table-column type="index">
            </el-table-column>
            <el-table-column prop="text" label="分类名">
            </el-table-column>
            <el-table-column label="排序">
              <template slot-scope="scope">
                <ListSortEditor v-model="tplModel.categoryList" :index="scope.$index"/>
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <div class="category-list-btn">
                  <LinkEditor :def-val="scope.row" :prop-mapping="{label: 'text'}" :submit-dialog="updatgeCategoryData" :dialog-props="{closeOnClickModal:false}" :form-props="{rules: {text: [{ required: true, message: '请输入显示文字', trigger: 'blur' }]}}">
                    <template v-slot:view-label="sc">
                      <el-button type="text">
                        编辑
                      </el-button>
                    </template>
                  </LinkEditor>
                </div>
                <el-button @click.native.prevent="delItem(tplModel.categoryList, scope.$index)" type="text">
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </template>
      <template v-slot:form_item_categoryAll="sc">
        <div>
          <LinkEditor :def-val="tplModel.categoryAll" :submit-dialog="setCategoryAll" :dialog-props="{closeOnClickModal:false}"></LinkEditor>
        </div>
      </template>
      <template v-slot:form_item_productData="sc">
        <div class="tp-product-data">
          <el-form-item label=" " class="show-info-line" prop="showInfoRow">
            <el-input placeholder="请输入内容" v-model.number="tplModel.showInfoRow" @change="changeCategoryData">
              <template slot="prepend">行数</template>
            </el-input>
          </el-form-item>
          <el-form-item label=" " class="show-info-line" prop="showInfoCol">
            <el-input placeholder="请输入内容" v-model.number="tplModel.showInfoCol" @change="changeCategoryData" prop="showInfo.col">
              <template slot="prepend">列数</template>
            </el-input>
          </el-form-item>
        </div>
      </template>
    </TempleteEditor>
  </div>
</template>
<style type="text/css">
.color-schemes-popper .el-color-predefine__color-selector {
  border: 1px solid;
}

.color-schemes-popper .el-color-predefine__color-selector.selected {
  border: none;
}

</style>
<style type="text/css" scoped>
.color-schemes-line {
  height: 40px;
  text-align: left;
}

.color-schemes-line-text {
  display: inline-block;
}

.color-schemes-line-text span {
  display: inline-block;
  width: 100%;
  -webkit-transform: translate3d(0, -40%, 0);
  transform: translate3d(0, -40%, 0);
  text-align: center;
}

.tp-product-data .show-info-line {
  margin-bottom: 22px;
}

.show-info-line>>>.el-form-item__label {
  width: 10% !important;
}

.show-info-line>>>.el-form-item__content {
  margin-left: 10% !important;
}

.category-list-btn {
  display: inline-block;
}

</style>
<script type="text/javascript">
import Vue from 'vue'
import _ from 'lodash'
import LinkEditor from 'wbfc-vs-tpl-editor/components/link-editor'
import ListSortEditor from 'wbfc-vs-tpl-editor/components/list-sort-editor'
import TempleteBinder from 'wbfc-vs-tpl-editor/components/templete-binder'
import TempleteEditor from 'wbfc-vs-tpl-editor/components/templete-editor'
import FsProductsShowHorLink from './fs-products-show-hor-link'
export default {
  name: 'TempleteEditorDemo', // 商品展示列表(分类横版) 链接跳转  模板
  mixins: [TempleteBinder],
  props: {
    ediotrIsVertical: {
      type: Boolean,
      default: false
    },
    mixData: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  components: {
    LinkEditor,
    ListSortEditor,
    TempleteEditor,
    FsProductsShowHorLink
  },
  watch: {
    ediotrIsVertical: {
      immediate: true,
      handler(val) {
        this.$set(this.tplModel, 'ediotrIsVertical', val);
      }
    }
  },
  data() {
    /*var toggleDataFlag = (val, type) => {
        alert(val + ':' +type);
    };*/
    var validateNum = (rule, value, callback) => {
      if (!Number.isInteger(value)) {
        callback(new Error('请输入数字'));
      } else {
        if (value <= 0) {
          callback(new Error('必须大于0'));
        }
        callback();
      }
    };
    var validateCol = (rule, value, callback) => {
      if (((24 / value) + '').indexOf('.') > 0) {
        callback(new Error('列数必须能被24整除'));
      } else {
        callback();
      }
    };
    return {
      tplForm: {
        rules: {
          'showInfoRow': [
            { required: true, message: '行数不能为空', trigger: 'change' },
            { validator: validateNum, trigger: 'change' },
          ],
          'showInfoCol': [
            { required: true, message: '列数不能为空', trigger: 'change' },
            { validator: validateNum, trigger: 'change' },
            { validator: validateCol, trigger: 'change' },
          ]
        },
        bottomBtns: [{
          type: 'primary',
          label: '显示模板数据',
          events: {
            click: (e) => {
              var tplData = Object.assign({}, this.componentModel);
              console.log(JSON.stringify(tplData, null, 2));
              this.$alert('数据已打印到控制台，请查看');
            }
          }
        }]
      },
      predefineColors: {
        bgColor: ['#FFFBEF'],
        mainColor: ['#F86400']
      },
      tplModel: {
        pgtDataFlag: true,
        navDataFlag: true,
        dividerFlag: true,
        categoryDataFlag: true,
        ediotrIsVertical: false,
        navIsVertical: false,
        bgColor: '#FFFBEF',
        mainColor: '#F86400',
        mainTitle: '宣传主标题',
        subTitle: '宣传副标题',
        navMainTitle: '楼层主标题',
        navSubTitle: '楼层主标题',
        categoryList: [{
            text: '分类1',
            href: '/'
          },
          {
            text: '分类2',
            href: '/'
          },
          {
            text: '分类3',
            href: '/'
          },
          {
            text: '分类4',
            href: '/'
          },
          {
            text: '分类5',
            href: '/'
          }
        ],
        categoryAllFlag: true,
        categoryAll: {
          label: '查看全部>'
        },
        productData: {
          list: [{}, {}, {}, {}, {}, {}, {}, {}]
        },
        showInfoRow: 2,
        showInfoCol: 4,
        productHeight: '25rem'
      },
      componentModel: {
        pgtDivider: {} // 因为分割线在模板中不可修改，所以此固定了参数 分割线必须指定插槽才可修改 或者封装此处model
      },
      tplFormElems: [{
        group: {
          name: 'colorInfo',
          label: '配色信息'
        },
        elems: [{
          type: 'switch',
          name: 'colorSchemes',
          label: '配色方案',
          attrs: {}
        }, {
          type: 'hidden',
          name: 'bgColor',
          label: '背景色',
          bind: 'colorSchemes.bgColor',
          visible: false,
        }, {
          type: 'hidden',
          name: 'mainColor',
          label: '高亮色',
          bind: 'colorSchemes.mainColor',
          visible: false,
        }]
      }, {
        group: {
          name: 'pgtInfo',
          label: '宣传信息'
        },
        elems: [{
          type: 'switch',
          name: 'pgtDataFlag',
          label: '宣传栏',
          events: {
            change: (val) => this.toggleDataFlag(val, 'navData')
          }
        }, {
          type: 'input',
          name: 'mainTitle',
          label: '宣传主标题',
          visible: 'pgtDataFlag',
          bind: 'pgtData'
        }, {
          type: 'input',
          name: 'subTitle',
          label: '宣传副标题',
          visible: 'pgtDataFlag',
          bind: 'pgtData'
        }]
      }, {
        group: {
          name: 'layoutInfo',
          label: '版式信息',
          visible: 'ediotrIsVertical',
        },
        elems: [{
          type: 'switch',
          name: 'navIsVertical',
          visible: 'ediotrIsVertical',
          label: '布局信息',
          attrs:{
            activeText: '竖版',
            inactiveText: '横版'
          }
        }, {
          type: 'input',
          name: 'verNavBackground',
          label: '背景图片URL',
          bind: 'navData.verNavBackground',
          visible: 'navIsVertical',
        }]
      }, {
        group: {
          name: 'floorInfo',
          label: '楼层信息'
        },
        elems: [{
          type: 'switch',
          name: 'dividerFlag',
          label: '楼层分割线',
          events: {
            change: (val) => {
              // 根据开关值显示和隐藏分隔条
              if (val) {
                this.componentModel.pgtDivider = {};
              } else {
                this.componentModel.pgtDivider = null;
              }
            }
          }
        }, {
          type: 'switch',
          name: 'navDataFlag',
          label: '楼层信息'
        }, {
          type: 'input',
          name: 'navMainTitle',
          label: '楼层主标题',
          visible: 'navDataFlag',
          bind: 'navData.mainTitle',
        }, {
          type: 'input',
          name: 'navSubTitle',
          label: '楼层副标题',
          visible: 'navDataFlag',
          bind: 'navData.subTitle',
        }]
      }, {
        group: {
          name: 'categoryInfo',
          label: '分类信息'
        },
        elems: [{
          type: 'switch',
          name: 'categoryDataFlag',
          label: '分类信息',
        }, {
          type: 'custom',
          name: 'categoryList',
          bind: 'categoryData.list',
          label: '分类列表',
          visible: () => {
            return this.tplModel.categoryDataFlag;
          },
        }]
      }, {
        group: {
          name: 'categoryAll',
          label: '分类尾部'
        },
        elems: [{
          type: 'switch',
          name: 'categoryAllFlag',
          label: '查看全部',
        }, {
          type: 'custom',
          name: 'categoryAll',
          label: '文本链接',
          visible: 'categoryAllFlag',
        }]
      }, {
        group: {
          name: 'categoryAll',
          label: '商品信息'
        },
        elems: [{
          type: 'custom',
          name: 'productData',
          label: '商品展示列表',
        }, {
          type: 'hidden',
          name: 'showInfoRow',
          bind: 'showInfo.row',
          label: '行',
          visible: false,
        }, {
          type: 'hidden',
          name: 'showInfoCol',
          bind: 'showInfo.col',
          label: '列',
          visible: false,
        }, {
          type: 'input',
          name: 'productHeight',
          label: '商品展示高度'
        }]
      }]
    };
  },
  computed: {
    /*    tplData: {
          get(){
            return this.bindData(this.defVal);
          },
          set(val){

          }
        },
        tplBindData(){
          var bind = Object.assign({}, this.defVal);
          _.set(bind, 'pgtData.mainTitle', this.defVal.mainTitle);
          _.set(bind, 'pgtData.subTitle', this.defVal.subTitle);
          if(!bind.pgtDataFlag){
            _.unset(bind, 'pgtData');
          }
          return bind;
        }*/
  },
  methods: {
    mixPropsData() {
      var props = {};
      this.tplModel = _.merge(props, this.tplModel, this.mixData);
    },
    toggleDataFlag(val, type) {
      console.log("type = %o, val = %o", type, val);
    },
    addCategoryData(val) {
      // 添加一个分类列表
      this.tplModel.categoryList.push(val);
    },
    updatgeCategoryData(val) {
      // 添加一个分类列表
      val.text = val.label;
      delete val.label;
      // 向模板添加一个新的值，模板会根据bind值自动绑定到组件模型(componentModel)
      this.tplModel.categoryList.push(val);
    },
    setCategoryAll(val) {
      this.tplModel.categoryAll = val;
    },
    changeCategoryData() {
      // 修改了行列就自动补全
      let isNum = (Number.isInteger(this.tplModel.showInfoRow) && this.tplModel.showInfoRow > 0) && (Number.isInteger(this.tplModel.showInfoCol) && this.tplModel.showInfoCol > 0);
      if (isNum) {
        var showCount = this.tplModel.showInfoRow * this.tplModel.showInfoCol;
        var subCount = showCount - this.tplModel.productData.list.length;
        if (subCount > 0) {
          for (var i = 0; i < subCount; i++) {
            this.tplModel.productData.list.push({});
          }
        } else if (subCount < 0) {
          this.tplModel.productData.list.splice(0, -subCount);
        }
      }
      //console.log(this.tplModel.productData.list);
    },
    orderList(list, index, orderDo) {
      if (!list || list.length == 0) {
        return;
      }
      var doVal = index + orderDo;
      // 第一个和最后一个不需要移动
      if (doVal < 0 || doVal >= list.length) {
        return;
      }
      list[index] = list.splice(index + orderDo, 1, list[index])[0];
    },
    delItem(list, index) {
      if (list) {
        list = list.splice(index, 1);
      }
    }
  },
  created() {
    //console.log(this.componentModel);
    this.mixPropsData();
  }
}

</script>
