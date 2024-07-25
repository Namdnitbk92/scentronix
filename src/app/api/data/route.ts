import { getRandomImage, getRandomText } from "@/app/utils";
import { NAVBAR_ITEMS } from "@/constants/navbar";
import { NextResponse } from "next/server";

/**
+ * Generates a title based on the provided category and type.
+ *
+ * @param {string | null} category - The category of the title.
+ * @param {string | null} type - The type of the title.
+ * @return {string} The generated title, truncated to a maximum length of 30 characters.
+ */
function getTitle(category: string | null, type: string | null): string {
  return `${getRandomText(1)} ${category || type || ""}`.substring(0, 30);
}

/**
+ * Finds an item in the NAVBAR_ITEMS array based on the provided category, type, and subcategory.
+ *
+ * @param {string} category - The category of the item.
+ * @param {string} [type] - The type of the item. Optional.
+ * @param {string} [subcategory] - The subcategory of the item. Optional.
+ * @return {Promise<NavBarItem | undefined>} A promise that resolves to the found item, or undefined if not found.
+ */
async function findItem(category: string, type?: string | null) {
  if (type && type !== "undefined") {
    return NAVBAR_ITEMS.find(
      (item) =>
        item.path.includes(category) &&
        item.subItems.some((sub) => sub.path.includes(type))
    );
  }
  return NAVBAR_ITEMS.find((item) => item.path.includes(category));
}

/**
+ * Retrieves data based on the provided category, type, and subcategory parameters from the request URL.
+ *
+ * @param {Request} request - The request object containing the URL.
+ * @return {Promise<NextResponse>} A promise that resolves to a NextResponse object containing the data, content, image, and title.
+ * @throws {NextResponse} If the category parameter is missing, returns a NextResponse object with an error message and a status code of 400.
+ * @throws {NextResponse} If the item is not found, returns a NextResponse object with an error message and a status code of 404.
+ */

export async function GET(request: Request) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const type = url.searchParams.get("type");

  if (!category) {
    return NextResponse.json(
      { error: "Category is required" },
      { status: 400 }
    );
  }

  const item = await findItem(category, type);

  if (!item) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.json({
    data: item,
    content: getRandomText(2),
    image: getRandomImage(),
    title: getTitle(category, type),
  });
}
