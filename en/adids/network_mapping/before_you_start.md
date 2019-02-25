### Before You Start

While in the audit flow itself, these activities are closely linked together and part of the flow of the audit, training on this is likely to take multiple sessions:

  * Network Mapping and Service Discovery
    * Basic Network Mapping
    * Identifying Network Hardware
  * Network Traffic Analysis
  * Vulnerability Scanning
    * Using OpenVAS
    * Other tools
  * Vulnerability Research
    * Service Identification
    * Vulnerability Databases
    * Default Configurations

#### Preparing a Test Network

Set up a wireless router just for training purposes with a password known to you and breakable by the password dictionary instructions you have provided.  This allows you to do some of the more aggressive network access steps without disrupting work or being irresponsible.

If no WPA network is available, you can use [this file](http://wiki.wireshark.org/SampleCaptures?action=AttachFile&do=get&target=wpa-Induction.pcap).

If you are also training on WPS or WEP, Pre-configure a wireless access point to serve those networks as well. The WEP network should be configured to use 64 bit encryption to speed the practice. If no WEP network is available, you can use [this pre-build airodump-ng capture file](http://download.aircrack-ng.org/wiki-files/other/test.ivs) and skip the airodump-ng capture.

This session exposes the network being used to a variety of increasingly invasive scans. It is absolutely important to have a private network to run these scans on so as to not disrupt an actual network and in many cases cross potential legal lines.

In addition, it is very valuable to have "target" machines for the most invasive scans. Before you start the mapping exercises you will need to set up a laptop with multiple vulnerable virtual machines.  See the Materials Needed section for suggested VMs to use.
