
Passive Reconnaissance

- Main site search
  - key terms
	- org-name
	- address
	- phone numbers 
	- org-emails
  - Staff Names	  
    - Staff E-Mail format
  - Link Scraping
    - lynx
  
```bash
# EXAMPLE PROCESS
# get all links from the main page
lynx --listonly --dump http://http://HOST.SITE.TLD |grep -o "htt.*" >> links
# BY HAND: Go through file and pull out any links that are obvious malware, advertisements, etc.
# BY HAND: move all useful external links to a separate file keeping only the sites links in the document.
# get all links from the pages found
cat links | xargs -n 1 -I % lynx --listonly --dump % |grep -o "htt.*" >> links
# Remove all duplicate links
cat links |sort |uniq >> uniq_links
# BY HAND: Go through file and pull out any links that are obvious malware, advertisements, etc.
# BY HAND: move all useful external links to a separate file keeping only the sites links in the document.
# BY HAND: get all links from the pages found
cat uniq_links | xargs -n 1 -I % lynx --listonly --dump % |grep -o "htt.*" >> final_links
```

  - user-name formats
  - meta-data scraping
  - partners
  - beneficiaries
  - funders
  - current projects
  - Partners listed
  - Location of activities
- Google Recon
  - Sites that link to it.

```bash
linkto:SITE.TLD -site:SITE.TLD
```

  - Search for its logo's and its logo as found on other
  - Identify partner sites & project sites
  - Examine Project sites
- Project site search
  - key terms
    - project name
	- address (different from main organization?)
	- phone numbers  (different from main organization?)
	- project-emails
  - Staff Names
  - Staff E-Mail format


  different from main organization?
  Other organizations taking part?
  New domains revealed?
  Host format revealed?


  - Link Scraping
	- lynx
  - Partners listed
  - user-name formats
  - meta-data scraping
  - partners listed
  - beneficiaries listed 
  - funders listed
  - location of activities
- Social Media Searches
  - Organization Accounts
  - Project accounts
  - Facebook graph search for staff & beneficiaries
  - Identify online services used by staff
	- user name
	- work & personal e-mails
	- sites have transparency reports
- Search paste-bin sites
  - leaked internal information
    - hosts
    - domains
    - emails
- Recon-ng
  - Add data gathered from other steps
  - Discover new hosts, domains, contacts, etc.
  - Identify what each site is "BuiltWith"
  - Create e-mail list for all contacts identified
  - Identify any previously compromised contacts

Active Footprinting
- Identify externally facing devices used by the organization.
- Identify services being hosted or used by an organization.
- Run vulnerability scans against websites hosted by the organization.
- Run vulnerability scans against externally facing devices run by the organization.
