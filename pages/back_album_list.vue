<template>
  <div>
    <div class="content-header">
      <h1>管理<small>album管理</small></h1>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理</el-breadcrumb-item>
        <el-breadcrumb-item>album管理</el-breadcrumb-item>
        <el-breadcrumb-item>图片列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="app-container">
      <div class="box">
        <el-button
          type="primary"
          class="butT"
          @click="
          $router.push('/back_album');
          "
          >返回</el-button
        >
        <el-button
          type="primary"
          class="butT"
          @click="
            formVisible = true;
            imageUrl = '';
          "
          >上传图片</el-button
        >

        <el-table :data="tableData" border style="width: 100%">

           <el-table-column  label="序号" width="80">
             <template slot-scope="scope">
            {{scope.$index+1}}
             </template>
           </el-table-column>
          <el-table-column
            
            label="图片（点击可查看大图）"
            width="200"
          >
            <template slot-scope="scope">
              <div class="demo-image__preview">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="scope.row"
                  :preview-src-list="tableData"
                >
                </el-image>
              </div>
              
            </template>
          </el-table-column>
          <el-table-column  label="图片URL" width="800">
            <template slot-scope="scope">
              {{scope.row}}
            </template>
            

          </el-table-column>
          
                
          <el-table-column label="操作">
            <template slot-scope="scope">
            
              <el-button @click="dele(scope.$index)" size="mini" type="danger"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      

        <!--弹出窗口-->
        <el-dialog
          title="上传图片"
          :visible.sync="formVisible"
        >
          <el-form>
            <el-form-item label="选择本地图片">
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
      album_id: this.$route.query.id,
      tableData: [],
      searchMap: { title: "" },
      pojo: {},
      formVisible: false,
      imageUrl: "",
      srcList: [
        
        ]
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      //根据id查相册
      
      let { data: album_pojo } = await this.$axios.$get(
        `/admin-service/album/findById?id=${this.album_id}`
      );
      this.pojo=album_pojo.data
      this.tableData=album_pojo.data.image_items.split(",")
      
    },
    async save() {
      //从对话框中取出图片本地地址,存入到代保存对象中
      this.pojo.image_items +=( ","+this.imageUrl);
      this.pojo.image_items_num+=1
    
      //通过判断id参数更新album
      let { data: add_res } = await this.$axios.$post(
        `/admin-service/album/update`,
        this.pojo
      );
      if (add_res.errno == 0) {
        //操作成功
        this.formVisible = false;
        this.fetchData();
        Message({
          message: `添加图片成功`,
          type: "success",
          duration: 2000,
        });
      } else {
        //操作成功
        Message({
          message: `添加图片失败`,
          type: "error",
        });
      }

     
    },
   
    dele(index) {
      this.$confirm("确定要删除此记录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        let new_items_str=""
        for(let i=0;i<this.tableData.length;i++){
          if(i!=index){
            new_items_str+=(this.tableData[i]+",")
          }
        }
        this.pojo.image_items=new_items_str.substring(0,new_items_str.length-1)
         this.pojo.image_items_num-=1
        let { data: dele_res } = await this.$axios.$post(
        `/admin-service/album/update`,
        this.pojo
      );
      if (dele_res.errno == 0) {
        //操作成功
        this.formVisible = false;
        this.fetchData();
        Message({
          message: `删除图片成功`,
          type: "success",
          duration: 2000,
        });
      } else {
        //操作成功
        Message({
          message: `删除图片失败`,
          type: "error",
        });
      }
     
      });
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