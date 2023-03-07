import * as fs from 'fs';

export const printBanner = (
  name: string,
  options?: {
    newLine?: boolean;
  }
) => {
  try {
    const bannerData = fs.readFileSync(`./banners/${name}.txt`);
    console.log(bannerData.toString().trim());
  } catch {
    console.log(`Banner ${name}.txt does not exist!`);
  }
  if (options?.newLine) console.log('');
};
