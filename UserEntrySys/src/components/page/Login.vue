<template>
    <div class="container">
        <div class="logo">
            <img src="" alt="好易点数字化工厂战略指挥中心logo">
            <span>好易点数字化工厂战略指挥中心</span>
        </div>
        <div class="main">
            <el-form id="formLogin" :model="user" :rules="rules"  class="user-layout-login"  ref="formLogin" >
                <el-form-item prop="uname">
                    <el-input  v-model="user.uname"
                    size="large"
                    type="text"
                    placeholder="用户名"
                     prefix-icon="el-icon-user"
                    >
                       
                    </el-input>
                </el-form-item>
                <el-form-item prop="pwd">
                    <el-input  v-model="user.pwd"
                    size="large"
                    type="password"
                    autocomplete="false"
                    placeholder="密码" 
                    prefix-icon="el-icon-lock"
                    >
                        
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button 
                    size="large"
                    type="primary"
                    htmlType="submit"
                    class="login-button"
                    @click="loginSubmit()"
                    >登录</el-button>
                
                    <!-- <el-button
                    style="margin-top: 18px;"
                    size="large"
                    type="primary"
                    class="login-button"
                    
                    >申请域</el-button> -->
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { Login } from '../../api/index';
export default {
    data: function () {
         return {
            rules: {
                uname: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            },
            user:{
                'uname': 'admin',
                'pwd':'1234',
                '_app':'emp-adm'
            }
        }
    },
    methods:{
        loginSubmit(){
           Login(this.user).then((res)=>{
               // console.log();
                if(res[0]=='0')
                {
                    this.$router.push({path:'/'});
                }
                else
                {
                    alert(res[1]);
                }
               
           });
        }
    }
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    background:#f0f2f5 url(../../assets/bg.png); 
    padding:110px 0 144px;
    
}
.logo{
     min-width: 260px;
    width:500px;
    margin: 0 auto;
    text-align: center;
    }
.logo img{height: 44px;   vertical-align: top;}
.logo span{font-size: 33px;display: inline-block;line-height: 44px;margin-left: 10px;   
 font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
 font-weight: 600;position: relative;
    top: 2px;
}
.main{
    min-width: 260px;
    width: 368px;
    margin: 0 auto;
    margin-top: 20px;
}
 .login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }
  .el-button+.el-button {
    margin-left: 0px;
}
</style>