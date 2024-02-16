using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wolf_10._4
{
    //Defines the Employee class
    internal class Employee
    {
        //Privates fields to store employee details
        private string _name;
        private int _idNumber;
        private string _department;
        private string _position;

        //Constructor that initializes all fields of the Employee class
        public Employee(string name, int idNumber, string department, string position)
        {
            _name = name;
            _idNumber = idNumber;
            _department = department;
            _position = position;
        }

        //Constructor that only requires name and ID number; department and position are set to default values
        public Employee(string name, int idNumber) : this(name, idNumber, "", "")
        {
        }

        //Default constructor that initializes fields with default values
        public Employee() : this("", 0, "", "")
        {
        }

        //Properties to get and set the name of the employee
        public string Name { get => _name; set => _name = value; }

        //Properties to get and set the ID number of the employee
        public int IdNumber { get => _idNumber; set => _idNumber = value; }

        //Properties to get and set the department of the employee
        public string Department { get => _department; set => _department = value; }

        //Properties to get and set the position of the employee
        public string Position { get => _position; set => _position = value; }

        //Overrides the ToString method to return a formatted string representing the employee's details
        public override string ToString()
        {
            return $"Name: {_name}\nID Number: {_idNumber}\nDepartment: {_department}\nPosition: {_position}";
        }
    }
}