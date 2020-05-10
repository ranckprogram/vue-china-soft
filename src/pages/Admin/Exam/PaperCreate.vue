<template>
  <div class="paper-create">
    <el-card class="paper-info">
      <div class="paper-base-info">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="试卷名称">
            <el-input v-model="form.name" placeholder="请输入试卷标题" style="width: 420px;"></el-input>
          </el-form-item>
          <el-form-item label="试卷描述">
            <el-input type="textarea" :rows="5" placeholder="请输入描述" v-model="form.descrip"></el-input>
          </el-form-item>
          <el-form-item label="试卷总分">
            <el-input-number v-model="form.score"></el-input-number>
          </el-form-item>
          <el-form-item label="试卷难度">
            <el-select v-model="form.paper" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="试卷来源">
            <el-select v-model="form.paper" placeholder="请选择课程">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select v-model="form.paper" placeholder="请选择章节">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select v-model="form.paper" placeholder="请选择小节">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>

      <section>
        <div class="big-type">
          <header class="big-type-header">
            <span style="padding-right: 20px">第一部分</span>
            <el-select placeholder="请选择">
              <el-option label="单选题" value="shanghai"></el-option>
              <el-option label="多选题" value="beijing"></el-option>
            </el-select>
            <div class="big-type-header-right">
              <span>题数</span>
              <em>3</em>
              <span>分数</span>
              <em>30</em>
              <el-button type="primary" plain size="medium">添加试题</el-button>
              <el-button plain size="medium">上移</el-button>
              <el-button plain size="medium">下移</el-button>
              <el-button type="danger" plain size="medium">删除题型</el-button>
            </div>
          </header>
          <div class="big-type-content">
            <div class="big-type-item">
              <h3>
                在生产管理信息系统中，下列操作步骤能正确将工单推进流程的是？
                <span @click="handleOpen">
                  展开
                  <i :class="item.show ?'el-icon-arrow-down':'el-icon-arrow-up'"></i>
                </span>
              </h3>

              <ul class="option-list" v-if="item.show">
                <li>
                  <el-radio v-model="radio" label="A">A、在工具栏中点击workflow标签</el-radio>
                </li>
                <li>
                  <el-radio v-model="radio" label="B">B、在缺陷单界面中点击推进流程按钮</el-radio>
                </li>
                <li>
                  <el-radio v-model="radio" label="C">C、在缺陷单界面中点击提交按</el-radio>
                </li>
                <li>
                  <el-radio v-model="radio" label="D">D、后台启动流程推进</el-radio>
                </li>
              </ul>

              <footer class="big-type-item-footer">
                <span>分值</span>
                <el-input-number
                  v-model="num"
                  class="input-number"
                  @change="handleChange"
                  :min="1"
                  :max="10"
                  label="描述文字"
                ></el-input-number>
                <div class="operate">
                  <el-button
                    size="mini"
                    icon="el-icon-edit"
                    @click="$emit('on-click-subsection', 'upload', scope.row,id)"
                    style="margin-left: 10px"
                  ></el-button>
                  <el-button
                    size="mini"
                    icon="el-icon-arrow-up"
                    @click="$emit('on-click-subsection', 'moveUp', scope.row,id)"
                  ></el-button>
                  <el-button
                    size="mini"
                    icon="el-icon-arrow-down"
                    @click="$emit('on-click-subsection', 'moveDown', scope.row,id)"
                  ></el-button>
                  <el-button
                    size="mini"
                    icon="el-icon-delete"
                    @click="$emit('on-click-subsection', 'delete', scope.row,id)"
                  ></el-button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="big-type">
          <header class="big-type-header">
            <span style="padding-right: 20px">第二部分</span>
            <el-select placeholder="请选择">
              <el-option label="单选题" value="shanghai"></el-option>
              <el-option label="多选题" value="beijing"></el-option>
            </el-select>
            <div class="big-type-header-right">
              <span>题数</span>
              <em>3</em>
              <span>分数</span>
              <em>30</em>
              <el-button type="primary" plain size="medium">添加试题</el-button>
              <el-button plain size="medium">上移</el-button>
              <el-button plain size="medium">下移</el-button>
              <el-button type="danger" plain size="medium">删除题型</el-button>
            </div>
          </header>
          <div class="big-type-content">
            <div class="big-type-item">
              <h3>
                在生产管理信息系统中，下列操作步骤能正确将工单推进流程的是？
                <span @click="handleOpen">
                  展开
                  <i :class="item.show ?'el-icon-arrow-down':'el-icon-arrow-up'"></i>
                </span>
              </h3>

              <ul class="option-list" v-if="item.show">
                <li>
                  <el-radio v-model="radio" label="A">A、在工具栏中点击workflow标签</el-radio>
                </li>
                <li>
                  <el-radio v-model="radio" label="B">B、在缺陷单界面中点击推进流程按钮</el-radio>
                </li>
                <li>
                  <el-radio v-model="radio" label="C">C、在缺陷单界面中点击提交按</el-radio>
                </li>
                <li>
                  <el-radio v-model="radio" label="D">D、后台启动流程推进</el-radio>
                </li>
              </ul>

              <footer class="big-type-item-footer">
                <span>分值</span>
                <el-input-number
                  v-model="num"
                  class="input-number"
                  @change="handleChange"
                  :min="1"
                  :max="10"
                  label="描述文字"
                ></el-input-number>
                <div class="operate">
                  <el-button
                    size="mini"
                    icon="el-icon-edit"
                    @click="$emit('on-click-subsection', 'upload', scope.row,id)"
                    style="margin-left: 10px"
                  ></el-button>
                  <el-button
                    size="mini"
                    icon="el-icon-arrow-up"
                    @click="$emit('on-click-subsection', 'moveUp', scope.row,id)"
                  ></el-button>
                  <el-button
                    size="mini"
                    icon="el-icon-arrow-down"
                    @click="$emit('on-click-subsection', 'moveDown', scope.row,id)"
                  ></el-button>
                  <el-button
                    size="mini"
                    icon="el-icon-delete"
                    @click="$emit('on-click-subsection', 'delete', scope.row,id)"
                  ></el-button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>

      <div class="paper-info-footer">
        <el-button type="primary" plain>添加题型</el-button>
        <div class="paper-info-footer-right">
          <el-button>取消</el-button>
          <el-button type="primary">确定</el-button>
        </div>
      </div>
    </el-card>
    <el-card class="overview">
      <h3>试卷概览</h3>
      <ul>
        <li>总分值：100分</li>
        <li>总试题：17题</li>
        <li>共有5部分</li>
        <li>单选4题 20分</li>
        <li>多选4题 20分</li>
        <li>判断4题 20分</li>
        <li>填空4题 20分</li>
        <li>问答1题 20分</li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      item: {
        show: false
      }
    };
  },
  methods: {
    handleOpen() {
      this.item.show = !this.item.show;
    }
  }
};
</script>

<style lang="stylus">
.paper-create {
  display: flex;
  margin-top: 30px;

  .paper-info {
    position: relative;
    flex: 1;
    padding: 20px 20px 120px;

    .paper-base-info {
      border: 1px solid #EBEEF5;
      border-radius: 4px;
      padding: 40px;
    }

    .paper-info-footer {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      display: flex;
      padding: 40px 20px;
      border-top: 1px solid #EBEEF5;
      margin-top: 50px;
      

      .paper-info-footer-right {
        margin-left: auto;
      }
    }
  }

  .overview {
    width: 260px;
    margin-left: 15px;
    margin-right: 90px;
    padding: 15px 10px;

    h3 {
      font-size: 16px;
      color: #333;
      line-height: 22px;
      margin-bottom: 20px;
    }

    li {
      line-height: 30px;
      font-size: 14px;
      color: #666;
    }
  }
}

.big-type {
  margin-top: 20px;
  border: 1px solid #EBEEF5;

  .big-type-header {
    display: flex;
    padding: 12px 30px;
    line-height: 36px;
    background: #F5F7FA;
    font-size: 16px;
    color: #303030;
    border-bottom: 1px solid #EBEEF5;

    .big-type-header-right {
      margin-left: auto;
    }

    span {
      font-size: 14px;
    }

    em {
      font-size: 14px;
      font-weight: bold;
      color: #409EFF;
      padding: 0 12px 0 6px;
    }
  }

  .big-type-content {
    padding: 20px 30px;

    .big-type-item {
      padding: 25px 20px;
      border: 1px solid #EBEEF5;

      h3 {
        font-size: 16px;
        line-height: 40px;
        color: #333;
        font-weight: normal;

        span {
          float: right;
          cursor: pointer;
        }
      }

      .option-list {
        li {
          margin: 25px 0;
        }
      }

      .big-type-item-footer {
        display: flex;
        line-height: 28px;
        font-size: 14px;
        color: #666;

        .input-number {
          margin-left: 10px;
          line-height: 28px;

          .el-input__inner {
            line-height: 28px;
            height: 28px;
          }
        }

        .operate {
          margin-left: auto;
        }
      }
    }
  }
}
</style>