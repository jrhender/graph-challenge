// import { shallowMount } from '@vue/test-utils';
// import HelloWorld from '@/components/HelloWorld.vue';

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message';
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

import { mount } from '@vue/test-utils';
import Sidebar from '../../src/Sidebar.vue';

describe('Mounted App', () => {
  const wrapper = mount(Sidebar, {
    propsData: {
      name: 'A',
      description: 'Description of A',
      isHidden: false
    }
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
