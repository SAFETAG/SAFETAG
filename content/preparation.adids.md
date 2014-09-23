---
type: ADIDS
id: adids-audit-prep-index
...

# 6. Audit Preparation

<!-- ![](content/images/preparation.png "") -->

  - The things that an auditor should prepare before starting an audit.
  * Before you go
    * Update vulnerability databases
	  * OpenVAS
	  * ExploitDB
    * Create Password Dictionaries
	  * John the Ripper
	    * See: "content/audit/external/access/wifi/introduction"
  * Introduction to data collection
  * What to bring (checklist)
  * Audit troubleshooting
    * watch out for our and your teams MAC address
	

## Activity {.activity}

<?The activities focus on introducing the user to the scope of this threat or section using an activity that lets them explore the concept without the tool so that they can start tool usage with an existing set of use cases in mind.?>

## Discussion {.discussion}

<?SAFETAG specific: For Audit discussions the auditor will provide scenerios that allow a trainee to explore ways they would use/focus a auditing technique with the identified risks in the case study provided.?>

## Input {.input}

<?This is usually the lecture part of the session. The trainer presents on issues, sub-topics and more advanced concepts related to focus of the session.?>

##### WPA Attacks #####

The beauty of breaking in to a WPA protected network is that it is an offline attack.  Once you collect a WPA handshake from the network, you no longer need to be in the network's vicinity.  The challenge is that a sufficiently secure password can prevent you from accessing the network.  The reality is that most passwords are not very secure against "offline" password cracking programs.

  * WPA / Password Cracking - http://www.aircrack-ng.org/doku.php?id=cracking_wpa

(Bring in John and Crunch details from safetag section)


## Deepening {.deepening}

<?This is the the hands-on segment of a session. The deepening will consist of a live experiment with a tool using existing data that has been already parsed, unparsed data, and an oppourtunity to capture live data from a static target and the housing training organization using the tool.?>

## Synthesis {.synthesis}

<?A good training habit is to always summarize the session. Talk about what happened in the session, some of the results of the discussion, what issues were discussed, what solutions were made, and give some more time for participants to ask more questions before the session is closed.?>
