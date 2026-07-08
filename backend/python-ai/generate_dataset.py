import pandas as pd
import numpy as np
from datetime import datetime

np.random.seed(42)

dates = pd.date_range(
    start="2022-01-01",
    end="2024-12-31",
    freq="D"
)

sales = []

for date in dates:
    base = 100

    month_factor = 20 * np.sin(2 * np.pi * date.month / 12)

    weekend_factor = 30 if date.weekday() >= 5 else 0

    noise = np.random.randint(-15, 15)

    demand = max(
        10,
        int(base + month_factor + weekend_factor + noise)
    )

    sales.append([date, demand])

df = pd.DataFrame(
    sales,
    columns=["Date", "Sales"]
)

df.to_csv("data/sales.csv", index=False)

print("Dataset created successfully!")
print(df.head())