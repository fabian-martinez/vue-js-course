import { shallowMount } from '@vue/test-utils';
import AboutView from '@/views/AboutView';

describe('Pruebas en el about view ', () => {
    it('debe de hacer match con el snapshop cuando cargen el about', () => {
        const wrapper = shallowMount(AboutView)

        expect(wrapper.html()).toMatchSnapshot()
    });
});