import sqlite3
# from http.server import BaseHTTPRequestHandler, HTTPServer
# import socket
from flask import Flask, jsonify

app = Flask(__name__)

con = sqlite3.connect("universities.db")
cur = con.cursor()

cur.execute("CREATE TABLE IF NOT EXISTS university(universityID INTEGER PRIMARY KEY, universityName VARCHAR)")
cur.execute("CREATE TABLE IF NOT EXISTS student(studentName VARCHAR, universityID INTEGER, FOREIGN KEY(universityID) REFERENCES university(universityID))")

uniIndex = 1

def addStudent(name: str, uniName: str):
    cur.execute("SELECT universityID FROM university WHERE universityName = ?", (uni,))
    row = cur.fetchone()
    if row is None:
        cur.execute("INSERT INTO university VALUES (?, ?)", (uniIndex, uniName))
        cur.execute("INSERT INTO student VALUES (?, ?))", (name, uniIndex))
        uniIndex += 1
    else:
        cur.execute("INSERT INTO student VALUES (?, ?))", (name, row[0]))
    con.commit()

def getStudentList(name: str):
    cur.execute(f"SELECT universityName FROM student JOIN university ON universityID WHERE studentName == ?", (name,))
    results = cur.fetchall()
    return results

def deleteUni(sName: str, uniName: str):
    cur.execute("SELECT universityID FROM university WHERE universityName = ?", (uniName,))
    row = cur.fetchone()
    if row is None:
        return
    cur.execute("DELETE FROM student WHERE studentName = ? AND universityID = ?", (sName, uniID))
    con.commit()


@app.route("/add/<student_name>/<university_name>")
def add_route(student_name, university_name):
    """
    Example: /add/John/Harvard
    - Adds student 'John' to university 'Harvard'.
    - If 'Harvard' doesn't exist, it creates it first.
    - Returns a simple message.
    """
    addStudent(student_name, university_name)

@app.route("/list/<student_name>")
def list_universities_for_student(student_name):
    """
    Example: /list/John
    - Returns a JSON array of all universities for student 'John'.
    """
    universities = getStudentList(student_name)
    return jsonify(universities)


if __name__ == "__main__":
    # Note: "127.0.0.2" is just another loopback address
    app.run(host="127.0.0.2", port=8080, debug=True)


# server_ip = "127.0.0.2"
# server_port = 8080

# #server
# server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# server_socket.bind((server_ip, server_port))

# server_socket.listen(5)

# client_socket, client_address = server_socket.accept()

# data = client_socket.recv(1024) # Receive up to 1024 bytes of data
# client_socket.send("Hello, Client!".encode()) # Send a response to the client

# client_socket.close()
# server_socket.close()

# class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
#     def do_GET(self):
#         rows = getStudentList(name?)
     
#     def do_POST(self):

# 127.0.0.2:8080/add_db







