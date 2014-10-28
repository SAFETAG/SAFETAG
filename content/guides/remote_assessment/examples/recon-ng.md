
#### Creating API Keys



  * Bing API Key (bing_api) - 
      * Sign up for the free subscription to the Bing Search API here. 
      * Sign in to the Windows Azure Marketplace and go to the "My Account" tab. 
      * The API key will be available under the "Account Keys" page. 

  * BuiltWith API Key (builtwith_api) - 
      * Sign up for a free account here. 
      * Sign in to the application. 
      * The API key will be available in the upper right hand portion of the screen. 
         
  * Facebook API Key (facebook_api) - TBD
  
  * Facebook Secret (facebook_secret) - TBD
  
  * Flickr API Key (flickr_api) - TBD
  
  * Google API Key (google_api) - 
      * Create an API Project here. 
      * The API key will be available in the project management console
          * Click on the "APIs & auth" Menu
          * Click on the "Credentials" sub-menu
          * Click the "Create new Key" button
          * Click "Server Key"
          * Type your current ip-address into the text box.
          * Make sure you delete it after use.

  * Google Custom Search Engine (CSE) ID (google_cse) - 
    * Create a CSE here.
      * https://www.google.com/cse/create/fromkwsetname
      * Type in a name
      * Click the "Proceed" button
      * Click "Setup" in the side bar.
      * Change the "Sites to search" drop-down from "Search only included sites" to "Search the entire web bit emphasize included sites"
      * Read here for guidance on configuring the CSE to search the entire web. Otherwise, the CSE will be restricted to only searching domains specified within the CSE management console. This will drastically effect the results of any module which leverages the CSE.
    * The CSE ID will be available in the CSE management console.
      * Click "Setup" in the side bar.
	  * Click the "Search engine ID" button in the "Details" section.


  * IPInfoDB API Key (ipinfodb_api) -
    * REQUIRES A PERMANENT IP ADDRESS LIKE A SERVER 
    * Create a free account here. 
    * Log in to the application here. 
    * The API key will be available on the "Account" tab. 

  * LinkedIn API Key (linkedin_api) - 
      * Log in to the developer portal with an existing LinkedIn account 
      * Add a new application. 
      * Click on the application name. 
      * Add http://127.0.0.1:31337 to the list of "OAuth 2.0 Redirect URLs". 
      * The API key will be available underneath the "OAuth Keys" heading.
  * As of November 4th, 2013, the People Search API (required for all LinkedIn related modules) has been added to the Vetted API Access program. As a result, a Vetted API Access request must be submitted and approved for the application in order for the associated API key to function properly with the LinkedIn modules. 

  * LinkedIn Secret (linkedin_secret) - The Secret key will be available underneath the "OAuth Keys" heading for the application created above. 

  * Shodan API Key (shodan_api) - 
      * Create an account or sign in to Shodan using one of the many options available here. 
      * The API key will be available on the right side of the screen. 
      * An upgraded account is required to access advanced search features. 

  * Twitter Consumer Key (twitter_api) - 
      * Create an application here. 
      * The Consumer key will be available on the application management page. 

  * Twitter Consumer Secret (twitter_secret) - 
  * The Consumer secret will be available on the application management page for the application created above. 

  * VirusTotal API Key (virustotal_api) 
    * Create a free account by clicking the "Join our community" button here.
    * Log in to the application and select "My API key" from the user menu. 
    * The API key will be visible towards the top of the page. 

  * API's we won't be using
    * Jigsaw API Key: Costs $1,500/year
    * PwnedList: Costs Money



#### Using Recon-ng 
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
