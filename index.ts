#! /usr/bin/env node

import inquirer from "inquirer"; 

const currencyConverter = await inquirer.prompt(
    [
        {
            message: "Choose your default currency ",
            type: 'list',
            name: "defaultCurrency",
            choices: ["PKR (Pakistani Rupee)" , "INR (Indian Rupee)" , "USD (US DOLLAR)" , "SAR (Saudi Riyal)"]
        },
        {
            message: "Choose the currency you want to convert to",
            type: 'list',
            name: "currencyToConvert",
            choices: ["PKR (Pakistani Rupee)" , "INR (Indian Rupee)" , "USD (US DOLLAR)" , "SAR (Saudi Riyal)"]
        },
        {
            message: "Input Amount",
            type: 'number',
            name: "Amount",
        },
    ]
);
console.log(`You chose to convert ${currencyConverter.defaultCurrency} to ${currencyConverter.currencyToConvert}`)
console.log("--------------------------------------------------------------------------------------")
//                                       PAKISTANI RUPEE

if (currencyConverter.defaultCurrency === "PKR (Pakistani Rupee)" && currencyConverter.currencyToConvert === "PKR (Pakistani Rupee)"){
    console.log("Exchange Rate = 1 Pakistani Rupee  = 1 Pakistani Rupee")
    console.log("--------------------------------------------------------------------------------------")
    console.log(`Converted amount = ${currencyConverter.Amount}`)
} 
else if (currencyConverter.defaultCurrency === "PKR (Pakistani Rupee)" && currencyConverter.currencyToConvert === "INR (Indian Rupee)"){
    console.log("Exchange Rate = 1 Indian Rupee  = 3.34 Pakistani Rupee ")
    console.log("--------------------------------------------------------------------------------------")
    console.log(`Converted amount = ${currencyConverter.Amount / 3.34}`)
}
else if (currencyConverter.defaultCurrency === "PKR (Pakistani Rupee)" && currencyConverter.currencyToConvert === "USD (US DOLLAR)"){
    console.log("Exchange Rate = 1 US Dollar = 278.00 Pakistani Rupee ")
    console.log("--------------------------------------------------------------------------------------")
    console.log(`Converted amount = ${currencyConverter.Amount / 278}`)
}
else if (currencyConverter.defaultCurrency === "PKR (Pakistani Rupee)" && currencyConverter.currencyToConvert === "SAR (Saudi Riyal)"){
    console.log("Exchange Rate = 1 Saudi Riyal = 74.11 Pakistani Rupee ")
    console.log("--------------------------------------------------------------------------------------")
    console.log(`Converted amount = ${currencyConverter.Amount / 74.11}`)
}

//------------------------------------------------------------------------------------------------------------

//                                    UNITED STATES DOLLARS

else if (currencyConverter.defaultCurrency === "USD (US DOLLAR)" && currencyConverter.currencyToConvert === "USD (US DOLLAR)"){
    console.log("Exchange Rate = 1 US Dollar = 1 US Dollar")
    console.log("--------------------------------------------------------------------------------------")
    console.log(`Converted amount = ${currencyConverter.Amount}`)
} 
else if (currencyConverter.defaultCurrency === "USD (US DOLLAR)" && currencyConverter.currencyToConvert === "PKR (Pakistani Rupee)"){
    console.log("Exchange Rate = 1 US Dollar = 278.00 Pakistani Rupee ")
    console.log("--------------------------------------------------------------------------------------")
    console.log(`Converted amount = ${currencyConverter.Amount * 278.00}`)
}
else if (currencyConverter.defaultCurrency === "USD (US DOLLAR)" && currencyConverter.currencyToConvert === "INR (Indian Rupee)"){
    console.log("Exchange Rate = 1 US Dollar = 83.28 Indian Rupee ")
    console.log("--------------------------------------------------------------------------------------")
    console.log(`Converted amount = ${currencyConverter.Amount * 83.28}`)
}
else if (currencyConverter.defaultCurrency === "USD (US DOLLAR)" && currencyConverter.currencyToConvert === "SAR (Saudi Riyal)"){
    console.log("Exchange Rate = 1 US Dollar = 3.75 Saudi Riyal ")
    console.log("--------------------------------------------------------------------------------------")
    console.log(`Converted amount = ${currencyConverter.Amount * 3.75}`)
}

//------------------------------------------------------------------------------------------------------------

//                                      INDIAN RUPEES

else if (currencyConverter.defaultCurrency === "INR (Indian Rupee)" && currencyConverter.currencyToConvert === "INR (Indian Rupee)"){
    console.log("Exchange Rate = 1 Indian Rupee  = 1 Indian Rupee")
    console.log("--------------------------------------------------------------------------------------")
    console.log(`Converted amount = ${currencyConverter.Amount}`)
} 
else if (currencyConverter.defaultCurrency === "INR (Indian Rupee)" && currencyConverter.currencyToConvert === "PKR (Pakistani Rupee)"){
    console.log("Exchange Rate = 1 Indian Rupee  = 3.34 Pakistani Rupee ")
    console.log("--------------------------------------------------------------------------------------")
    console.log(`Converted amount = ${currencyConverter.Amount * 3.34}`)
}
else if (currencyConverter.defaultCurrency === "INR (Indian Rupee)" && currencyConverter.currencyToConvert === "USD (US DOLLAR)"){
    console.log("Exchange Rate = 1 US Dollar = 83.28 Indian Rupee ")
    console.log("--------------------------------------------------------------------------------------")
    console.log(`Converted amount = ${currencyConverter.Amount / 83.28}`)
}
else if (currencyConverter.defaultCurrency === "INR (Indian Rupee)" && currencyConverter.currencyToConvert === "SAR (Saudi Riyal)"){
    console.log("Exchange Rate = 1 Saudi Riyal = 22.20 Indian Rupee ")
    console.log("--------------------------------------------------------------------------------------")
    console.log(`Converted amount = ${currencyConverter.Amount / 22.20}`)
}

//------------------------------------------------------------------------------------------------------------

//                                      SAUDI RIYAL

else if (currencyConverter.defaultCurrency === "SAR (Saudi Riyal)" && currencyConverter.currencyToConvert === "SAR (Saudi Riyal)"){
    console.log("Exchange Rate = 1 Saudi Riyal = 1 Saudi Riyal")
    console.log("--------------------------------------------------------------------------------------")
    console.log(`Converted amount = ${currencyConverter.Amount}`)
} 
else if (currencyConverter.defaultCurrency === "SAR (Saudi Riyal)" && currencyConverter.currencyToConvert === "PKR (Pakistani Rupee)"){
    console.log("Exchange Rate = 1 Saudi Riyal = 74.11 Pakistani Rupee ")
    console.log("--------------------------------------------------------------------------------------")
    console.log(`Converted amount = ${currencyConverter.Amount * 74.11}`)
}
else if (currencyConverter.defaultCurrency === "SAR (Saudi Riyal)" && currencyConverter.currencyToConvert === "USD (US DOLLAR)"){
    console.log("Exchange Rate = 1 US Dollar = 3.75 Saudi Riyal")
    console.log("--------------------------------------------------------------------------------------")
    console.log(`Converted amount = ${currencyConverter.Amount / 3.75}`)
}
else if (currencyConverter.defaultCurrency === "SAR (Saudi Riyal)" && currencyConverter.currencyToConvert === "INR (Indian Rupee)"){
    console.log("Exchange Rate = 1 Saudi Riyal = 22.20 Indian Rupee ")
    console.log("--------------------------------------------------------------------------------------")
    console.log(`Converted amount = ${currencyConverter.Amount * 22.20}`)
}
else {
    console.log ("Error! Try Again")
};

