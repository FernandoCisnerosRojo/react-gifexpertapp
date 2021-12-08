import { getGifs } from "../../helpers/getGifs"

describe('getGifs Tests', () => {
    test('should return 10 gifs', async () => {
        const gifs = await getGifs('car');

        expect(gifs.length).toBe(10)
    })
    
    test('should return an empty array', async () => {
        const gifs = await getGifs('');
        
        expect(gifs.length).toBe(0)
    })
})
