
Map the range of the organizations wireless network outside of office space, using wifite or other tools to track network strength.

A variety of apps and tools can support this work without resorting to professional "wifi site survey" tools. If the Office Mapping exercise has taken place, that map can serve as the starting point to expand the map outside the office. If using a third party tool or app, ensure that the app is not sharing sensitive data.  Using simple signal strength monitors in combination with location notes is more than sufficient. In Linux systems, one can use wavemon, kismet, wifite, and even the networkmanager command line tools to track visible networks and their strengths [as described on StackExchange](https://askubuntu.com/questions/237777/is-there-a-tool-like-wifi-analyzer-for-ubuntu):

```
watch  "nmcli -f "CHAN,BARS,SIGNAL,SSID" d wifi list ifname wlx10feed21ae1d  | sort -n"
```

* https://www.netspotapp.com/ (OSX, Windows, free for non-commercial uses)
* http://wifianalyzer.mobi,  http://wifiheat.com/ (Android)
