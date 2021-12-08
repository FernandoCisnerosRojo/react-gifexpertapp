import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('GifExpertApp Tests', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot();
    })

    test('should match snapshot with categories', () => {
        const categories = ['car', 'bike'];

        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })

})
