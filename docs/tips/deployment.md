# Deployment

In the future, we intend to create our own Cloud platform to host Squirrels projects that comes with infrastructure built-in for "project version catalog" and maintaining stacks of minor versions. But for the time being, we recommend creating a Docker image, and deploying your image as a container on a hosting platform. Information on deploying Docker containers to your hosting platform is not provided on this page... See the docs for your hosting platform for more details.

Typically, a file named "Dockerfile" is needed for creating docker images (which can be stored in your Squirrels project or somewhere in your server). There is no "one size fits all" for the contents of your Dockerfile since it depends on the Python version and package management tool that you use. Assuming Python version 3.11 and the dependencies of your project are provided in a `requirements-lock.txt` file that can be used for pip installs, the Dockerfile can look something like this:

```dockerfile
# Change here to use different python version (ex. 3.12-slim for version 3.12)
FROM python:3.11-slim
WORKDIR /app

# Only needed if any python dependencies are installed from git, or for the
# "squirrels deps" command if there are packages defined in "squirrels.yml"
RUN apt-get update && apt-get install -y git

COPY requirements-lock.txt .
RUN pip install --no-cache-dir -r requirements-lock.txt

COPY . .
RUN squirrels deps

CMD ["squirrels", "run", "--host", "0.0.0.0", "--port", "4465"]
```

In addition to the docker image, a docker volume is also needed store the [environcfg.yml] file (which contains configurations that are NOT suppose to be stored in git). As an example, if your [environcfg.yml] is in current directory, you can use the following `compose.yml` file to create a docker container with the volume by running `docker-compose up`.

```yaml
services:
  squirrels:
    build: /path/to/Dockerfile
    ports:
      - "4465:4465"
    volumes:
      - ./environcfg.yml:/app/environcfg.yml
```


[environcfg.yml]: ../topics/environcfg