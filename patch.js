/**
 * patch.js — Tulip Inn
 * Replaces all non-room images (hero bg, about, gallery) with the 66 MMT
 * image URLs, cycling through the list in order.
 *
 * Usage: add <script src="patch.js"></script> just before </body> in the HTML.
 */

(function () {
  const IMGS = [
    "https://r1imghtlak.mmtcdn.com/03a63092-18c9-4020-98cd-784224e7b73d.jpg",
    "https://r1imghtlak.mmtcdn.com/0e207dd3-dfb3-4afa-beaa-7ecd828b683e.jpg",
    "https://r1imghtlak.mmtcdn.com/11118c5d-296c-41cd-a098-07063b4ee652.jpg",
    "https://r1imghtlak.mmtcdn.com/130eb50b-038a-4d94-885b-0121e7ab3c52.jpg",
    "https://r1imghtlak.mmtcdn.com/13c6b024-4db2-46a8-8da7-f3af0d17a4d5.jpg",
    "https://r1imghtlak.mmtcdn.com/1a399825-e901-4a00-8a3a-5d1330d2281f.jpg",
    "https://r1imghtlak.mmtcdn.com/1cd63876-be67-45a8-bad5-21a82fb66ff1.jpg",
    "https://r1imghtlak.mmtcdn.com/21fb5fa7-3b27-4cf0-917e-82e32ff4033a.jpg",
    "https://r1imghtlak.mmtcdn.com/2520e956-5704-43b5-b3a1-17f2bd5a84ff.jpg",
    "https://r1imghtlak.mmtcdn.com/25d480f9-cac6-4dfa-be4c-80ea84f65629.jpg",
    "https://r1imghtlak.mmtcdn.com/2ae88845-306c-4dee-af29-e6ba14127f4d.jpg",
    "https://r1imghtlak.mmtcdn.com/33741854-3c78-4dfb-88d6-038a3a6a71ff.jpg",
    "https://r1imghtlak.mmtcdn.com/36f9e244-6f50-45be-bf8c-f1daac31c457.jpg",
    "https://r1imghtlak.mmtcdn.com/3acd5771-beda-4404-9d89-ea31ee45e602.jpg",
    "https://r1imghtlak.mmtcdn.com/3debaf29-d73f-493e-96c1-2ad14f13c014.jpg",
    "https://r1imghtlak.mmtcdn.com/42e16df7-e630-4c80-b0da-12c620ce3c52.jpeg",
    "https://r1imghtlak.mmtcdn.com/438bb88c-67d7-4460-a61d-4a433864efe6.jpg",
    "https://r1imghtlak.mmtcdn.com/45f0ae02-04fa-459d-b1ba-76a6b4bf9201.jpg",
    "https://r1imghtlak.mmtcdn.com/4ee5d522-0de5-4ee4-9347-d0ee1c50ea05.jpg",
    "https://r1imghtlak.mmtcdn.com/5260df86-c9fe-4a03-a413-3f97c133faec.jpg",
    "https://r1imghtlak.mmtcdn.com/585baa71-6b37-4541-b034-ad72c8d09ede.jpg",
    "https://r1imghtlak.mmtcdn.com/5db79da1-5f65-4043-b6eb-e258e0c30b16.jpg",
    "https://r1imghtlak.mmtcdn.com/5eabed8c-baed-49c3-bf73-3cbe1bab36ee.jpg",
    "https://r1imghtlak.mmtcdn.com/5f3d79ee-8dbb-403c-b119-6cec1c087e75.jpg",
    "https://r1imghtlak.mmtcdn.com/61f86603-4f7b-4f79-bd1c-ae669ec91b7c.jpg",
    "https://r1imghtlak.mmtcdn.com/640c3a76-21c6-461d-9642-503e84d25491.jpg",
    "https://r1imghtlak.mmtcdn.com/645750d2-8213-451f-a83c-b28971b805f1.jpg",
    "https://r1imghtlak.mmtcdn.com/64d6f490-9bdd-43ba-b423-e83aec7730e8.jpg",
    "https://r1imghtlak.mmtcdn.com/6b2e8eb4-e219-4b58-a9d6-ecf150132f76.jpg",
    "https://r1imghtlak.mmtcdn.com/6fb9021f-f3dc-46c1-a222-b5b83cceeaef.jpg",
    "https://r1imghtlak.mmtcdn.com/71bddde6-d5c6-4368-9ec0-141e9c0285ca.jpg",
    "https://r1imghtlak.mmtcdn.com/7327f3ad-28ec-47b0-94fe-266a35e03c5f.jpg",
    "https://r1imghtlak.mmtcdn.com/7f446073-6837-49c6-b555-570f232f575e.jpg",
    "https://r1imghtlak.mmtcdn.com/8397acd4-8912-4fd2-b2f2-15cddec5470d.jpg",
    "https://r1imghtlak.mmtcdn.com/84ac9d15-572d-423e-aee5-3e704a4b44ca.jpg",
    "https://r1imghtlak.mmtcdn.com/873e9ce9-45f2-4c72-8461-d4313c734b7d.jpg",
    "https://r1imghtlak.mmtcdn.com/8abb0494-32f1-4b2b-be46-5836e9b4bc8b.jpeg",
    "https://r1imghtlak.mmtcdn.com/8cfe0d3a-5d80-4fa5-b5ce-34ae9141760f.jpg",
    "https://r1imghtlak.mmtcdn.com/96bb449c-cf8b-49a2-97a4-e81b359f76f8.jpg",
    "https://r1imghtlak.mmtcdn.com/97893035-bdcc-4b04-bbda-1da294a82130.jpg",
    "https://r1imghtlak.mmtcdn.com/9932a242-5864-4e36-93e3-15aaf1b0f981.jpg",
    "https://r1imghtlak.mmtcdn.com/9bab1d4f-7429-45b9-ad77-07c173038acc.jpg",
    "https://r1imghtlak.mmtcdn.com/a0d26e6d-e263-4b48-bdef-a2aade155cd1.jpg",
    "https://r1imghtlak.mmtcdn.com/a2c4fc9e-d48d-4f5a-bc4b-43717f44e2b3.jpeg",
    "https://r1imghtlak.mmtcdn.com/aa5143b1-8ba8-4a54-8e24-77da2fca0500.jpg",
    "https://r1imghtlak.mmtcdn.com/b746527b-a32a-4b4c-b82d-663942aa4835.jpg",
    "https://r1imghtlak.mmtcdn.com/ba67e59f-7d3f-43ca-8c8c-6474ed2de18d.jpg",
    "https://r1imghtlak.mmtcdn.com/bb663d62-ed03-4d8e-b581-de41856a060c.jpg",
    "https://r1imghtlak.mmtcdn.com/c192ee38-ece9-42f6-94c4-8bea33e84266.jpg",
    "https://r1imghtlak.mmtcdn.com/c5ffe8a3-cf95-4b67-90f0-b1568ea67257.jpg",
    "https://r1imghtlak.mmtcdn.com/cfc766bd-e65d-4d0c-b409-f01ce24f2684.jpg",
    "https://r1imghtlak.mmtcdn.com/d350067d-31e8-4743-b851-b1beedc6ccd0.jpg",
    "https://r1imghtlak.mmtcdn.com/d8630a04-1e56-45f9-bdbd-9a42983b9db8.jpg",
    "https://r1imghtlak.mmtcdn.com/de7a9d75-60c4-44c8-9615-aab8a2f80c7c.jpg",
    "https://r1imghtlak.mmtcdn.com/df0a91e2-45f5-40d5-8962-7db10de5f164.jpg",
    "https://r1imghtlak.mmtcdn.com/e15ffc50-c0db-42a4-a6ec-13e7a0c863e8.jpg",
    "https://r1imghtlak.mmtcdn.com/e4d378fd-2e8a-4edf-9fd2-073ca0d770f7.jpg",
    "https://r1imghtlak.mmtcdn.com/e7328a72-3c24-43e1-bf58-e36a6bd86717.jpg",
    "https://r1imghtlak.mmtcdn.com/ebf3ba94-adc6-4552-a7f2-92e4ac2bcf2d.jpg",
    "https://r1imghtlak.mmtcdn.com/f17ef862-cb83-4475-b9a4-b80cf176239f.jpg",
    "https://r1imghtlak.mmtcdn.com/f93bbf9d-f209-445f-a782-7d59ea387688.jpg",
    "https://r1imghtlak.mmtcdn.com/f95457c7-4710-49e6-877f-d258798bc45f.jpg",
    "https://r1imghtlak.mmtcdn.com/f96140e5-63a7-4a3f-9914-69fd106b559f.jpg",
    "https://r1imghtlak.mmtcdn.com/f9a3ae2a-24cb-472b-bcdd-9bfc2bdfba5b.jpg",
    "https://r1imghtlak.mmtcdn.com/fa33bd32-105f-4150-b683-2d19f6b23a99.jpg",
    "https://r1imghtlak.mmtcdn.com/fd2b7b2a-6609-42e0-aa4f-585802402ab4.jpg",
    "https://r1imghtlak.mmtcdn.com/fdbced07-691f-4eda-84da-0b9fe29b8728.jpg",
  ];

  let cursor = 0;
  function next() {
    const url = IMGS[cursor % IMGS.length];
    cursor++;
    return url;
  }

  // ── 1. HERO background ────────────────────────────────────────────────────
  const heroBg = document.querySelector(".hero-bg");
  if (heroBg) {
    const heroUrl = next();
    // Preserve the gradient overlay, swap only the image part
    const existing = getComputedStyle(heroBg).backgroundImage;
    // The original has two layers: gradient + image url(). Replace the url() part.
    if (existing.includes("url(")) {
      heroBg.style.backgroundImage = existing.replace(
        /url\(['"]?[^'")\s]+['"]?\)\s*$/,
        `url('${heroUrl}')`
      );
    } else {
      heroBg.style.backgroundImage = `url('${heroUrl}')`;
      heroBg.style.backgroundSize = "cover";
      heroBg.style.backgroundPosition = "center";
    }
  }

  // ── 2. ABOUT image ────────────────────────────────────────────────────────
  const aboutImg = document.querySelector(".about-img");
  if (aboutImg) {
    aboutImg.src = next();
  }

  // ── 3. GALLERY images ─────────────────────────────────────────────────────
  // All <img> inside .gallery-grid that are NOT inside a slideshow
  const galleryImgs = document.querySelectorAll(".gallery-grid .gal-img");
  galleryImgs.forEach((img) => {
    img.src = next();
  });

})();
