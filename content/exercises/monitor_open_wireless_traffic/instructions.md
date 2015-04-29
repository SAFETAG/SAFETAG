

##### Step 1: Monitor Mode #####

You should disconnect from any wifi network you may be connected to to capture the widest amount of data.

Switch your wireless adapter to monitor mode**

```$ airmon-ng start <interface>```

You may need to stop your network manager system to prevent it from interfering. Running 

```$ airmon-ng check``` 

to list anything that is causing problems, and 

```$ airmon-ng check kill``` 

to try and stop them automatically, and running stop network-manager && stop avahi-daemon may keep them from re-starting automatically.


##### Step 2: Listen for wifi probes. #####

Run airodump-ng on the monitor mode interface (usually mon0). This listens to wifi beacons and you can begin analyzing who is on what network, and see historical networks.

 **Leave this running in a separate window for the duration of your visit.**

```airodump-ng -w filename mon0``` 

This scans all networks and channels, collecting broadcast network information. Note that, despite its broadcast nature, this is privacy invasive and can be considered illegal: http://www.slate.com/blogs/future_tense/2013/09/16/google_street_view_wi_fi_snooping_case_good_news_and_bad_news.html . You can restict this to a specific channel or base station ID (BSSID) with -c and --bssid:

```airodump-ng -c 1 --bssid 00:11:22:33:44:55 -w filename mon0``` 


##### Step 3: de-auth #####

Send de-authentication packets to force clients to reconnect and send out additional probes. Take note that by its very nature, de-authentication causes annoying interruptions to wifi traffic. This breaks connections, drops skype calls, and can make the wireless network temporarily unusable.  Make sure to check with staff before going through this (to make sure no one is doing a live webcast or on an important VOIP call, and to expect some network instability).

```
$ aireplay-ng -0 1 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF mon0 

 15:54:48  Waiting for beacon frame (BSSID: 00:11:22:33:44:55) on channel 1
 15:54:49  Sending 64 directed DeAuth. STMAC: [AA:BB:CC:DD:EE:FF] [ 5| 3 ACKs]
```

This command de-authenticates one targeted user with one attempted deauth packet.  "-0 10" would try 10 times (potentially disconnecting the user multiple times!). With permission, you can also target all users on a network by leaving out the "-c ..." flag. 

There are scripts, like wifijammer, which use this same approach to jam *all* wifi connections in range of the attacking computer, so check against the documentation at http://www.aircrack-ng.org and act responsibly to protect yourself and the organization.

##### Step 4: Ongoing Monitoring #####

Watch what probes the various devices are sending out (especially when they are deauthenticated, as above). You will see each computer on the network, as identified by their mac addresses, broadcast information about previous networks to which they have connected.

```
BSSID              STATION            PWR   Rate    Lost    Frames Probe

00:11:22:33:44:55	0F:3E:DF:DA:2D:E2	-67	0	0	234567	SampleOrg,linksys¸John Smith's iPhone,Free Public Wifi
00:11:22:33:44:55	F8:7E:FC:03:CC:43	-80	-24	0	234567	amygreen,SampleOrg,android-hotspot,Starbucks,united_club,Dulles Airport WiFi
00:11:22:33:44:55	F8:19:F3:DF:75:19	-58	-54	0	234567	SampleOrg
00:11:22:33:44:55	38:08:95:EB:7E:0B	-75	-12	0	234567	HolidayInn,SampleOrg,John Smith's Mac mini,android-hotspot
```
