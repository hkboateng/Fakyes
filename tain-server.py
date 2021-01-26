#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""

TainApp Server
Created on Thu Jan 21 16:29:22 2021

@author: hubert kyeremateng-boateng

"""
import numpy as np
from flask import Flask, request
from markupsafe import escape

app = Flask(__name__)

@app.route("/")
def index():
    return 'Hello World %s' % escape('!')

@app.route("/auth/authorize")
def authorize():
    app.logger.info("Authorizing Login for user")
    pass
@app.route("/file/upload")
def upload_image():
    pass


