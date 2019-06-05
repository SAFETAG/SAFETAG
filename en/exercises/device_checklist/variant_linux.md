 * OS Security Updates

 * Firewall

CLI:
```sudo iptables -L -n```

CLI:   (Ubuntu, and only if installed)
```sudo ufw status```

GUI: (Ubuntu, and only if installed)
```gufw```
 * Anti-Virus Version

CLI deb:
```dpkg-query -l | grep virus``` rpm: ```yum list installed | grep virus```

See also: https://en.wikipedia.org/wiki/Linux_malware#Anti-virus_applications

 * User privilege

CLI:
```groups```

 * Drive Encryption

CLI:
```sudo dmsetup status```

 * Services Running

CLI:
```top```

CLI:
```ps -ef```


-----
