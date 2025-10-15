import pandas as pd
import matplotlib.pyplot as plt
# Download latest version
path = "Python/data/heart.csv"

print("Path to dataset files:", path)
# Load the latest version
df = pd.read_csv(path)

print( df)

print(df.dtypes)
# We need to note that a couple of columns -- FastingBS and HeartDisease -- have the dtype int64, but are also categorical variables, since they only take the values 0 and 1.

# What is the average age of the patients?
patient_Age = len(df.loc[:,"Age"])
patient_total_Age = df["Age"].sum()
patient_average_Age = patient_total_Age  / patient_Age 
print(patient_average_Age)

# Are there any features that have statistics that don't look right to you or that stand out? Maybe a very high or low value for a given statistic?
print(df.sort_values(by=["Age","Cholesterol","MaxHR"],ascending=[False, False, False]))
# Are there any missing values?
print(df.isnull())
print(df.isnull().sum())


heartRate_columns = [heart for heart in df.columns]
print(heartRate_columns)

chosen_by = [df.value_counts]
# print(chosen_by)

print ("ChestPain")
groupByChestPain = df.groupby(["ChestPainType","HeartDisease"]).size().reset_index(name="Count")
print(groupByChestPain)

# groupByChestSex = df[(df["Sex"]  == "M") &( df["Age"] > 50) ,(df["HeartDisease"] == "Yes")].shape[0]
# print(groupByChestSex)
# Total number of patients with heart disease
total_hd = df[df["HeartDisease"] == 1].shape[0]

# Number of patients who are male AND over 50 AND have heart disease
male_over_50_hd = df[(df["Sex"] == "M`") & (df["Age"] > 50) & (df["HeartDisease"] == 1)].shape[0]
print("hello", male_over_50_hd)
# Calculate percentage
percentage = (male_over_50_hd / total_hd) * 100

# Optional: round for readability
percentage = round(percentage, 2)

print(f"{percentage}% of heart disease patients are male and over 50.")

# groupBy = df.groupby(["Age","HeartDisease"]).size().reset_index(name="Count")
# print(groupBy['Count'])
# plt.bar(groupByChestPain["ChestPainType"],groupByChestPain['Count'])
# plt.xlabel('ChestPainType')
# plt.ylabel('HeartDisease')
# plt.title('Which Visualization Library Do People Prefer?')
# plt.show()


