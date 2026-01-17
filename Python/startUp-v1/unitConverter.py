# Requirements
# Build a simple web page that will have different sections for different units of measurement. The user can input a value to convert, select the units to convert from and to, and view the converted value.

# The user can input a value to convert.
# The user can select the units to convert from and to.
# The user can view the converted value.
# The user can convert between different units of measurement like length, weight, temperature, etc (more given below).

# You can include the following units of measurement to convert between:
# Length: millimeter, centimeter, meter, kilometer, inch, foot, yard, mile.
# Weight: milligram, gram, kilogram, ounce, pound.
# Temperature: Celsius, Fahrenheit, Kelvin.

def length_converter(lengthToConvert, unitToconverterFrom,unitToconverterTo ):
  if unitToconverterFrom == "mm" and unitToconverterTo == "cm" : 
    total = (lengthToConvert / 10)
    print(total)

length_converter(100,"mm","cm")


def main () : 

  print ("which option would link to choose")
  print("length, weight, temperature")
  chooseOption = input("converter > ")
  if chooseOption == "length" :
    print ("enter your length:")
    command = input("enter length: " ).split()
    if len(command) == 3 : 
       lengthToConvert, unitToconverterFrom,unitToconverterTo = command
       length_converter(int(lengthToConvert), unitToconverterFrom,unitToconverterTo)

main()
