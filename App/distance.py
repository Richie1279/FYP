import requests

api_key = 'pk.eyJ1IjoicmljaGllMTciLCJhIjoiY2xlZTkxaHAzMGVxdzNwcDJ2bGtveXl5bSJ9.UYP-FWayYyPgyggSwtTpVQ'
origin = 'longitude,latitude'
destination = 'longitude,latitude'

url = f'https://api.mapbox.com/directions/v5/mapbox/driving/{origin};{destination}?access_token={api_key}&steps=true'

response = requests.get(url)

if response.status_code == 200:
    data = response.json()
else:
    print("Error:", response.status_code)

try:
    route = data['routes'][0]
    distance = route['distance']
    print("Distance (meters):", distance)
except KeyError:
    print("Error: Unable to extract distance from API response.")
