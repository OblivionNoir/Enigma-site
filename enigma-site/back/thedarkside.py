#this is our factory app
from flask import Flask

app = Flask(__name__)


def createApp(test_config=None):
    #create the Flask instance
    app = Flask(__name__, instance_relative_config=True)


