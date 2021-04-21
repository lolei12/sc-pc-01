<template>
  <div>
    <div class="content-header">
      <h1>管理<small>spec管理</small></h1>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理</el-breadcrumb-item>
        <el-breadcrumb-item>spec管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="app-container">
      <div class="box">
        <div class="filter-container">
          <!--查询表单-->
          <el-form :inline="true">
            <el-form-item label="规格名称">
              <el-input
                v-model="searchMap.spec_name"
                placeholder="请输入规格名称"
                class="filter-item"
              ></el-input
            ></el-form-item>         
            <el-button class="dalfBut" @click="fetchData()">查询</el-button>
            <el-button
              type="primary"
              class="butT"
              @click="
                formVisible = true;
                pojo = { template_id: template_id };
              "
              >新增</el-button
            >
            <el-button type="primary" @click="goTemplate()">模板列表</el-button>
          </el-form>
        </div>

        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="id" label="ID" width="80"></el-table-column>
          <el-table-column
            prop="spec_name"
            label="名称"
            width="200"
          ></el-table-column>
          <el-table-column
            prop="options_str"
            label="规格选项"
            width="300"
          ></el-table-column>
          <el-table-column
            prop="category_id"
            label="分类id"
            width="300"
          ></el-table-column>

          <el-table-column prop="seq" label="排序" width="80"></el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="edit(scope.row.id)" size="mini" type="primary"
                >修改</el-button
              >
              <el-button @click="dele(scope.row.id)" size="mini" type="danger"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-container">
          <el-pagination
            class="pagiantion"
            @size-change="fetchData"
            @current-change="fetchData"
            :current-page.sync="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          >
          </el-pagination>
        </div>
        <div class="add-form">
          <!--弹出窗口-->
          <el-dialog
            :title="pojo.id == null ? '添加规格' : '编辑规格'"
            :visible.sync="formVisible"
          >
            <el-form label-width="80px">
              <el-form-item label="名称"
                ><el-input v-model="pojo.spec_name"></el-input
              ></el-form-item>
              <el-form-item label="规格选项">
                <el-input
                  v-model="pojo.options_str"
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 5 }"
                ></el-input>
              </el-form-item>
              <el-form-item label="分类ID">
                <el-input
                  v-model="pojo.category_id"
                ></el-input>
              </el-form-item>
              <el-form-item label="排序"
                ><el-input v-model="pojo.seq"></el-input
              ></el-form-item>

              <el-form-item>
                <el-button type="primary" @click="save()">保存</el-button>
                <el-button @click="formVisible = false">关闭</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui';
export default {
    layout: "back_default",
     head: {
   
    link: [  
      
    ],
    script: [
    { type: 'text/javascript', href: '/js/util.js' }
    ]
  },
     data(){
            return {
                
                tableData: [],
                currentPage: 1,
                total: 10,
                size: 10,
                searchMap: {},
                pojo: {},
                formVisible: false,
                imageUrl: '',
                template_id: this.$route.query.id
            }
        },
        mounted(){
            this.searchMap={template_id: this.$route.query.id,spec_name:''}
          
            this.fetchData();
        },
        methods:{
            async fetchData (){
                  //条件查询加分页查询
      let { data: table_data } = await this.$axios.$post(
        `/admin-service/spec/findPage?page=${this.currentPage}&size=${this.size}`,
        this.searchMap);

      this.tableData = table_data.data.rows;
      this.total = table_data.data.total;
            },
         async  save (){
        //传到后台之前要将回车换为逗号
                this.pojo.options_str= this.pojo.options_str.replace(/\n/g,",")
               //通过判断id参数是否存在，来决定是增加还是修改
      //添加规格
     
      let { data: add_res } = await this.$axios.$post(
        `/admin-service/spec/${this.pojo.id == null ? "add" : "update"}`,
        this.pojo
      );
      if (add_res.errno == 0) {
        //操作成功
        this.formVisible = false;
        this.fetchData();

        Message({
          message: `${this.pojo.id == null ? "添加" : "修改"}成功`,
          type: "success",
          duration: 2000,
        });
      } else {
        //操作失败
        Message({
          message: `${this.pojo.id == null ? "添加" : "修改"}失败`,
          type: "error",
        });
      }
            },
        async    edit (id){
                //打开窗口
      this.formVisible = true;
      let { data: old_pojo } = await this.$axios.$get(
        `/admin-service/spec/findById?id=${id}`
      );
      this.pojo = old_pojo.data;
    
      //取出规格信息以换行形式展示
      this.pojo.options_str=this.pojo.options_str.replace(/,/g,"\n")
            },
        async   dele (id){
                 this.$confirm("确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        //回调函数
        //执行删除

        let { data: dele_res } = await this.$axios.$get(
          `/admin-service/spec/delete?id=${id}`
        );
        if (dele_res.errno == 0) {
          //操作成功
          this.formVisible = false;
          this.fetchData();
          Message({
            message: `删除成功`,
            type: "success",
            duration: 2000,
          });
        } else {
          //操作成功
          Message({
            message: `删除失败`,
            type: "error",
          });
        }
      });
            },
            goTemplate(){
                this.$router.push("/back_template")
            }
        }

}
</script>

<style>
</style>