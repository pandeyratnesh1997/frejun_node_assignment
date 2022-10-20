# frejun_node_assignment

## To test api using postman or thunder client

note : server is deployed on heroku.com


1. To get all Blogs --> GET request on `https://immense-crag-14304.herokuapp.com/blog`
2. To get blogs with page  --> GET request on 
`https://immense-crag-14304.herokuapp.com/blog?page={pageno}&limit={limitno}`

3. To Create new Blog ---> POST request on `https://immense-crag-14304.herokuapp.com/blog/create`
    with
     payload = {
        "title" : "",
        "category" : "",
        body : ""
    }
    don't give empty value of payload's key

4. To get all Words starting with 'a' or 'A' ---> GET request on 
    `https://immense-crag-14304.herokuapp.com/blog/{blogID}`

5. To Replace Word last 3 character of all words starting with 'a' and 'A' to '*'
        PATCH request on `https://immense-crag-14304.herokuapp.com/blog/{blogID}`

## To Run Project in local
    1. clone this repo
    2. Go to Backend/ folder
        run 
            1. npm install
            2. npm install express nodemon mongoose dotenv cors
            3. create .env file in Backend folder and add
                PORT = {port no. on which server will run}
                MONGO_URL = {Your mongoDB atlas url with database name}
            4. run npm start --> to run server


    3. Go to Frontend/blogapp
        run 
            1. npm install
            2. npm install axios react-router-dom@6
            3. npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
            4. npm start
            


