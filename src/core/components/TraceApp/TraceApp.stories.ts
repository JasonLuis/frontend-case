import UiTraceApp from "./TraceApp.vue";

export default {
  title: "Ui/TraceApp",
  component: UiTraceApp,
  argTypes: {},
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiTraceApp },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-trace-app v-bind="args" />'
});

export const Default: any = Template.bind({});

Default.args = {};
Default.parameters = {};


