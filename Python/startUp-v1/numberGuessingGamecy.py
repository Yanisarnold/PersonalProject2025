import random
import time 



high_score_tracker =  {"Easy" :  None, "Medium" : None, "Hard": None}

def update_high_score(difficulty, attempts) : 
    if high_score_tracker[difficulty] is None or attempts < high_score_tracker[difficulty] :
        high_score_tracker[difficulty] = attempts
        print(f"New high score for {difficulty} difficulty: {attempts} attempts!")
        
def randomNumber(userChoice, difficulty):
    start_time = time.time()

    attempts = 0 
    target = random.randint(1, 100)
    while userChoice > 0:
        try:
            print(target)
            guess_input = input(f"You have {userChoice} chances left. Enter your guess (or type 'exit' to quit): ")
            if guess_input.lower() == "exit":
                print("Goodbye! Thanks for playing.")
                return
            
            guess = int(guess_input)
            attempts +=1 
            if guess < 1 or guess > 100:
                print("Invalid number! Please guess a number between 1 and 100.")
                continue
            
            if guess == target:
                end_time =  time.time()
                print("Congratulations Matey, you won!!!!")
                print(f"Congratulations! You guessed the correct number in {attempts} attempts.")
                elapsed_time = end_time - start_time
                print(f"You took {elapsed_time:.2f} seconds.")
                update_high_score(difficulty,attempts)

                return
            elif guess < target:
                print(f"The number is greater than {guess}.")
            else:
                print(f"The number is less than {guess}.")
            
            userChoice -= 1
        except ValueError:
            print("Invalid input. Please enter a number or 'exit'.")
    
    print(f"Game over! The number was {target}. Better luck next time!")

def main():
    print("Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 100.")
    
    print("Please select the difficulty level:")
    print("1. Easy (10 chances)")
    print("2. Medium (5 chances)")
    print("3. Hard (3 chances)")
    
    chances = 0

    try:
        command = int(input("Select difficulty level (1, 2, or 3): "))

        if command == 1:
            print("Great! You have selected the Easy difficulty level.")
            chances = 10
            print(f"You have {chances} chances to guess the correct number. Let's start the game!")
            randomNumber(chances, "Easy")

        elif command == 2:
            print("Great! You have selected the Medium difficulty level.")
            chances = 5
            print(f"You have {chances} chances to guess the correct number. Let's start the game!")
            randomNumber(chances, "Medium")
        elif command == 3:
            print("Great! You have selected the Hard difficulty level.")
            print(f"You have {chances} chances to guess the correct number. Let's start the game!")
            chances = 3
            randomNumber(chances, "Hard")
        else:
            print("Invalid choice. Please select a valid difficulty level.")
            return
    except ValueError:
        print("Invalid input. Please enter a number (1, 2, or 3).")
    
    for difficulty, score in high_score_tracker.items() : 
          print(f"{difficulty}: {score if score else 'None'} attempts")

main()
