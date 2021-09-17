import Counter from "@/components/Counter"
import { shallowMount } from "@vue/test-utils";

describe('Counter component testSuit', () => {

    test('Debe hacer match con el snapshot', () => {

        const wrapper = shallowMount(Counter)

        expect(wrapper.html()).toMatchSnapshot()
    });
});