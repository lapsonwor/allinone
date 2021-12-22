# command setup cloudwatch for port 80

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
sudo ./aws/install
aws configure
vi cloudwatch-bridge-admin.sh
```

- For monitor port 80

```bash
#!/bin/bash
 #service monitoring
 /bin/netstat -tulpn | awk '{print $4}' | awk -F: '{print $4}' | grep ^80$ > /dev/null   2>/dev/null
 a=$(echo $?)
 if test $a -ne 0
 then
 echo "bridge admin down" | aws cloudwatch put-metric-data --metric-name bridge-admin --namespace bridge --unit Bits --value 0 --dimensions Name=Server,Value=bridge-admin --dimensions Name=issue,Value=service_up
 sudo systemctl restart nginx
 else
         aws cloudwatch put-metric-data --metric-name bridge-admin --namespace bridge --unit Bits --value 1 --dimensions Name=Server,Value=bridge-admin --dimensions Name=issue,Value=service_up
 sleep 0
 fi
```

- For monitor service

```bash
#!/bin/bash
 #service monitoring
 service="bridge-worker"
/bin/systemctl -q is-active "$service.service"
status=$?
if [ "$status" == 0 ]; then
 echo "bridge api service down" | aws cloudwatch put-metric-data --metric-name bridge-worker --namespace bridge --unit Bits --value 0 --dimensions Name=Server,Value=bridge-worker --dimensions Name=issue,Value=service_up
 sudo systemctl restart bridge-worker
 else
         aws cloudwatch put-metric-data --metric-name bridge-worker --namespace bridge --unit Bits --value 1 --dimensions Name=Server,Value=bridge-worker --dimensions Name=issue,Value=service_up
 sleep 0
 fi
```

```bash
crontab -e
```

```bash
*/1 * * * *  ubuntu /home/ubuntu/cloudwatch_bridge.sh
```
