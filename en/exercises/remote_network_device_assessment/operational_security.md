

## Scenario 1

- Make sure that the auditee downloads the Linux image over TLS and guide them through the verification process (instructions for Ubuntu can be found [here](https://tutorials.ubuntu.com/tutorial/tutorial-how-to-verify-ubuntu#0).
- When starting a live Linux distribution, make sure the auditee has a secure communication channel with you on a different device than the one that will be rebooted - for example through Signal on an Android phone, or on a different computer.
- Warn the auditee that they should not press "install" when the live Linux distribution has started, else their hard disk will be formatted and they will lose their data.
- Make sure that a secure communication channel is in place for sending the ssh commands to the auditee.
- The server used for the middle connection should be updated and secured, or updated and ephemeral.
- Make sure to remove/clean any persistent connections once you are done with auditing.

