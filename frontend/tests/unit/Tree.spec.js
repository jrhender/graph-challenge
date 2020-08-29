import { mount } from '@vue/test-utils';
import Tree from '../../src/Tree.vue';

const treeData = {
    name: 'A',
    description: 'Description of A',
    child: [
        {
            name: 'B',
            description: 'Description of B'
        }
    ]
};

describe('Tree', () => {
  const wrapper = mount(Tree, {
    propsData: {
      treeData,
      selectedNode: '',
    }
  });

  it('renders root node', () => {
    expect(wrapper.find(`#${treeData.name}>span`).text()).toEqual(treeData.name);
  });

  it('renders child node', () => {
    expect(wrapper.find(`#${treeData.child[0].name}>span`).text()).toEqual(treeData.child[0].name);
  });
});
