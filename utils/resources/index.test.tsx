import '@testing-library/jest-dom'
import { userAccounts, officialWeb, stores, socialMedia, dummyPhoto, youtubeVideo, navItems } from '.'

describe('UserAccounts', () => {
    it('userAccounts', () => {
        const mockOutput = "https://account.femaledaily.com"

        expect(userAccounts).toBe(mockOutput)
        expect(userAccounts).not.toBeNull()
    });

    it('officialWeb', () => {
        const mockOutput = "https://femaledaily.com/"

        expect(officialWeb).toBe(mockOutput)
        expect(officialWeb).not.toBeNull()
    });

    it('stores', () => {
        const mockOutput = [
            {name: "appstore", url: "https://apps.apple.com/id/app/female-daily-beauty-review/id1160742672?l=id"},
            {name: "playstore", url: "https://play.google.com/store/apps/details?id=com.fdbr.android&hl=en_GB"}
        ]

        expect(stores).toMatchObject(mockOutput)
        expect(stores).toHaveLength(2)
        expect(stores).not.toBeNull()
    });

    it('socialMedia', () => {
        const mockOutput = [
            {name: "facebook", url: "https://www.facebook.com/FemaleDailyNetwork/"},
            {name: "twitter", url: "https://twitter.com/femaledaily"},
            {name: "instagram", url: "https://www.instagram.com/femaledailynetwork/"},
            {name: "youtube", url: "https://www.youtube.com/user/FemaleDailyNetwork"},
        ]

        expect(socialMedia).toMatchObject(mockOutput)
        expect(socialMedia).toHaveLength(4)
        expect(socialMedia).not.toBeNull()
    });

    it('dummyPhoto', () => {
        const mockOutput = "https://image.femaledaily.com/dyn/80/images/user-pics/8cfa98979828b03949df998669bcca01.jpg"

        expect(dummyPhoto).toBe(mockOutput)
        expect(dummyPhoto).not.toBeNull()
    });
    
    it('youtubeVideo', () => {
        const mockOutput = ["RkMeGPClvTo", "FoPlWJCw-o8"]
        
        expect(youtubeVideo).toStrictEqual(mockOutput)
        expect(youtubeVideo).toHaveLength(2)
        expect(youtubeVideo).not.toBeNull()
    });

    it('navItems', () => {
        const mockOutput = ["skincare", "make-up", "body", "hair", "fragrance", "nails", "tools", "brands"]
        
        expect(navItems).toStrictEqual(mockOutput)
        expect(navItems).toHaveLength(8)
        expect(navItems).not.toBeNull()
    });
})
