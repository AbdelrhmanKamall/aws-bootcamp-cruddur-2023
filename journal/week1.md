# Week 1 — App Containerization

## Docker  

Docker comprises two main components which are Docker Engine and the Docker Hub. The Docker Engine is the software that allows us to build, run and share containers. The Docker Hub which is also known as the Docker Registry that is a cloud-based repository where we can store and share our containers.  

Docker architecture components:  

- client : basically the device where you would install the Docker Engine and interact with it through the command line.  
- server : where it would make use of the Docker Engine to build, run and share containers.  

## Dockerfile  

It's the standard text file that contains all the commands or instructions a user could call on the command line to assemble an image.  
**Scratch** is the base image which essentially means that you're fullfilling the requirements of the Dockerfile where you're starting from.  

[docker-compose.yml](../docker-compose.yml) used to allow us to run and orchestrate multiple containers at the same time.  
