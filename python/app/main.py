from fastapi import FastAPI
from pydantic import BaseModel
import elasticsearch
from elasticsearch import Elasticsearch
from elasticsearch import helpers
import pandas as pd

app = FastAPI()

    
class Details(BaseModel):
    csv_path : str
    elastic_username : str
    elastic_password : str
    index_name : str

from sentence_transformers import SentenceTransformer
model = SentenceTransformer('all-MiniLM-L6-v2')

def get_embeddings(text):
    return model.encode(text)


@app.get("/python")
def home():
    return {"msg":"Welcome to Python Endpoint of Intranet Search Engine."}


@app.post("/python/store", description="Python endpoint to get word embeddings from CSV and storing it in elasticsearch database.")
def store(payload: Details):
    df = pd.read_csv(Details.csv_path)
    df = df.dropna(how='all') # Dropping all null valued rows
    df['embeddings'] = df['content'].apply(get_embeddings) # Assuming the scraped content is inside content column
    
    return {"msg": "Successfully stored in elastic-search database"}