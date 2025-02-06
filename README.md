# Google Drive File Organizer

## Overview

A change in Google Drive's architecture caused 26,000+ of my photo files to be consolidated into my root "My Drive" folder. This made navigation extremely difficult, as Google Drive continuously reloaded files when scrolling down the web interface. Finding specific files became unsustainable.

Issue discussed by others: [Google Support Thread](https://support.google.com/drive/thread/87658395/an-item-was-automatically-placed-in-without-my-permission?hl=en)

## Requirements

- Move files to a different folder, organized into subfolders for easier navigation.
- Ensure that moving the files does not increase storage usage, particularly for photos stored under Google's grandfathered unlimited storage policy.

## Solution

- The script moves all files matching a specific set of image file types to a folder corresponding to the file's creation year (YYYY).
- All moved files are logged in a Google Sheet for tracking, troubleshooting, and future analysis.
- To comply with Google Apps Script quotas ([Google Quotas](https://developers.google.com/apps-script/guides/services/quotas)) and the 6-minute execution limit, the script initially estimated the number of files that could be processed in one run.
- A maximum file count per execution was set, and time-driven triggers were used to repeatedly run the script.
- The file count was later reduced to ensure processing remained under 5 minutes, optimizing for the most efficient interval within the quota constraints.

## Implementation

The script is written in Google Apps Script and can be accessed and modified here: [Google Apps Script](https://script.google.com/home)

