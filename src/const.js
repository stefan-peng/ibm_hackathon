export const EmployeeTypes = {
  ALL: "All users",
  INTERN: "Interns",
  HR: "HR",
  MANAGER: "Managers"
};

export const EmployeeCategories = {
  "Intern-Technical": {
    Name: "Intern-Technical",
    ID: 1,
    Type: EmployeeTypes.INTERN
  },
  "Intern-Procurement": {
    Name: "Intern-Procurement",
    ID: 2,
    Type: EmployeeTypes.INTERN
  },
  "Intern-EO&S": {
    Name: "Intern-EO&S",
    ID: 3,
    Type: EmployeeTypes.INTERN
  },
  "Intern-Extreme Blue": {
    Name: "Intern-Extreme Blue",
    ID: 4,
    Type: EmployeeTypes.INTERN
  },
  "Intern-CIO": {
    Name: "Intern-CIO",
    ID: 5,
    Type: EmployeeTypes.INTERN
  },
  "Intern-Orphan": {
    Name: "Intern-Orphan",
    ID: 6,
    Type: EmployeeTypes.INTERN
  },
  HR: {
    Name: "HR",
    ID: 7,
    Type: EmployeeTypes.HR
  },
  Manager: {
    Name: "Manager",
    ID: 8,
    Type: EmployeeTypes.MANAGER
  }
};

export const API = "https://flask-back.us-south.cf.appdomain.cloud";
