import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('useFetchGifs Tests', () => {
    test('should return initial state', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('car'));

        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('should return gifs array', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('car'));

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })

})
