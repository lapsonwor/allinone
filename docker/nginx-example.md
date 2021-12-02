# Dockerfile

FROM nginx
USER root
RUN apt-get update
RUN apt-get install -y systemctl wget curl unzip gcc vim sudo
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]

# start docker

```bash
docker build -t nginx .
docker run -it -p 80:80 -p 443:443 -v $(pwd):/usr/share/nginx/html --name nginx nginx
```
