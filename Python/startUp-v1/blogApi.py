# How to Implement
# Here are some guidelines to help you implement the personal blog:

# Storage
# To keep things simple for now, you can use the filesystem to store the articles. Each article will be stored as a separate file in a directory. The file will contain the title, content, and date of publication of the article. You can use JSON or Markdown format to store the articles.

# Backend
# You can use any programming language to build the backend of the blog. You don’t have to make it as an API for this project, we have other projects for that. You can have pages that render the HTML directly from the server and forms that submit data to the server.

# Frontend
# For the frontend, you can use HTML and CSS (no need for JavaScript for now). You can use any templating engine to render the articles on the frontend.

# Authentication
# You can implement basic authentication for the admin section. You can either use the standard HTTP basic authentication or simply hardcode the username and password in the code for now and create a simple login page that will create a session for the admin.

# After completing this project, you will have practised templating, filesystem operations, basic authentication, form handling, and rendering HTML pages from the server. You can extend this project further by adding features like comments, categories, tags, search functionality, etc. Make sure to check the other backend projects that go into more advanced topics like databases, APIs, security best practices etc.

import json
import datetime
titleOfArticle = "christ Testing "
content = "I love python this shit is crazy"
dateOfPublication = datetime.datetime.now().strftime("%Y-%m-%d")
print(dateOfPublication)

# Open a file in write mode (creates the file if it doesn't exist)
# with open("example.csv", "w") as file:
#     file.write(titleOfArticle)
#     file.write(content)
#     file.write(dateOfPublication)


# # Read the entire content of a file
# with open("example.csv", "r") as file:
#     content = file.read()
#     print(content)

# # Read file line by line
# with open("example.csv", "r") as file:
#     for line in file:
#         print(line.strip())

# with open("articles.json", "w") as file:
#     json.dump(articles, file, indent=4)

# # Reading from a JSON file
# with open("articles.json", "r") as file:
#     data = json.load(file)
#     for article in data:
#         print(article["title"], "by", article["author"])


articles = [
   {
        "title": titleOfArticle,
        "date": dateOfPublication,
        "content": content
    }
]

with open ("example.json", "w") as file:
  json.dump(articles,file,indent=4)



save_blog = []

def new_article (title, paragraph) :
  save_blog.append(title)
  save_blog.append(paragraph)
  for article in save_blog :
    print(article)

new_article("hello", "bloggig")