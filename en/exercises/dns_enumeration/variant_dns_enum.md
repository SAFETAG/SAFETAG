
DNSenum, just like DNSrecon, is a tool designed to analyze DNS information of a specific DNS target. From zone transfer, hostname and subdomain dictionary brute force, reverse lookup service record and standard record query and top level domain name expansion, results are almost identical for both assessment tools.

You can use DNSenum from the Kali terminal and MSF Console platform as an auxilliary.

To access DNSenum, simply type the command ```dnsenum```. (You can add ```-h``` for help options.)

 ```root@kali:~# dnsenum```

The table below will help you get started with your DNS enumeration using ```dnsenum``` tool.

| DNS Command | Description |
|-------------|-------------------------------------------------------|
|dnsenum -h|Display ```Help``` options|
|dnsenum ```domain.com```|Performs basic DNS enumeration|
|dnsenum --enum ```domain.com```|Performs fast enumeration ```(equivalent to --threads 5 -s 15 -w)```|
|dnsenum -f ```list.txt``` -r <```domain.com```>|Performing hostname and subdomain directory bruteforce using the ```list.txt``` file|
|dnsenum -f list.txt -s 5 -p 5 ```domain.com```|Enumerate using subdomain list,```(list.txt)``` scrap 5 subdomains ```(-s)```, with 5 Google result pages ```(-p)```|
|dnsenum -f ```list.txt``` -o ```result.xml``` ```internews.org```|Enumerate target with subdomain list ```(list.exe)```, generates output in XML format ```-o``` |
