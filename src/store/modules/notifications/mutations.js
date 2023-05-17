export const PUSH_NOTICATION = (state, notifications) => {
  state.notifications.push({
    ...notifications,
    id: (Math.random().toString(36) + Date.now().toString(36)).substring(2),
  });
};

export const REMOVE_NOTICATION = (state, notification) => {
  state.notifications = state.notifications.filter(
    (item) => item.id !== notification.id
  );
};
