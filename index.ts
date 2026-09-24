interface PostGateKeeper {
  title: string;
  daysOld: number;
  published: boolean;
}
//interface -> describe the structure of an object, defining the properties and their types.

const Post: PostGateKeeper = {
    title: "Understanding TypeScript Interfaces",
    daysOld: 5,
    published: true
};
