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
    throw new Error("Error deleting tag");
  }
};

const addTag = async (tag: Tag) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tags`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(tag),
    });
    if (response.ok) {
      const message = await response.json();
      return message;
    }
  } catch (e) {
    throw new Error("Error adding tag");
  }
};

const syncTags = async (newTags: Tag[]) => {
  const remoteTags = await getTags();
  const remoteTagIds = remoteTags.map((tag: Tag) => tag.id);
  const newTagIds = newTags.map((tag) => tag.id);

  const uniqueNewTagIds = newTagIds.filter((id) => !remoteTagIds.includes(id));
  const uniqueRemoteTagIds = remoteTagIds.filter(
    (id: string) => !newTagIds.includes(id)
  );

  const deletePromises = uniqueRemoteTagIds.map((id: string) => deleteTag(id));
  const addPromises = uniqueNewTagIds.map((idToAdd) => {
    const newTag = newTags.find(({ id }) => id === idToAdd);
    return newTag ? addTag(newTag) : () => {};
  });

  return Promise.all([...deletePromises, ...addPromises]);
};

export { getTags, deleteTag, syncTags };
