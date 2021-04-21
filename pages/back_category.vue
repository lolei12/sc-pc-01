<template>
  <div>
    <div class="content-header">
      <h1>管理<small>category管理</small></h1>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理</el-breadcrumb-item>
        <el-breadcrumb-item>category管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="app-container">
      <div class="box">
        <div class="filter-container">
          <el-button
            type="primary"
            class="butT"
            @click="
              formVisible = true;
              pojo = { parent_id: searchMap.parent_id };
            "
            >新增</el-button
          >
          <el-button type="primary" class="butT" @click="returnQuery()"
            >返回上级</el-button
          >
        </div>

        <el-table :data="tableData" border style="width: 100%">
          <el-table-column
            prop="id"
            label="分类ID"
            width="80"
          ></el-table-column>
          <el-table-column
            prop="cat_name"
            label="分类名称"
            width="200"
          ></el-table-column>
          <el-table-column
            prop="goods_num"
            label="商品数量"
            width="80"
          ></el-table-column>

          <el-table-column label="级别" width="80">
            <template>
              {{ parentIds.length + 1 }}
            </template>
          </el-table-column>
          <el-table-column label="是否显示" width="80">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.is_show"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-value="1"
                inactive-value="0"
                disabled
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="是否导航" width="80">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.is_menu"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-value="1"
                inactive-value="0"
                disabled
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="seq" label="排序" width="80"></el-table-column>
          <el-table-column label="模板" width="200">
            <template slot-scope="scope">
              <el-select
                v-model="scope.row.template_id"
                disabled
                placeholder="请选择"
              >
                <el-option
                  v-for="item in templateList"
                  :key="item.id"
                  :label="item.template_name"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="设置">
            <template slot-scope="scope">
              <el-button
                v-if="parentIds.length < 2"
                @click="queryByParentId(scope.row.id)"
                size="mini"
                type="primary"
                >查看下级</el-button
              >
            </template>
          </el-table-column>

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

        <div class="add-form">
          <!--弹出窗口-->
          <el-dialog :title="pojo.id==null?'添加分类':'编辑分类'"  :visible.sync="formVisible">
            <el-form label-width="80px">
              <el-form-item label="分类名称"
                ><el-input v-model="pojo.cat_name"></el-input
              ></el-form-item>

              <el-form-item label="是否显示">
                <el-switch
                  v-model="pojo.is_show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-value="1"
                  inactive-value="0"
                  
                >
                </el-switch>
              </el-form-item>
              <el-form-item label="是否导航">
                <el-switch
                  v-model="pojo.is_menu"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-value="1"
                  inactive-value="0"
                  
                >
                </el-switch>
              </el-form-item>
              <el-form-item label="排序"
                ><el-input v-model="pojo.seq"></el-input
              ></el-form-item>

              <el-form-item label="模板ID">
                <el-select
                  v-model="pojo.template_id"
                  filterable
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in templateList"
                    :key="item.id"
                    :label="item.template_name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

             

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
import { Message } from "element-ui";
export default {
  layout: "back_default",
  data() {
    return {
      tableData: [],
      searchMap: { parent_id: 0 },
      pojo: {},
      formVisible: false,  
      parentIds: [],
      templateList: [],
    };
  },
 async mounted() {
    this.fetchData();
    //加载模板列表
    let { data: template_data } = await this.$axios.$get(
        `/admin-service/template/findAll`
      );
      this.templateList=template_data.data

  },
  methods: {
    async fetchData() {
       
      let { data: table_data } = await this.$axios.$post(
        `/admin-service/category/findList`,
        this.searchMap
      );
      this.tableData=table_data.data
    },
    async save() {
   
      //通过判断id参数是否存在，来决定是增加还是修改
      //添加分类
     
      let { data: add_res } = await this.$axios.$post(
        `/admin-service/category/${this.pojo.id == null ? "add" : "update"}`,
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
    async edit(id) {
       //打开窗口
      this.formVisible = true;
      let { data: old_pojo } = await this.$axios.$get(
        `/admin-service/category/findById?id=${id}`
      );
      this.pojo = old_pojo.data;
    },
     async dele(id) {
      this.$confirm("确定要删除此分类及其所有子分类吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async() => {
         //回调函数
        //执行删除

        let { data: dele_res } = await this.$axios.$get(
          `/admin-service/category/delete?id=${id}`
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
            duration: 2000,
          });
        }
       
      });
    },
    queryByParentId(parentId) {
      //做记号,压栈保存点击商品分类的记号
      this.parentIds.push(this.searchMap.parent_id);
      this.searchMap.parent_id = parentId;
      this.fetchData();
    },
    returnQuery() {
      if (this.parentIds.length > 0) {
        this.searchMap.parent_id = this.parentIds[this.parentIds.length - 1];
        this.parentIds.splice(this.parentIds.length - 1, 1); //删除数组最后一个元素
        this.fetchData();
      }
    },
  },
};
</script>

<style>
</style>