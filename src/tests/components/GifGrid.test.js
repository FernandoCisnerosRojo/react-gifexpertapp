import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('GifGrid Tests', () => {
    test('should match snapshot while loading', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={'car'} />);

        expect(wrapper).toMatchSnapshot();
    })

    test('should have gifs loaded', () => {
        const gifs = [
            {
                id: 'abc',
                url: 'https://localhost/test.gif',
                title: 'test title'
            },
            {
                id: 'abcd',
                url: 'https://localhost/test.gif',
                title: 'test title'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={'car'} />);

        // expect(wrapper).toMatchSnapshot();u
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })


})
