from flask import render_template
from database import data

from flask import Flask
app = Flask(__name__)



@app.route('/')
def hello_world():
    return render_template('index.html', data=data)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port='5000', debug=True)
