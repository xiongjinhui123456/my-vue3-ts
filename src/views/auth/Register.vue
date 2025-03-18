<template>
  <div class="login">
    <b style="margin-bottom: 10px; font-size: 24px">注册用户</b>
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
          id="password"
          placeholder="请输入密码"
          required
          autocomplete="new-password"
        />
      </el-form-item>
      <el-form-item label="邮箱">
        <El-Input
          v-model="form.email"
          type="text"
          id="email"
          placeholder="请输入邮箱"
          required
          autocomplete="new-password"
        />
      </el-form-item>
      <div style="display: flex; justify-content: space-evenly">
        <el-Button type="primary" @click="handleRegister" style="width: 50%">提&nbsp;&nbsp;&nbsp;&nbsp;交</el-Button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { register } from '@/api/auth';

const router = useRouter();

const handleRegister = async () => {
  try {
    const res = await register({ ...form });
    if(res){
      console.log(res);
      
    }

    router.push('/login');
  } catch (err) {
    console.log(err);
  }
};

const form = reactive({
  username: '',
  password: '',
  email: '',
});
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
