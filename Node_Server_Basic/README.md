# A Basic Node.js & MongoDB with mongoose server to get started with backend development

## ▶️ Getting Started

1. Clone the repo
2. Open the root directory in the terminal
3. Install dependencies 
```
npm i
```
4. In the root directory, create a file with the name '.env'
5. In that file paste the following
```
NODE_ENV = DEVELOPMENT
PORT = 8000
DATABASE = <Your_DB_Link_Here>
```
6. Replace <Your_DB_Link_Here> with your MongoDB url

## 🏁 Starting the app

1. Run the following command in terminal in root directory of the project
```
npm start
```

## ✅ Checking if it is running successfully

1. Open your favourite and browser and visit the link 
[http://localhost:8000/api/](http://localhost:8000/api/) 

2. You should get the following response if the app runs successfully
```json
{
   "msg":"it works"
}
```