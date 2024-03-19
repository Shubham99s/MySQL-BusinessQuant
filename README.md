##Business Quant Assignment

#Created APIs by import the excel data to local MySQL database

#Instruction
-npm install
-node index.js

#API/Routes
-Route to get all company data
  localhost:5000/get_all
  
-Route to get revenue and gross profit of a specific company
  http://localhost:5000/get_one_data?ticker=AAPL
  can change the ticker value to get specific company
  
-Route to get revenue and gross profit of a specific company for last 5 years
localhost:5000/get_data?ticker=AAPL&column=revenue,gp&period=5y
can change values of ticker and period to get data for required amount of period.
