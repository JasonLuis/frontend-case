import UiCardTasks from '../CardTasks/CardTasks.vue';

export default {
    title: "Ui/CardTasks",
    component: UiCardTasks,
    argTypes: {

    }
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { UiCardTasks },
    setup() {
      return { args };
    },
    data() {
      return {};
    },
    template: '<ui-card-tasks v-bind="args">',
  });

export const Default: any = Template.bind({});

Default.args = {};
Default.parameters = {};

