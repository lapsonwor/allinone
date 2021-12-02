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
