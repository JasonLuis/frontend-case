import UiSideBar from "./SideBar.vue";

export default {
  title: "Ui/SideBar",
  component: UiSideBar,
  argTypes: {},
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiSideBar },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-side-bar v-bind="args">',
});


export const Default: any = Template.bind({});

Default.args = {};

Default.parameters = {};