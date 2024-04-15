
# AI Chat Bot

This is an LLM (Large Language Model based) AI Chat Bot, which is designed to answer user queries regarding the courses available on any ed-tech website (currently configured according to the courses available on Geeks for Geeks).

## ScreenShots

![App Screenshot](https://drive.google.com/uc?export=view&id=10fRm2u3E_IFWPee3rOMsjH5fEO1zSsZc)


![App Screenshot](https://drive.google.com/uc?export=view&id=1RNdW9l_FOwCNde0_enEs-aoKHf0WulNZ)


## Run Locally

Clone the project

```bash
  git clone https://github.com/dhairya996/AI_ChatBot.git
```

Navigate to the Project Directory

```bash
  cd AI_ChatBot/AI_ChatBot/
```

Install dependencies for React.js + Vite frontend

```bash
  npm install
```

Start the Frontend

```bash
  npm run dev
```
The Frontend must start running on http://localhost:5173/


Now, open a new terminal in the current Directory (i.e. the project directory and navigate to the Server Directory)

```bash
  cd flask_server/
```

Install all the required python libraries for the setup of the Flask server

```bash
    pip install -r requirements.txt
```

Check if all the requirements have been fulfilled (If you are using a code editor, check if all the error squiggles have been removed). If they have been, start the Flask Server to handle requests from the frontend.

```bash
  python3 server.py
```

The server should start running on http://127.0.0.1:5000

After the successful completion of all these steps, the Chat Bot application is ready to handle user queries.


## Approach of the Solution

### Requirement of the problem
* The main requirement of the problem statement was to develop a chatbot, which is user friendly, and can answer to the queries that the users have regarding courses, their overview, pricing, level, prerequisites, and other things, while browsing any Ed-Tech website.
* The chatbot is required to answer the user in a precise and brief manner, and notify the user if there is no relevant course or answer according to the query put forward by them.
* The chatbot must have access to the data of the courses available on the website, and must utilize NLP techniques to understand user queries and extract key information required to provide relevant responses.
* The application is also supposed to collect feedback from the users regarding their experience of the use of the chatbot, and store it in a .csv file for the sales team to access.
* If such a query from the user is encountered, that the chatbot is not capable of answering due to the lack of relevant data, the query must be passed on to be stored in a .csv file for access, so that they can access the chat transcripts for follow up and analysis purposes. The user must be provided option for manual doubt assistance in this situation.
* Finally, the application must allow an administrator from the sales team to download the collected feedback and query data .csv files.

### Proposed Solution
* For the chatbot to answer any query based upon certain relevant context or data that it must have access to, the first step is to collect all the relevant course information to the chatbot in a format, which can be parsed for the contained data to be extracted.
* The data being provided to the server in the current implementation is in .pdf file format. However, any other relevant format like .csv, .txt, or .xlsx can also be used for this.
* In the current implementation, the data which has been provided to the server contains a detailed description of all the categories of courses available on Geeks for Geeks, their description, price, associated topics, levels (i.e. Beginner, Intermediate or Advanced), the overview of the course and a detailed list of the Frequently asked Questions (FAQs) corresponding to all of the courses. 
* After this, all the text information contained in the provided data is extracted, and split into smaller managable chunks for processing.
* The obtained text chunks can be converted to embeddings, which are mathematical representations for each individual chunk or section of the text.
* The generated embeddings can be stored in a local vector store for use.
* Whenever the server receives a request from the frontend, which provides it with a new user query, the obtained query is also converted into similar embeddings (mathematical representation), as the information data was done earlier.
* A semantic search is performed using the FAISS (Facebook AI Similarity Search) library, which allows for a quick search for the embeddings of multimedia documents that are similar to each other.
* If any close match is found in the performed semantic search, the closest match is extracted from the local vector store, and passed on to a LLM based text generation model (in this case, GoogleGenerativeAI), which converts the obtained closest match into a format, which us understandable for humans.
* If there is no close match to the query, the generated response notifies the user of the same. 
* The relevant response obtained from the LLM model is then passed back to the frontend in json format, where it is processed and displayed to the user to either answer their query, or to inform them that any relevant data regarding their query was not found, and provide them alternative methods for assistance.

### Implementation

#### Backend Implementation

The backend in the chatbot application has been implemented using Flask, which is a micro web framework written in Python.
The Libraries and functions used in the Flask server, along with their respective requirement are listed as follows:

* Flask: The core Flask object used to create the application.
* request: Provides access to the incoming request data from the client.
* jsonify: Used to convert Python dictionaries into JSON responses for the API.
* PdfReader (from PyPDF2): This import allows to interact with PDF files using the PyPDF2 library.
* RecursiveCharacterTextSplitter: Splits text into manageable chunks for processing.
* GoogleGenerativeAIEmbeddings: Creates embeddings (numerical representations) of text using Google Generative AI models.
* ChatGoogleGenerativeAI: Interacts with Google Generative AI models specifically for chat-style interactions.
* load_qa_chain: Creates a question-answering chain using the specified model and prompt template.
* PromptTemplate: Defines the format for combining context and questions in the chain.
* FAISS: Provides an indexing and search library for efficient retrieval of similar text embeddings.
* CORS, cross_origin (from flask_cors): These imports enable Cross-Origin Resource Sharing (CORS) for your API. This allows requests from different domains to interact with your API.
* dotenv, load_dotenv (from dotenv): These imports help us to load environment variables (like the Google API key) from a .env file for better security practices.
* os, csv: Standard Python libraries for file system interactions and working with CSV (Comma-Separated Values) files.


### Frontend Implementation

The Frontend for the chatbot application has been created using React.js javascript framework using the Vite local development server.

The components provided to the user in the application frontend are:
* Start Page: The landing page of the application, prompts the user to select their role.
* Chat Room: The page which renders the chatbox component for the user to send their queries and view the response
* Feedback Form: The user is prompted to fill the feedback form each time they click the End chat button, where they can provide a star based rating and a text feedback on their experience of using the chatbot.
* FAQ Page: An informational page for the users to view some of the most common queries and doubts encountered by those looking for a relevant online course.
* Admin Page: Allows the administrator or a sales team representative to download the feedback and chat transcript data.



