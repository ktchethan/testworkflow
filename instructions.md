# Collect and Reduce

## Setup

Install and use node v14 or higher. Use nvm to manage node installations.
Install using https://github.com/nvm-sh/nvm#install--update-script

Install NPM dependencies

```bash
npm install
```

Start the server

```bash
npm start
```

POST some SPO2 values

```bash
bash test/post-spo2.sh 97
bash test/post-spo2.sh 98
bash test/post-spo2.sh 99
```

GET the results

```bash
 bash test/fetch-stats.sh
```
