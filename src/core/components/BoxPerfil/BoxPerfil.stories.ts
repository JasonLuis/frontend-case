import UiBoxPerfil from "./BoxPerfil.vue";

export default {
  title: "Ui/BoxPerfil",
  component: UiBoxPerfil,
  argTypes: {
    name: {
      control: { type: "text" },
    },
    email: {
      control: { type: "text" },
    },
    img: {
      control: { type: "text" },
    },
  },
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiBoxPerfil },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-box-perfil v-bind="args">',
});

export const Default: any = Template.bind({});

Default.args = {
  name: "Sophia Williams",
  email: "sophia@jurisoft.com",
  img: "../../assets/icon/Avatar.svg",
};

Default.parameters = {};
