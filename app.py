from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

# Connect to the MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="your_username",
    password="your_password",
    database="health_db"
)

# Define route for symptom checking
@app.route('/check_symptom', methods=['POST'])
def check_symptom():
    data = request.json
    symptom = data.get("symptom", "").lower()

    cursor = db.cursor()
    query = "SELECT conditions FROM symptoms WHERE symptom_name = %s"
    cursor.execute(query, (symptom,))
    result = cursor.fetchone()

    if result:
        conditions = result[0].split(', ')
        return jsonify({"conditions": conditions})
    else:
        return jsonify({"conditions": []})

if __name__ == '__main__':
    app.run(debug=True)
