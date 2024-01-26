import { computed } from 'vue';
import { props } from './FavITemList.vue';

const getIcon = computed(() => {
return new URL(props.icon, import.meta.url).href;
});
