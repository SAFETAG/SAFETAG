**What is Maltego?**

According to the Maltego's official website, they define maltego as: 
"An interactive data mining tool that renders directed graphs for link analysis. The tool is used in online investigations for finding relationships between pieces of information from various sources located on the Internet.

Maltego uses the idea of transforms to automate the process of querying different data sources. This information is then displayed on a node based graph suited for performing link analysis."

Maltego has may different uses:

  - Information Gathering and Data Mining
      - Email addresses, Aliases, domain names, DNS records, IP addresses
      - Document and files
      - Affiliations 
      
  - Investigation and Threat Intelligence
      - Investigating targeted attacks
      - Analyzing malicious files 
      
These are just some of the ways you can use Maltego. However with this guide, we will use Maltego for information gathering and data mining. The information we will find will later on be used in the following stages of audit/vulnerability assessment/penetration testing.

Maltego also has different versions:
  - Maltego XL
  - Maltego Classic
  - Maltego CE (Community Edition)

For this exercise, we will be using the Maltego CE version.

**Registration**

Maltego is available in the latest release of Kali Linux. (See [here](https://www.kali.org/kali-linux-releases))
NOTE: To run Maltego, you first need to have an account. To register, click [here](https://www.paterva.com/web7/community/community.php). Consider carefully the operational security implications of this requirement, in particular if you use one account for multiple different audits.

**Getting Started:**

Before we proceed with this guide, let us first take a look on Maltego's 3 main important concept.

  - Entity
  
    According to Maltego, "Entity is represented as a node on a graph and can be anything such as a DNS Name, Person, Phone number, etc. The Maltego client comes with about 20 entities targeted for use in online investigations, but you can also make your own custom ones."

  - Transform
  
    Tranforms is defined as "a piece of code that takes one entity to another. It does this by querying a data source and returning the results as new entities on your graph. The data sources are places like DNS servers, search engines, social networks, WHOIS information, etc."

  - Machines
  
    In Maltego, a machine can "a chain multiple transforms together to automate common/tedious tasks." 

**Running Maltego for the first time**

To initialize Maltego, on your Kali Linux, click ```Applications``` > ```01 - Information Gathering``` > ```Maltego```. This will bring you to the "Home" screen of the Maltego application and will show you a list of available Transforms. Transforms are simply a set of activities that you can run against a specific target. We'll learn more of transforms in the following topics. 

**Creating a New Graph**

To create a new graph where we can put our first task, click the Maltego icon on the upper left corner of your window, and click *New*. This will now open a blank screen, with the tab entitled *New Graph*.

**Selecting Pallete Entity**

Pallete is located on the left pane side called "Entity Pallete". This contains all the Entity that you can use depending on the activity that you are going to perform. For our exercise, look for the ```Domain``` entity pallete. Once you find it, drag it and drop it to the blank graph to the right. Now you have an entity on your graph. Try to double click the ```domain``` entity to rename it to your target (for this example, we can use ```paterva.com```)

**Choosing Transforms**

Once you have edited your entity, you can ```right-click``` to open the ```Run Transform(s)``` option. You can see here all the available transforms you can use. (Depending on the transforms that you have installed)

For this exercise, click the ```+``` on the left side of ```PATERVA CTAS CE```. This will give use 4 transforms:

  - DNS from Domain
  - Domain owner detail
  - Email addresses from Domain
  - Files and Documents from Domain

You can run each of this transforms individually, or you can click the ```>>``` icon to run ```All Transforms```.

Once you click it, all Transforms will run on the ```paterva.com``` domain. This graph result will include:

  - Sub-domains
  - Email addresses
  - Files and documents 
  - IP addresses
  - Geolocation
  - Domain registrants
  - Telephone numbers
  - etc

You can now then gather these results and use it for your next set of reconnaissance activity.

