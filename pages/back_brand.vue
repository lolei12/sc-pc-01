<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="品牌名称">
        <el-input
          plcaeholder="请输入品牌名称"
          v-model="searchMap.brand_name"
        ></el-input>
      </el-form-item>
      <el-form-item label="品牌首字母">
        <el-input
          plcaeholder="请输入品牌首字母"
          v-model="searchMap.letter"
        ></el-input>
      </el-form-item>
      <el-button type="primary" @click="fetchData()">查询</el-button>
      <el-button type="primary" @click="(pojo = {},imageUrl=''), (formVisible = true)"
        >新增</el-button
      >
    </el-form>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="brand_name" label="名称"> </el-table-column>
      <el-table-column prop="letter" label="首字母" width="180">
      </el-table-column>
      <!-- 图片与修改按钮都为模板列 -->
      <el-table-column label="图片" width="180">
        <template slot-scope="scope">
          <img width="98px" height="35px" :src="scope.row.logo" />
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

    <el-dialog :title="pojo.id==null?'添加品牌':'编辑品牌'" :visible.sync="formVisible">
      <el-form label-width="100px">
        <!-- label-width不指定的话，标签默认占一行 -->
        <el-form-item label="品牌名称">
          <el-input
            plcaeholder="请输入品牌名称"
            v-model="pojo.brand_name"
          ></el-input>
        </el-form-item>
        <el-form-item label="品牌首字母">
          <el-input
            plcaeholder="请输入品牌首字母"
            v-model="pojo.letter"
          ></el-input>
        </el-form-item>
        <el-form-item label="品牌图片">
          <el-upload
            name="brandLogo"
            class="avatar-uploader"
            action="http://localhost:9000/v1/admin-service/brand/ossUpload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
          <!-- beforeupload里长做一些格式的校验 -->
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="品牌排序序号">
          <el-input
            plcaeholder="请输入品牌排序序号"
            v-model="pojo.seq"
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
      searchMap: {spec_name:''}, //查询条件保存对象
      formVisible: false,
      pojo: {},
      imageUrl:''
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
        `/admin-service/brand/findPage?page=${this.currentPage}&size=${this.size}`,
        this.searchMap
      );

      this.tableData = table_data.data.rows;
      this.total = table_data.data.total;
      this.imageUrl=''
    },
    async save() {
        //从对话框中取出图片本地地址,存入到代保存对象中
        this.pojo.logo=this.imageUrl



      //通过判断id参数是否存在，来决定是增加还是修改
      //添加商品
      let { data: add_res } = await this.$axios.$post(
        `/admin-service/brand/${this.pojo.id == null ? "add" : "update"}`,
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
        `/admin-service/brand/findById?id=${id}`
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
          `/admin-service/brand/delete?id=${id}`
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
    handleAvatarSuccess(res) {
      console.log("res")
      console.log(res);
      console.log("file")
    
       // this.imageUrl = "http://img10.360buyimg.com/popshop/jfs/t2119/133/2264148064/4303/b8ab3755/56b2f385N8e4eb051.jpg";
       
       this.imageUrl = res.response
       
       //response是上传文件具体返回的物理地址，即服务端地址便于显示
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt1M = file.size / 1024 / 1024 < 1;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt1M) {
          this.$message.error('上传头像图片大小不能超过 1MB!');
        }
        return isJPG && isLt1M;
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