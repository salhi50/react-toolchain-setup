declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "data/data.yaml" {
  const content: {
    owner: string;
    age: number;
  };
  export default content;
}

declare module "*.txt" {
  const content: string;
  export default content;
}