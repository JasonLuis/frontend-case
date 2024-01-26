import UiFavItemList from "./FavItemList.vue";

export default {
  title: "Ui/FavItemList",
  component: UiFavItemList,
  argTypes: {
    icon: {
      control: { type: "text" },
    },
    title: {
      control: { type: "text" },
    },
    index: {
      control: { type: "number" }
    }
  },
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiFavItemList },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-fav-item-list v-bind="args">',
});

export const Default: any = Template.bind({});

Default.args = {
  icon: "../../assets/icon/chart-blue.svg",
  title: "Loom Mobile App",
  index: 1
};

Default.parameters = {
  docs: {
    source: {
      code: `<ui-fav-item-list icon="../../assets/icon/chart-blue.svg" title="" :index="1">`,
      language: "vue",
      type: "auto",
    },
  },
};
