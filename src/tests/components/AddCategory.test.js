// import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory';

describe('AddCategory Tests', () => {
    // const setCategories = () => { };
    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should render "car" from input change', () => {
        const value = 'car'
        const input = wrapper.find('input')

        input.simulate('change', {
            target: {
                value: value
            }
        })

        const p = wrapper.find('p')

        expect(p.text().trim()).toBe(value)
    })

    test('should not call setCategories', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } })

        expect(setCategories).not.toHaveBeenCalled()
    })

    test('should call setCategories once with a function and clean inputValue', () => {
        wrapper.find('input').simulate('change', { target: { value: 'car' } })

        wrapper.find('form').simulate('submit', { preventDefault() { } })

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // expect(wrapper.find('p').text()).toBe('');
        expect(wrapper.find('input').prop('value')).toBe('');
    })

})
