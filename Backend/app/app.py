# coding=utf-8
import logging
import os
from surveyapp import app
from dotenv import load_dotenv

__author__ = 'Ductt'
_logger = logging.getLogger(__name__)

_DOT_ENV_PATH = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(_DOT_ENV_PATH)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
