    * Add known seed information (domains, netblocks, company names, locations, etc.)
	* Run modules that leverage known netblocks. This exposes other domains and hosts from which domains can be harvested.
	* Add new domains gleaned from the results if they have not automatically been added.
	* Run modules that conduct DNS brute forcing of TLDs and SLDs against current domains.
	* Have list of domains validated by the client.
	* Remove out-of-scope domains with the "del" command or generate a query which only selects the scoped domains as input.
	* Run modules that conduct DNS brute forcing of hosts against all domains.
	* Run host gathering modules.
	* Resolve IP addresses.
	* Run vhost enumeration modules.
	* Run port scan data harvesting modules.
	* Use JOIN queries for data analysis.
	* Run vulnerability harvesting modules.
	* Resolve geolocations of harvested hosts.
	* Add distinct locations to the db.
	* Run contact harvesting modules.
	* Mangle contacts into email addresses.
	* Run modules that convert email addresses into full contacts.
	* Run credential harvesting modules.
