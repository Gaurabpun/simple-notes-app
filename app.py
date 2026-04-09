from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

notes = []

@app.route("/", methods=["GET", "POST"])
def welcome():
    error = None
    if request.method == "POST":
        note = request.form["note"].strip()
        if note:
            notes.append(note)
            return redirect(url_for("welcome"))
        else:
            error = "Please enter a note."

    return render_template("index.html", notes=notes, error=error)

if __name__ == "__main__":
    app.run(debug=True)