import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

df = pd.read_csv('news.csv')
X_train, X_test, y_train, y_test = train_test_split(df['text'], df['label'], test_size=0.2)
vectorizer = TfidfVectorizer()
X_train_tfidf = vectorizer.fit_transform(X_train)
model = LogisticRegression()
model.fit(X_train_tfidf, y_train)
y_pred = model.predict(vectorizer.transform(X_test))
accuracy = np.mean(y_pred == y_test)
print('Accuracy:', accuracy)
