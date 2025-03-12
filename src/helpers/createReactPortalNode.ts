export const createReactPortalNode = (wrapperId: string) => {
  const node = document.createElement('div');

  node.setAttribute('id', wrapperId);

  document.body.appendChild(node);

  return node;
};
