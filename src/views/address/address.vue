<style lang="less" >
.address-wrap {
  .van-popup--bottom {
    background-color: #fafafa;
  }
  .van-switch-cell .van-switch {
    font-size: 24px !important;
  }
  .van-switch__node {
    font-size: 24px !important;
  }
}
</style>
<template>
  <div class="address-wrap">
    <van-address-list
      v-model="chosenAddressId"
      
      :list="list"
      default-tag-text="默认"
      :switchable = "switchable"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
      
    />
    <van-popup v-model="address_edit_show" closeable position="bottom" :style="{ height: '100%' }">
      <van-address-edit
        :area-list="areaList"
        :show-delete="show_delete"
        show-set-default
        :address-info="AddressInfo"
        
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
import area from "@/libs/area.js";
import { add_address, address_list, delete_address } from "_api/score_mall";
export default {
  name: 'addressMan',
  data() {
    return {
      show_delete:false,
      areaList: area,
      address_edit_show: false,
      switchable: false,
      chosenAddressId: '',
      list: [
      ],
      AddressInfo:{
      },
      goods_id:null
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created(){
    this.goods_id = this.$route.query.goods_id
    if(this.goods_id){
      this.switchable = true
    }
  },
  mounted() {
    this.get_list();
  },
  methods: {
    onSelect(val){
      console.log(1231231,val)
      this.$router.push({ 
        path: '/settlement', 
        query: { 
          id: this.goods_id,
          address_id: val.id
        }
      })
    },
    get_list() {
      address_list({
        user_id: this.user.id
      }).then(res => {
        this.list = res.data.list.map(item => {
          return {
            id: item.id,
            name: item.name,
            tel: item.tel,
            address: item.province + item.city + item.district + item.address,
            province: item.province,
            city: item.city,
            county: item.district,
            addressDetail: item.address,
            isDefault:item.sort,
            areaCode:item.areaCode
          };
        });
      });
    },
    onSave(content) {
      console.log(content)
      let {
        id,
        name,
        tel,
        province,
        city,
        county,
        addressDetail,
        isDefault,
        areaCode
      } = content;
      let district = county;
      let address = addressDetail;
      let sort = isDefault;
      let user_id = this.user.id;
      add_address({
        id, //新增不传 编辑传id
        user_id, //用户id
        province, //省
        city, //市
        district, //区
        name, //收货人姓名
        tel, //收货人电话
        sort, //设为默认地址
        address,//详细地址
        areaCode
      }).then(res => {
        if (res.code == 0) {
          this.address_edit_show = false;
          this.get_list()
        }
      });
    },
    onDelete(content) {
      
      delete_address({
        user_id: this.user.id,
        id: content.id
      }).then(res=>{
        this.address_edit_show = false;
        this.get_list()
      })
    },
    onAdd() {
      this.address_edit_show = true;
      this.AddressInfo = {}
      this.show_delete = false
  
    },
    onEdit(item, index) {
      // this.$toast("编辑地址:" + index);
      this.address_edit_show = true;
      this.AddressInfo = item
      this.show_delete = true
    }
  }
};
</script>

