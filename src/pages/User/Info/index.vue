<template>
  <div class="user-info">
    <el-card>
      <el-form label-position="left" label-width="80px" class="user-form">
        <el-form-item label="用户账号">
          <span>{{ userInfo.accounts }}</span>
        </el-form-item>
        <el-form-item label="性别">
          <span class="value">{{ userInfo.sex }}</span>
          <i class="el-icon-edit" @click="handleEdit('sex')"></i>
        </el-form-item>
        <el-form-item label="出生日期">
          <span class="value">{{ userInfo.birth }}</span>
          <i class="el-icon-edit" @click="handleEdit('birth')"></i>
        </el-form-item>
        <el-form-item label="手机号码">
          <span class="value">{{ userInfo.phone }}</span>
          <i class="el-icon-edit" @click="handleEdit('phone')"></i>
        </el-form-item>
        <el-form-item label="登录密码">
          <span class="value">{{ userInfo.password }}</span>
          <i class="el-icon-edit" @click="handleEdit('password')"></i>
        </el-form-item>
      </el-form>
    </el-card>

    <el-dialog :title="modelConfig[type].title" :visible.sync="dialogVisible" width="720px" :before-close="handleClose">
      <el-form label-width="130px" style="width: 440px">
        <el-form-item label="修改性别" v-if="modelConfig[type].type === 'sex'">
          <el-radio v-model="sex" label="1">男</el-radio>
          <el-radio v-model="radio" label="2">女</el-radio>
        </el-form-item>

        <el-form-item label="修改出生日期" v-if="modelConfig[type].type === 'birth'">
          <el-date-picker v-model="birth" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>

        <template v-if="modelConfig[type].type === 'phone'">
          <el-form-item label="当前手机号码">18215688888</el-form-item>
          <el-form-item label="新手机号码">
            <el-input placeholder="请输入手机号码" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input placeholder="请输入新的手机号码">
              <template slot="append">获取验证码</template>
            </el-input>
          </el-form-item>
        </template>

        <template v-if="modelConfig[type].type === 'password'">
          <el-form-item label="登录密码">
            <el-input placeholder="请输入当前登录密码" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input placeholder="请输入新的登录密码" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input placeholder="请再次输入新的登录密码" autocomplete="off"></el-input>
          </el-form-item>
        </template>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    this.modelConfig = {
      sex: {
        title: "修改性别",
        type: "sex"
      },
      birth: {
        title: "修改出生日期",
        type: "birth"
      },
      phone: {
        title: "修改手机号码",
        type: "phone"
      },
      password: {
        title: "修改密码",
        type: "password"
      }
    };
    return {
      userInfo: {
        accounts: "ranck",
        sex: "男",
        birth: "2020-02-02",
        phone: "18215688888",
        password: "*****"
      },
      dialogVisible: false,
      type: "sex",
      accounts: "ranck",
      sex: "男",
      birth: "2020-02-02",
      phone: "18215688888",
      password: "*****"
    };
  },
  methods: {
    handleEdit(type) {
      this.type = type;
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="stylus">
.user-form {
  padding: 40px;

  .value {
    display: inline-block;
    width: 210px;
  }

  i:hover {
    color: $primaryColor;
    cursor: pointer;
  }
}
</style>