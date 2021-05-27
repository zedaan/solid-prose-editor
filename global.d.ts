declare module "solid-js" {
  namespace JSX {
    interface Actions {
      draggable: boolean;
      model: [() => any, (v: any) => any];
    }
  }
}

declare module "*.png" {
  const png: any;
  export default png;
}

declare module '*.svg' {
  const content: any;
  export default content;
}
