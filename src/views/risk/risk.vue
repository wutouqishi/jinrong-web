<style lang="less">
@import "./risk.less";
</style>
<template>
  <div class="risk-wrap">
    <img class="banner" :src="banner_risk" alt />
    <div class="column-title">
      <h4>
        <span>专业的风控团队</span>
      </h4>
      <h5>Professional wind control team</h5>
    </div>

    <div class="ri-title">
      <img class="icon" :src="icon_1" alt />
      <p class="ti">银行高管 大型国企的尖端人才</p>
    </div>

    <div class="ri-title">
      <img class="icon" :src="icon_2" alt />
      <p class="ti">资管、信托、基金等行业的专业人才</p>
    </div>

    <div class="mode">
      <div class="column-title">
        <h4>
          <img class="icon" :src="icon_3" alt />
          <span>顶尖的顾问团队</span>
        </h4>
        <h5>Top consultant team</h5>
      </div>
      <p class="txt">我公司聘请了一支包括专家、学者、律师在内的顾问团队。</p>
      <p class="txt">该团队主要负责公司相关业务的风险控制、监测与管理工作；协助管理团队制定公司风险管理的目标、制度。</p>
    </div>

    <div class="mode-two">
      <div class="column-title">
        <h4>
          <span>多样化风控措施</span>
        </h4>
        <h5>Diversified wind control measures</h5>
      </div>
      <div class="mo-li">
        <div class="left">
          <img class="icon" :src="icon_4" alt />
          <p class="txt">风控标准</p>
        </div>
        <ul class="ul">
          <li class="li">1、主体、构架、项目合法合规标准</li>
          <li class="li">2、发行方、担保方、受托投资方等财务实力、信用等级标准</li>
          <li class="li">3、资金投向、项目质量标准</li>
          <li class="li">4、产品部对主体、担保方、现场尽调标准</li>
          <li class="li">5、第三方监管机构有效性标准</li>
        </ul>
      </div>
      <div class="mo-li">
        <div class="left">
          <img class="icon" :src="icon_5" alt />
          <p  class="txt">风控体系</p>
        </div>
        <ul class="ul">
          <li class="li">1、评审委对项目审批</li>
          <li class="li">2、发行额度、期限实时管控</li>
          <li class="li">3、人行征信系统查询</li>
          <li class="li">4、产品风险等级测评</li>
          <li class="li">5、资金银行监管</li>
        </ul>
      </div>
      <div class="mo-li">
        <div class="left">
          <img class="icon" :src="icon_6" alt />
          <p  class="txt">风险防范</p>
        </div>
        <ul class="ul">
          <li class="li">1、产品部对项目尽职调查</li>
          <li class="li">2、法律合规、风险管理部对项目风控评审标准</li>
          <li class="li">3、项目评审委员会对项目综评审核标准</li>
          <li class="li">4、产品发行过程合规，后期实时跟踪</li>
          <li class="li">5、抽查投资者所做业务调查</li>
          <li class="li">6、实时跟踪项目付息及兑付情况</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import banner_risk from "@/assets/img/banner-risk.jpg";
import icon_1 from "@/assets/img/icon-1.png";
import icon_2 from "@/assets/img/icon-2.png";
import icon_3 from "@/assets/img/icon-3.png";
import icon_4 from "@/assets/img/icon-4.png";
import icon_5 from "@/assets/img/icon-5.png";
import icon_6 from "@/assets/img/icon-6.png";
export default {
  name:'risk',
  data() {
    return {
      banner_risk,
      icon_1,
      icon_2,
      icon_3,
      icon_4,
      icon_5,
      icon_6
    };
  }
};
</script>