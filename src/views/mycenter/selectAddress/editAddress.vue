<template>
    <div class="fm-control fm-address" v-cloak>
        <div class="fm-group">
            <div class="fm-line">
                <label class="l-label">收货人姓名</label>
                <input type="text" name="linkman" v-model="addressData.linkman" maxlength="20" placeholder="请填写收货人姓名" />
            </div>
            <div class="fm-line">
                <label class="l-label">手机电话</label>
                <input type="text" name="phone" v-model="addressData.phone" maxlength="11" placeholder="请输入手机电话" />
            </div>
            <div class="fm-line lightgray">
                <label class="l-label">所属地区</label>
                <a @click="toggleAddress" class="pull-right" href="javascript:;">
                    <input class="text-right  mr10" type="text" name="areaAddress" :value="areaAddress" placeholder="请选择" readonly="readonly" />
                    <input type="hidden" name="proviance" v-model="addressData.proviance" />
                    <input type="hidden" name="city" v-model="addressData.city" />
                    <input type="hidden" name="area" v-model="addressData.area" />
                    <i class="arr-rt pos-rt-middle"></i>
                </a>
            </div>
            <div class="fm-line">
                <label class="l-label">详细地址</label>
                <input type="text" name="address" v-model="addressData.address" style="width:75%" maxlength="60" placeholder="请填写详细地址" />
            </div>
        </div>
        <div class="fm-group  mt10">
            <input type="hidden" name="addressData.isDefault" v-model="addressData.isDefault" />
            <div class="fm-line set-default-address J-radio">
                <div class="clearfix">
                    <label class="l-label">设为默认地址</label>
                    <switchTpl :value="defaultVal" @change="change"></switchTpl>
                    <!--<x-switch :title="''"></x-switch>-->
                </div>




            </div>
        </div>
        <div class="container mt30">
            <input @click.prevent="submitFn" type="submit" value="保存" class="btn btn-block btn-primary btn-lg" :class="{disabled:isDisabled}" />
        </div>
        <model-layer3 :define="define" :layerData="layerData" :proviance="proviance" :city="city" :area="area" @onselect="selectLayerFn" @onclose="closeLayerFn">
        </model-layer3>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { XSwitch, Group } from 'vux'
import validator from '@/assets/js/validator'
import { Toast, Confirm, TransferDomDirective as TransferDom } from 'vux'

import qs from 'qs'
export default {
    components: {
        XSwitch,
        Toast,
        Group
    },
    data() {
        return {
            isDisabled: false,
            layerData: {
                visible: false,
                title: '选择地址'
            },
            define: 10,
            val: true,
            defaultVal:true,
            proviance: {},
            city: {},
            area: {},
            defaultSelect: 1,
            addressData: {
                linkman: '',
                phone: '',
                proviance: '',
                city: '',
                area: '',
                address: '',
                userAddressId:'',
                isDefault: true
            }
        }
    },
    created() {
        let query = this.query;
        console.log(query)
        if (query) {
            this.addressData.userAddressId = query.userAddressId;
            this.$axios.get(this.$api.getaddress + '?userAddressId=' + query.userAddressId)
                .then(request => {

                    this.addressData = request.data;
                    console.log(this.addressData,'+++++++++++++++++++++++++++++++++++++++++');
                    this.val = (request.data.isDefault ==1) ? true :false;

                    console.log(request.data.isDefault,'+++++++++++++++++++++++++++++++++++++++++66666666666666666666666666666');
                })
        }
        this.init();
    },
    methods: {
//        toastMsg(msg, type) {
//            let that = this;
//            this.$vux.toast.show({
//                text: msg,
//                type: 'text',
//                width: '24em',
//                position: 'middle',
//                onHide() {
//                    if (type) {
//                        that.$router.back();
//                    }
//                    that.isDisabled = false;
//                }
//            })
//        },
        onClick (newVal, oldVal) {
            console.log(newVal, oldVal)
            this.$vux.loading.show({
                text: 'in processing'
            })
            setTimeout(() => {
                this.$vux.loading.hide()
                this.val = newVal
            }, 1000)
        },
        init() {
            validator.config = {
                linkman: { strategy: 'isNonEmpty', errorMsg: '收货人姓名不能为空' },
                phone: [{ strategy: 'isNonEmpty', errorMsg: '请输入手机号码！' }, { strategy: 'isMobile' }],
                proviance: { strategy: 'isNonEmpty', errorMsg: '请选择地区' },
                address: { strategy: 'isNonEmpty', errorMsg: '请填写详细地址' }
            };
        },
        toggleAddress() {
            this.defaultSelect = !1;
            this.layerData.visible = !this.layerData.visible
        },
        selectLayerFn(address) {
            ['proviance', 'city', 'area'].forEach((key, index) => {
                this[key] = address[index];
                this.addressData[key] = address[index].areaId;
            })
        },
        change(defaultVal){
            this.$axios.get(this.$api.saveaddress,{params:this.addressData})
                .then(({data})=>{
                    let isDefault = data.isDefault;
                    console.log(isDefault,'默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认默认');
                    this.defaultVal =!defaultVal;
                    if(isDefault == 0){
                        this.defaultVal = false;
                        this.isDefault = 0;
                    }
                    if(isDefault == 1){
                        this.defaultVal = true;
                        this.isDefault = 1;
                    }
                    console.log(data,'222222333333333333333333333333333');
                });
//            const param = this.addressData;
//            const closeParam = qs.stringify(param);
//            const openData = qs.parse(closeParam);
//            this.defaultVal == false ? openData.isDefault = 1 : openData.isDefault = 0;
//            if(openData.isDefault = 1){
//                this.defaultVal = true;
//            }


//            this.changeAddressData()
//            this.defaultVal = !defaultVal;
//            console.log(defaultVal,'21333333333333');
        },
        closeLayerFn() {
            this.layerData.visible = false;
        },
        submitFn() {
            let _this = this,
                oValChar = {};
            if (this.isDisabled) return;
            this.isDisabled = true;
            // 校验字段
            $.each(validator.config, key => {
                oValChar[key] = _this.addressData[key]
            });
            // 校验表单
            if (!validator.validate(oValChar, true)) {
                return $.each(validator.messages, (i, val) => {
//                    _this.toastMsg(val,false);
                    _this.$notiejs({
                        state: 2,
                        msg: val,
                        end() {
                            _this.isDisabled = false
                        }
                    });
                    return false;
                })
            }
            _this.isDisabled = false
            this.changeAddressData()
        },
        changeAddressData() {
            var _this = this;
            const param = this.addressData;
            const closeParam = qs.stringify(param);
            const openData = qs.parse(closeParam);


            _this.val == false ? openData.isDefault = 1 : openData.isDefault = 0;
            if(openData.isDefault = 1){
                this.val = true;
            }

            const subData = qs.stringify(openData);
            this.$axios.post(this.$api.saveaddress, subData)
                .then(request => {
//                    _this.toastMsg(request.msg,true);
                    _this.isDisabled = false;

                    _this.$notiejs({
                        state: 1,
                        msg: request.msg,
                        end() {
                            _this.$router.back();
//                            _this.$router.push({ path: '/mycenter/address' })
                            _this.isDisabled = false;
                        }
                    });
                });
        }
    },
    computed: {
        areaAddress() {
            let result = [];
            if (this.query.type == 'edit' && this.defaultSelect == true) {
                for (let key of ['provianceName', 'cityName', 'areaName']) {
                    result.push(this.addressData[key])
                }
            } else {
                for (let key of ['proviance', 'city', 'area']) {
                    if (this[key].name) {
                        result.push(this[key].name)
                    }
                }
            }
            return result.length ? result.join(' ') : ''
        },
        query() {
            return this.$route.query;
        }
    }
}


</script>

<style>
    .vux-x-switch{
        position: absolute;
        right: 20px;
        top: 0;
    }
</style>
