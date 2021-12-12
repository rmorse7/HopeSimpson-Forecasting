# Use the LSTM time-sequence regression model to do the forecasting:

### 	Environment:

- Python == 3.7.5
- Tensorflow == 2.3.0
- numpy == 1.18.5
- pandas == 1.2.4
- matplotlib == 3.4.3



### 	How to load the NN model:

- The saved model is located in "./lstm_covid_regression", do:

  ```python
  from tensorflow.keras.models import load_model
  model = load_model('./lstm_covid_regression')
  model.summary()
  ```

  

### 	How to construct a valid 30-days time slice input and do the case prediction for the 31st day:

- Use model.predict(X_input) to get the predicted cases:

  ```python
  # To predict one data sample, do:
  # X_input should be a 30-days time slice
  # The final input shape is : (1, 30, 3)
  # 1 for one input (also can input multiple)
  # 30 for the length of 30-days time slice
  # 3 for the 3-dimentional tuple for each day: [latitude, longitude, confirmed_cases]
  
  preds = model.predict(X_test[0].reshape(1, 30, 3))
  pred_case_num = preds[0, -1]  # 0 to open the wrapper, -1 to get the number of predicted cases
  print(pred_case_num)  # this will give us a float prediction for the cases of the 31st day
  ```

  - To get a better prediction, **the [latitude, longitude] should be the SAME for the 30-days slice**, that is, do a single prediction for a **specific place**
  - Can also use file `load_model_and_predict.ipynb` to do this



- To aggregate confirmed cases by place, do:

  ```Python
  # First, drop lines with a NaN or negative case value
  raw_global_df = pd.read_csv('./covid_global.csv').dropna()
  global_df = raw_global_df.drop(raw_global_df[raw_global_df['Confirmed Cases'] < 0].index)
  global_df = global_df.sort_values(by='Date', ascending=True)
  
  
  # Then, do the aggregation, use tuple (Province/State, Country_Region) as the key:
  from collections import defaultdict
  data_dict = defaultdict(list)
  
  for _, line in global_df.iterrows():
      prov_sta, cty_reg = line['Province_State'], line['Country_Region']
      data = [line['Lat'], line['Long'], line['Confirmed Cases']]
      data_dict[prov_sta, cty_reg].append(data)
      
  for k in data_dict.keys():
      data_dict[k] = np.array(data_dict[k])
  ```

  - See file `data_model_evaluate.ipynb` to see further details on how to construct a valid input
  - Can also use this file to see the training history of the loss value

  





## The structure of the model

- The LSTM (Long-Short Time Memory) neural network-based regression model consists of:
  - One BatchNorm() Layer to do the data normalization
  - One LSTM layer()
  - Two Dense layers and a Dropout to prevent overfitting
  - Use "Mean Absolute Error (MAE)" as the loss function
  - Use "nadam" as the optimizer
- Use tensorflow.Keras module to implement
 