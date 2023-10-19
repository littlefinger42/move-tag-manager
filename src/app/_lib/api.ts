import { Tag } from "@/app/_types/tag";

const getTags = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tags`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });
    if (response.ok) {
      const tags = await response.json();
      return tags.map((tag: Tag) => ({ ...tag, synced: true }));
    } else {
      throw Error(`An error has occured: ${response.status}`);
    }
  } catch (e) {
    console.error(e);
  }
};

const deleteTag = async (tagId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tags/${tagId}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      const message = await response.json();
      return message;
    }
  } catch (e) {
    console.error(e);
  }
};

export { getTags, deleteTag };
