import json
import urllib3
import requests
import boto3
from requests_oauthlib import OAuth2Session
from oauthlib.oauth2 import BackendApplicationClient
from requests.auth import HTTPBasicAuth
from flask import Flask, request, redirect, session, url_for
from datetime import datetime
from datetime import timedelta

s3_client = boto3.client("s3")
__s3_bucket_repo = 'creds-repo'
__s3_bucket_folder = 'comactivity_trn'
__ionapi_filename = 'MA_Development.ionapi'
__response__ = None

def get_s3_file(file_name):
    try:
        # TODO: write code...
        file_content = s3_client.get_object(Bucket=__s3_bucket_repo, Key=__s3_bucket_folder+'/'+file_name)["Body"].read()
    except urllib3.exceptions.HTTPError as e:
        print(e)
        return None
    return file_content

def put_s3_file(file_name, body):
    try:
        # TODO: write code...
        return s3_client.put_object(Body=body, Bucket=__s3_bucket_repo, Key=__s3_bucket_folder+'/'+file_name)
    except urllib3.exceptions.HTTPError as e:
        print(e)
        return None
    
def handle_request(token_url, payload):
    try:
        r = requests.post(token_url,headers={"Content-Type":"application/x-www-form-urlencoded"},data=payload)
        resp = r.json()
        token_bearer = resp['access_token']
        token_refresh = resp['refresh_token']
        token_expiry = resp['expires_in']
        tnow = datetime.now()
        texpires = tnow + timedelta(seconds=token_expiry)
        json_update_s3_string = json.dumps({ 'token_bearer': token_bearer, 'token_expiry': texpires.strftime('%Y-%m-%d %H:%M:%S.%f'), 'token_refresh': token_refresh })
        put_s3_file_response = put_s3_file('token_store',json_update_s3_string)
        return json_update_s3_string
    except urllib3.exceptions.HTTPError as e:
        print(e)
        return None
   
        
def handler(event, context):
    if(event is not None):
        try:
            print(event)
            v__s3_bucket_repo = event.get('__s3_bucket_repo') 
            print('__s3_bucket_repo ' + v__s3_bucket_repo)
            v__s3_bucket_folder = event.get('__s3_bucket_folder')
            print('__s3_bucket_folder ' + v__s3_bucket_folder)
            v__ionapi_filename = event.get('__ionapi_filename') 
            print('__ionapi_filename ' + v__ionapi_filename)
            if( (v__ionapi_filename is not None) and (v__s3_bucket_folder is not None) and (v__s3_bucket_repo is not None)):
                __s3_bucket_repo = v__s3_bucket_repo;
                __s3_bucket_folder = v__s3_bucket_folder;
                __ionapi_filename = v__ionapi_filename;
        except:
            print('Unable to parse event variables')
            return None
            
            
    s3_data_file = get_s3_file(__ionapi_filename)
    if(not s3_data_file):
        print('None s3 data file')
        return None

    s3_data_file_json = json.loads(s3_data_file)
    #print(s3_data_file_json)

    request_url = s3_data_file_json['iu'] +'/'+ s3_data_file_json['ti'] 
    token_url = s3_data_file_json['pu'] + s3_data_file_json['ot'] 
    #print (token_url)

    client_id = s3_data_file_json['ci']
    client_secret = s3_data_file_json['cs']
    username = s3_data_file_json['saak']
    password = s3_data_file_json['sask']
   
    token_bearer = None
    token_expiry = None
    token_refresh = None
    
    s3_token_file = get_s3_file('token_store')
    if(not s3_token_file):
        print('Token file is null')
        
    else:
        s3_token_file_json = json.loads(s3_token_file)
        try:
            # TODO: write code...
            token_bearer = s3_token_file_json['token_bearer']
            token_refresh = s3_token_file_json['token_refresh']
            token_expiry = s3_token_file_json['token_expiry']
        except urllib3.exceptions.HTTPError as e:
            print('Token file key error')
            print(e)

    if (not token_bearer) or (not token_expiry) or (datetime.now() >= datetime.strptime(token_expiry ,'%Y-%m-%d %H:%M:%S.%f')):
        #Retrieve New Token and Update Secrets Manager
        print ("Token or Expiry is None")
        payload = {
            'grant_type': 'password',
            'client_id': client_id,
            'client_secret': client_secret,
            'username': username,
            'password': password
        }
        __response__ = handle_request(token_url, payload)
    else:
        refresh_payload = {
            'grant_type': 'refresh_token',
            'client_id': client_id,
            'client_secret': client_secret,
            'refresh_token' : token_refresh
        }
        __response__ = handle_request(token_url, refresh_payload)

    return {
        'statusCode': 200,
        'body': __response__
    }