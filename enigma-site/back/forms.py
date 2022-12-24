from flask import (
    Blueprint, jsonify, flash, g, redirect, render_template, request, 
url_for)

from werkzeug.exceptions import abort
import sqlite3
bp = Blueprint("forms", __name__)

@bp.route('/submit-form', methods = ['POST'])
def submit_form():
    form_data = request.form
    #process data
    return 'success'


@bp.route('/get-data')
def get_data():
    data = get_data_from_database()
    return jsonify(data)

def get_data_from_database():
    conn = sqlite3.connect('mydatabase.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM table_name')
    data = cursor.fetchall()
    conn.close()
    return data