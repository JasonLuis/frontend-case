import UiItemList from "./ItemList.vue";

export default {
  title: "Ui/ItemList",
  component: UiItemList,
  argTypes: {
    icon: {
      control: { type: "text" },
    },
    title: {
      control: { type: "text" },
    },
    timer: {
      control: { type: "text" },
    },
  },
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiItemList },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-item-list v-bind="args">',
});

export const Default: any = Template.bind({});

Default.args = {
  icon: '../../assets/icon/Loom.svg',
  title: 'Loom Rebranding',
  timer: '1:23:05',
};
Default.parameters = {};
