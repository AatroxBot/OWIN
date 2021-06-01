<template>
  <div class="deep">
    <el-date-picker
      v-model="value2"
      type="month"
      :clearable="false"
      placeholder="" @change="changeTime" value-format="yyyy/M">
    </el-date-picker>
</div>

</template>
<script>
  export default {
    data() {
      return {
        value2: '',
      };
    },
    methods:{
      changeTime:function(){
       this.$emit('handleChange', this.value2);
      }
    }
  };
</script>
<style scoped>
.el-date-editor.el-input, .el-date-editor.el-input__inner{width: 2rem; height: 30px;}
.el-input__inner{
  background: none;
  border: none;
  height: 30px;
  line-height: 30px;
   padding: 0 15px;
}
.deep >>> input{
  border:none;
  background: none;
  color: #fff;
}
</style>