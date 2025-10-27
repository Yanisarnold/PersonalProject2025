import pandas as pd 
import matplotlib.pyplot as plt


df = pd.read_csv("/Users/christyouzan/Documents/PersonalProject2025/Python/data/heart.csv")

print(df.head(5))
# print(df.columns)
# print(df.dtypes)
# print("isnuLL: ",df.isna())
# Average Age = (Sum of all ages) / (Number of people). 
averagePatientAge = sum(df["Age"]) / len(df["Age"])
# print (round(averagePatientAge,1))
# Median for cholesterol
patients_cholesterol = df["Cholesterol"].sort_values().reset_index(drop=True)
n = len(patients_cholesterol)
# print(n)

# Mean of Cholestoral 
meanOfCho = sum(df["Cholesterol"]) / len(df["Cholesterol"])
# print(round(median - meanOfCho) )
# none are less than 0
# print(sum(df["Cholesterol"] < 0))
# print(sum(df["RestingBP"] < 0))
# print(df.isnull().sum())
# print(df.groupby(["Age", "HeartDisease"]).size())
groupedByAge = df.groupby([(df["Age"] > 50), "HeartDisease"]).size().rename("Count").reset_index()
# print(groupedByAge)
groupedBy = df.groupby(["Age","Sex", "HeartDisease"]).size().rename("Count").reset_index()
# print(groupedBy)
ageMoreThan = []

# Loop through each row in the DataFrame
for index, row in groupedBy.iterrows():
    if (row["Sex"] == "M") and (row["Age"] > 50) and (row["HeartDisease"] == 1 ):
        ageMoreThan.append(row)

ageMoreThan_df = pd.DataFrame(ageMoreThan)
# print(sum(ageMoreThan_df["Age"]))
# print(ageMoreThan)

# groupedChestPain = df.groupby(["ChestPainType", "HeartDisease"]).size()

# print( groupedChestPain)
# plt.bar(grouped.values,grouped)
# plt.xlabel("Age-HeartDisease")
# plt.ylabel("Number of Patients")
# plt.show()

# print(df["HeartDisease"] == 0)


male_patient = df[df["Sex"] == "M"]
print(len(male_patient))
fem_patient = df[df["Sex"] == "F"]
print(len(fem_patient ))
patient_Not_Diagnosed = df[df["HeartDisease"] == 1]
print(len(patient_Not_Diagnosed ))
patientDiagnosed = df[df["HeartDisease"] == 0]
print(len(patientDiagnosed))

heartDisease_asy = df[df["HeartDisease"] == 0 & (df["ChestPainType"] == "ASY")]
print(len(heartDisease_asy))

print(df["Age"].head(5))
