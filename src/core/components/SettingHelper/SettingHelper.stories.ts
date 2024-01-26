import UiSettingHelper from "./SettingHelper.vue";

export default {
  title: "Ui/SettingHelper",
  component: UiSettingHelper,
  argTypes: {
    icon: {
      control: { type: "text" },
    },
    title: {
      control: { type: "text" },
    },
  },
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiSettingHelper },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-setting-helper v-bind="args">',
});

export const Default: any = Template.bind({});

Default.args = {};

Default.parameters = {}; 