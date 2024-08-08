using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Wolf_Milestone4
{
    public class Validator
    {
        public static bool IsOnlyLetters(string var)
        {
            string pattern = @"^[a-zA-Z\s]+$";

            return Regex.IsMatch(var, pattern);
        }

        public static bool IsOnlyLettersAndNumbers(string var)
        {
            string pattern = @"^[a-zA-Z0-9\s]+$";

            return Regex.IsMatch(var, pattern);
        }

        public static bool IsOnlyNumbers(string var)
        {
            string pattern = @"^\d+$";

            return Regex.IsMatch(var, pattern);
        }

        public static bool IsPositiveNumber (string var)
        {
            string pattern = @"^\d+$";

            return Regex.IsMatch(var, pattern);
        }


        public static bool IsValidEmail(string var)
        {
            string pattern = @"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$";
            return Regex.IsMatch(var, pattern);
        }
        public static bool IsValidAddress(string var)
        {

            string pattern = @"^[a-zA-Z0-9\s,\.]+$";
            return Regex.IsMatch(var, pattern);
        }

        public static bool IsValidDate(string var)
        {
            return DateTime.TryParse(var, out _);
        }

        public static bool IsValidPrice(string var)
        {
            string pattern = @"^\$?\d+(\.\d{2})?$";
            return Regex.IsMatch(var, pattern);
        }

        public static bool IsValidPhone(string var)
        {
            string pattern = @"^\+?(\d[\d-.() ]+)?(\([\d-.() ]+\))?[\d-.() ]+\d$";
            return Regex.IsMatch(var, pattern);
        }

        public static bool IsValidNumber(string var)
        {
            string pattern = @"^\d+$";
            return Regex.IsMatch(var, pattern);
        }


        public static bool IsText(string var)
        {
            // Allows letters, digits, spaces, and selected punctuation.
            // Excludes single quotes, semicolons, and comment markers that could be used in SQL injection.
            string pattern = @"^[a-zA-Z0-9\s.,!?@#$%^&*()_+=\[\]{}\\|<>`~\""-]+$";

            return Regex.IsMatch(var, pattern);
        }
    }
}
