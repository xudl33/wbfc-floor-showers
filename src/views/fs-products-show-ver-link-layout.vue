<template>
  <div class="demo-ptl">
    <FsProductsShowHorLink :show-templete="true" :navIsVertical="true" :show-info="{row: 2, col: 3}"/>
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
