import { NFTStorage } from "nft.storage";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.NFT_STORAGE_API_KEY;

// 이미지 url,  url 만 가능하다
const imgURL = "https://health.chosun.com/site/data/img_dir/2023/03/17/2023031701883_0.jpg"
// nft 이름
const name = 'cheese cat'
// nft 설명
const description = '귀여운 치즈냥이'
// nft 테마
const theme = 'art'
// nft 확장자
const extension = 'jpg'

/**
 * getExampleImage
 * @returns {Promise<Blob>}
 */
async function getExampleImage() {
  const imageOriginUrl = imgURL;
  const r = await fetch(imageOriginUrl);
  if (!r.ok) {
    throw new Error(`error fetching image: [${r.statusCode}]: ${r.status}`);
  }
  return r.blob();
}

/**
 * storeExampleNFT
 */
async function storeExampleNFT() {
  const image = await getExampleImage();
  const nft = {
    image, // use image Blob as `image` field
    name: name,
    description: description,
    properties: {
      type: "blog-post",
      origins: {
        http: "https://blog.nft.storage/posts/2021-11-30-hello-world-nft-storage/",
        ipfs: "ipfs://bafybeieh4gpvatp32iqaacs6xqxqitla4drrkyyzq6dshqqsilkk3fqmti/blog/post/2021-11-30-hello-world-nft-storage/",
      },
      authors: [{ name: "David Choi", theme : theme , extension: extension }],
      content: {
        "text/markdown":
          "The last year has witnessed the explosion of NFTs onto the world’s mainstage. From fine art to collectibles to music and media, NFTs are quickly demonstrating just how quickly grassroots Web3 communities can grow, and perhaps how much closer we are to mass adoption than we may have previously thought. <... remaining content omitted ...>",
      },
    },
  };

  const client = new NFTStorage({ token: API_KEY });
  const metadata = await client.store(nft);

  console.log("NFT data stored!");
  console.log("Metadata URI: ", metadata.url);
}

storeExampleNFT();
