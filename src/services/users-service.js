export default class UsersService {
  data = [
    {
      name: "User1",
      password: "1111"
    },
    {
      name: "User2",
      password: "2222"
    },
    {
      name: "User3",
      password: "3333"
    }
  ];

  getUsers() {
    return new Promise(resolve => {
      resolve(this.data);
    });
  }
}
