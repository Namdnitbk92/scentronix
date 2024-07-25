"use client";

import { useEffect, useState } from "react";

interface Data {
  data: {
    title: string;
    path: string;
  };
  content: string;
  image: string;
  title: string;
}

/**
+ * Custom hook that fetches data from the API based on the provided category and type.
+ *
+ * @param {Object} options - The options object.
+ * @param {string | string[]} options.category - The category of the data to fetch.
+ * @param {string | string[] | undefined} [options.type] - The type of the data to fetch.
+ * @return {Object} - An object containing the loading state and the fetched data.
+ * @property {boolean} loading - Indicates whether the data is currently being fetched.
+ * @property {Data | null} data - The fetched data, or null if the data has not been fetched yet.
+ */
const useData = ({
  category,
  type,
}: {
  category: string | string[];
  type?: string | string[] | undefined;
}): {
  loading: boolean;
  data: Data | null;
} => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /**s
     * Fetches data from the API based on the provided category and type.
     *
     * @return {Promise<void>} - A promise that resolves when the data is fetched and set successfully, or rejects with an error if the fetch fails.
     */
    async function fetchData() {
      try {
        const response = await fetch(
          `/api/data?category=${category}&type=${type}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [category, type]);

  return {
    loading,
    data,
  };
};

export default useData;
