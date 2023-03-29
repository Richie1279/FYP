import requests

api_key = 'your_mapbox_api_key'
origin = 'longitude,latitude'
destination = 'longitude,latitude'

url = f'https://api.mapbox.com/directions/v5/mapbox/driving/{origin};{destination}?access_token={api_key}&steps=true'

response = requests.get(url)

if response.status_code == 200:
    data = response.json()
else:
    print("Error:", response.status_code)

    