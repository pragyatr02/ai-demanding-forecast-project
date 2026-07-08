import os
import json
import joblib
import pandas as pd
from datetime import datetime, timedelta

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model = joblib.load(os.path.join(BASE_DIR, "models", "model.pkl"))

today = datetime.now()

future_data = []
future_dates = []

for i in range(1, 8):
    future_date = today + timedelta(days=i)

    future_dates.append(future_date.strftime("%Y-%m-%d"))

    future_data.append([
        future_date.day,
        future_date.month,
        future_date.year,
        future_date.weekday()
    ])

future_df = pd.DataFrame(
    future_data,
    columns=["Day", "Month", "Year", "DayOfWeek"]
)

predictions = model.predict(future_df)

results = []

for date, pred in zip(future_dates, predictions):
    results.append({
        "date": date,
        "predicted_sales": round(float(pred))
    })

print(json.dumps(results))