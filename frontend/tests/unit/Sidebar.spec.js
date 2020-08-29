import { shallowMount } from '@vue/test-utils';
import Sidebar from '../../src/Sidebar.vue';

const name = 'A';
const description = 'Description of A'

describe('visible Sidebar', () => {
  const wrapper = shallowMount(Sidebar, {
    propsData: {
      name,
      description,
      isHidden: false
    }
  });

  it('renders name', () => {
    expect(wrapper.find('h2').text()).toEqual(name);
  });
});
