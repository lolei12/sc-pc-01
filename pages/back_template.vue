<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="模板名称">
        <el-input
          plcaeholder="请输入模板名称"
          v-model="searchMap.template_name"
        ></el-input>
      </el-form-item>
    
      <el-button type="primary" @click="fetchData()">查询</el-button>
      <el-button type="primary" @click="(pojo = {}), (formVisible = true)"
        >新增</el-button
      >
    </el-form>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="template_name" label="名称"> </el-table-column>
      <el-table-column prop="spec_num" label="规格数量"> </el-table-column>
    
     <el-table-column label="设置" >
       <template slot-scope="scope">
         <el-button @click="goSpec(scope.row.id)" size="mini" type="primary" >规格列表</el-button>
       </template>
     </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="small"
            circle
            @click="edit(scope.row.id)"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="small"
            circle
            @click="dele(scope.row.id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="fetchData"
      @current-change="fetchData"
      :current-page.sync="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>

    <el-dialog :title="pojo.id==null?'添加模板':'编辑模板'" :visible.sync="formVisible">
      <el-form label-width="100px">
        <!-- label-width不指定的话，标签默认占一行 -->
        <el-form-item label="模板名称">
          <el-input
            plcaeholder="请输入模板名称"
            v-model="pojo.template_name"
          ></el-input>
        </el-form-item>
        
       
        <el-form-item>
          <el-button @click="save()">保存</el-button>
          <el-button @click="formVisible = false">关闭</el-button>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer"> </span>
    </el-dialog>
  </div>
</template>

<script>
import { Message } from "element-ui";
export default {
  layout: "back_default",
  data() {
    return {
      tableData: [],
      currentPage: 1,
      size: 10,
      total: 10,
      searchMap: {}, //查询条件保存对象
      formVisible: false,
      pojo: {},
    
    };
  },
  async mounted() {
    //由于是后台页面不需要seo用不着asyncData

    //let {data:table_data}=await this.$axios.$get("/admin-service/brand/findAll")
    //this.tableData=table_data.data
    this.fetchData();
  },
  methods: {
    async fetchData() {
      //条件查询加分页查询
      let { data: table_data } = await this.$axios.$post(
        `/admin-service/template/findPage?page=${this.currentPage}&size=${this.size}`,
        this.searchMap 
      );

      this.tableData = table_data.data.rows;
      this.total = table_data.data.total;
    
    },
    async save() {
        //从对话框中取出图片本地地址,存入到代保存对象中
        this.pojo.logo=this.imageUrl


      //通过判断id参数是否存在，来决定是增加还是修改
      //添加商品
      let { data: add_res } = await this.$axios.$post(
        `/admin-service/template/${this.pojo.id == null ? "add" : "update"}`,
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
        //操作成功
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
        `/admin-service/template/findById?id=${id}`
      );
      this.pojo = old_pojo.data;
      //取出图片服务端地址以便显示
      this.imageUrl=this.pojo.logo
    },
    async dele(id) {
      this.$confirm("确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        //回调函数
        //执行删除

        let { data: dele_res } = await this.$axios.$get(
          `/admin-service/template/delete?id=${id}`
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
    goSpec(id){
      this.$router.push("/back_spec?id="+id)
    }
  },
};
</script>

<style>
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>