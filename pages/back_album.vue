<template>
  <div>
    <div class="content-header">
      <h1>管理<small>album管理</small></h1>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理</el-breadcrumb-item>
        <el-breadcrumb-item>album管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="app-container">
      <div class="box">
        <div class="filter-container">
          <!--查询表单-->
          <el-form :inline="true">
            <el-form-item label="相册名称">
              <el-input
                v-model="searchMap.title"
                placeholder="相册名称"
                class="filter-item"
              ></el-input
            ></el-form-item>

            <el-button class="dalfBut" @click="fetchData()">查询</el-button>
            <el-button
              type="primary"
              class="butT"
              @click="
                formVisible = true;
                pojo = {};
                imageUrl = '';
              "
              >新增</el-button
            >
          </el-form>
        </div>

        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="id" label="编号" width="80"></el-table-column>
          <el-table-column
            prop="title"
            label="相册名称"
            width="80"
          ></el-table-column>
          <el-table-column prop="image" label="相册封面" width="80">
            <template slot-scope="scope">
              <img width="98px" height="35px" :src="scope.row.image" />
            </template>
          </el-table-column>
          <el-table-column
            prop="image_items_num"
            label="图片数量"
            width="80"
          ></el-table-column>
          <el-table-column prop="seq" label="排序" width="80"></el-table-column>
          <el-table-column
            prop="album_desc"
            label="描述"
            width="80"
          ></el-table-column>
          <el-table-column label="设置">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="goList(scope.row.id)"
                >图片列表</el-button
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

        <!--弹出窗口-->
        <el-dialog
          :title="pojo.id == null ? '添加相册' : '编辑相册'"
          :visible.sync="formVisible"
        >
          <el-form label-width="100px">
            <el-form-item label="相册名称">
              <el-input
                aria-placeholder="请输入相册名称"
                v-model="pojo.title"
              ></el-input>
            </el-form-item>

            <el-form-item label="相册封面">
              <el-upload
                name="albumCover"
                class="avatar-uploader"
                action="http://localhost:9000/v1/admin-service/album/coverUpload"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="排序"
              ><el-input v-model="pojo.seq"></el-input
            ></el-form-item>

            <el-form-item label="描述"
              ><el-input v-model="pojo.album_desc"></el-input
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
</template>

<script>
import { Message } from "element-ui";
export default {
  layout: "back_default",
  data() {
    return {
      tableData: [],
      currentPage: 1,
      total: 10,
      size: 10,
      searchMap: { title: "" },
      pojo: {},
      formVisible: false,
      imageUrl: "",
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      //条件查询加分页查询
      let { data: table_data } = await this.$axios.$post(
        `/admin-service/album/findPage?page=${this.currentPage}&size=${this.size}`,
        this.searchMap
      );

      this.tableData = table_data.data.rows;
      this.total = table_data.data.total;
      this.imageUrl = "";
    },
    async save() {
      //从对话框中取出图片本地地址,存入到代保存对象中
      this.pojo.image = this.imageUrl;
      //通过判断id参数是否存在，来决定是增加还是修改
      //添加商品
      let { data: add_res } = await this.$axios.$post(
        `/admin-service/album/${this.pojo.id == null ? "add" : "update"}`,
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
      this.formVisible = true; // 打开窗口
      // 调用查询
      this.formVisible = true;
      let { data: old_pojo } = await this.$axios.$get(
        `/admin-service/album/findById?id=${id}`
      );
      this.pojo=old_pojo.data
       this.imageUrl=this.pojo.image //显示图片  如页面有图片上传功能放开注释
    },
    dele(id) {
      this.$confirm("确定要删除此记录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then( async () => {
         let { data: dele_res } = await this.$axios.$get(
          `/admin-service/album/delete?id=${id}`
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
    goList(id) {
      this.$router.push("/back_album_list?id=" + id);
    },

    handleAvatarSuccess(res) {
      this.imageUrl = res.response;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt1M = file.size / 1024 / 1024 < 1;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt1M) {
        this.$message.error("上传头像图片大小不能超过 1MB!");
      }
      return isJPG && isLt1M;
    },
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
  border-color: #409eff;
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