exports.getUserListFromData = (data) => {
  let users = [];
  for (const id in data) {
    if (data.hasOwnProperty(id)) {
      const name = data[id].name;
      const user = {
        id,
        name,
      };
      users.push(user);
    }
  }
  return users;
};
