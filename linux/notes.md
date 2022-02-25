# linux

## Netcat

- Check if the port is open

```bash
nc -vz $host $port
```

- Check if the ports in the range are open

```bash
nc -vz $host $port_from-$port_to
```

##

- Check listenning port

```bash
sudo lsof -i -P | grep LISTEN
```

- install nodejs
  Download the latest tar.xz NodeJS file from https://nodejs.org/en/download/

```bash
wget https://nodejs.org/dist/v16.13.1/node-v16.13.1-linux-x64.tar.xz
tar -xf node-v#.#.#-linux-x64.tar.xz
sudo mv node-v#.#.#-linux-x64/bin/* /usr/local/bin/
sudo mv node-v#.#.#-linux-x64/lib/node_modules/ /usr/local/lib/
```

- generate rsa key

```bash
ssh-keygen -t rsa -b 2048 -C "message"
```

- update linux timezone

```bash
sudo dpkg-reconfigure tzdata
```
