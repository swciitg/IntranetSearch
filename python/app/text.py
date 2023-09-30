import pandas as pd
import numpy as np
from sentence_transformers import SentenceTransformer, util
model = SentenceTransformer('all-MiniLM-L6-v2')

def embeddings(document):
    sentences  = [document]
    sentence_embeddings = model.encode(sentences)
    encod_np_array = np.array(sentence_embeddings)
    encod_list = encod_np_array.tolist()
    return encod_list[0] == model.encode(document)


f = "Hello Babes!"

print(embeddings(f))