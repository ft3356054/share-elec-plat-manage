<template>
    <div class="container">
       <div style="width:100%;background-color: #636363; overflow: hidden">
            <span class="demonstration" style="float:left;padding-top:10px;color:white;margin-left:1%">
                网站首页
            </span>
      <span class="demonstration" style="float:left;padding:5px;color:white;margin-left:2%;width:15%">
                <el-input
                  placeholder="请输入"
                  icon="search"
                  v-model="searchCriteria"
                  :on-icon-click="handleIconClick">
                </el-input>
            </span>
      <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    admin<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </span>
    </div>
 
    <div style="margin-top:5px">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="4">
          <div>
            <el-menu :unique-opened="true"  class="el-menu-vertical-demo"  @select="handleSelect" >
                
            <el-submenu  v-for="item1 in list" :key="item1.id" :index="item1.id">
            <!--表示可以展开的一组 -->
            <template slot="title">
              <span @click="clickTitle(item1)">{{item1.text}}</span>
              <span @click="clickTitle(item1)">^</span>
            </template>

            <el-menu-item  class="menuItem" @click="clickMenuItem" v-for="item2 in item1.children" :key="item2.id" :index="item2.id">
              <span>{{item2.name}}</span>
            </el-menu-item>

          </el-submenu>

            </el-menu>
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20">
          <div style="margin-top:10px">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            menuData:[
                {
                    name: "企业信息管理",
                    order: "1",
                    id:'1',
                    children: [
                        // {
                        // name: "企业信息",
                        // id:'1'
                        // },
                        // {
                        // name: "企业信息",
                        // id:'2'
                        // },
                    ],
                },
                {
                    name: "岗位信息管理",
                    order: "2",
                    id:'2',
                    children: [
                        {
                        name: "岗位信息",
                        id:'3'
                        },
                    ],
                },
                {
                    name: "订单信息管理",
                    order: "3",
                    id:'3',
                    children: [
                        {
                        name: "订单信息",
                        id:'4'
                        },
                    ],
                },
                {
                    name: "数据字典",
                    order: "4",
                    id:'4',
                    children: [
                        {
                        name: "岗位类型",
                        id:'5'
                        },
                    ],
                },
            ],
            searchCriteria:'',
            list:[]
      };
    },
    mounted(){
        this.getlist()
    },
    methods: {
        getlist(){
            this.$api.get('authorityUserRole/leftTree/userid1',{

       },response=>{
           this.list=response.data.resultValue.nodes
       })
        },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleIconClick(){

      },
    clickMenuItem(){

    },
    clickTitle(item){
        var child=[{name:"安顿好即可倒是",id:'1'},{name:"安顿好即可倒是1",id:'2'}]
        console.log(item)
        item.children=child
        console.log(item)
        var key=item.id
        // console.log(item)
        switch(key){
             case '1':
            this.$router.push('/Page1');
            break;
            case '2':
            this.$router.push('/Page2')
            break;
            case '3':
            this.$router.push('/Page3')
            break;
        }
    },
      handleSelect(key, keyPath){
          console.log(key,keyPath)
        switch(key){
          case '1':
            this.$router.push('/Page1');
            console.log(111)
            break;
          case '2':
            this.$router.push('/Page2')
            break;
          case '3':
            this.$router.push('/Page3')
            break;
        }
      },
    }
}
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100%;
    .el-container{
        width: 100%;
        height: 100%;
        .el-header,.el-main{
            margin: 0;
            padding: 0;
        }
    }
    /deep/ .el-submenu__icon-arrow{
        display: none !important;
    }
}
</style>