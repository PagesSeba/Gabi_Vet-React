import media1 from "./BannerTest1.jpg";
import media2 from "./BannerTest2.jpg";
import media3 from "./BannerTest3.jpg";


export const media = [media1, media2, media3];
export const mediaByIndex = index => media[index % media.length];
