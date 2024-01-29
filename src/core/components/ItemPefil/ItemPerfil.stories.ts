import UiItemPerfil from "../ItemPefil/ItemPerfil.vue";

export default {
  title: "Ui/ItemPerfil",
  component: UiItemPerfil,
  argTypes: {},
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiItemPerfil },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-item-perfil v-bind="args" />',
});


export const Default: any = Template.bind({});

Default.args = {}
