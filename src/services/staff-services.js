export default class StaffServices {
  data = [
    {
      id: 1,
      name: "Poxos",
      surname: "Poxosyan",
      position: "front-end",
      salary: "200000"
    },
    {
      id: 2,
      name: "Petros",
      surname: "Petrosyan",
      position: "back-end",
      salary: "270000"
    }
  ];

  getStaffs() {
    return new Promise(resolve => {
      resolve(this.data);
    });
  }
}
