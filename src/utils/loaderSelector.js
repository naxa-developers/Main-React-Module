export const checkIfLoading = (store, actionsToCheck) => {
  return store?.loader.loader.actions.some((action) => JSON.stringify(actionsToCheck) === JSON.stringify(action));
};

export const checkIfRefreshing = (store, actionToCheck) =>
  store?.loader.loader.refreshing.some((action) => action === actionToCheck);
