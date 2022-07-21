import media1 from "./Belgrano2022.jpg";
import media2 from "./Talleres2022.jpg";
import media3 from "./Instituto2022.jpeg";
import media4 from "./Belgrano20022.jpg";

export const media = [media1, media2, media3, media4];
export const mediaByIndex = index => media[index % media.length];
