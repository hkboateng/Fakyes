#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Message Broker Server/Client

Created on Tue Jan 19 21:58:23 2021

@author: hkyeremateng-boateng
"""
import pika
import sys

credentials = pika.PlainCredentials('guest','guest')
parameters = pika.ConnectionParameters('172.17.0.2',5672,'/',credentials)