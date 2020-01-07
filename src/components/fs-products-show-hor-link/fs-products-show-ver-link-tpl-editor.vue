<template>
  <div>
    <FsProductsShowHorLinkTplEditor :ediotr-is-vertical="ediotrIsVertical" :mixData="mixData">
    </FsProductsShowHorLinkTplEditor>
  </div>
</template>
<style type="text/css" scoped>
</style>
<script type="text/javascript">
import Vue from 'vue'
import FsProductsShowHorLinkTplEditor from './fs-products-show-hor-link-tpl-editor'
export default {
  name: 'FsProductsShowVerLinkTplEditor', // 商品展示列表(分类竖版) 链接跳转  模板
  components: {
    FsProductsShowHorLinkTplEditor
  },
  data() {
    return {
      ediotrIsVertical: true,
      mixData: {
        navIsVertical: true,
        showInfoCol: 3
      }
    };
  },
  computed: {

  },
  methods: {

  },
  created() {
    //console.log(this.componentModel);
  }
}

</script>
