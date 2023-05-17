export const addNotification = ({ commit }, notification) => {
  commit("PUSH_NOTICATION", notification);
};

export const removeNotification = ({ commit }, notification) => {
  commit("REMOVE_NOTICATION", notification);
};
