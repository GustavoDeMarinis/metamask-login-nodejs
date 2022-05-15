
## Front-End

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Back-End

Because both front and back are served locally, you need to open a chrome window without cors security protocols. 
For this you can run the following commands:

```bash
* ps aux | grep chrome | awk '{ print $2 }' 
* sudo kill all the process 
* google-chrome --disable-web-security --user-data-dir=".config/google-chrome"
```

Now you can simply use to start the server:
```bash
* npm start
```

You might also want to change the database.js url so that the app connects to a local or your own MongoDb Atlas


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
