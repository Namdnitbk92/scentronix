import { faker } from "@faker-js/faker";

/**
+ * Generates a random text with the specified number of paragraphs.
+ *
+ * @param {number} [paragraphs=1] - The number of paragraphs to generate.
+ * @return {string} The generated random text.
+ */
export function getRandomText(paragraphs: number = 1): string {
  return faker.lorem.paragraphs(paragraphs);
}

/**
+ * Returns a random image from a predefined list of images.
+ *
+ * @return {string} The randomly selected image URL.
+ */
export function getRandomImage(): string {
  const images = [
    "/img/grain-banana-bread.webp",
    "/img/prd1.webp",
    "/img/prd2.jpg",
    "/img/prd3.jpg",
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

/**
+ * Checks if the given pathname is active based on the current path.
+ *
+ * @param {string} pathname - The pathname to check.
+ * @param {string} currentPath - The current path.
+ * @return {boolean} Returns true if the pathname is active, false otherwise.
+ */
export function isActive(pathname: string, currentPath: string): boolean {
  return pathname === currentPath;
}
