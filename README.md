# artistBackend
To retrieve information of artists from an externl API

## Install
This project uses npm and node. Please check if they are locally installed in your environment.

To add dependencies:
```
npm install
```

or

```
npm i json2csv
npm i request
```

## Usage

This project is a backend to retrieve data related with artists from [last.fm](https://www.last.fm/api/show/artist.search). User can search for arbitrary artist name.The retrieved data will be stored in a csv file with user-defined filename.

To start the application:

```
npm start
```

This project runs on http://localhost:3000

#### Example URL:
```
http://localhost:3000/?artist=ana&filename=test
```

#### Parameters:

*artist*: The artist's name

*filename*: The file (filename.csv) to stored artist's information, which will be located at project's root directoty.
