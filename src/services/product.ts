import { BASE_ENDPOINT } from "@/constants/endpoint";

/**
+ * Fetches product details by category from the API.
+ *
+ * @param {string} category - The category of the product.
+ * @return {Promise<any | null>} - A promise that resolves to the product details as an object, or null if the fetch fails.
+ */
export async function fetchProductDetailsByCategory(category: string) {
  try {
    const response = await fetch(`${BASE_ENDPOINT}/data?category=${category}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch product details:", error);
    return null;
  }
}

/**
+ * Fetches product details by category and type from the API.
+ *
+ * @param {string} category - The category of the product.
+ * @param {string} type - The type of the product.
+ * @return {Promise<any | null>} - A promise that resolves to the product details as an object, or null if the fetch fails.
+ */
export async function fetchProductDetailsByCategoryAndType(
  category: string,
  type: string
) {
  try {
    const response = await fetch(
      `${BASE_ENDPOINT}/data?category=${category}&type=${type}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch product details:", error);
    return null;
  }
}
