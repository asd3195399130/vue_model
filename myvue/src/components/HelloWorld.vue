<!--  -->
<template>
  <div class="">

    <!-- <img src="../assets/d6653d621e99b9230dcd0492714031068744.png" alt=""> -->

    <slot></slot>


  </div>
</template>

<script>
export default {
  data() {
    return {

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
.breadcrumb {
  background-color: #f5f5f5;
  padding: 10px;
}

.breadcrumb ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.breadcrumb li {
  display: inline-block;
  margin-right: 5px;
}

.breadcrumb li:last-child {
  font-weight: bold;
}
</style>