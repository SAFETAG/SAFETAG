
#### Setting up OpenVAS in Kali

```
openvas initial setup
openvas feed update
openvas check setup
openvas stop
openvas start
```


#### Common problems

**Errors during openvas-start**

OpenVAS is a rather ... delicate program. Most often, the openvas-start script will not wait long enough between launching openvassd and openvasmd, causing openvasmd to error out. Re-running openvasmd often works, though an entire stop/start cycle seems to be slightly more reliable.  Often, openvasmd will error out, but launch anyway.  Checking the web interface at https://127.0.0.1:9392 to make sure that you can log in is the best way to check if it's actually successfully launched.

**Lost admin password**
From a root command-line, you can reset the web interface's admin password:

```
openvasmd --create-user=admin 
openvasmd --user=admin --new-password=admin
```

**openvasmd will never launch**
*The below applies to OpenVAS 7*

In many fresh install cases, the openVAS self-signed CA certificate is set to an invalid date, which also causes openvasmd to error out. The check-setup script will recommend rebuilding the database, but the /var/log/openvas/openvasmd.log may have errors discussing certificate errors.  If this is the case, try:

```
rm /var/lib/openvas/CA/*
rm /var/lib/openvas/private/CA/*
openvas-mkcert
openvas-mkcert-client -n -i
openvas-check-setup 
openvas-start
openvasmd --rebuild
openvas-stop
openvas-start
```
