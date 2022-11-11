import { openDB } from "idb";

export function storeVideo(video) {
  // creates the database
  const database = openDB("video", 1, {
    upgrade(db) {
      //creates the object store
      db.createObjectStore("video");
    },
  });
}

// export async function storing(val) {
//   const db = await openDB("video", 1);
//   db.add("video", val, "watched");
//   db.close();
// }

// export async function getting() {
//   const db = await openDB("video", 1);
//   db.get("video", "watched");
//   db.close();
// }
