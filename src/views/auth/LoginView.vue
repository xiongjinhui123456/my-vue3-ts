<template>
  <div class="login">
    <b style="margin-bottom: 10px; font-size: 24px">登 录</b>
    <el-form
      :model="form"
      label-width="auto"
      style="width: 500px"
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
          show-password
          id="password"
          placeholder="请输入密码"
          required
          autocomplete="new-password"
        />
      </el-form-item>
      <div style="display: flex; justify-content: space-evenly">
        <el-Button type="primary" @click="handleLogin" style="width: 100%"
          >登录</el-Button
        >
        <el-Button type="default" style="width: 100%" @click="handleRegister"
          >注册</el-Button
        >
      </div>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { login } from '@/api/auth';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = reactive({
  username: '',
  password: '',
});
const handleLogin = async () => {
  try {
    const res = await login({ ...form });
    if(res){
      localStorage.setItem('token',res.data.token)
    }

    router.push('/');
  } catch (err) {
    console.log(err);
  }
};

const handleRegister = async () => {
  // 跳转到注册页面
  router.push('/register');
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: beige;
  padding: 50px;
}
</style>
