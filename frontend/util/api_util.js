export const getUsers = () => {
  return $.ajax({
    method: "GET",
    url: "/api/users"
  });
};

export const getUser = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });
};

export const getInterval = (userId, mappedId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/interval/${mappedId}`
  });
};
