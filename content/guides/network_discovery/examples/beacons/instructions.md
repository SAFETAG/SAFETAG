---
type: ADIDS
id: audit-physical-beacon-instructions
...

Device broadcasts previously used WiFi network names [STUB]
Walkthrough

You should disconnect from any wifi network you may be connected to to capture the widest amount of data.

Step 1: Switch your wireless adapter to monitor mode

$ airmon-ng start <interface>

Step 2: Listen for wifi probes. Run airodump-ng on the monitor mode interface (usually mon0). This listens to wifi beacons and you can begin analyzing who is on what network, and see historical networks. Leave this running in a separate window for the duration of your visit.

airodunmp-ng mon0

Step 3: Send de-authentication packets to force clients to reconnect and send out additional probes

$ aireplay-ng -0 1 -a 00:11:A1:20:39:26 -c 0F:3E:DF:DA:2D:E2 mon0 

 15:54:48  Waiting for beacon frame (BSSID: 00:11:A1:20:39:26) on channel 1
 15:54:49  Sending 64 directed DeAuth. STMAC: [0F:3E:DF:DA:2D:E2] [ 5| 3 ACKs]

Step 3: Watch what probes the various devices are sending out (especially when they are deauthenticated, as above). You will see each computer on the network, as identified by their mac addresses, broadcast information about previous networks to which they have connected.

BSSID              STATION            PWR   Rate    Lost    Frames Probe                                                              
00:11:A1:20:39:26	0F:3E:DF:DA:2D:E2	-67	0	0	234567	SampleOrg,home,linksys¸John Smith's iPhone,Free Public Wifi
00:11:A1:20:39:26	F8:7E:FC:03:CC:43	-80	-24	0	234567	amygreen,SampleOrg,android-hotspot,Starbucks,united_club,Dulles Airport WiFi
00:11:A1:20:39:26	F8:19:F3:DF:75:19	-58	-54	0	234567	SampleOrg
00:11:A1:20:39:26	38:08:95:EB:7E:0B	-75	-12	0	234567	HolidayInn,SampleOrg,John Smith's Mac mini,android-hotspot

