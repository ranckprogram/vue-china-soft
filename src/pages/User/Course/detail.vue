<template>
  <div class="course-detail">
    <div class="menu">
      <ul>
        <li @click="$router.push({path: '/user/course'})">
          <router-link to="/user/course">
            <i class="el-icon-s-home"></i>
          </router-link>
        </li>
        <li @click="showList = !showList">
          <i class="el-icon-s-fold"></i>
        </li>
      </ul>
    </div>
    <div class="list" v-if="showList">
      <section>
        <h3>第1章 使用科学方法提升工作效率</h3>
        <ul>
          <li v-for="item in list" :key="item.id">
            <i class="el-icon-video-play"></i>
            {{item.title}}
            <span class="status" :class="item.status"></span>
          </li>
        </ul>
      </section>
      <section>
        <h3>第1章 使用科学方法提升工作效率</h3>
        <ul>
          <li v-for="item in list" :key="item.id" :class="item.id === active && 'active'">
            <i class="el-icon-video-play"></i>
            {{item.title}}
            <span class="status" :class="item.status"></span>
            <em>正在学习</em>
          </li>
        </ul>
      </section>
    </div>
    <div class="video">
      <video
        controls
        src="https://vdept.bdstatic.com/6d4c704547326a735a363863574d4a41/486750615036696a/69e264ea649afda8c42fb79c6fd2ee4aee147d23da2141d97c9ba1bc57546f4df64a1382475bcaa37b1927190873e76fe8e721da4d3c69e5d246dd40ba159554.mp4?auth_key=1587922118-0-0-a567bfcbb1cd1fae34acabc3ccb2039a"
      ></video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 3,
      showList: true,
      list: [
        {
          id: 1,
          title: "1-1 课程名称",
          status: "finish"
        },
        {
          id: 2,
          title: "1-1 课程名称",
          status: "finish"
        },
        {
          id: 3,
          title: "1-1 课程名称",
          status: "finish"
        },
        {
          id: 4,
          title: "1-1 课程名称",
          status: "finish"
        },
        {
          id: 5,
          title: "1-1 课程名称",
          status: "process"
        },
        {
          id: 6,
          title: "1-1 课程名称",
          status: "finish"
        },
        {
          id: 7,
          title: "1-1 课程名称",
          status: "nostart"
        }
      ]
    };
  },
  created() {
    this.open();
  },
  methods: {
    open() {
      this.$confirm("恭喜您已完成本节学习", "提示", {
        confirmButtonText: "继续学习",
        cancelButtonText: "完成本节答题",
        type: "success"
      })
        .then(() => {
         
        })
        .catch(() => {
         
        });
    }
  }
};
</script>

<style lang="stylus">
.course-detail {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 100;
  overflow: hidden;
  display: flex;

  .menu {
    width: 64px;
    height: 100%;
    border-right: 1px solid #E6E6E6;
    font-size: 18px;
    color: #409EFF;

    li {
      a {
        color: #409EFF;
      }

      height: 60px;
      padding: 22px;
      cursor: pointer;
    }
  }

  .list {
    width: 320px;
    height: 100%;
    padding: 20px 0;
    border-right: 1px solid #E8E8E8;

    h3 {
      font-size: 16px;
      color: #409EFF;
      padding: 20px 24px;
    }

    li {
      font-size: 14px;
      padding: 10px 20px;
      line-height: 20px;

      em {
        display: none;
        float: right;
        font-style: normal;
        margin-right: 10px;
      }

      &.active {
        color: #67C23A;

        em {
          display: inline-block;
        }
      }

      &:hover {
        background: #ECF5FF;
      }

      i {
        margin-right: 10px;
      }

      .status {
        float: right;
        display: block;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        margin-top: 4px;

        &.finish {
          background: #67C23A;
        }

        &.process {
          border: 2px solid #67C23A;
        }

        &.nostart {
          border: 1px solid #ccc;
        }
      }
    }
  }

  .video {
    flex: 1;
    padding: 14.9% 4.8%;
    padding: 100px 50px;

    video {
      width: 100%;
      height: 100%;
    }
  }
}
</style>