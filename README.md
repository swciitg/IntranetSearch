# IntranetSearch - IIT Guwahati Intranet Search Engine
## Overview
Welcome to the IntranetSearch repository! This project aims to create a powerful search engine specifically tailored for the Intranet pages of the Indian Institute of Technology (IIT) Guwahati. IntranetSearch will help users efficiently search and retrieve information from the institute's internal web resources, enhancing productivity and ease of access to important information.

## Getting Started

Before using IntranetSearch, you'll need to set up Elasticsearch, and the backend is implemented using Node.js. In this repository, you'll find a Python folder containing `requirements.txt`, and there's also a Dockerfile that can be used to host the project locally.

### Prerequisites

Make sure you have the following prerequisites installed:

- [Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html)
- Node.js and npm
- Docker (for local hosting)

Follow these steps:

1. First, clone the IntranetSearch repository to your local machine:

```
git clone https://github.com/swciitg/IntranetSearch.git
```

2. Make sure your elasticsearch server is up and running. Note down it's localhost endpoint and your username and password for Step 4.

3. Navigate to the project's backend folder:

```
cd IntranetSearch/backend
```

4. Create `.env` file with following fields:

```
ELASTIC_USERNAME="username"
ELASTIC_PASSWORD="password"
ELASTIC_ENDPOINT="endpointURL"
PORT=portnum
```

5. Install Node.js dependencies:

```
npm install
```


6. Start Backend Server:

```
npm start
```

7. Go to `python` folder containing python API endpoints for this project

```
cd IntranetSearch/python
```

8. Open a new terminal window in this folder and build the docker image:

```
docker build -t intranetsearch .
```

9. Run the Docker Container locally:

```
 docker run -p 8080:80 -v "$(pwd)\..\data:/app/data" intranetsearch
```
Remember to handle Elasticsearch security settings and access control as needed to protect sensitive Intranet content.

## Usage
- Access the IntranetSearch python FastAPI backend by navigating to http://localhost:8080/docs (or the URL of your deployment).
- Access the Node API by navigating to http://localhost:PORT as in `.env` file.

## Contribution guidelines

Visit [CONTRIBUTING.md](CONTRIBUTING.md) for more insights on contributing to this repo.

## Happy Hacking!
Thank you for participating in intranetSearch's Hacktoberfest. We appreciate your contributions, and together, we can make intranetsearch even better for college sites everywhere. If you have any questions or need assistance, feel free to reach out to us via GitHub issues or our community chat.

Happy coding! 🚀🎉
