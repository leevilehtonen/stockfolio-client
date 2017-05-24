[App.js](../src/components/App.js)
### 

#### Props

##### shouldSendMessage

- **required:** true
- **type:** bool 



##### msg

- **required:** false
- **type:** string 



##### color

- **required:** false
- **type:** string 



##### recieveMsg

- **required:** true
- **type:** func 




[Content.js](../src/components/Content.js)
### 

#### Props


[Header.js](../src/components/Header.js)
### 

#### Props

##### pageTitle

- **required:** true
- **type:** string 



##### categoryTitle

- **required:** true
- **type:** string 




[LinkItem.js](../src/components/NavItem/LinkItem.js)
### 

#### Props


[TitleItem.js](../src/components/NavItem/TitleItem.js)
### 

#### Props


[index.js](../src/components/NavItem/index.js)
### 

#### Props


[Navbar.js](../src/components/Navbar.js)
### 

#### Props

##### items

- **required:** true
- **type:** arrayOf object



##### location

- **required:** false
- **type:** object 




[HomePage.js](../src/components/Pages/HomePage.js)
### 

#### Props

##### updateTitle

- **required:** true
- **type:** func 



##### isAuthenticated

- **required:** true
- **type:** func 




[LoginPage.js](../src/components/Pages/LoginPage.js)
### 

#### Props

##### loginUser

- **required:** true
- **type:** func 



##### updateTitle

- **required:** true
- **type:** func 



##### isFetching

- **required:** true
- **type:** bool 




[LogoutPage.js](../src/components/Pages/LogoutPage.js)
### 

#### Props

##### updateTitle

- **required:** true
- **type:** func 



##### logoutUser

- **required:** true
- **type:** func 




[OptionsPage.js](../src/components/Pages/OptionsPage.js)
### 

#### Props

##### isAuthenticated

- **required:** true
- **type:** func 



##### updateTitle

- **required:** true
- **type:** func 




[OverviewPage.js](../src/components/Pages/OverviewPage.js)
### 

#### Props

##### isAuthenticated

- **required:** true
- **type:** func 



##### updateTitle

- **required:** true
- **type:** func 



##### fetchStocks

- **required:** true
- **type:** func 



##### isFetching

- **required:** true
- **type:** bool 



##### stocks

- **required:** true
- **type:** arrayOf object




[ProfilePage.js](../src/components/Pages/ProfilePage.js)
### 

#### Props

##### isFetching

- **required:** true
- **type:** bool 



##### user

- **required:** false
- **type:** object 



##### isAuthenticated

- **required:** true
- **type:** func 



##### updateTitle

- **required:** true
- **type:** func 



##### fetchUserData

- **required:** true
- **type:** func 




[QuotePage.js](../src/components/Pages/QuotePage.js)
### 

#### Props

##### showResults

- **required:** true
- **type:** bool 



##### isAuthenticated

- **required:** true
- **type:** func 



##### updateTitle

- **required:** true
- **type:** func 



##### loadQuote

- **required:** true
- **type:** func 




[RegisterPage.js](../src/components/Pages/RegisterPage.js)
### 

#### Props

##### registerUser

- **required:** true
- **type:** func 



##### updateTitle

- **required:** true
- **type:** func 



##### isFetching

- **required:** true
- **type:** bool 




[StockItem.js](../src/components/Pages/StockItem.js)
### 

#### Props


[StocksPage.js](../src/components/Pages/StocksPage.js)
### 

#### Props

##### isFetching

- **required:** true
- **type:** bool 



##### stocks

- **required:** true
- **type:** arrayOf object



##### updateTitle

- **required:** true
- **type:** func 



##### isAuthenticated

- **required:** true
- **type:** func 



##### fetchStocks

- **required:** true
- **type:** func 



##### loadQuote

- **required:** true
- **type:** func 



##### deleteStock

- **required:** true
- **type:** func 




[QuoteItem.js](../src/components/Quote/QuoteItem.js)
### 

#### Props


[QuoteQuery.js](../src/components/Quote/QuoteQuery.js)
### 

#### Props

##### submitQuery

- **required:** true
- **type:** func 




[QuoteResults.js](../src/components/Quote/QuoteResults.js)
### 

#### Props

##### quotes

- **required:** true
- **type:** arrayOf object



##### addStock

- **required:** true
- **type:** func 



##### isFetching

- **required:** true
- **type:** bool 




[QuoteView.js](../src/components/Quote/QuoteView.js)
### 

#### Props

##### quote

- **required:** false
- **type:** object 



##### isFetching

- **required:** true
- **type:** bool 



##### daySeries

- **required:** false
- **type:** arrayOf object



##### weekSeries

- **required:** false
- **type:** arrayOf object



##### monthSeries

- **required:** false
- **type:** arrayOf object



##### yearSeries

- **required:** false
- **type:** arrayOf object



##### threeMonthSeries

- **required:** false
- **type:** arrayOf object



##### threeYearSeries

- **required:** false
- **type:** arrayOf object



##### allSeries

- **required:** false
- **type:** arrayOf object



##### loadChartData

- **required:** true
- **type:** func 




[Wrapper.js](../src/components/Wrapper.js)
### 

#### Props
