import UiCardRankingCourse from "./CardRankingCourse.vue";

export default {
  title: "Ui/CardRankingCourse",
  component: UiCardRankingCourse,
  argTypes: {},
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiCardRankingCourse },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-card-ranking-course v-bind="args" />',
});

export const Default: any = Template.bind({});

Default.args = {
    
}