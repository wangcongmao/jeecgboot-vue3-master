import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '用户名',
    align:"center",
    sorter: true,
    dataIndex: 'name'
   },
   {
    title: '年龄',
    align:"center",
    sorter: true,
    dataIndex: 'age'
   },
   {
    title: '性别',
    align:"center",
    dataIndex: 'sex_dictText'
   },
   {
    title: '生日',
    align:"center",
    dataIndex: 'birthday',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '请假原因',
    align:"center",
    dataIndex: 'contents',
    slots: { customRender: 'htmlSlot' },
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "用户名",
      field: 'name',
    component: 'JPopup',
    componentProps: ({ formActionType }) => {
        const {setFieldsValue} = formActionType;
        return{
            setFieldsValue:setFieldsValue,
            code:"tj_user_report",
            fieldConfig: [
                { source: 'username', target: 'name' },
            ],
            multi:true
        }
    },

      colProps: {span: 6},
 	},
     {
      label: "年龄",
      field: "age",
      component: 'JRangeNumber',
      colProps: {span: 6},
	},
	{
      label: "性别",
      field: 'sex',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"sex"
      },
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '用户名',
    field: 'name',
    component: 'JPopup',
    componentProps: ({ formActionType }) => {
        const {setFieldsValue} = formActionType;
        return{
            setFieldsValue:setFieldsValue,
            code:"tj_user_report",
            fieldConfig: [
                { source: 'username', target: 'name' },
            ],
            multi:true
        }
    },

  },
  {
    label: '年龄',
    field: 'age',
    component: 'InputNumber',
  },
  {
    label: '性别',
    field: 'sex',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"sex"
     },
  },
  {
    label: '生日',
    field: 'birthday',
    component: 'DatePicker',
  },
  {
    label: '请假原因',
    field: 'contents',
    component: 'JEditor',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}