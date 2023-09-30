from sentence_transformers import SentenceTransformer
from fastapi import FastAPI
from pydantic import BaseModel
import elasticsearch
from elasticsearch import Elasticsearch
from elasticsearch import helpers
import pandas as pd

CSV_BASEPATH = "./data/"

app = FastAPI()


class Details(BaseModel):
    csv_name: str
    elastic_username: str
    elastic_password: str
    elastic_endpoint: str
    index_name: str


model = SentenceTransformer('all-MiniLM-L6-v2')


def get_embeddings(text):
    return model.encode(text)


def start_es(endpoint, username, password):
    es = Elasticsearch(endpoint,basic_auth=(username, password))
    return [es.ping(),es]


@app.get("/")
def home():
    return {"msg": "Welcome to Python Endpoint of Intranet Search Engine."}


@app.post("/python/store", description="Python endpoint to get word embeddings from CSV and storing it in elasticsearch database.")
def store(req: Details):
    l = start_es(req.elastic_endpoint, req.elastic_username, req.elastic_password)
    if not l[0]:
        return {"msg": "elastic-Client initialisation failed", "data":l[0]}
    es = l[1]
    df = pd.read_csv(CSV_BASEPATH+req.csv_name+".csv")
    df = df.dropna(how='all')  # Dropping all null valued rows
    print(df.head())
    print(df.columns)
    # TODO: Include stop-words, NER for better processing

    # ? CSV Structure : content,url,embeddings
    df['embeddings'] = df['content'].apply(get_embeddings)
    print(df["embeddings"])
    return {"msg": "Successfully stored in elastic-search database"}
