<template>
  <div class="gjl">
     <!-- <div class="gjl-header"></div> -->
     <div class="gjl-show">
       <van-swipe :autoplay="3000">
          <van-swipe-item>
            <div class="pic">
              <img src="http://www.soouya.com/upload/operate/47bf49ad-201b-4e8f-992c-e974bc7a52ee.jpg" />
            </div>
          </van-swipe-item>
          <van-swipe-item><div class="pic">
            <img src="http://www.soouya.com/upload/flower/f2f72471-5579-4804-92bf-9000470f654b.jpg" alt="">
          </div></van-swipe-item>
          <van-swipe-item><div class="pic">
            <img src="http://www.soouya.com/upload/flower/e943db0a-22f1-434e-9695-2becf13f0f72.jpg" alt="">
          </div></van-swipe-item>
          <van-swipe-item><div class="pic">
            <img src="http://www.soouya.com/upload/flower/b429298e-a662-4d9d-9acd-d07f7f12a78f.jpg" alt="">
          </div></van-swipe-item>
        </van-swipe>
     </div>
      <!-- product -->
      <div class="gjl-product">
          <h1 class="category-name">
            <span>PRODUCTS</span>
            <a class="product-more">MORES</a>
          </h1>

          <div class="gjl-product-list">
            <div class="gjl-product-list-section" v-for="i in 4" :key="i">
              <div class="img" style="background-image: url('http://www.cid-lighting.com/uploads/170216/1-1F21614153N51.jpg');"></div>
              <div class="text">ARTEMIDE-{{i}}</div>
            </div>
          </div>
      </div>

      <!-- about -->
      <div class="gjl">

      </div>

  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'vant'
  export default {
    components: {
      Swipe,
      SwipeItem
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
  .gjl {
    position: relative;
    &-show {
      height: 300px;
      box-shadow: 0 1px 5px #ececec;
    }
    &-header {
      background: rgba(0, 0, 0, 0.5);
      height: 40px;
      position: absolute;
      left: 0;
      right: 0;
      z-index: 100;
    }
    &-product {
      text-align: center;
      &-list {
        display: flex;
        flex-wrap: wrap;
        &-section {
          width: 46%;
          margin-left: 3%;
          margin-right: 1%;
          margin-bottom: 2%;
          height: 200px;
          border: 1px solid #ececec;
          box-shadow: 0 0 5px #ececec;
          border-radius: 2px;
          &:nth-of-type(even) {
            margin-left: 1%;
            // margin-right: 0;
          }
          .img {
            height: 160px;
            width: 100%;
            background-size: contain;
          }
          .text {
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
    .category-name {
      padding: 10px 0;
      font-size: 22px;
      display: flex;
      padding: 2%;
      align-items: center;
      justify-content: space-between;
      .product-more {
        font-size: 16px;
        color: #999;
      }
    }
    .pic {
      display: flex;
      align-items: center;
      height: 300px;
      width: 100%;
      img {
        width: 100%;
      }
    }


  }
</style>
