# 1
from datetime import datetime
even_numbers = [2, 4, 6, 8, 10]
sum = 0
for i in even_numbers:
    sum += i
print(sum)

# 2
middle = {
    "name": "saba",
    "age": 22,
    "address": "dolabauri str. N 35"
}
jungle = {
    "name": "dato",
    "age": 19,
    "address": "shuamta str. N 20"
}
support = {
    "name": "giorgi",
    "age": 17,
    "address": "dolidze str. N 42"
}

players = [middle, jungle, support]

# 3
print(
    f"My name is {players[0]['name']}, my age is {players[0]['age']}, my addres is {players[0]['address']}.")

# 4
if players[1]["age"] < 19:
    print(f"{players[1]['name']} is a teenager")
else:
    print(f"{players[1]['name']} is an adult")

# 5
numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99,]
for i in range(len(numbers)):
    print(numbers[i])

# 6
current_time = datetime.now()
current_day = current_time.weekday()
current_hour = current_time.hour
week_days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]
if 5 <= current_hour < 12:
    print(f"It is {week_days[current_day]} morning")
elif 12 <= current_hour < 17:
    print(f"It is {week_days[current_day]} afternoon")
elif 17 <= current_hour < 21:
    print(f"It is {week_days[current_day]} evening")
else:
    print(f"It is {week_days[current_day]} night")
