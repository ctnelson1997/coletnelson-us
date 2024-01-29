build
```
docker build . -t ctnelson1997/coletnelson-us
docker push ctnelson1997/coletnelson-us
```

deploy
```
docker pull ctnelson1997/coletnelson-us
docker run --name=website-prod -d --restart=always -p 4200:80 ctnelson1997/coletnelson-us
```
