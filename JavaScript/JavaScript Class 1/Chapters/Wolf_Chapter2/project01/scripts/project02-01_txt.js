/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Thomas Wolf
      Date:   8/28/23

      Filename: project02-01.js
 */

// A funtcion to convert Fahrenheit To Celsius
function FahrenheitToCelsius(degree){
      let calc = (degree - 32) / 1.8
      return calc
}

// A funtcion to convert Celsius To Fahrenheit
function CelsiusToFahrenheit(degree){
      let calc = (degree * 1.8) + 32
      return calc
}
