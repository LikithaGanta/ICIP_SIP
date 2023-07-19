import numpy as np
import pandas as pd
from sklearn.cluster import KMeans

# Load the dataset
df = pd.read_csv('ForestFires.csv')

# Select the features to use for clustering
features = ['X', 'Y', 'month', 'day', 'FFMC', 'DMC', 'DC', 'ISI']

# Create a KMeans model
model = KMeans(n_clusters=5)

# Fit the model to the data
model.fit(df[features])

# Predict the cluster labels for the data
labels = model.predict(df[features])

# Print the cluster labels
print(labels)
