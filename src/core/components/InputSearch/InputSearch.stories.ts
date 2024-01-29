import UiInputSearch from "./InputSearch.vue";

export default {
  title: "Ui/InputSearch",
  component: UiInputSearch,
  argTypes: {},
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiInputSearch },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-input-search v-bind="args" />',
});

export const Default: any = Template.bind({});

Default.args = {};
Default.parameters = {};