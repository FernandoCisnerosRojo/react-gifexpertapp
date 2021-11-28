import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom';
import GifGridItem from '../../components/GifGridItem';

const title = 'titleTest'
const url = 'urlTest'
const wrapper = shallow(<GifGridItem url={url} title={title} />);

describe('GifGridItem Tests', () => {
    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should render title in p tag', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title);
    })

    test('should render image from url with title as alt property', () => {
        const img = wrapper.find('img')

        // console.log(img.props());
        // console.log(img.prop('src'));
        // console.log(img.prop('alt'));

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('should have animate__flipInX css class', () => {
        const div = wrapper.find('div')

        const className = div.prop('className');

        expect(className.includes('animate__flipInX')).toBe(true);
    })

})
