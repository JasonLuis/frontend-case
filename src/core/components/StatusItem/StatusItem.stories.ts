import UiStatusItem from './StatusItem.vue';

export default {
    title: "Ui/StatusItem",
    component: UiStatusItem,
    argTypes: {},
  };
  
  const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { UiStatusItem },
    setup() {
      return { args };
    },
    data() {
      return {};
    },
    template: '<ui-status-item v-bind="args" />',
  });
  
  export const Default: any = Template.bind({});
  
  Default.args = {
      
  }