<template>
  <div class="create-test">
    <el-card class="create-test-form">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="题目类型">
          <el-radio v-model="form.type" label="single">单选题</el-radio>
          <el-radio v-model="form.type" label="multiple">多选题</el-radio>
          <el-radio v-model="form.type" label="judge">判断题</el-radio>
          <el-radio v-model="form.type" label="fill">填空题</el-radio>
          <el-radio v-model="form.type" label="qa">问答题</el-radio>
        </el-form-item>
        <el-form-item label="题目题干">
          <el-input type="textarea" :rows="5" placeholder="请输入题干" v-model="form.stem"></el-input>
        </el-form-item>

        <el-form-item label="题目选项" v-if="form.type === 'single'">
          <ul class="result-option">
            <li>
              <el-radio v-model="answer" label="1">A、</el-radio>
              <el-input placeholder="请输入选项内容"></el-input>
              <i class="el-icon-delete"></i>
            </li>
            <li>
              <el-radio v-model="answer" label="2">B、</el-radio>
              <el-input placeholder="请输入选项内容"></el-input>
              <i class="el-icon-delete"></i>
            </li>
            <li>
              <el-radio v-model="answer" label="3">C、</el-radio>
              <el-input placeholder="请输入选项内容"></el-input>
              <i class="el-icon-delete"></i>
            </li>
            <li>
              <el-radio v-model="answer" label="4">D、</el-radio>
              <el-input placeholder="请输入选项内容"></el-input>
              <i class="el-icon-delete"></i>
            </li>
          </ul>
        </el-form-item>

        <el-form-item label="题目选项" v-if="form.type === 'multiple'">
          <el-checkbox-group v-model="answer">
            <ul class="result-option">
              <li>
                <el-checkbox label="A">A、</el-checkbox>
                <el-input placeholder="请输入选项内容"></el-input>
                <i class="el-icon-delete"></i>
              </li>
              <li>
                <el-checkbox label="2">B、</el-checkbox>
                <el-input placeholder="请输入选项内容"></el-input>
                <i class="el-icon-delete"></i>
              </li>
              <li>
                <el-checkbox label="3">C、</el-checkbox>
                <el-input placeholder="请输入选项内容"></el-input>
                <i class="el-icon-delete"></i>
              </li>
              <li>
                <el-checkbox label="4">D、</el-checkbox>
                <el-input placeholder="请输入选项内容"></el-input>
                <i class="el-icon-delete"></i>
              </li>
            </ul>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="题目选项" v-if="form.type === 'judge'">
          <ul class="result-option">
            <li>
              <el-radio v-model="answer" label="1">A、正确</el-radio>
              <i class="el-icon-delete"></i>
            </li>
            <li>
              <el-radio v-model="answer" label="2">B、错误</el-radio>
              <i class="el-icon-delete"></i>
            </li>
          </ul>
        </el-form-item>

        <el-form-item label="题目答案" v-if="form.type === 'fill'">
          <el-input placeholder="请输入问题答案" v-model="answer"></el-input>
        </el-form-item>

        <el-form-item label="题目答案" v-if="form.type === 'qa'">
          <el-alert
            style="line-height: 18px;margin-bottom: 15px"
            title="问答题型需要管理员在后台阅卷并打分，系统无法自动打分"
            type="warning"
            show-icon
          ></el-alert>
          <el-input type="textarea" :rows="5" placeholder="请输入内容（选填）" v-model="answer"></el-input>
        </el-form-item>

        <el-form-item label="答案解析">
          <el-input type="textarea" :rows="5" placeholder="请输入内容（选填）" v-model="form.stem"></el-input>
        </el-form-item>
        <el-form-item label="题目难度">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="题目来源">
          <el-select v-model="form.region" placeholder="请选择课程">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.region" placeholder="请选择章节">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.region" placeholder="请选择小节">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card style="text-align: right" class="test-create-footer">
      <el-button>取消</el-button>
      <el-button type="primary">确定</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type: "single"
      },
      answer: ""
    };
  }
};
</script>

<style lang="stylus">
.create-test {
  .result-option {
    li {
      display: flex;
      height: 47px;
      padding: 0 20px;
      line-height: 47px;
      border-bottom: 1px solid #EBEEF5;

      .el-radio {
        line-height: 47px;
        margin-right: 0px;
      }

      .el-input__inner {
        border: none;
      }

      .el-icon-delete {
        display: block;
        margin-left: auto;
        width: 28px;
        height: 28px;
        margin-top: 10px;
        font-size: 14px;
        line-height: 1;
        border: 1px solid #DCDFE6;
        padding: 6px;
        cursor: pointer;
      }
    }
  }
}

.create-test-form {
  padding: 40px 20px;
}
</style>