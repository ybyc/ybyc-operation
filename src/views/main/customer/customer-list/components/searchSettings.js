export default [{
  type: 'labelSelectText',
  placeholder: '请输入',
  name: 'selectText',
  optionValue: 'userPhone',
  visible: true,
  options: [{
    label: '手机号',
    value: 'userPhone'
  }, {
    label: '用户姓名',
    value: 'userName'
  }, {
    label: '用户编号',
    value: 'userId'
  }, {
    label: '身份证号',
    value: 'userIdentityNumber'
  }]
}, {
  visible: true,
  type: 'labelSelectCity',
  placeholder: '请选择',
  name: 'selectCity',
  optionValue: 'cityId',
  options: [{
    label: '注册城市',
    value: 'cityId'
  }, {
    label: '所属城市',
    value: 'cityIdBelongTo'
  }]
  // enableAuth: true
}, {
  type: 'labelSelectDateRange',
  placeholder: '请选择',
  name: 'selectDate',
  optionValue: 'registerTime',
  options: [{
    label: '注册时间',
    value: 'registerTime'
  }, {
    label: '认证通过时间',
    value: 'userUploadTime'
  }, {
    label: '首充保证金时间',
    value: 'timeShareRechargeFirstTime'
  }, {
    label: '首单时间',
    value: 'timeShareOrderFirstTime'
  }]
}, {
  label: '认证状态',
  name: 'checkDataStatus',
  type: 'select',
  options: [{
    label: '未上传资料',
    value: '-1'
  }, {
    label: '审核不通过',
    value: '0'
  }, {
    label: '审核通过',
    value: '1'
  }, {
    label: '待审核',
    value: '2'
  }]
}, {
  label: '用户角色',
  type: 'remoteRole',
  placeholder: '请选择',
  name: 'userRoleId'
}, {
  label: '用户状态',
  name: 'statusCode',
  type: 'select',
  placeholder: '请选择',
  options: [{
    label: '启用',
    value: '1'
  }, {
    label: '禁用',
    value: '0'
  }]
}]
