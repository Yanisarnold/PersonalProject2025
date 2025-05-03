import json
import redis
import requests
import os 
from dotenv import load_dotenv, dotenv_values

# loading the api key from the  .emv file 
load_dotenv()
api_key = os.getenv("WEATHER_API_KEY")

# setting up the redis connection
redis_host = os.getenv("REDIS_HOST")
redis_port = os.getenv("REDIS_PORT")
redis_password = os.getenv("REDIS_PASSWORD")

def settingUpRedisConnection() :
   try:
    r = redis.Redis(
        host=redis_host,
        port=int(redis_port),
        password=redis_password,
        decode_responses=True,
        max_connections=10
    )
    r.ping()
    print("Connected to Redis successfully!")
   except redis.ConnectionError as e:
    print(f"Failed to connect to Redis: {e}")

def get_weather_by_cityName (cityName) :
  settingUpRedisConnection()
  pool = redis.ConnectionPool(
    host=redis_host,
    port=int(redis_port),
    password=redis_password,
    max_connections=10
    )
  redis_client = redis.Redis(connection_pool=pool)
  cache_key = f"weather:{cityName}"
  cache_data = redis_client.get(cache_key)
  if cache_data:
    print("Serving from cache...")
    weather_data = json.loads(cache_data)  # Decode JSON data
    print("Cached Weather Data:", json.dumps(weather_data, indent=4)) 
    return weather_data
  print ("Fetching from api....")
  try : 
    get_weather = f"https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={api_key}"
    response = requests.get(get_weather)
    response.raise_for_status()
    if response.status_code == 200 : 
        response_json = response.json()
        for data in response_json.get("weather", []) :
           print(data.get("description"))
        redis_client.setex(cache_key,43200,json.dumps(response_json))
        return response_json
    else:
       return {"error": "failed to fetch data"}
  except requests.exceptions.HTTPError as error :
    print(error)
  
get_weather_by_cityName("Paris")