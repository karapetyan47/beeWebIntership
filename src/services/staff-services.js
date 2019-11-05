export default class StaffServices {
  data = [
    {
      id: 1,
      name: "Poxos",
      surname: "Poxosyan",
      skills: "React, Redux",
      salary: "200000"
    },
    {
      id: 2,
      name: "Petros",
      surname: "Petrosyan",
      skills: "Node.js, PHP",
      salary: "270000"
    }
  ];

  getStaffs() {
    return new Promise(resolve => {
      resolve(this.data);
    });
  }
}
