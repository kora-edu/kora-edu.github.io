---
layout: post
title: "Building an AI-Powered LTI Plugin for Canvas: A Modern EdTech Solution"
date: 2024-01-15
categories: edtech development
---
**Deploying an LTI Tool for Canvas Using Docker**  

Let’s talk about deploying an LTI (Learning Tools Interoperability) tool for Canvas using Docker. 
---

### Setting the Scene

Canvas makes integrating external tools a breeze, thanks to LTI. But once you’ve built that shiny new tool, where do you put it? Enter Docker. Containers provide a clean, isolated environment, ensuring your tool behaves the same whether it's running on your local machine or a production server. It’s a game-changer.

For this example, imagine we’re deploying a Python-based LTI tool built using Flask and `pylti1.3`. The goal? Serve it in Docker, register it with Canvas, and not lose our minds in the process.

---

### Writing the Dockerfile  

The Dockerfile is the heart of your deployment. This is what mine looks like for a basic Python app:

```dockerfile
# Start with an official Python image
FROM python:3.10-slim

# Set environment variables to prevent .pyc files and buffering
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Create a directory for the app
WORKDIR /app

# Copy the app requirements and install them
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the app
COPY . /app/

# Expose the app's port
EXPOSE 8000

# Run the app
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "app:app"]
```

This does a few things:
- Starts with a lightweight Python image.
- Installs dependencies from `requirements.txt`.
- Sets up the app to be served using Gunicorn, a production-grade WSGI server.

---

### Docker Compose for Local Development  

While the Dockerfile is great for production, local development benefits from `docker-compose`. Here’s a snippet from my `docker-compose.yml`:

```yaml
version: "3.9"

services:
  lti-tool:
    build: .
    ports:
      - "8000:8000"
    volumes:
      - .:/app
    environment:
      - FLASK_ENV=development
```

This makes development smoother by mounting the current directory into the container. Every code change reflects immediately, and the environment variable sets Flask into development mode.

---

### Running the App  

Building and running the app is as simple as:

```bash
docker-compose up --build
```

You should see your app up and running on `http://localhost:8000`. At this stage, it’s just a containerized Flask app. The magic of LTI comes next.

---

### Setting Up LTI for Canvas  

Canvas expects a specific handshake for LTI 1.3, including JWT-based authentication and a dynamic registration process. Here’s how I handle this in Flask:

```python
from flask import Flask, request, jsonify
from pylti1p3.flask import FlaskOIDCLogin, FlaskRequest
from pylti1p3.tool_config import ToolConfJsonFile
from pylti1p3.launch_data_storage.cache import CacheDataStorage
from pylti1p3.tool_provider import ToolProvider

app = Flask(__name__)

# Load LTI tool configuration
tool_conf = ToolConfJsonFile('configs/tool_config.json')
cache_storage = CacheDataStorage()
oidc_login = FlaskOIDCLogin(app, tool_conf)
tp = ToolProvider(tool_conf, cache_storage, FlaskRequest)

@app.route("/launch", methods=["POST"])
def launch():
    try:
        launch_data = tp.validate_launch_request(request)
        return jsonify({"status": "success", "data": launch_data})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 400

@app.route("/.well-known/jwks.json", methods=["GET"])
def jwks():
    return jsonify(oidc_login.get_public_keyset())
```

This example:
1. Validates the LTI launch request using `pylti1p3`.
2. Returns data from Canvas for further processing.

---

### Testing in Canvas  

With the app running in Docker, it’s time to register it with Canvas:
1. Create a new developer key in Canvas.
2. Provide the URL to your `/.well-known/jwks.json` and the tool's launch URL (`http://<your-domain>/launch`).
3. Configure course placement and permissions as needed.

When you test the tool in a Canvas course, the Flask app should log and validate requests in real-time. If you see errors, check the logs from the Docker container with `docker logs <container-id>`.

---

### Wrapping Up  

Deploying an LTI tool for Canvas using Docker can seem intimidating, but the combination of Flask, `pylti1p3`, and Docker makes it manageable. The container ensures your tool runs consistently across environments, while Flask and `pylti1p3` handle the intricacies of LTI communication.

The best part? Once this setup works locally, deploying to production (on AWS, GCP, or any other platform) is just a matter of pointing your Docker image to the cloud.

Give it a try, and let me know if you hit any bumps—I’ve probably tripped over them already!
