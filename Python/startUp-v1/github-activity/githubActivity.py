import requests


# kamranahmedse
def getUserActivities(gitHubUserName): 
  if not gitHubUserName:
     print(" Incorrect input")
     return 
     
  try: 
     gitHubEvent = f"https://api.github.com/users/{gitHubUserName}/events"
     response = requests.get(gitHubEvent)
     response.raise_for_status()
     response_json = response.json()
     if not response_json:
            print("No events found for this user.")
            return
     for event in response_json:
          print("Output:")
          event_type = event.get("type")
          repo_name = event.get("repo", {}).get("name")
          if event_type and repo_name:
            print( event_type , repo_name)
  except requests.HTTPError as error :
      print(f"HTTP error occurred:{error}")
  except requests.ConnectionError:
      print("Failed to connect to GitHub. Please check your internet connection.")
  except Exception as error :
       print(f"Unexpected error: {error}")

def main():
  while True:
    command  =  input(("github-activity >")).strip()
    if command.lower() == "exit" :
       print ("Goodbye")
       break
    getUserActivities(command)

main()