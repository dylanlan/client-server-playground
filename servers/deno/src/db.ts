const thing = {
  name: "some thing",
  description: "more info",
};

const db = {
  getAll: () => [thing],
  create: (thing: any) => 1,
  get: (id: number) => thing,
  update: (id: number, thing: any) => thing,
  delete: (id: number) => thing,
};

export default db;