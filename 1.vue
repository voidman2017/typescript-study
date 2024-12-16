<template>
    <div :class="$style['bind-account-context']">
      <!-- 基础信息 -->
      <div :class="$style['bind-account-form']">
        <div :class="$style['title']">{{baseFormReadonly ? "请核对并完善以下个人信息" : "请填写以下个人信息"}}</div>
        <div v-if="!baseFormReadonly" :class="$style['explain-title']">温馨提示：请仔细核对并填写您的身份信息，信息错误将导致认证无法通过。</div>
        <div :class="$style['form-panel']" >
          <BsErrorMsg :msg="nameErrorMsg" :bsStyle="bsInputStyle">
            <div slot="content" :class="[baseFormReadonly ? $style['input-line'] : $style['change-line']]">
              <div :class="$style['input-label']">姓名</div>
              <div :class="$style['input-value']" v-if="baseFormReadonly">{{ baseInfo.name}}</div>
              <UiTextfield
                v-else
                v-model.trim="baseInfo.name"
                type="text"
                placeholder="请输入本人姓名"
                :maxlength="30"
                :textInputStyle="textInputStyle"
                :disabled="baseFormReadonly"
                @onblur="onBlur('name')"
                @clear="onClear('name')"
              ></UiTextfield>
            </div>
          </BsErrorMsg>
          <BsErrorMsg :msg="credentialNumberErrorMsg" :bsStyle="bsInputStyle">
            <div slot="content" :class="[baseFormReadonly ? $style['input-line'] : $style['change-line']]">
              <div :class="$style['input-label']">身份证号码</div>
              <div :class="$style['input-value']" v-if="false">{{ baseInfo.credentialNumber }}</div>
              <UiTextfield
                v-else
                v-model.trim="baseInfo.credentialNumber"
                type="idcard"
                placeholder="请输入本人身份证号码"
                :maxlength="18"
                :textInputStyle="textInputStyle"
                @onblur="onBlur('credentialNumber')"
                @clear="onClear('credentialNumber')"
              ></UiTextfield>
            </div>
          </BsErrorMsg>
          <BsErrorMsg :bsStyle="bsInputStyle">
            <div slot="content" :class="[baseFormReadonly ? $style['input-line'] : $style['change-line']]">
              <div :class="$style['input-label']">国籍</div>
              <div :class="$style['input-value']">{{ baseInfo.nationality}}</div>
            </div>
          </BsErrorMsg>
          <BsErrorMsg :msg="sexErrorMsg" :bsStyle="bsInputStyle">
            <div slot="content" :class="[baseFormReadonly ? $style['input-line'] : $style['change-line']]">
              <div :class="$style['input-label']">性别</div>
              <div v-if="baseFormReadonly" :class="$style['input-value']">{{ baseInfo.sex || '请选择' }}</div>
              <div v-else @click="sexChange" class="flex flex-row align-center justify-between flex-1">
                <div :class="$style['input-value']">{{ baseInfo.sex }}</div>
                <i class="icon iconfont icon-right-arrow"></i>
              </div>
            </div>
          </BsErrorMsg>
          <BsErrorMsg :msg="birthdayErrorMsg" :bsStyle="bsInputStyle" v-if="baseFormReadonly">
            <div slot="content" :class="$style['input-line']">
              <div :class="$style['input-label']">出生日期</div>
              <div :class="$style['input-value']" v-if="baseFormReadonly">{{ baseInfo.birthday | changeDate }}</div>
              <div :class="$style['input-value']" v-else>
                <UiDatePicker :class="$style['date-picker']" valueColor="main" placeholder="请输入出生日期" :value="baseInfo.birthday" @input="dateChange($event, 'birthday')"></UiDatePicker>
                <i class="icon iconfont icon-right-arrow"></i>
              </div>
            </div>
          </BsErrorMsg>
          <BsErrorMsg :bsStyle="bsInputStyle" v-if="baseFormReadonly">
            <div slot="content" :class="$style['input-line']">
              <div :class="$style['input-label']">证件有效期</div>
              <div :class="$style['date-box']">
                <div class="flex flex-row align-center pos-r">
                  <div :class="$style['date-value']">起</div>
                  <div :class="$style['input-value']">{{ baseInfo.startDate | changeDate }}</div>
                </div>
                <div class="flex flex-row align-center pos-r" :class="$style['end-box']">
                  <div :class="$style['date-value']">止</div>
                  <div :class="$style['input-value']">{{ baseInfo.endDate | changeDate }}</div>
                </div>
              </div>
            </div>
          </BsErrorMsg>
          <template v-else>
            <BsErrorMsg :msg="startDateErrorMsg" :bsStyle="bsInputStyle">
              <div slot="content" :class="$style['change-line']">
                <div :class="$style['input-label']">有效起始日期</div>
                <div :class="$style['input-value']">
                  <UiDatePicker :class="$style['date-picker']" valueColor="main" placeholder="请输入有效起始日期" :end="baseInfo.endDate" :value="baseInfo.startDate" @input="dateChange($event, 'startDate')"></UiDatePicker>
                  <i class="icon iconfont icon-right-arrow"></i>
                </div>
              </div>
            </BsErrorMsg>
            <BsErrorMsg :msg="endDateErrorMsg" :bsStyle="{ 'margin-bottom': 0 }">
              <div slot="content" :class="[$style['change-line'],$style['last-child']]">
                <div :class="$style['input-label']">有效终止日期</div>
                <div :class="[$style['input-value'], longTerm ? $style['input-value__readonly'] : '']">
                  <template v-if="longTerm">{{ baseInfo.endDate }}</template>
                  <template v-else>
                    <UiDatePicker :class="$style['date-picker']" valueColor="main" placeholder="请输入有效终止日期" :start="baseInfo.startDate" :value="baseInfo.endDate" @input="dateChange($event, 'endDate')"></UiDatePicker> 
                  </template>
                  <i class="icon iconfont icon-right-arrow"></i>
                </div>
              </div>
            </BsErrorMsg>
            <div :class="$style['change-date-box']">
              <div :class="$style['change-date-value']" @click="longTermChange">
                <i class="icon iconfont icon-select-1" v-if="longTerm":class="$style['icon-checkboxed']"></i>
                <i class="icon iconfont icon-no-select" v-else :class="$style['icon-checkbox']"></i>
                <span :class="$style['change-date-text']">长期有效</span>
              </div>
            </div>
          </template>
          <div :class="$style['input-button']" @click="inputEdit" v-if="processData.nodeIndex == 1 && inputReadonly">手动修改以上信息</div>
          <div :class="$style['bind-crs-change']" v-if="processData.nodeIndex == 2">
            <CrsInfo :params="crsInfo" :value="crsInfo.customerIdentInd" :inputReadonly="baseFormReadonly" @change="crsChange"></CrsInfo>
          </div>
          <template v-if="processData.nodeIndex == 1 && !inputReadonly">
            <BsErrorMsg :msg="crsErrorMsg" :bsStyle="bsInputStyle">
              <CrsInfo slot="content" :params="crsInfo" :value="crsInfo.customerIdentInd" @change="crsChange"></CrsInfo>
            </BsErrorMsg>
            <div :class="$style['split']"></div>
          </template>
        </div>
      </div>
  
      <!-- 税收信息 -->
      <div :class="$style['bind-account-form']" v-if="processData.nodeIndex == 1 && inputReadonly">
        <div :class="$style['split']"></div>
        <BsErrorMsg :msg="crsErrorMsg" :bsStyle="bsInputStyle">
          <CrsInfo slot="content" :params="crsInfo" :value="crsInfo.customerIdentInd" @change="crsChange"></CrsInfo>
        </BsErrorMsg>
        <div :class="$style['split']"></div>
      </div>
  
      <!-- 补充信息 -->
      <div :class="$style['bind-account-form']" >
        <div :class="$style['title']">{{"请补充以下个人信息"}}</div>
        <div :class="$style['form-panel']">
          <BsErrorMsg :msg="occupationNameErrorMsg">
            <div slot="content" :class="$style['change-line']">
              <div :class="$style['input-label']">职业</div>
              <div @click="occupationChange" class="flex flex-row align-center justify-between flex-1">
                <div :class="$style['input-value']">{{ baseInfo.occupationName || "请选择" }}</div>
                <i class="icon iconfont icon-right-arrow"></i>
              </div>
            </div>
          </BsErrorMsg>
          <BsErrorMsg :msg="incomeSourceNameErrorMsg" v-if="baseInfo.occupationTpCd == '06'">
            <div slot="content" :class="$style['change-line']">
              <div :class="$style['input-label']">收入来源</div>
              <div @click="incomeSourceChange" class="flex flex-row align-center justify-between flex-1">
                <div :class="$style['input-value']">{{ baseInfo.incomeSourceName || "请选择" }}</div>
                <i class="icon iconfont icon-right-arrow"></i>
              </div>
            </div>
          </BsErrorMsg>
          <BsErrorMsg :msg="addressErrorMsg">
            <div slot="content" :class="$style['change-line']">
              <div :class="$style['input-label']">通讯地址</div>
              <UiTextfield
                v-model.trim="baseInfo.address"
                type="textarea"
                placeholder="请输入通讯地址"
                :maxlength="50"
                :textInputStyle="textInputStyle"
                @onblur="onBlur('address')"
                @clear="onClear('address')"
              ></UiTextfield>
            </div>
          </BsErrorMsg>
        </div>  
        <div :class="$style['split']"></div>
      </div>
    </div>
  </template>
  
  <script>
  import $ from "@/core/common";
  import { mapGetters, mapState } from "vuex";
  import CrsInfo from "@/subpackages/account/components/crsInfo";
  import BsErrorMsg from "@/components/business/BsErrorMsg";
  import commonService from "@/service/common";
  import accountService from "@/service/account";
  export default {
    components: {
      CrsInfo,
      BsErrorMsg,
    },
    props: {
      params: {
        type: Object,
        defalut: () => {
          return {}
        }
      },
    },
    watch: {
      params:{
        handler(ocrInfo){
          const { name, idno, sex, birthday, startDate, endDate, address } = ocrInfo;
          this.baseInfo = {
            ...this.baseInfo,
            name,
            credentialNumber: idno,
            sex,
            address,
            birthday: birthday ? $.dateFmt.yyyy_mm_dd(birthday, "-") : "",
            // startAndEnd: startDate && endDate ? $.dateFmt.yyyy_mm_dd(startDate, "-") + " 至 " + (endDate == "长期" || endDate == "9999-12-31" ? "长期有效" : $.dateFmt.yyyy_mm_dd(endDate, "-")) : "",
            startDate: startDate ? $.dateFmt.yyyy_mm_dd(startDate, "-") : "",
            endDate: !endDate ? "" : endDate == "长期" ? "9999-12-31" : $.dateFmt.yyyy_mm_dd(endDate, "-"),
          }
          this.crsInfo = {
            ...this.crsInfo,
            idTpCd: "01", // 证件类型 01身份证
            idNum: this.baseInfo.credentialNumber, // 证件号码
            birthDt: this.baseInfo.birthday, // 出生日期
            customerIdentInd: "0", // 税收居民身份
            clientName: this.baseInfo.name, // 客户名称
          }
          this.longTerm = this.baseInfo.endDate == "9999-12-31" ? true : false;
        },
        deep: true,
        immediate: true,
      }
    },
    computed: {
      ...mapState({
        loginUser: (state) => state.account.loginUser,
      }),
      ...mapGetters({
        processData: "processData", // 开户流程临时数据
      }),
      textInputStyle() {
        return {
          display: "flex",
          alignItems: "center",
        };
      },
      baseFormReadonly(){
        return this.processData.nodeIndex === 2 || this.inputReadonly;
      },
      bsInputStyle(){
        return {
          "margin-bottom": this.baseFormReadonly ? "0" : this.$Hola.pxTransform(32),
        }
      }
    },
    data() {
      return {
        primaryColor: $.config.primaryColor,
        inputReadonly: true, // 基础信息是否只读
        baseInfo: {
          name: "", // 姓名
          credentialNumber: "", // 证件号码
          sex: "", // 性别
          birthday: "", // 出生日期
          nationality: "中国", // 国籍
          startDate: "", // 有效起期
          endDate: "", // 有效止期
          frontPicId: "", // 身份证正面附件ID
          backPicId: "", // 身份证反面附件ID
          crsTypeValue: "0", // 税收类别
          crsTypeName: "仅为中国税收居民", // 税收类别名称
          address: "", // 地址
          occupationName: "", // 职业名称
          occupationTpCd: "", // 职业代码
          incomeSourceName: "", // 收入名称
          incomeSource: "", // 收入来源代码
        },
        longTerm: false, // 是否长期
        crsIsReadyFlag: true, // 是否已完善税收信息
        crsInfo: {
          idTpCd: "01", // 证件类型 01身份证
          idNum: "", // 证件号码
          birthDt: "", // 出生日期
          customerIdentInd: "0", // 税收居民身份（ 0 仅为中国税收居民 1 仅为非中国税收居民 2 既为中国税收居民又为非中国税收居民）
          clientName: "", // 客户名称
          lastName: "", // 姓（英文或拼音）
          firstName: "", // 名（英文或拼音）
          currentCountry: "", // 现居住国家（中文）
          engCurrentCountry: "", // 现居住国家（英文或拼音）
          currentProvince: "", // 现居住省份（中文）
          engCurrentProvince: "", // 现居住省份（英文或拼音）
          currentCity: "", // 现居住城市（中文）
          currentAddress: "", // 现居住地址（中文）
          engCurrentAddress: "", // 现居住地址（英文或拼音）
          birthCountry: "", // 出生国家（中文）
          engBirthCountry: "", // 出生国家（英文或拼音）
          birthProvince: "", // 出生省份（中文）
          engBirthProvince: "", // 出生省份（英文或拼音）
          birthPlace: "", // 出生地址（中文）
          engBirthPlace: "", // 出生地址（英文或拼音）
          crsCountryTpCd: "", // 税收居民国（地区）
          perTaxId: "", // 税务信息内部序号
          taxNum: "", // 纳税人识别号
          missTaxReason: "", // 不能提供纳税人识别号的理由
          perTaxList: [], // taxId: 税务信息内部序号, countryTpCd: 税收居民国（地区）taxNum: 纳税人识别号 missTaxType: 不能提供纳税人识别号类别 missTaxReason: 不能提供纳税人识别号原因
        }, // 税收信息
        genderList: [],  // 性别
        occupatList: [], // 职业
        incomeSourceList: [], // 收入来源
        // 基础信息校验提示语
        nameErrorMsg: "",
        credentialNumberErrorMsg: "",
        sexErrorMsg: "",
        birthdayErrorMsg: "",
        startDateErrorMsg: "",
        endDateErrorMsg: "",
        // 基础信息校验提示语
        crsErrorMsg: "",
        // 补充信息校验提示语
        occupationNameErrorMsg: "",
        incomeSourceNameErrorMsg: "",
        addressErrorMsg: ""
      };
    },
    filters: {
      changeDate(value) {
        let date = value;
        if (!!value) {
          if (value == "9999-12-31") {
            date = "长期有效"
          }
        }
        return date;
      },
    },
    async created(){
      this.genderList = this.dictInfoExchange(await commonService.getDictInfo("CDGENDERTP")); // 性别
      this.occupatList = this.dictInfoExchange(await commonService.getDictInfo("CDOCCPTP")); // 职业
      this.incomeSourceList = this.dictInfoExchange(await commonService.getDictInfo("CDINCOMESOURCE")); // 收入来源
    },
    mounted(){
      this.baseInfo = {
        ...this.baseInfo,
        ...this.processData.baseInfo
      }
    },
    methods: {
      reOcrUpload(){
        this.$emit("ocrUpload")
      },
      onBlur(field){
        this.checkRuleValid(field);
      },
      onClear(field){
        this[field+"ErrorMsg"] = "";
      },
      inputEdit(){
        $.confirm("手工修改信息后，之前上传的证件照片将失效，后续若办理商业养老金业务需重新上传，是否继续？", () => {
          this.inputReadonly = false;
          this.baseInfo.frontPicId = "";
          this.baseInfo.backPicId = "";
          this.$emit("editChange", true);
        },() => {})
      },
      longTermChange(){
        this.longTerm = !this.longTerm;
        // 有效止期--长期
        if(this.longTerm == true){
          this.baseInfo.endDate = "9999-12-31";
          this.endDateErrorMsg = "";
        }else {
          this.baseInfo.endDate = "";
        }
      },
      dictInfoExchange(options = []){
        return options.map(item => {
          return {
            name: item.dictName,
            value: item.dictValue,
          }
        })
      },
      sexChange(){
        // 性别切换
        $.showActionSheet({ actions: this.genderList }, item => {
          this.baseInfo.sex = item.name;
        });
        this.sexErrorMsg = "";
      },
      dateChange(date, type){
        // 日期选择（出生日期、有效起期、有效止期）
        if(type == "endDate") {
          this.longTerm = false;
        }
        this.baseInfo[type] = date;
        this[type+'ErrorMsg'] = "";
      },
      /**
        isCompleted, 非中国税收，信息是否已完善
       */
      crsChange(data, isCompleted){
        this.crsInfo = {
          ...this.crsInfo,
          ...data
        }
        if(isCompleted) {
          this.crsErrorMsg = "";
          this.crsIsReadyFlag = true;
        }else {
          this.crsIsReadyFlag = false;
        }
      },
      // 职业
      occupationChange(){
        $.showActionSheet({ actions: this.occupatList }, item => {
          this.baseInfo.occupationTpCd = item.value;
          this.baseInfo.occupationName = item.name;
        });
        this.occupationNameErrorMsg = "";
      },
      // 收入来源
      incomeSourceChange(){
        $.showActionSheet({ actions: this.incomeSourceList }, item => {
          this.baseInfo.incomeSource = item.value;
          this.baseInfo.incomeSourceName = item.name;
        });
        this.incomeSourceNameErrorMsg = "";
      },
      // 格式校验
      checkRuleValid(field){
        let validator = $.form.validator();
        if(this.baseInfo.name) {
          validator.add(">=", { a:this.baseInfo.name.trim().length, b:2 }, "请输入正确的姓名", msg => {
            this.nameErrorMsg = msg;
          });
          if(field == "name"){
            validator.valid();
            return;
          }
        }
        if(this.baseInfo.credentialNumber) {
          validator.add("certificate15And18", this.baseInfo.credentialNumber, '请输入正确的身份证号', msg => {
            this.credentialNumberErrorMsg = msg;
          });
          if(field == "credentialNumber"){
            validator.valid();
            return;
          }
        }
        if(this.processData.nodeIndex == 2 && this.baseInfo.address) {
          validator.add("address", this.baseInfo.address, '请输入正确的地址', msg => {
            this.addressErrorMsg = msg;
          });
          if(field == "address"){
            validator.valid();
            return;
          }
        }
        return validator.valid();
      },
      // 输入表单核验
      preCheck(){
        let validator = $.form.validator();
        if(this.processData.nodeIndex == 1){
          validator.add("notEmpty", this.baseInfo.name, "姓名不能为空", msg => {
            this.nameErrorMsg = msg;
          })
          validator.add("notEmpty", this.baseInfo.credentialNumber, "身份证号不能为空", msg => {
            this.credentialNumberErrorMsg = msg;
          })
          validator.add("notEmpty", this.baseInfo.sex, "性别不能为空", msg => {
            this.sexErrorMsg = msg;
          })
          validator.add("notEmpty", this.baseInfo.birthday, "出生日期不能为空", msg => {
            this.birthdayErrorMsg = msg;
          })
          validator.add("notEmpty", this.baseInfo.startDate, "起始日期不能为空", msg => {
            this.startDateErrorMsg = msg;
          })
          validator.add("notEmpty", this.baseInfo.endDate, "终止日期不能为空", msg => {
            this.endDateErrorMsg = msg;
          })
        }
        if(this.processData.nodeIndex == 2){
          validator.add("notEmpty", this.baseInfo.occupationName, "职业不能为空", msg => {
            this.occupationNameErrorMsg = msg;
          });
          if(this.baseInfo.occupationTpCd == '06'){
            validator.add("notEmpty", this.baseInfo.incomeSourceName, "收入来源不能为空", msg => {
              this.incomeSourceNameErrorMsg = msg;
            });
          } 
          validator.add("notEmpty", this.baseInfo.address, "通讯地址不能为空", msg => {
            this.addressErrorMsg = msg;
          });
        }
        let check = validator.valid();
        let checkField = this.checkRuleValid();
        if(check && checkField){
          if(!this.crsIsReadyFlag) {
            this.crsErrorMsg = "请先完善税收资料";
            return false;
          }
          return true;
        }else {
          return false;
        }
      },
      async submitForm(isUpdate){
        let isOk = this.preCheck();
        if(isOk){
          if(isUpdate && this.loginUser.clientId && this.loginUser.getPersonByClientIdResult){
            // 补充用户信息修改
            this.updatePersonalInfo(this.loginUser.getPersonByClientIdResult);
          }else {
            let personInfo = await this.getPersonByCondition(); // 存量用户核验
            // 新用户
            if(personInfo || personInfo === false){
              if(this.inputReadonly && this.params && this.params.faceImg && this.params.backImg){
                let frontPicId = await commonService.fileUpload({
                  fileBase64: this.params.faceImg, 
                  fileName: "身份证正面"
                });
                let backPicId = await commonService.fileUpload({
                  fileBase64: this.params.backImg, 
                  fileName: "身份证反面"
                });
                this.baseInfo.frontPicId = frontPicId || "";
                this.baseInfo.backPicId = backPicId || "";
              }else {
                this.baseInfo.frontPicId = "";
                this.baseInfo.backPicId = "";
              }
              if(personInfo){
                this.updatePersonalInfo(personInfo); // 更新三中心用户信息
              }
              if(personInfo === false) {
                this.addPerson(); // 三中心开户
              }
            }
          }
        }
      },
      // 是否为存量客户标识
      getPersonByCondition() {
        let form = $.form.builder();
        form
          .add("idTpCd", "01")
          .add("idNum", this.baseInfo.credentialNumber)
          .add("clientName", this.baseInfo.name);
        $.loading.start();
        return accountService.getPersonByCondition(form).then(async (res) => {
          const { code, data, message } = res;
          if (code == "200") {
            if(data && !data.clientId) {
              return false
            }else if(data.clientId) {
              if(data.existMobileBind=="1") {
                $.loading.stop();
                let bindMobile = data.bindMobile;
                // 实名用户已被绑定
                bindMobile = bindMobile && bindMobile.substr(bindMobile.length - 4);
                $.confirm({message: "您已在我司以其他手机" + (bindMobile ? "(尾号"+bindMobile+")" : "") + "开户，可使用该手机号或证件号码直接登录。"}, ["前往登录", "重新上传"], () => {
                  this.$store.dispatch("clearAllData");
                  $.route.hsOpen("login");
                }, () => {
                  this.$store.commit("processDataAdd", {
                    nodeIndex: 0,
                    ocrInfo: null,
                  });
                  this.$emit("editChange", false);
                  this.$emit("ocrUpload");
                });
              } else {
                return data;
              }
            }
          } else {
            $.error.process(jsonResult);
          }
        });
      },
      
      // 三中心开户
      addPerson(){
        let form = $.form.builder();
        form.add("userId", this.loginUser.userId)
          .add("idNum", this.baseInfo.credentialNumber) // 身份证号
          .add("idTpCd", "01") // 身份证类型
          .add("clientName", this.baseInfo.name) // 姓名
          .add("genderTpCd", this.baseInfo.sex == "男" ? "1" : "2") // 性别
          .add("startDt", this.baseInfo.startDate) // 证件开始日期
          .add("expiryDt", this.baseInfo.endDate) // 证件有效期
          .add("birthDt", this.baseInfo.birthday) // 出生日期
          .add("countryTpCd", "156") // 国籍
          .add("longTerm", this.longTerm ? "01" : "02") // 是否长期
          .add("frontPicId", this.baseInfo.frontPicId) // 身份证正面
          .add("backPicId", this.baseInfo.backPicId) // 身份证反面
          // .add("incomeSource", "") // 收入来源 --保留字段
          // .add("occupationTpCd", "") // 职业编号 --保留字段
          .add("addPersonCRSParam", this.crsInfo); // 税收信息
        if (this.baseInfo.backPicId && this.baseInfo.frontPicId) {
          form.add("uploadStatus", "01"); // 上传状态 01 已上传 02 未上传
          if(this.processData.ocrInfo && this.processData.ocrInfo.address){
            form.add("addressList", [{
              address: this.processData.ocrInfo.address,
              addrUsageTpCd: "02", // 身份证地址--上传ocr识别地址，
            }]);
          }
        } else {
          form.add("uploadStatus", "02")
        }
        $.loading.start();
        accountService.addPerson(form).then( async jsonResult => {
          $.loading.stop();
          const { code, data, message } = jsonResult;
          if (code == "200") {
            if (data.clientId) {
              await accountService.getAllUserInfoByUserId(); // 更新用户信息缓存
              this.$emit("completed", {
                ...this.baseInfo,
                crsInfo: this.crsInfo,
              }, this.processData.nodeIndex);
            }
          }else {
            $.error.process(jsonResult);
          }
        })
      },
      // 个人信息修改
      updatePersonalInfo(personInfo){
        let form = $.form.builder();
        let updateBscPerson = {
          clientId: personInfo.clientId,
          idNum: this.baseInfo.credentialNumber,
          idTpCd: "01",
          clientName: this.baseInfo.name,
          genderTpCd: this.baseInfo.sex == "男" ? "1" : "2",
          birthDt: this.baseInfo.birthday,
          countryTpCd: "156",
          longTerm: this.longTerm ? "01" : "02",
          frontPicId: this.baseInfo.frontPicId || null,
          backPicId: this.baseInfo.backPicId || null,
          uploadStatus: this.baseInfo.backPicId && this.baseInfo.frontPicId ? "01" : "02",
          identList:[
            {
              startDt: this.baseInfo.startDate, // 证件开始日期
              expiryDt: this.baseInfo.endDate,
              clientId: this.loginUser.clientId,
              identId: personInfo.identList && personInfo.identList.length > 0 && personInfo.identList[0].identId,
            },
          ],
          refCode: null, // 推荐人
          refRegion: null,
          updatePersonCRSParam: {
            clientId: personInfo.clientId,
            ...this.crsInfo
          },
        }
        if(this.processData.nodeIndex == 2){
          // 只更新补充信息
          updateBscPerson = {
            clientId: personInfo.clientId,
          };
          if(this.baseInfo.occupationTpCd){
            updateBscPerson.occupationTpCd = this.baseInfo.occupationTpCd; // 职业
          };
          if(this.baseInfo.incomeSource){
            updateBscPerson.incomeSource = this.baseInfo.incomeSource; // 收入来源码值
          }
          if(this.baseInfo.address){
            updateBscPerson.addressList = [{
              address: this.baseInfo.address,
              addrUsageTpCd: "01", // 通讯地址
            }]
            if(this.processData.ocrInfo && this.processData.ocrInfo.address){
              updateBscPerson.addressList.push({
                address: this.processData.ocrInfo.address,
                addrUsageTpCd: "02", // 身份证地址--上传ocr识别地址，
              })
            }
          }
        }
        form.add("updateBscPersonParam", updateBscPerson)
        // if(this.custInfoId){ // 直销用户信息修改
        //   form.add("modifyCustomerInfoParam",modifyCustomerInfo)
        //   form.add("crsParam",modifyCrsInfoProcess)
        //   if(this.openInfo.idInfo.upload == true){
        //   form.add("uploadIdentityImgListParam",uploadIdentityImg)
        //   }
        // }
        $.loading.start();
        accountService.updatePersonalInfo(form).then( async jsonResult => {
          const { code, data, message } = jsonResult;
          if (code == "200") {
            // 需人脸识别后或者年金短信验证后进行绑定操作
            // if(!this.loginUser.clientId){
            //   let isBinded = await this.bindingClient(personInfo);
            //   if(!isBinded) { return; }
            // }
            if(this.loginUser.clientId){
              await accountService.getAllUserInfoByUserId(); // 更新用户信息缓存
            }
            $.loading.stop();
            this.$emit("completed", {
              ...this.baseInfo,
              crsInfo: this.crsInfo,
              personInfo: personInfo, // 存量用户信息
            }, this.processData.nodeIndex);
          }else {
            $.error.process(jsonResult);
          }
        })
      },
    }
  };
  </script>
  
  <style lang="less">
  @import "@/styles/common/variable.less";
    .taro-textarea {
      .fontSize(14px);
      background: transparent;
    }
  </style>
  <style lang="less" module>
  @import "@/styles/common/variable.less";
  .bind-account-context {
    .bind-account-form {
      background-color: @panel-bgcolor;
      margin-left: 20px;
      margin-right: 20px;
      margin-top: 20px;
      padding: 0px 20px;
      border-radius: 16px;
      position: relative;
      .title {
        color: @text-main-color;
        font-weight: bold;
        .fontSize(16px);
        padding-top: 28px;
        padding-bottom: 20px;
      }
      .explain-title {
        color: @text-tips-color;
        .fontSize(12px);
        line-height: 36px;
        padding-bottom: 40px;
      }
      .form-panel {
        background-color: @panel-bgcolor;
        .input-button {
          color: @primary-color;
          .fontSize(16px);
          text-align: center;
          padding-top: 40px;
          padding-bottom: 40px;
        }
        .input-line {
          padding: 30px 0;
          display: flex;
          position: relative;
          border-bottom-width: 1px;
          border-bottom-style: solid;
          border-bottom-color: @divider-bgcolor;
          .input-label {
            margin-right: 10px;
            color: @text-main-color;
            width: 250px; // 260 -10
            .fontSize(14px);
            span {
              line-height: 10px;
            }
          }
          .input-value {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex: 1;
            line-height: 40px;
            color: @text-main-color;
            .fontSize(14px);
            &__link {
              color: @text-link-color;
              .fontSize(12px);
            }
            &__readonly {
              color: @text-form-tips-color
            }
          }
          .date-box {
            position: relative;
            .date-value {
              width: 40px;
              height: 40px;
              border-radius: 20px;
              line-height: 40px;
              text-align: center;
              background: #C6C6C6;
              color: #fff;
              .fontSize(12px);
              position: absolute;
              top: 0px;
              left: -50px;
            }
            .end-box {
              margin-top: 10px;
            }
          }
          .date-picker {
            flex: 1;
          }
        }
        .change-line {
          background: #F2F2F2;
          border-radius: 16px;
          min-height: 58px;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 15px 40px;
          &:last-child {
            margin-bottom: 0px;
          }
          .input-label {
            margin-right: 30px;
            color: @text-main-color;
            width: 190px; // 260 - 30 - 40
            .fontSize(14px);
            border-right-width: 1px;
            border-right-style: solid;
            border-right-color: @divider-bgcolor;
          }
          .input-value {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex: 1;
            line-height: 40px;
            color: @text-main-color;
            .fontSize(14px);
            &__readonly {
              color: @text-form-tips-color
            }
          }
          .date-picker {
            flex: 1;
          }
        }
        .change-line.last-child {
          margin-bottom: 0px;
        }
        .change-date-box {
          padding-top: 30px;
          padding-bottom: 30px;
          .change-date-value {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex: 1;
            line-height: 40px;
            color: @text-main-color;
            .fontSize(12px);
            .change-date-text {
              margin-left: 4px;
            }
          }
        }
      }
    }
    .icon-checkboxed {
      color: @primary-color;
      .fontSize(18px);
    }
    .icon-checkbox {
      color: #ccc;
      .fontSize(18px);
    }
    .split {
      height: 30px;
    }
  }
  </style>