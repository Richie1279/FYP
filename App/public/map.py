from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

def create_connection():
    connection = mysql.connector.connect(
        host="localhost",  # Update with your MySQL host if needed
        user="your_username",
        password="your_password",
        database="your_database_name"
    )
    return connection

@app.route('/save_journey', methods=['POST'])
def save_journey():
    journey_data = request.json

    start_location = journey_data['startLocation']
    end_location = journey_data['endLocation']
    distance = journey_data['distance']
    duration = journey_data['duration']

    try:
        conn = create_connection()
        cursor = conn.cursor()

        # Replace 'journeys' with the name of your table and adjust column names as needed
        cursor.execute('INSERT INTO journeys (start_location, end_location, distance, duration) VALUES (%s, %s, %s, %s)',
                       (start_location, end_location, distance, duration))

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify(message='Journey saved'), 200

    except Exception as e:
        print(e)
        return jsonify(error='Error saving journey'), 500

if __name__ == '__main__':
    app.run(debug=True)
