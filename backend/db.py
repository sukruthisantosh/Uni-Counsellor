import sqlite3
from http.server import BaseHTTPRequestHandler, HTTPServer
import socket


con = sqlite3.connect("universities.db")
cur = con.cursor()

cur.execute("CREATE TABLE IF NOT EXISTS university(universityID INTEGER PRIMARY KEY, universityName VARCHAR)")
cur.execute("CREATE TABLE IF NOT EXISTS student(studentName VARCHAR, universityID INTEGER, FOREIGN KEY(universityID) REFERENCES university(universityID))")

server_ip = "127.0.0.2"
server_port = 8080

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
    # def do_GET(self):
     
    # def do_POST(self):

# 127.0.0.2:8080/add_db


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





