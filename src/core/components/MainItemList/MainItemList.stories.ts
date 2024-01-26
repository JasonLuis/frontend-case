import UiMainItemList from "./MainItemList.vue";

export default {
  title: "Ui/MainItemList",
  component: UiMainItemList,
  argTypes: {
    icon: {
      control: { type: "text" },
    },
    title: {
      control: { type: "text" },
    },
    isSelect: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiMainItemList },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-main-item-list v-bind="args">',
});

export const Default: any = Template.bind({});

Default.args = {
  icon: "../../assets/icon/icon-dashboard.svg",
  title: "Dashboard",
  isSelect: true,
};

Default.parameters = {
  docs: {
    source: {
      code: `<ui-main-item-list icon="../../assets/icon/icon-dashboard.svg" title="Dashboard" :isSelect="true"/>`,
      language: "vue",
      type: "auto",
    },
  },
};
