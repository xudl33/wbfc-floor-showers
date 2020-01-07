<template>
  <div class="demo-index">
    <table style="width: 100%">
      <thead>
        <th>Demo</th>
        <th>布局</th>
        <th>编辑器</th>
      </thead>
      <tbody>
        <tr>
          <td><a href="/TempleteEditorDemo">基础模板</a></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><a href="/FSShowHorLinkDemo">商品展示列表(分类横版)DEMO</a></td>
          <td><a href="/FSShowHorLinkLayout">商品展示列表(分类横版)布局</a></td>
          <td>
            <el-popover trigger="hover" width="600">
              <a slot="reference" href="/FSShowHorLinkTpl">商品展示列表(分类横版)编辑器</a>
              <div class="FsProductsShowHorLink">
                <FsProductsShowHorLink :show-templete="true" />
              </div>
            </el-popover>
          </td>
        </tr>
        <tr>
          <td><a href="/FSShowVerLinkDemo">商品展示列表(分类竖版)DEMO</a></td>
          <td><a href="/FSShowVerLinkLayout">商品展示列表(分类竖版)布局</a></td>
          <td>
            <el-popover trigger="hover" width="600">
              <a slot="reference" href="/FSShowVerLinkTpl">商品展示列表(分类竖版)编辑器</a>
              <div class="FsProductsShowHorLink">
                <FsProductsShowHorLink :show-templete="true" :navIsVertical="true" :show-info="{row: 2, col: 3}"/>
              </div>
            </el-popover>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import FsProductsShowHorLink from '../components/fs-products-show-hor-link/fs-products-show-hor-link'
export default {
  name: 'index',
  components: {
    FsProductsShowHorLink,
  },
  data() {
    return {

    }
  }
}

</script>
<style scoped>
.demo-index {
  text-align: center;
  width: 50%;
  margin: auto;
}

.FsProductsShowHorLink>>>.fs-products-show-hor-link{
  --itemHeight: 5rem !important;
}

</style>
