---
type: ADIDS
id: adids-traffic-assessment-index
...

# 8. Network Access & Traffic Assessment [stub]

  *  Access
    * Wifi Access Assessment
      * WEP
      * WPA
      * WPS
    * VPN  (possibly save for next round. It will require a good ammount of work to get properly built.)
    * Web
  * Internal
  	* Network Traffic Assessment
	* Firewalls

!INCLUDE "images/network_access.png"

!INCLUDE "ADIDS/network_access_traffic/context/summary.md"

### Why The Topic Matters [stub]

!INCLUDE "ADIDS/network_access_traffic/context/why_it_matters.md"

### What Participants Will Learn [stub]

!INCLUDE "ADIDS/network_access_traffic/context/what_participants_will_learn.md"

### Objectives [stub] {.sidebar}

!INCLUDE "ADIDS/network_access_traffic/context/objectives.md"

### Baseline Skills [stub]

!INCLUDE "ADIDS/network_access_traffic/context/baseline_skills.md"

### Before you Start [stub]

<?trainer resources?>
!INCLUDE "ADIDS/network_access_traffic/context/before_you_start.md"

### Materials Needed [stub]

!INCLUDE "ADIDS/network_access_traffic/context/materials_needed.md"

## Activity [stub] {.activity}

Auditor provides scenerios that allow a trainee to explore ways they would use/focus a auditing technique with the identified risks in the case study provided.
  * Organization with mostly in-field staff who use an internal mail service nad VPN.
  * Organization with a large in-office staff using the wifi which gives them access to internal services.
  * Organization that uses mostly google docs with documents either shared ad-hoc between indiviudals personal or work gmail accounts, or under a organizational account that shares everything with staff.
    * This opens up conversations about using e-mail logins for google docs and calendar services that is different from external e-mail, or not. 

## Discussion [stub] {.discussion}

  * How do the various types of internal privlage sepearation change what "access" means?

## Input [stub] {.input}

<?This is usually the lecture part of the session. The trainer presents on issues, sub-topics and more advanced concepts related to focus of the session.?>

Overview of common concerns for ways of securing user access into the internal network. And introduction to the tools for this section.

    * Wifi Access Assessment
      * WEP
	    * WEP cracking tools
      * WPA
	    * Password Cracking
		  * Building password dictionaries
      * WPS
	    * PIN choice, etc
    * VPN (possibly save for next round)
	  * VPN fingerprinting
	  * User Enumeration
	  * Offline password Cracking
	  * Man in the Middle Attacks
	  * Abusing lack of Account Lockouts
	  * Abusing Default Configurations
  * Web
    * Identifying usage of web-services to identify actual access risks

## Deepening [stub] {.deepening}

<?This is the the hands-on segment of a session. The deepening will consist of a live experiment with a tool using existing data that has been already parsed, unparsed data, and an oppourtunity to capture live data from a static target and the housing training organization using the tool.?>

  * Sniffing, filtering, and analizing traffic
    * Sniffing WiFi traffic
    * Sniffing VPN traffic for VPN Fingerprinting
    * Sniffing traffic to external services on internal network to identify services that are insecure.
  * WEP Cracking
  * WPA / Password Cracking
  * WPS Pin Cracking


## Synthesis [stub] {.synthesis}

<?A good training habit is to always summarize the session. Talk about what happened in the session, some of the results of the discussion, what issues were discussed, what solutions were made, and give some more time for participants to ask more questions before the session is closed.?>
