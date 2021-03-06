help:
	cat Makefile

# start (or restart) the services
<<<<<<< HEAD
server:
	docker-compose down || true;
	docker-compose up

# start (or restart) the services in detached mode
server-detached:
=======
server: .FORCE
	docker-compose down --remove-orphans || true;
	docker-compose up

# start (or restart) the services in detached mode
server-detached: .FORCE
>>>>>>> template/master
	docker-compose down || true;
	docker-compose up -d

# build or rebuild the services WITHOUT cache
<<<<<<< HEAD
build:
	docker-compose stop || true; docker-compose rm || true;
	docker-compose build --force-rm --no-cache

# rebuild the services WITH cache
quick-build:
	docker-compose stop || true;
	docker-compose build 

# convert word & nb without Jekyll services
convert:
=======
build: .FORCE
	chmod 777 Gemfile.lock
	docker-compose stop || true; docker-compose rm || true;
	docker build --no-cache -t hamelsmu/fastpages-nbdev -f _action_files/fastpages-nbdev.Dockerfile .
	docker build --no-cache -t hamelsmu/fastpages-jekyll -f _action_files/fastpages-jekyll.Dockerfile .
	docker-compose build --force-rm --no-cache

# rebuild the services WITH cache
quick-build: .FORCE
	docker-compose stop || true;
	docker build -t hamelsmu/fastpages-nbdev -f _action_files/fastpages-nbdev.Dockerfile .
	docker build -t hamelsmu/fastpages-jekyll -f _action_files/fastpages-jekyll.Dockerfile .
	docker-compose build 

# convert word & nb without Jekyll services
convert: .FORCE
>>>>>>> template/master
	docker-compose up converter

# stop all containers
stop: .FORCE
	docker-compose stop
<<<<<<< HEAD
=======
	docker ps | grep fastpages | awk '{print $1}' | xargs docker stop
>>>>>>> template/master

# remove all containers
remove: .FORCE
	docker-compose stop  || true; docker-compose rm || true;

<<<<<<< HEAD
# get shell inside the notebook service (Must already be running)
=======
# get shell inside the notebook converter service (Must already be running)
>>>>>>> template/master
bash-nb: .FORCE
	docker-compose exec watcher /bin/bash

# get shell inside jekyll service (Must already be running)
bash-jekyll: .FORCE
	docker-compose exec jekyll /bin/bash

# restart just the Jekyll server
restart-jekyll: .FORCE
	docker-compose restart jekyll

<<<<<<< HEAD
.FORCE:
=======
.FORCE:
>>>>>>> template/master
