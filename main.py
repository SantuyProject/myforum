from flask import Flask, render_template, redirect, url_for, request
import mysql.connector

app = Flask(__name__)
# Database connection
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="",
    database="DbForum"
)
@app.route("/")
def temp():
	return render_template("Card.html")
	
@app.route('/hal/<name>') 
def  hal(name) :
	return render_template("Card2.html",name=name)
	
	
@app.route("/pros",methods=['GET','POST'])
def inpt():
	if request.method=="POST":
		name=request.form['name']
		forum=request.form['forum']
		
		cur = mydb.cursor()
		cur.execute("INSERT INTO data_user(nama, coment) VALUES (%s, %s)", (name, forum))
		mydb.commit()
		cur.close()
		
		ab=open("/storage/emulated/0/CardSlide/data.txt", "a")
		ab.write(f"\nnama :{name}\nsomeone said :{forum}\n")
		
		return redirect(url_for('hal',name=name))
		
	
	else :
		name=request.args.get('name')
		forum=request.args.get('forum')
		return redirect(url_for('hal'))
if __name__ =="__main__":
	app.run(debug=True)
	

