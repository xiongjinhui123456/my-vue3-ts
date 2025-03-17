<template>
  <div class="login">
    <div style="margin-bottom: 10px">
      <h2>登录</h2>
    </div>
    <el-form
      @submit.prevent="handleLogin"
      :model="form"
      label-width="auto"
      style="max-width: 600px"
      autocomplete="new-password"
    >
      <el-form-item label="用户名">
        <El-Input
          v-model="form.username"
          type="text"
          id="username"
          placeholder="请输入用户名"
          required
          autocomplete="new-password"
        />
      </el-form-item>
      <el-form-item label="密码">
        <El-Input
          v-model="form.password"
          type="password"
          id="password"
          placeholder="请输入密码"
          required
          autocomplete="new-password"
        />
      </el-form-item>
      <div style="display: flex; justify-content: space-evenly">
        <el-Button type="primary" style="width: 30%">登录</el-Button>
        <el-Button type="default" style="width: 30%">注册</el-Button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
  // 简单的登录验证逻辑（根据实际需求可以用 API 请求进行验证）
  if (username.value === 'admin' && password.value === '1234') {
    // 登录成功，跳转到首页
    router.push('/');
  } else {
    alert('用户名或密码错误');
  }
};

const form = reactive({
  username: '',
  password: '',
});
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
