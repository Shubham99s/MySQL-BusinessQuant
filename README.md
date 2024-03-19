# Business Quant Assignment
## Created APIs by import the excel data to local MySQL database

## Instruction
- npm install
- node index.js

## API/Routes
- ### Route to get all company data
  - localhost:5000/get_all
  
- ### Route to get revenue and gross profit of a specific company
  - localhost:5000/get_one_data?ticker=AAPL
  - Change the ticker value to get specific company
  
- ### Route to get revenue and gross profit of a specific company for last 5 years
  - localhost:5000/get_data?ticker=AAPL&column=revenue,gp&period=5y
  - Change values of ticker and period to get data for required amount of period.
