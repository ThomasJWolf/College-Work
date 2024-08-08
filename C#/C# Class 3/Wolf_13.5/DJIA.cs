/* 
 * Thomas Wolf
 * 3/3/24
 * Dow Jones Industrial Average Highs
 * DJIA.cs
*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wolf_13._5
{
    internal class DJIA
    {
        //Private fields to store the data
        private int _day;
        private string _month;
        private int _year;
        private double _closingValue;
        private double _openingValue;
        private double _high;
        private double _low;

        //Constructor to initialize the fields with the given values
        public DJIA(int day, string month, int year, double closingValue, double openingValue, double high, double low)
        {
            _day = day;
            _month = month;
            _year = year;
            _closingValue = closingValue;
            _openingValue = openingValue;
            _high = high;
            _low = low;
        }

        //Properties to get the values of the fields
        public string Day
        {
            get { return _day.ToString(); }
        }

        public string Month
        {
            get { return _month; }
        }

        public string Year
        {
            get { return _year.ToString(); }
        }

        public double ClosingValue
        {
            get { return _closingValue; }
        }

        public double OpeningValue
        {
            get { return _openingValue; }
        }

        public double High
        {
            get { return _high; }
        }

        public double Low
        {
            get { return _low; }
        }

        public override string ToString()
        {
            return _day + " " + _month + " " + _year + " " + _closingValue + " " + _openingValue + " " + _high + " " + _low;
        }
    }
}
