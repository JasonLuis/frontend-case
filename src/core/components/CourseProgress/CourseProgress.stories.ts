import UiCourseProgress from "./CourseProgress.vue";

export default {
  title: "Ui/CourseProgress",
  component: UiCourseProgress,
  argTypes: {
    progress: {
      control: { type: "number" },
    },
  },
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiCourseProgress },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-course-progress v-bind="args" />',
});

export const Default: any = Template.bind({});

Default.args = {
  progress: 25,
};
