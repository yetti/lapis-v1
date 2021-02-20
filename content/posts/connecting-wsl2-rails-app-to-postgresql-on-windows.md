---
title: Connecting WSL2 Rails App to Postgresql on Windows
date: 2021-01-16T21:03:34.266Z
comments: false
category: article
---
If connecting a WSL2 Rails app to Postgresql on Windows is resulting in errors, the following may help.
<!--more-->
You will need to first figure out what your WSL and Windows IP address is by using `ipconfig.exe` in PowerShell or `ipconfig.exe | grep IPv4 | cut -d: -f2` in WSL2.

Next update your application's database config to use your Windows IP address as the hostname. You will also need to allow requests from port `5432` through your firewall.

In addition to the above, you will need to change some Postgresql settings. These can usually be found in the `<x>:\Program Files\PostgreSQL\<version>\data` directory.

Inside `postgresql.conf`, change the `listen_addresses` value under "CONNECTIONS AND AUTHENTICATION" to include your WSL IP address. If the value is already `*`, that means it will listen to any IP addresses and nothing needs to be changed.

e.g.
```text
#------------------------------------------------------------------------------
# CONNECTIONS AND AUTHENTICATION
#------------------------------------------------------------------------------

# - Connection Settings -

listen_addresses = 'localhost,192.168.1.25'		# what IP address(es) to listen on;
					# comma-separated list of addresses;
					# defaults to 'localhost'; use '*' for all
					# (change requires restart)

...
```

Finally, change `pg_hba.conf` to allow users from your WSL IP address to login and make requests on the database.

e.g.
```text
host    all             all             10.0.0.99/32         md5
host    all             all             ::/0                 md5
```
