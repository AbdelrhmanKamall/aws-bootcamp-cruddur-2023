FROM python:3.10-slim-buster

# make a new directory inside the container
WORKDIR /backend-flask

# copy the requirements.txt file to the container as it contains the dependencies to run the app
COPY requirements.txt requirements.txt

# install the dependencies
RUN pip3 install -r requirements.txt

# copy the rest of the files to the container
COPY . .

# set the environment variables inside the container
ENV FLASK_ENV=development


EXPOSE ${PORT}

# run the app
# -m is used to specify a flask module
# --host=0.0.0.0 is used to make the app accessible from outside the container and from the host machine
# --port=4567 is used to set the port to 4567 instead of the default 5000
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=4567"]